'use client';

import { useState } from 'react';
import { ArrowUpRight, Download, FileText, Library } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ModernFooter from '../modern-footer';
import ModernCta from '../modern-cta';
import ModernHeader from '../modern-header';
import ModernMotion from '../modern-motion';

type Resource = {
  title: string;
  edition: string;
  description: string;
  href: string;
};

type ResourceCategory = {
  id: string;
  name: string;
  items: Resource[];
};

const base = 'https://global.cet-electric.com';

const categories: ResourceCategory[] = [
  {
    id: 'solutions',
    name: 'Solution brochures',
    items: [
      {
        title: 'DCIM Function Brochure',
        edition: '2025 EDITION',
        description:
          'An overview of CET data centre infrastructure management functions and connected operations.',
        href: `${base}/uploadfiles/2025/07/20250704162506329.pdf`,
      },
      {
        title: 'CCCS Function Brochure',
        edition: '2025 EDITION',
        description:
          'Explore centralised command and control capabilities for critical electrical infrastructure.',
        href: `${base}/uploadfiles/2025/07/20250704162255049.pdf`,
      },
      {
        title: 'BMS Function Brochure',
        edition: '2025 EDITION',
        description:
          'See how CET monitoring data connects with building management workflows and systems.',
        href: `${base}/uploadfiles/2025/07/20250704162054991.pdf`,
      },
    ],
  },
  {
    id: 'guides',
    name: 'Selection guides',
    items: [
      {
        title: 'CET Meter Catalogue',
        edition: '2024 · 0508S',
        description:
          'A consolidated overview of CET meters, monitors, gateways and supporting devices.',
        href: `${base}/uploadfiles/2024/05/Meter%20Catalogue%20%2820240508S%29.pdf`,
      },
      {
        title: 'CET Meter Selection Guide',
        edition: '2025 · 0321S',
        description:
          'Compare core functions and specifications to identify the right meter for an application.',
        href: `${base}/uploadfiles/2025/03/20250418173821848.pdf`,
      },
    ],
  },
  {
    id: 'panel',
    name: 'Panel meters',
    items: [
      {
        title: 'PMC-53A-E Catalogue',
        edition: '2023 · 0922S',
        description:
          'Product capabilities, specifications and ordering information for the Ethernet multifunction meter.',
        href: `${base}/uploadfiles/2023/09/PMC-53A-E%20Catalogue%20%2820230922S%29.pdf`,
      },
      {
        title: 'PMC-53A General Catalogue',
        edition: '2020 · 1020S',
        description:
          'Technical reference for the intelligent multifunction panel meter and its I/O options.',
        href: `${base}/uploadfiles/2021/08/PMC-53A%20Catalogue%20%2820201020S%29.pdf`,
      },
    ],
  },
  {
    id: 'din',
    name: 'DIN meters',
    items: [
      {
        title: 'PMC-340-A6 Catalogue',
        edition: '2025 · 0219S',
        description:
          'Specifications and application details for compact DIN rail energy monitoring.',
        href: `${base}/uploadfiles/2025/02/20250416213152949.pdf`,
      },
      {
        title: 'PMC-340 & PMC-220 Catalogue',
        edition: '2025 · 0117S',
        description:
          'A concise comparison of multifunction DIN rail meters for modern installations.',
        href: `${base}/uploadfiles/2025/01/20250419123127084.pdf`,
      },
    ],
  },
  {
    id: 'power-quality',
    name: 'Power quality',
    items: [
      {
        title: 'iMeter 7A Catalogue',
        edition: '2024 · 0729S',
        description:
          'Advanced power-quality monitoring features for high-visibility electrical networks.',
        href: `${base}/uploadfiles/2024/07/20250418223632410.pdf`,
      },
      {
        title: 'iMeter D7 Catalogue',
        edition: '2023 · 0529S',
        description:
          'Technical specifications for the DIN rail power quality monitor and recorder.',
        href: `${base}/uploadfiles/2023/05/iMeter%20D7%20Catalogue%20%2820230529S%29.pdf`,
      },
    ],
  },
  {
    id: 'multi-circuit',
    name: 'Multi-circuit monitors',
    items: [
      {
        title: 'PMC-592 Catalogue',
        edition: '2023 · 0315S',
        description:
          'Multi-circuit monitoring for branch-level visibility and high-density distribution systems.',
        href: `${base}/uploadfiles/2023/03/PMC-592%20Catalogue%20%2820230315S%29.pdf`,
      },
      {
        title: 'PMC-512-A Catalogue',
        edition: '2022 · 0815S',
        description:
          'Features, dimensions and ordering details for multi-channel electrical monitoring.',
        href: `${base}/uploadfiles/2022/08/PMC-512-A%20Catalogue%20%2820220815S%29.pdf`,
      },
    ],
  },
  {
    id: 'gateway',
    name: 'Gateways & processors',
    items: [
      {
        title: 'iSmartGate SE Catalogue',
        edition: '2025 · 0103S',
        description:
          'Edge connectivity and protocol integration for CET devices and third-party systems.',
        href: `${base}/uploadfiles/2025/01/20250418174658099.pdf`,
      },
      {
        title: 'PMC-1304-3 Catalogue',
        edition: '2023 · 0908S',
        description:
          'Communication processor specifications for reliable device and system integration.',
        href: `${base}/uploadfiles/2023/09/PMC-1304-3%20Catalogue%20%2820230908S%29.pdf`,
      },
    ],
  },
  {
    id: 'motor',
    name: 'Motor protection',
    items: [
      {
        title: 'PMC-550 Series Catalogue',
        edition: '2025 · 0326',
        description:
          'Protection, control and monitoring functions for low-voltage motor applications.',
        href: `${base}/uploadfiles/2025/03/20250416212101195.pdf`,
      },
    ],
  },
  {
    id: 'software',
    name: 'Software',
    items: [
      {
        title: 'PecStar iEMS Catalogue',
        edition: '2024 · 0516S',
        description:
          'Energy management software for visualisation, analysis, reporting and operational insight.',
        href: `${base}/uploadfiles/2024/05/20250416212439963.pdf`,
      },
      {
        title: 'CET Digital Twin Leaflet',
        edition: '2023 · 0607',
        description:
          'A concise introduction to digital twin views for electrical and energy systems.',
        href: `${base}/uploadfiles/2023/06/20250416212916810.pdf`,
      },
    ],
  },
];

function DownloadCard({ item, index }: { item: Resource; index: number }) {
  return (
    <a
      className="resource-download-card"
      href={item.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Download ${item.title} PDF`}
    >
      <div className="resource-download-card-top">
        <span>{String(index + 1).padStart(2, '0')} / PDF</span>
        <FileText size={28} />
      </div>
      <div className="resource-download-card-copy">
        <span>{item.edition}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      <div className="resource-download-action">
        Download PDF <Download size={18} />
      </div>
    </a>
  );
}

export default function ResourcesCatalogue() {
  const [selected, setSelected] = useState(categories[0].id);

  return (
    <div className="website modern catalogue-site resources-page">
      <ModernMotion />
      <ModernHeader resourcePage />
      <main>
        <section className="catalogue-intro resources-page-hero">
          <div className="catalogue-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Resources</span>
            <span>/</span>
            <span>Downloads</span>
          </div>
          <div className="catalogue-title-row">
            <div>
              <span className="eyebrow">CET / ENGINEERING LIBRARY</span>
              <h1>
                KNOWLEDGE.
                <br />
                <span>READY TO USE.</span>
              </h1>
            </div>
            <div className="catalogue-intro-note">
              <Library size={40} />
              <p>
                Find the product catalogues, selection guides and technical
                brochures that keep your project moving.
              </p>
            </div>
          </div>
        </section>

        <Tabs
          value={selected}
          onValueChange={(value) => setSelected(String(value))}
          className="catalogue-layout resources-layout"
        >
          <aside className="catalogue-sidebar">
            <span className="eyebrow">BROWSE RESOURCES</span>
            <h2>Document category</h2>
            <TabsList
              className="catalogue-categories"
              aria-label="Resource category"
            >
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                  <ArrowUpRight size={16} />
                </TabsTrigger>
              ))}
            </TabsList>
            <a className="catalogue-system-link" href="/products">
              Explore products <ArrowUpRight size={18} />
            </a>
          </aside>

          <div className="catalogue-results">
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="catalogue-results-heading">
                  <div>
                    <span className="eyebrow">SELECTED / DOWNLOADS</span>
                    <h2>{category.name}</h2>
                  </div>
                  <span>
                    {String(category.items.length).padStart(2, '0')} FILES
                  </span>
                </div>
                <div className="resource-download-grid">
                  {category.items.map((item, index) => (
                    <DownloadCard item={item} index={index} key={item.title} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>

        <ModernCta
          eyebrow="NEED ANOTHER DOCUMENT?"
          title={
            <>
              FIND THE RIGHT FILE.
              <br />
              ASK OUR TEAM.
            </>
          }
          description="Tell us which device or project you are working on. CET Singapore can help locate the latest technical document."
        />
      </main>
      <ModernFooter
        note="Independent redesign concept · Resource content from CET."
        sourceHref="https://global.cet-electric.com/sg/Catalogue"
      />
    </div>
  );
}
