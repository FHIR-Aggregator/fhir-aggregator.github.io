import { Container, List, Text, ThemeIcon, Title , Group} from '@mantine/core';
import { IconCircle, IconTools } from '@tabler/icons-react'; 
import classes from '@/pages/HeroBullets.module.css';

const Tools = () => {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
        <Title className={classes.title} size={35}>NCPI FHIR-Aggregator Query</Title>
          {/* <Group>
          <IconTools size={50}/>
          <Title className={classes.title} size={35}>FHIR Query</Title>
           </ Group>*/}
          <br />
          <Text>
          Designed to simplify data retrieval and local analysis for users of all backgrounds, the NCPI FHIR-Aggregator query operates as a locally hosted command line interface (CLI) tool that executes graph-based traversals across multiple interconnected FHIR graphs.
          
          <br />
          <br />
            <strong> Key Technical Features Include:</strong> 
          <br />
          <br />
          </Text>
          <List
            spacing="xs"
            size="sm"
            center
            icon={
              <ThemeIcon color="blue" size={10} radius="xl">
                <IconCircle size={16} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>GraphDefinition-Driven Traversals:</b> Use R5 GraphDefinition objects to define explicit relationships between resources and automate traversal logic.
            </List.Item>
            <List.Item>
              <b>Local SQLite Storage:</b> Persist the retrieved FHIR data in a local SQLite database for querying and offline analysis.
            </List.Item>
            <List.Item>
              <b>Analyst-Friendly Dataframes:</b> Convert stored FHIR resources into pandas dataframes for ease of use in analytical workflows.
            </List.Item>
            <List.Item>
              <b>Reusable Graph Definitions:</b> Maintain a library of GraphDefinition YAML files that can be reused across different workflows and projects.
              <br />
            </List.Item>
          </List>
          <Text>
            <br />
              <strong> Interactive Jupyter Notebooks:</strong> 
            <br />
          </Text>
        </div>
      </div>
    </Container>
  );
};

export default Tools;
