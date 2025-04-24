import { Container, Text, Title } from '@mantine/core';
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { hierarchy } from "d3-hierarchy";
import { arc as d3Arc } from "d3-shape";
import classes from '@/pages/HeroBullets.module.css';

const D3Sunburst = () => {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);

  const data = {
    name: "Data Resources",
    children: [
      {
        name: "HTAN",
        size: "1.5 GB",
        children: [
          { name: "ResearchStudy", value: 13 },
          { name: "ResearchSubject", value: 2080 },
          { name: "Patient", value: 2080 },
          { name: "Specimen", value: 7532 },
          { name: "DocumentReference", value: 196158 },
          { name: "Condition", value: 2013 },
          { name: "MedicationAdministration", value: 582 },
          { name: "Medication", value: 133 }
        ]
      },
      {
        name: "CDA2FHIR",
        size: "1.3 GB",
        children: [
          { name: "ResearchStudy", value: 427 },
          { name: "ResearchSubject", value: 160649 },
          { name: "Patient", value: 142277 },
          { name: "Specimen", value: 721837 },
          { name: "DocumentReference", value: 36434 },
          { name: "Condition", value: 95262 },
          { name: "MedicationAdministration", value: 25300 },
          { name: "Medication", value: 64 }
        ]
      },
      {
        name: "ICGC",
        size: "16 MB",
        children: [
          { name: "ResearchStudy", value: 1 },
          { name: "ResearchSubject", value: 400 },
          { name: "Patient", value: 400 },
          { name: "Condition", value: 400 },
          { name: "Specimen", value: 813 },
          { name: "DocumentReference", value: 15063 }
        ]
      },
      {
        name: "1KGenomes",
        size: "8 MB",
        children: [
          { name: "ResearchStudy", value: 1 },
          { name: "ResearchSubject", value: 3500 },
          { name: "Patient", value: 3500 },
          { name: "Specimen", value: 3500 },
          { name: "DocumentReference", value: 48 }
        ]
      },
      {
        name: "GTEx",
        size: "41 MB",
        children: [
          { name: "ResearchStudy", value: 1 },
          { name: "ResearchSubject", value: 980 },
          { name: "Patient", value: 980 },
          { name: "Specimen", value: 43559 },
          { name: "DocumentReference", value: 49 },
        ]
      },
      {
        name: "GDC",
        size: "4.1 GB",
        children: [
          { name: "ResearchStudy", value: 108 },
          { name: "ResearchSubject", value: 44736 },
          { name: "Patient", value: 44736 },
          { name: "Specimen", value: 593840 },
          { name: "DocumentReference", value: 1121816 },
          { name: "MedicationAdministration", value: 64139 },
          { name: "Medication", value: 263 }
        ]
      },
      {
        name: "Cellosaurus",
        size: "2.5 MB",
        children: [
          { name: "Patient", value: 1677 },
          { name: "Specimen", value: 1717 },
          { name: "Condition", value: 277 }
        ]
      }
    ]
  };

  const colorScheme = {
    ResearchStudy: "#8DD3C7",
    ResearchSubject: "#FFFFB3",
    Patient: "#BEBADA",
    Specimen: "#3288bd",
    DocumentReference: "#91b8aa",
    Condition: "#FDB462",
    MedicationAdministration: "#B3DE69",
    Medication: "#FCCDE5"
  };

  const dataResourceColors = {
    ICGC: "#af7ce2",
    "1KGenomes": "#7ce2e2",
    GDC: "#4E79A7",
    CDA2FHIR: "#F28E2B",
    HTAN: "#E15759",
    Cellosaurus: "#e27c7c",
    GTEx: "#a6cee3"
  };

  useEffect(() => {
    const colorFor1K = dataResourceColors['1KGenomes'];
    console.log(colorFor1K); 
    const width = 400;
    const height = 400;
    const innerRadius = 55;
    const innerThickness = 25;
    const outerRadius = innerRadius + innerThickness * 2; // 55 + (25*2) = 105

    const root = hierarchy(data);
    const innerNodes = root.children;
    const numInner = innerNodes.length;

    innerNodes.forEach((node, i) => {
      node.x0 = (i / numInner) * 2 * Math.PI;
      node.x1 = ((i + 1) / numInner) * 2 * Math.PI;

      if (node.children) {
        const allocatedAngle = node.x1 - node.x0;
        const totalValue = node.children.reduce((sum, child) => sum + child.data.value, 0);
        let currentAngle = node.x0;
        node.children.forEach(child => {
          const fraction = child.data.value / totalValue;
          const angleExtent = fraction * allocatedAngle;
          child.x0 = currentAngle;
          child.x1 = currentAngle + angleExtent;
          currentAngle += angleExtent;
        });
      }
    });

    const arcInner = d3Arc()
      .startAngle(d => d.x0)
      .endAngle(d => d.x1)
      .innerRadius(innerRadius)
      .outerRadius(innerRadius + innerThickness);

    const arcText = d3Arc()
      .startAngle(d => d.x0)
      .endAngle(d => d.x1)
      .innerRadius(innerRadius + innerThickness / 2)
      .outerRadius(innerRadius + innerThickness / 2);

    const arcOuter = d3Arc()
      .startAngle(d => d.x0)
      .endAngle(d => d.x1)
      .innerRadius(innerRadius + innerThickness)
      .outerRadius(outerRadius);

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .style("font", "12px sans-serif");

    const offsetX = -20;
    const offsetY = 115;
    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2 + offsetX}, ${height / 2 - offsetY})`);

    g.selectAll("path.innerArc")
      .data(innerNodes)
      .join("path")
      .attr("class", "innerArc")
      .attr("fill", d => dataResourceColors[d.data.name])
      .attr("d", arcInner)
      .on("mouseover", (event, d) => {
        d3.select(tooltipRef.current)
          .style("opacity", 1)
          .html(`<strong>${d.data.name}</strong><br>Size: ${d.data.size}`);
      })
      .on("mousemove", event => {
        const [x, y] = d3.pointer(event, containerRef.current);
        d3.select(tooltipRef.current)
          .style("left", `${x + 15}px`)
          .style("top", `${y + 15}px`);
      })
      .on("mouseout", () => {
        d3.select(tooltipRef.current).style("opacity", 0);
      });

    g.selectAll("path.innerTextArc")
      .data(innerNodes)
      .join("path")
      .attr("class", "innerTextArc")
      .attr("id", (d, i) => `innerTextArc${i}`)
      .attr("d", arcText)
      .attr("fill", "none")
      .attr("stroke", "none");

    const innerText = g.selectAll("text.innerArcText")
      .data(innerNodes)
      .join("text")
      .attr("class", "innerArcText");

    innerText.append("textPath")
      .attr("xlink:href", (d, i) => `#innerTextArc${i}`)
      .attr("startOffset", "14%")
      .style("text-anchor", "right")
      .style("dominant-baseline", "middle")
      .style("font-size", "6px")
      .style("fill", "black")
      .style("font-weight", "bold")
      .text(d => d.data.name);

    
    const quadrantCenters = [-Math.PI/2, 0, Math.PI/2, Math.PI];
    const threshold = Math.PI / 8; 
    /*
    innerNodes.forEach(node => {
      const midAngle = (node.x0 + node.x1) / 2;
      const adjustedMid = midAngle - Math.PI/2; 
      const drawLine = quadrantCenters.some(center => Math.abs(adjustedMid - center) < threshold);
      if (drawLine) {
        const angle = node.x0 - Math.PI / 2;
        const x1 = innerRadius * Math.cos(angle);
        const y1 = innerRadius * Math.sin(angle);
        const x2 = outerRadius * Math.cos(angle);
        const y2 = outerRadius * Math.sin(angle);
        g.append("line")
          .attr("x1", x1)
          .attr("y1", y1)
          .attr("x2", x2)
          .attr("y2", y2)
          .attr("stroke", "white")
          .attr("stroke-width", 4);
      }
    });
    */
    const outerNodes = [];
    innerNodes.forEach(inner => {
      if (inner.children) {
        inner.children.forEach(child => outerNodes.push(child));
      }
    });

    g.selectAll("path.outerArc")
      .data(outerNodes)
      .join("path")
      .attr("class", "outerArc")
      .attr("fill", d => colorScheme[d.data.name] || "#ddd")
      .attr("d", arcOuter)
      .on("mouseover", function (event, d) {
        d3.select(this)
          .attr("stroke", "lightgray")
          .attr("stroke-width", 2);
        d3.select(tooltipRef.current)
          .style("opacity", 1)
          .html(`<strong>${d.data.name}</strong><br>Count: ${d.data.value}`);
      })
      .on("mousemove", event => {
        const [x, y] = d3.pointer(event, containerRef.current);
        d3.select(tooltipRef.current)
          .style("left", `${x + 15}px`)
          .style("top", `${y + 15}px`);
      })
      .on("mouseout", function () {
        d3.select(this)
          .attr("stroke", null)
          .attr("stroke-width", null);
        d3.select(tooltipRef.current).style("opacity", 0);
      });
    /*
    outerNodes.forEach(outer => {
      const parent = outer.parent;
      if (!parent) return;
      const midAngle = (parent.x0 + parent.x1) / 2;
      const adjustedMid = midAngle - Math.PI/2;
      const drawLine = quadrantCenters.some(center => Math.abs(adjustedMid - center) < threshold);
      if (drawLine) {
        const angle = outer.x0 - Math.PI / 2;
        const x1 = (innerRadius + innerThickness) * Math.cos(angle);
        const y1 = (innerRadius + innerThickness) * Math.sin(angle);
        const x2 = outerRadius * Math.cos(angle);
        const y2 = outerRadius * Math.sin(angle);
        g.append("line")
          .attr("x1", x1)
          .attr("y1", y1)
          .attr("x2", x2)
          .attr("y2", y2)
          .attr("stroke", "white")
          .attr("stroke-width", 4);
      }
    });
    */

    const legendData = Object.entries(colorScheme);
    const legend = svg
      .append("g")
      .attr("class", "legend")
      .attr("transform", `translate(${width - 95}, -10)`);

    legend.selectAll("g")
      .data(legendData)
      .enter()
      .append("g")
      .attr("transform", (d, i) => `translate(0, ${i * 9})`)
      .each(function (d) {
        const gLegend = d3.select(this);
        gLegend.append("rect")
          .attr("width", 6)
          .attr("height", 6)
          .attr("fill", d[1]);
        gLegend.append("text")
          .attr("x", 10)
          .attr("y", 5)
          .style("fill", "black")
          //.style("font-weight", "bold")
          .style("font-size", "6px")
          .text(d[0]);
      });

    return () => {
      d3.select(svgRef.current).selectAll("*").remove();
    };
  }, []);

  return (
    <Container size="md">
      <div className={classes.inner} style={{ display: 'flex', flexDirection: 'column' }}>
        <div className={classes.content}>
          <Title order={1}>NCPI FHIR-Aggregator Data</Title>
          <Text mt="md" size="sm" color="dimmed" italic>
            Data ETL Timestamp: April 2025
          </Text>
          <br />
          <Text>
          The NCPI FHIR-aggregator features a suite of Python clients that convert data from the Cancer Data Aggregator (CDA), Genomic Data Commons (GDC), Cellosaurus Cell-Lines, International Cancer Genome Consortium (ICGC), Human Tumor Atlas Network (HTAN), 1000 Genomes, and GTEx repositories into 🔥 FHIR format. Our current data summary: 
          </Text>
          <br />
          <br />
        </div>
        <div className="chart-container" ref={containerRef}>
          <svg ref={svgRef} width="850" height="850"></svg>
          <div ref={tooltipRef} className="tooltip"></div>
        </div>
      </div>

    </Container>
  );
};

export default D3Sunburst;
