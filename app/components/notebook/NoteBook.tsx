import React from 'react';
import { Container, Title, Button, Text, List, ThemeIcon } from '@mantine/core';
import { IconCircle, IconTools } from '@tabler/icons-react'; 

const notebooks = [
  {
    id: 1,
    title: "A Researcher's Guide: Explore projects linked to specific conditions or available via dbGAP",
    // description: (
    //   <List
    //     spacing="xs"
    //     size="sm"
    //     center
    //     icon={
    //       <ThemeIcon color="blue" size={10} radius="xl">
    //         <IconCircle size={16} />
    //       </ThemeIcon>
    //     }
    //   >
    //     <List.Item>
    //       <b>Find Data by Condition:</b> Identify and extract data linked to specific research conditions.
    //     </List.Item>
    //     <List.Item>
    //       <b>Querying Open Access Projects:</b> Use CLI commands to explore projects available in dbGAP.
    //     </List.Item>
    //   </List>
    // ),
    url: "https://colab.research.google.com/drive/1G1c_2gNNUdicFWeImN2_zFAjmSwfewYI?usp=sharing"
  },
  {
    id: 2,
    title: "The Vocabulary DataFrame: Comprehensive Overview of Data Elements for Query Design",
    url: "https://colab.research.google.com/drive/1M2HkLxK_93jvOwPL8iU6te8s9TVne-r1?usp=sharing&copy=true"
  },
  {
    id: 3,
    title: "Survival Analysis: A Hands-On Demo with FHIR Aggregator Data",
    url: "https://colab.research.google.com/drive/1g9EaDNFvlfpKfCQNakCClQxNKQ-kyc6Z?usp=sharing"
  },
  {
    id: 4,
    title: "Cholangiocarcinoma: Bridging Data and Discovery Across Studies",
    url: "https://colab.research.google.com/drive/1-806R8f8QX4iQ0r19HHYGnbPP_-YEuw7?usp=sharing"
  },
];

const NoteBook = () => {
  return (
    <Container size="md">
      {notebooks.map((notebook) => (
        <div key={notebook.id} style={{ marginBottom: '1rem' }}>
          <Title order={5}>
            {notebook.id}. {notebook.title}
          </Title>
          {notebook.description && (
            <Text component="div" mt="xs">
              {notebook.description}
            </Text>
          )}
          <Button mt="sm" onClick={() => window.open(notebook.url, "_blank")}>
            Open Notebook in Colab
          </Button>
        </div>
      ))}
    </Container>
  );
};

export default NoteBook;
