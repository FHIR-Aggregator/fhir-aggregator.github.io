
import { Button, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
import classes from '@/pages/HeroBullets.module.css'
import Link from 'next/link';
import { IconPhoto, IconDownload, IconArrowRight } from '@tabler/icons-react';
import { RiGithubFill } from "react-icons/ri";



const Resources = () => {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title order={1}>Other Resources</Title>
          <br />
          <List size="xl" spacing="lg">
            <List.Item><Button size="s" justify="right" radius="xl" component={Link} target="_blank" href="https://github.com/ncbi/DbGaP-FHIR-API-Docs/blob/production/quickstart.md"><RiGithubFill size={30} /></Button><b>  The Database of Genotypes and Phenotypes (dbGaP) </b> </List.Item>
            <List.Item><Button size="s" justify="right" radius="xl" component={Link} target="_blank" href="https://github.com/NIH-NCPI/ncpi-fhir-ig-2"><RiGithubFill size={30} /></Button><b>  NCPI FHIR Working Group Implementation Guide</b> </List.Item>
          </List>
        </div>
      </div>
    </Container>
  )
}

export default Resources