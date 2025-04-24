import { Button, Container, Group, List, Text, ThemeIcon, Title, Tooltip } from '@mantine/core';
import { IconCheck, IconCircleCheck, IconProgressAlert } from '@tabler/icons-react';
import classes from '@/pages/HeroBullets.module.css';
import { RiGithubFill } from "react-icons/ri";
import { BsDatabaseDown } from "react-icons/bs";


function inProgress() {
  return (
    <Tooltip label="In progress" withArrow>
      <ThemeIcon color="yellow" size={20} radius="xl">
        <IconProgressAlert size={12} stroke={1.5} />
      </ThemeIcon>
    </Tooltip>
  );
}

function advanced() {
  return (
    <Tooltip label="Advanced progress" withArrow>
      <ThemeIcon color="green" size={20} radius="xl">
        <IconCircleCheck size={12} stroke={1.5} />
      </ThemeIcon>
    </Tooltip>
  );
}

function completed() {
  return (
    <Tooltip label="Completed" withArrow>
      <ThemeIcon size={20} radius="xl">
        <IconCheck size={12} stroke={1.5} />
      </ThemeIcon>
    </Tooltip>
  );
}

const Hero = () => {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            NCPI FHIR-Aggregator
          </Title>
          <div>
            <Text c="dimmed" mt="md">
              Integrating Fast Healthcare Interoperability Resources (FHIR) from across the NIH Cloud Platform Interoperability Program.
            </Text>
            <br />
          </div>
          <div>
            <Text>
              The NCPI FHIR-Aggregator simplifies the use and integration of large-scale, multimodal data into a standard graph-based schema. It leverages Google’s Cloud Healthcare API to host and serve the data, allowing for effortless submission and querying of FHIR-transformed information. This unified framework creates a universal language that not only streamlines patient information exchange but also makes it effortless to navigate and analyze diverse data points - further enhancing both healthcare data exchange and research innovation.
            </Text>
          </div>
          <Text mt="md" size="sm" color="dimmed" italic>
            Data ETL Timestamp: April 2025
          </Text>
          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={completed()}
          >
            <List.Item><b>Cancer Data Aggregator (CDA)</b></List.Item>
            <List.Item><b>Human Tumor Atlas Network (HTAN)</b></List.Item>
            <List.Item><b>Cellosaurus</b></List.Item>
            <List.Item><b>1000 Genomes</b></List.Item>
            <List.Item icon={advanced()}>International Cancer Genome Consortium (ICGC-ARGO)</List.Item>
            <List.Item icon={advanced()}>Genotype-Tissue Expression Portal (GTEx)</List.Item>

          </List>
          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control} component="a" target="_blank" rel="noopener noreferrer" href="https://fhir-aggregator.readthedocs.io/en/latest/">
              Get started
            </Button>
            <Button leftSection={<RiGithubFill size={30} />} variant="default" radius="xl" size="md" className={classes.control} component="a" target="_blank" rel="noopener noreferrer" href="https://github.com/fhir-aggregator">
              Source code
            </Button>
            <Button leftSection={<BsDatabaseDown size={25} />} variant="default" radius="xl" size="md" className={classes.control} component="a" target="_blank" rel="noopener noreferrer" href="https://console.cloud.google.com/storage/browser/fhir-aggregator-public;tab=objects?forceOnBucketsSortingFiltering=true&hl=en&invt=AbuJTA&project=ncpi-rti-p01-007-ohsu&prefix=&forceOnObjectsSortingFiltering=false">
              Bulk Download
            </Button>
          </Group>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
