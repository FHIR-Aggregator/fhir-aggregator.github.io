import React from 'react';
import {ReactFlow, MiniMap, Controls, Background, useNodesState, useEdgesState, useReactFlow } from '@xyflow/react';
import Dagre from '@dagrejs/dagre';
import '@xyflow/react/dist/style.css';
import { Container, Title, Text } from '@mantine/core';
import classes from '@/pages/HeroBullets.module.css';

const nodeColors = {
  ResearchStudy: '#4D9EE2',
  ResearchSubject: '#4D9EE2',
  Patient: '#4D9EE2',
  Specimen: '#4D9EE2',
  Observation: '#4D9EE2',
  DocumentReference: '#4D9EE2',
  Condition: '#4D9EE2',
  MedicationAdministration: '#4D9EE2',
  Medication: '#4D9EE2',
  Practitioner: '#4D9EE2',
  Organization: '#4D9EE2',
  Group: '#4D9EE2',
  ServiceRequest: '#4D9EE2',
  Substance: '#4D9EE2',
  SubstanceDefinition: '#4D9EE2',
};

const initialNodes = [
  {
    id: 'ResearchStudy',
    data: { label: 'ResearchStudy' },
    sourcePosition: 'bottom',
    targetPosition: 'bottom',
    style: {
      backgroundColor: nodeColors.ResearchStudy,
      color: 'white',
      borderRadius: '10px',
      padding: '10px',
      border: '2px solid #2D4159',
      fontWeight: 'bold',
    },
  },
  {
    id: 'ResearchSubject',
    data: { label: 'ResearchSubject' },
    sourcePosition: 'bottom',
    targetPosition: 'bottom',
    style: {
      backgroundColor: nodeColors.ResearchSubject,
      color: 'white',
      borderRadius: '10px',
      padding: '10px',
      border: '2px solid #2D4159',
      fontWeight: 'bold',
    },
  },
  {
    id: 'Patient',
    data: { label: 'Patient' },
    sourcePosition: 'bottom',
    targetPosition: 'bottom',
    style: {
      backgroundColor: nodeColors.Patient,
      color: 'white',
      borderRadius: '10px',
      padding: '10px',
      border: '2px solid #2D4159',
      fontWeight: 'bold',
    },
  },
  {
    id: 'Specimen',
    data: { label: 'Specimen' },
    sourcePosition: 'bottom',
    targetPosition: 'bottom',
    style: {
      backgroundColor: nodeColors.Specimen,
      color: 'white',
      borderRadius: '10px',
      padding: '10px',
      border: '2px solid #2D4159',
      fontWeight: 'bold',
    },
  },
  {
    id: 'Observation',
    data: { label: 'Observation' },
    sourcePosition: 'bottom',
    targetPosition: 'bottom',
    style: {
      backgroundColor: nodeColors.Observation,
      color: 'white',
      borderRadius: '10px',
      padding: '10px',
      border: '2px solid #2D4159',
      fontWeight: 'bold',
    },
  },
  {
    id: 'DocumentReference',
    data: { label: 'DocumentReference' },
    sourcePosition: 'bottom',
    targetPosition: 'bottom',
    style: {
      backgroundColor: nodeColors.DocumentReference,
      color: 'white',
      borderRadius: '10px',
      padding: '10px',
      border: '2px solid #2D4159',
      fontWeight: 'bold',
    },
  },
  {
    id: 'Condition',
    data: { label: 'Condition' },
    sourcePosition: 'bottom',
    targetPosition: 'bottom',
    style: {
      backgroundColor: nodeColors.Condition,
      color: 'white',
      borderRadius: '10px',
      padding: '10px',
      border: '2px solid #2D4159',
      fontWeight: 'bold',
    },
  },
  {
    id: 'MedicationAdministration',
    data: { label: 'MedicationAdministration' },
    sourcePosition: 'bottom',
    targetPosition: 'bottom',
    style: {
      backgroundColor: nodeColors.MedicationAdministration,
      color: 'white',
      borderRadius: '10px',
      padding: '10px',
      border: '2px solid #2D4159',
      fontWeight: 'bold',
    },
  },
  {
    id: 'Medication',
    data: { label: 'Medication' },
    sourcePosition: 'bottom',
    targetPosition: 'bottom',
    style: {
      backgroundColor: nodeColors.Medication,
      color: 'white',
      borderRadius: '10px',
      padding: '10px',
      border: '2px solid #2D4159',
      fontWeight: 'bold',
    },
  },
  {
    id: 'Substance',
    data: { label: 'Substance' },
    sourcePosition: 'bottom',
    targetPosition: 'bottom',
    style: {
      backgroundColor: nodeColors.Medication,
      color: 'white',
      borderRadius: '10px',
      padding: '10px',
      border: '2px solid #2D4159',
      fontWeight: 'bold',
    },
  },
  {
    id: 'SubstanceDefinition',
    data: { label: 'SubstanceDefinition' },
    sourcePosition: 'bottom',
    targetPosition: 'bottom',
    style: {
      backgroundColor: nodeColors.Medication,
      color: 'white',
      borderRadius: '10px',
      padding: '10px',
      border: '2px solid #2D4159',
      fontWeight: 'bold',
    },
  },
  {
    id: 'Practitioner',
    data: { label: 'Practitioner' },
    sourcePosition: 'bottom',
    targetPosition: 'bottom',
    style: {
      backgroundColor: nodeColors.Practitioner,
      color: 'white',
      borderRadius: '10px',
      padding: '10px',
      border: '2px solid #2D4159',
      fontWeight: 'bold',
    },
  },
  {
    id: 'Organization',
    data: { label: 'Organization' },
    sourcePosition: 'bottom',
    targetPosition: 'bottom',
    style: {
      backgroundColor: nodeColors.Organization,
      color: 'white',
      borderRadius: '10px',
      padding: '10px',
      border: '2px solid #2D4159',
      fontWeight: 'bold',
    },
  },
  {
    id: 'Group',
    data: { label: 'Group' },
    sourcePosition: 'bottom',
    targetPosition: 'bottom',
    style: {
      backgroundColor: nodeColors.Organization,
      color: 'white',
      borderRadius: '10px',
      padding: '10px',
      border: '2px solid #2D4159',
      fontWeight: 'bold',
    },
  },
  {
    id: 'ServiceRequest',
    data: { label: 'ServiceRequest' },
    sourcePosition: 'bottom',
    targetPosition: 'bottom',
    style: {
      backgroundColor: nodeColors.Organization,
      color: 'white',
      borderRadius: '10px',
      padding: '10px',
      border: '2px solid #2D4159',
      fontWeight: 'bold',
    },
  },
];

const initialEdges = [
  { id: 'researchstudy-researchsubject', source: 'ResearchSubject', target: 'ResearchStudy', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'researchsubject-patient', source: 'ResearchSubject', target: 'Patient', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'condition-patient', source: 'Condition', target: 'Patient', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'sample-researchsubject', source: 'Specimen', target: 'Patient', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'sample-practitioner', source: 'Specimen', target: 'Practitioner', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'practitioner-organization', source: 'Practitioner', target: 'Organization', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'medicationadministration-patient', source: 'MedicationAdministration', target: 'Patient', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'medicationadministration-medication', source: 'MedicationAdministration', target: 'Medication', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'medication-substance', source: 'Medication', target: 'Substance', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'substance-substancedefinition', source: 'Substance', target: 'SubstanceDefinition', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'observation-specimen', source: 'Observation', target: 'Specimen', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'observation-documentreference', source: 'Observation', target: 'DocumentReference', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'observation-condition', source: 'Observation', target: 'Condition', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'observation-patient', source: 'Observation', target: 'Patient', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'documentreference-specimen', source: 'DocumentReference', target: 'Specimen', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'documentreference-patient', source: 'DocumentReference', target: 'Patient', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'documentreference-group', source: 'DocumentReference', target: 'Group', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'documentreference-servicerequest', source: 'DocumentReference', target: 'ServiceRequest', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'group-specimen', source: 'Group', target: 'Specimen', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'group-patient', source: 'Group', target: 'Patient', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'servicerequest-patient', source: 'ServiceRequest', target: 'Patient', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'servicerequest-specimen', source: 'ServiceRequest', target: 'Specimen', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'servicerequest-documentreference', source: 'ServiceRequest', target: 'DocumentReference', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'patient-researchstudy', source: 'Patient', target: 'ResearchStudy', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'specimen-researchstudy', source: 'Specimen', target: 'ResearchStudy', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'documentreference-researchstudy', source: 'DocumentReference', target: 'ResearchStudy', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'group-researchstudy', source: 'Group', target: 'ResearchStudy', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'observation-researchstudy', source: 'Observation', target: 'ResearchStudy', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'condition-researchstudy', source: 'Condition', target: 'ResearchStudy', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'medicationadministration-researchstudy', source: 'MedicationAdministration', target: 'ResearchStudy', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'medication-researchstudy', source: 'Medication', target: 'ResearchStudy', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'substance-researchstudy', source: 'Substance', target: 'ResearchStudy', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'substancedefinition-researchstudy', source: 'SubstanceDefinition', target: 'ResearchStudy', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'practitioner-researchstudy', source: 'Practitioner', target: 'ResearchStudy', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
  { id: 'organization-researchstudy', source: 'Organization', target: 'ResearchStudy', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 2 } },
];

const flippedEdges = initialEdges.map((edge) => ({
  ...edge,
  id: edge.id.includes('-') ? edge.id.split('-').reverse().join('-') : edge.id,
  source: edge.target,
  target: edge.source,
}));

const getLayoutedElements = (nodes, edges, options) => {
  const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir: options.direction });
    edges.forEach((edge) => g.setEdge(edge.source, edge.target));
  nodes.forEach((node) => {
    g.setNode(node.id, {
      ...node,
      width: node.measured?.width ?? 80,
      height: node.measured?.height ?? 70,
    });
  });
  Dagre.layout(g);
  
  return {
    nodes: nodes.map((node) => {
      const position = g.node(node.id);
      return {
        ...node,
        position: {
          x: position.x - (node.measured?.width ?? 0) / 2,
          y: position.y - (node.measured?.height ?? 0) / 2,
        },
      };
    }),
    edges,
  };
};

// function ResetViewButton({ style = {} }) {
//   const { setViewport } = useReactFlow();
//   const handleClick = () => {
//     console.log('Reset View clicked');
//     setViewport({ x: 0, y: 0, zoom: 1 }, { duration: 500 });
//   };
//   return (
//     <button
//       style={{
//         position: 'absolute',
//         zIndex: 1000,
//         padding: '8px 16px',
//         fontSize: '16px',
//         backgroundColor: '#fff',
//         border: '1px solid #ccc',
//         borderRadius: '4px',
//         ...style,
//       }}
//       onClick={handleClick}
//     >
//       Reset View
//     </button>
//   );
// }

export default function Schema() {
  const direction = 'TB';
  const layouted = getLayoutedElements(initialNodes, flippedEdges, { direction });
  const [nodes, setNodes, onNodesChange] = useNodesState(layouted.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title order={1}>NCPI FHIR-Aggregator Schema</Title>
          <Text>
            <br />
            The NCPI FHIR-Aggregator schema is the underlying structure and data model that organizes FHIR resources such as
            patient records, specimens, or diagnoses. This allows for consistent data exchange and navigation across platforms.
            It standardizes data by enforcing specific attributes, relationships, and data types, which in turn simplifies data integration.
            Here we demo NCPI FHIR-Aggregator's high level schema graph definition used to integrate and transform consortium level data:
          </Text>
        </div>
      </div>
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          connectOnClick={false}
          preventScrolling={false}
        >
          <Controls style={{ position: 'absolute', top: 10, left: 10, right: 'auto', bottom: 'auto' }} />
          <Background />
          {/*<ResetViewButton style={{ position: 'absolute', top: 'auto', left: 10 , right: 'auto', bottom: 10 }} />*/}
        </ReactFlow>
      </div>
    </Container>
  );
}
