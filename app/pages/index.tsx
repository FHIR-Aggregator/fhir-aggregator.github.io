import { IconCheck, IconProgressAlert } from '@tabler/icons-react';
import { Button, Container, Group, Image, List, Tabs, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './HeroBullets.module.css';
import { Footer } from '@/components/footer/Footer';
import { FooterLanding } from '@/components/footer/FooterLanding';
import { HeaderMenu } from '@/components/header/HeaderMenu';
import Resources from '@/components/resources/Resources';
import Hero from '@/components/hero/Hero';
import Tools from '@/components/tools/Tools';
import NoteBook from '@/components/notebook/NoteBook';
import Data from '@/components/data/Data';
import Schema from '@/components/schema/Schema';
import { IconPhoto, IconMessageCircle, IconSettings , IconTools} from '@tabler/icons-react';
import { PiGraphDuotone } from "react-icons/pi";
import { MdOutlineSchema } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { GrResources } from "react-icons/gr";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const initialTab = Array.isArray(router.query.tab)
    ? router.query.tab[0]
    : router.query.tab;
  const [activeTab, setActiveTab] = useState(initialTab || 'about');

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const handleTabChange = (value) => {
    setActiveTab(value);
    router.push(`/#${value}`, undefined, { shallow: true });
  };

  return (
    <Tabs value={activeTab} onChange={handleTabChange}>
      <Tabs.List>
        <Tabs.Tab value="about" leftSection={<PiGraphDuotone size={25} />}>
          About
        </Tabs.Tab>
        <Tabs.Tab value="schema" leftSection={<MdOutlineSchema size={20} />}>
          Schema
        </Tabs.Tab>
        <Tabs.Tab value="data" leftSection={<IoStatsChart size={20} />}>
          Data
        </Tabs.Tab>
        <Tabs.Tab value="tools" leftSection={<IconTools size={20} />}>
          Tools
        </Tabs.Tab>
        {/*<Tabs.Tab value="resources" leftSection={<GrResources size={20} />}>
          Resources
        </Tabs.Tab>*/}
      </Tabs.List>

      <Tabs.Panel value="about">
        <Hero/>
        <FooterLanding/>
      </Tabs.Panel>

      <Tabs.Panel value="schema">
        <Schema/>
        <Footer/>
      </Tabs.Panel>

      <Tabs.Panel value="data">
        <Data/>
        <Footer/>
      </Tabs.Panel>

      <Tabs.Panel value="tools">
        <Tools/>
        <NoteBook/>
        <Footer/>
      </Tabs.Panel>

      {/*<Tabs.Panel value="resources">
        <Resources/>
        <Footer/>
      </Tabs.Panel>*/}

    </Tabs>
  );
}