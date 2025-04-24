import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import { PiGraphDuotone } from "react-icons/pi";
import classes from './FooterLanding.module.css';

const data = [
  {
    title: 'Project',
    links: [
      { label: 'Google Healthcare API', link: 'https://github.com/FHIR-Aggregator/healthcare-api?tab=readme-ov-file' },
      { label: 'FHIR Query', link: 'https://github.com/FHIR-Aggregator/fhir-query' },
      { label: 'Releases', link: 'https://github.com/orgs/FHIR-Aggregator/projects' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'NIH-NCPI', link: 'https://github.com/NIH-NCPI/ncpi-fhir-ig-2' },
      { label: 'dbGap', link: 'https://github.com/ncbi/DbGaP-FHIR-API-Docs/blob/production/quickstart.md' },
      { label: 'GitHub discussions', link: 'https://github.com/NIH-NCPI/ncpi-fhir-ig-2/issues' },
    ],
  },
];

export function FooterLanding() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Group>
            <PiGraphDuotone size={40} />
            <Text fw={700} size="xl" className={classes.description}>
              NCPI FHIR-Aggregator
            </Text>
          </Group>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2025 NCPI FHIR-Aggregator.
        </Text>
      </Container>
    </footer>
  );
}
