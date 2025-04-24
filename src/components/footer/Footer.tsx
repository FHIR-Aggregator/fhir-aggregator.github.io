import { Anchor, Container, Group } from '@mantine/core';
import classes from './Footer.module.css';

const links = [
  // { link: '#', label: 'Funding' },
  // { link: '#', label: 'Contributors' },
  // { link: '#', label: 'Tutorials' },
  // { link: '#', label: 'Code' },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor<'a'>
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
