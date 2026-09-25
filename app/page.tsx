'use client';

import { useState } from 'react';
import {
  Activity,
  ArrowUpRight,
  Building2,
  Cpu,
  Mail,
  Minus,
  Network,
  Phone,
  Plus,
  Zap,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ModernFooter from './modern-footer';
import ModernHeader from './modern-header';
import ModernHero from './modern-hero';
import ModernMotion from './modern-motion';

const base = 'https://global.cet-electric.com/sg';
const solutions = [
  {
    name: 'Data centers',
    icon: Network,
    title: 'Intelligence for always-on infrastructure.',
    body: 'Bring power, cooling and building systems into one view. Connect critical infrastructure with CET’s data center management solutions.',
    url: '/solutions/174',
    tag: 'CONNECTED INFRASTRUCTURE',
  },
  {
    name: 'Power quality',
    icon: Activity,
    title: 'See the quality behind every kilowatt.',
    body: 'Understand electrical performance with power quality monitoring and the measurement devices that turn complex signals into actionable information.',
    url: '/solutions/179',
    tag: 'POWER YOU CAN UNDERSTAND',
  },
  {
    name: 'Smart buildings',
    icon: Building2,
    title: 'Make every building more informed.',
    body: 'Connect building systems and energy consumption data to support day-to-day operation, monitoring and control.',
    url: '/solutions/173',
    tag: 'BUILDING INTELLIGENCE',
  },
  {
    name: 'Energy optimization',
    icon: Zap,
    title: 'Turn energy insight into better decisions.',
    body: 'Explore AI energy optimization alongside CET’s monitoring and management systems for more efficient operations.',
    url: '/solutions/172',
    tag: 'A MORE EFFICIENT FUTURE',
  },
];
const products = [
  [
    '01',
    'Power quality meters',
    'Precision at the point of measurement.',
    '/products?category=141',
  ],
  [
    '02',
    'Multi-circuit monitors',
    'A clearer view of distributed loads.',
    '/products?category=144',
  ],
  [
    '03',
    'Gateways & processors',
    'Bring your devices and systems together.',
    '/products?category=145',
  ],
];
const news = [
  [
    '2025-09-30',
    '30 September 2025',
    'Data Centre World Asia 2025',
    'CET’s invitation to connect around power monitoring and energy management in Singapore.',
    '1860',
  ],
  [
    '2025-03-06',
    '6 March 2025',
    'Hannover Messe 2025',
    'Explore CET’s exhibition announcement for the international industrial technology event.',
    '1308',
  ],
  [
    '2024-10-11',
    '11 October 2024',
    'Data Centre World Madrid 2024',
    'A look back at CET’s participation in the data center industry gathering in Madrid.',
    '1273',
  ],
];

function Link({
  to,
  children,
  className = '',
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) {
  const local =
    to.startsWith('#') ||
    [
      '/resources',
      '/news',
      '/about',
      '/contact',
    ].includes(to) ||
    to.startsWith('/products') ||
    to.startsWith('/solutions');
  return (
    <a className={className} href={local ? to : base + to}>
      {children}
    </a>
  );
}

export default function Home() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  const selected = solutions[active];
  return (
    <div className="website modern">
      <ModernMotion />
      <ModernHeader />
      <main>
        <ModernHero />

        <section id="solutions" className="solutions section-pad">
          <div className="section-heading">
            <div>
              <span className="eyebrow">01 / SOLUTIONS</span>
              <h2>
                Connected thinking.
                <br />
                <em>Across every system.</em>
              </h2>
            </div>
            <p>
              One connected approach to complex energy challenges. Find the
              right starting point for your operation.
            </p>
          </div>
          <Tabs
            value={String(active)}
            onValueChange={(value) => setActive(Number(value))}
            className="solution-tabs"
          >
            <TabsList
              className="solution-tab-list"
              aria-label="Explore solutions"
            >
              {solutions.map((solution, index) => (
                <TabsTrigger key={solution.name} value={String(index)}>
                  <solution.icon size={18} />
                  {solution.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {solutions.map((solution, index) => (
              <TabsContent value={String(index)} key={solution.name}>
                <div className="solution-detail">
                  <div className="solution-copy">
                    <span className="eyebrow">{selected.tag}</span>
                    <h3>{selected.title}</h3>
                    <p>{selected.body}</p>
                    <Link to={selected.url} className="text-link">
                      Explore solution <ArrowUpRight size={19} />
                    </Link>
                  </div>
                  <div className="system-view">
                    <img
                      src={`/assets/ai/modern-${['data', 'quality', 'building', 'energy'][index]}.jpg`}
                      alt={`AI illustration: ${['data center infrastructure', 'electrical testing and power quality', 'intelligent commercial building', 'solar energy installation'][index]}`}
                      loading="lazy"
                    />
                    <span>Devices → Connected systems → Clearer decisions</span>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        <section id="products" className="products section-pad">
          <div className="section-heading">
            <div>
              <span className="eyebrow">02 / PRODUCTS</span>
              <h2>
                Small details.
                <br />
                <em>Powerful possibilities.</em>
              </h2>
            </div>
            <Link to="/products" className="text-link">
              View all products <ArrowUpRight size={19} />
            </Link>
          </div>
          <figure className="modern-range-photo">
            <img
              src="/assets/ai/modern-range.jpg"
              alt="AI concept illustration of a range of energy monitoring instruments"
              loading="lazy"
            />
            <figcaption>
              Precision instruments. One connected ecosystem.
            </figcaption>
          </figure>
          <div className="product-grid">
            {products.map(([number, title, description, url]) => (
              <Link key={number} to={url} className="product-card">
                <span className="product-number">{number} / DEVICE</span>
                <div className="product-icon">
                  {number === '01' ? (
                    <Activity />
                  ) : number === '02' ? (
                    <Cpu />
                  ) : (
                    <Network />
                  )}
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="product-bottom">
                  Explore range <ArrowUpRight size={20} />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section id="resources" className="resources section-pad">
          <div>
            <span className="eyebrow">03 / ENGINEERING RESOURCES</span>
            <h2>
              Everything you need.
              <br />
              <em>Right where you need it.</em>
            </h2>
            <p>
              From selection to installation, get the technical information that
              keeps your project moving.
            </p>
            <img
              className="modern-resource-photo"
              src="/assets/ai/modern-resources.jpg"
              alt="AI illustration of electronics testing and engineering"
              loading="lazy"
            />
          </div>
          <div className="resource-list">
            {[
              [
                'Product documentation',
                'Catalogues, datasheets and installation guidance.',
                '/resources',
                'Browse catalogues',
              ],
              [
                'Software & systems',
                'Explore software for CET devices and energy management.',
                '/resources',
                'Find software',
              ],
              [
                'Technical knowledge',
                'Practical guidance and technical notes for your team.',
                '/resources',
                'Visit knowledge base',
              ],
            ].map(([title, description, url, cta], index) => (
              <div className="resource-item" key={title}>
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  aria-expanded={open === index}
                  aria-controls={`resource-${index}`}
                >
                  {title}
                  {open === index ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                {open === index && (
                  <div id={`resource-${index}`}>
                    <p>{description}</p>
                    <Link to={url} className="text-link">
                      {cta} <ArrowUpRight size={17} />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="news" className="modern-news section-pad">
          <div className="section-heading">
            <div>
              <span className="eyebrow">04 / NEWS & EVENTS</span>
              <h2>
                Ideas in motion.
                <br />
                <em>CET in the world.</em>
              </h2>
            </div>
            <Link to="/news" className="text-link">
              View all news <ArrowUpRight size={19} />
            </Link>
          </div>
          <div className="modern-news-grid">
            {news.map(([date, label, title, body, id]) => (
              <article key={id}>
                <a href={`/news/${id}`} className="modern-news-photo">
                  <img
                    src={`/assets/ai/modern-news-${id}.jpg`}
                    alt={`AI editorial illustration accompanying ${title}; not a photograph of the event`}
                    loading="lazy"
                  />
                </a>
                <time dateTime={date}>{label}</time>
                <span className="news-category">EVENT ANNOUNCEMENT</span>
                <h3>
                  <a href={`/news/${id}`}>{title}</a>
                </h3>
                <p>{body}</p>
                <a href={`/news/${id}`} className="text-link">
                  Read announcement <ArrowUpRight size={18} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="modern-about section-pad">
          <div className="section-heading">
            <div>
              <span className="eyebrow">05 / ABOUT CET</span>
              <h2>
                Global expertise.
                <br />
                <em>Built around you.</em>
              </h2>
            </div>
            <div className="modern-about-copy">
              <p>
                CET develops energy management and power quality monitoring
                solutions for commercial, industrial and utility environments.
              </p>
              <p>
                Established in 2025, CET Singapore connects CET’s three decades
                of technical expertise with international sales and local
                support.
              </p>
              <Link to="/about" className="text-link">
                Get to know CET <ArrowUpRight size={19} />
              </Link>
            </div>
          </div>
          <figure className="modern-about-photo">
            <img
              src="/assets/ai/modern-about.jpg"
              alt="AI illustration of an electronics assembly team"
              loading="lazy"
            />
            <figcaption>
              Care in every connection. From assembly to operation.
            </figcaption>
          </figure>
          <div className="modern-about-stats">
            {[
              ['1,700+', 'Employees'],
              ['12+', 'Worldwide distributors'],
              ['4', 'R&D centers'],
            ].map(([number, label]) => (
              <div className="stat" key={label}>
                <strong>{number}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="closing modern-contact">
          <img
            className="modern-contact-photo"
            src="/assets/ai/modern-contact.jpg"
            alt="AI illustration of a contemporary office lobby"
            loading="lazy"
          />
          <div className="modern-contact-overlay" />
          <div>
            <span className="eyebrow">06 / CONTACT</span>
            <h2>
              Your next challenge.
              <br />
              Let’s solve it together.
            </h2>
            <p>
              Talk with CET about your power monitoring, connected
              infrastructure or energy management needs.
            </p>
            <Link to="/contact" className="primary home-contact-cta">
              Book your consultation <ArrowUpRight size={20} />
            </Link>
          </div>
          <div className="modern-contact-details home-contact-card">
            <div className="home-contact-card-heading">
              <span>CET SINGAPORE</span>
              <Phone size={21} />
            </div>
            <a className="home-contact-phone" href="tel:+6566697158">
              <span>+65 6669 7158</span>
              <ArrowUpRight size={22} />
            </a>
            <p>
              Product selection · System solutions
              <br />
              Technical and project support
            </p>
            <div className="home-contact-card-links">
              <a href="mailto:sg@cet-electric.com">
                <Mail size={17} /> Email our team
              </a>
              <Link to="/contact">
                Customer support <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <ModernFooter
        note="CET Singapore Pte. Ltd. · Independent redesign concept · AI-generated imagery is illustrative"
        sourceHref={base + '/'}
      />
    </div>
  );
}
