import type { Metadata } from 'next';
import {
  Activity,
  ArrowRight,
  BarChart3,
  CloudCog,
  Network,
  ShieldCheck,
} from 'lucide-react';
import ModernFooter from '../modern-footer';
import ModernCta from '../modern-cta';
import ModernHeader from '../modern-header';
import ModernMotion from '../modern-motion';

export const metadata: Metadata = {
  title: 'About CET Singapore | Energy intelligence',
  description:
    'Meet CET Singapore: local power-monitoring experience, engineering capabilities, quality standards and client partnerships.',
};

const experience = [
  ['20', 'Installation & system design'],
  ['18', 'Maintenance services'],
  ['16', 'Power data analytics'],
  ['15', 'Project management'],
];
const capabilities = [
  [
    Activity,
    'Energy management systems',
    'Integrated metering across factories, commercial buildings and data centres for monitoring, control, cost allocation and sustainability reporting.',
  ],
  [
    Network,
    'BMS & software integration',
    'CET meters connect through Modbus RTU/TCP, BACnet and Ethernet to building-management and IoT energy platforms.',
  ],
  [
    CloudCog,
    'Remote sites monitoring',
    'Connect meters across substations, telecom towers and utility infrastructure through cellular and IoT networks.',
  ],
  [
    BarChart3,
    'Transformer & power quality analytics',
    'Identify harmonic distortion, voltage events and signs of transformer degradation early with high-resolution power-quality data.',
  ],
];
const standards = [
  'SS 514:2005',
  'ISO 9001:2015',
  'ISO 14001:2015',
  'ISO 45001:2018',
  'BizSAFE STAR',
];
const clients = [
  {
    name: 'Mead Johnson Nutrition (Asia Pacific) Pte Ltd.',
    logo: '/assets/clients/mead-johnson.png',
  },
  { name: 'MediaCorp Pte Ltd', logo: '/assets/clients/mediacorp.png' },
  { name: 'Marina Bay Sands', logo: '/assets/clients/marina-bay-sands.png' },
  {
    name: 'Sentosa Development Corporation',
    logo: '/assets/clients/sentosa.png',
  },
  {
    name: 'James Cook University',
    logo: '/assets/clients/james-cook-university.png',
  },
  { name: 'Gleneagles Hospital', logo: '/assets/clients/gleneagles.png' },
  { name: 'MDIS Academy', logo: '/assets/clients/mdis.png' },
];

export default function AboutPage() {
  return (
    <div className="website modern about-page">
      <ModernMotion />
      <ModernHeader aboutPage />
      <main>
        <section className="about-page-hero catalogue-intro">
          <div className="catalogue-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>About</span>
            <span>/</span>
            <span>Singapore</span>
          </div>
          <div className="catalogue-title-row">
            <div className="about-hero-copy">
              <span className="eyebrow">CET / SINGAPORE</span>
              <h1>
                LOCAL EXPERIENCE.
                <br />
                <span>GLOBAL ENGINEERING.</span>
              </h1>
            </div>
            <div className="catalogue-intro-note about-hero-note">
              <Activity size={40} />
              <div>
                <p>
                  Power monitoring built for the way Singapore operates—from a
                  single-meter retrofit to connected, thousand-point
                  infrastructure.
                </p>
                <a href="#company" className="text-link">
                  Discover our story <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
          <figure className="about-hero-banner">
            <img
              src="/assets/ai/modern-about.jpg"
              alt="CET engineering team inspecting power-monitoring electronics"
              fetchPriority="high"
            />
            <figcaption>
              Engineering precision into every connection.
            </figcaption>
          </figure>
        </section>

        <section id="company" className="about-company section-pad">
          <div className="section-heading">
            <div>
              <span className="eyebrow">01 / COMPANY INTRODUCTION</span>
              <h2>CET Electric Technology (Singapore)</h2>
            </div>
            <p>
              CET Electric Technology (Singapore) is the manufacturer behind
              some of Singapore’s most-deployed digital power monitors, energy
              meters and power-quality analysers. Industrial, commercial and
              data-centre operators across Singapore rely on CET hardware to
              deliver accurate energy and power-quality measurements for
              regulatory, environmental and financial reporting obligations —
              including BCA Green Mark, the Energy Conservation Act, ISO 50001
              and the Singapore Carbon Tax.
            </p>
          </div>
          <div className="about-company-grid">
            <p>
              CET’s PMC-series instruments are designed for measurement,
              analysis and reporting in facilities of every size — from
              single-meter retrofits to thousand-point industrial rollouts. The
              hardware is built to capture near-real-time consumption data and
              feed it into the dashboards, audit workflows and cost-allocation
              tools that Singapore facility teams depend on.
            </p>
            <p>
              For complete <strong>power monitoring solutions Singapore</strong>{' '}
              teams can deploy end-to-end — including IoT dashboards,
              sustainability reporting and integration with modern building
              management systems — CET hardware powers the integrated solutions
              delivered by our partner{' '}
              <a href="https://www.ecoxplore.com/">EcoXplore Singapore</a>.
              EcoXplore holds the formal industry{' '}
              <a href="https://www.ecoxplore.com/">accreditations</a> required
              for large-scale Singapore deployments (SS 514:2005, ISO 9001:2015,
              ISO 14001:2015, ISO 45001:2018, BizSAFE STAR — verified by TÜV
              SÜD, ICR, ARES, SAC). Together, CET and EcoXplore cover the full
              hardware-and-solution stack for Singapore power monitoring.
            </p>
            <p>
              Our engineering team has more than 15 years of Singapore field
              experience. We have completed projects across data centres,
              commercial buildings, hospitals, factories, education campuses and
              utilities — and continue to support every meter we deploy.
            </p>
          </div>
        </section>

        <section className="about-experience section-pad">
          <div className="section-heading">
            <div>
              <span className="eyebrow">02 / OUR EXPERIENCE</span>
              <h2>
                BUILT IN THE FIELD.
                <br />
                <em>PROVEN OVER TIME.</em>
              </h2>
            </div>
            <p>
              Four connected disciplines shape every project, from the first
              system decision to long-term performance.
            </p>
          </div>
          <div className="about-experience-list">
            {experience.map(([years, label], index) => (
              <article key={label}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{label}</h3>
                <strong>
                  {years}
                  <small> YEARS</small>
                </strong>
              </article>
            ))}
          </div>
        </section>

        <section
          className="about-numerics modern-about-stats section-pad"
          aria-label="CET Singapore at a glance"
        >
          {[
            ['15+', 'Years in Singapore'],
            ['6', 'Industries served'],
            ['7', 'Named Singapore clients'],
          ].map(([number, label]) => (
            <div className="stat" key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="about-capabilities section-pad">
          <div className="section-heading">
            <div>
              <span className="eyebrow">03 / WHAT WE DO</span>
              <h2>
                FROM EVERY METER.
                <br />
                <em>TO THE WHOLE SYSTEM.</em>
              </h2>
            </div>
            <p>
              Hardware, integration and local engineering support designed to
              turn electrical data into operational clarity.
            </p>
          </div>
          <div className="about-capability-grid">
            {capabilities.map(([Icon, title, body]) => {
              const Mark = Icon as typeof Activity;
              return (
                <article key={String(title)}>
                  <div>
                    <Mark size={28} />
                  </div>
                  <h3>{String(title)}</h3>
                  <p>{String(body)}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="about-quality section-pad">
          <figure>
            <img
              src="/assets/ai/modern-quality.jpg"
              alt="Power-quality analysis equipment in a precision electronics laboratory"
              loading="lazy"
            />
            <figcaption>Precision measurement, validated processes.</figcaption>
          </figure>
          <div>
            <span className="eyebrow">
              04 / QUALITY STANDARDS & CERTIFICATIONS
            </span>
            <h2>
              QUALITY THAT EXTENDS
              <br />
              ACROSS THE SYSTEM.
            </h2>
            <p>
              CET works with EcoXplore Singapore for end-to-end deployments.
              EcoXplore holds the formal industry accreditations used across
              large-scale Singapore projects.
            </p>
            <div className="about-standard-grid">
              {standards.map((name) => (
                <div key={name}>
                  <ShieldCheck size={22} />
                  <span>{name}</span>
                </div>
              ))}
            </div>
            <small>
              Certifications listed above are held by CET’s Singapore solutions
              partner, EcoXplore.
            </small>
          </div>
        </section>

        <section className="about-clients section-pad">
          <div className="section-heading">
            <div>
              <span className="eyebrow">05 / CLIENTS</span>
              <h2>
                TRUSTED WHERE
                <br />
                <em>ENERGY MATTERS.</em>
              </h2>
            </div>
            <p>
              Organizations named by CET Singapore across industry, education,
              healthcare, media, hospitality and public infrastructure.
            </p>
          </div>
          <div className="about-client-grid">
            {clients.map((client) => (
              <article key={client.name}>
                <div className="about-client-logo">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    loading="lazy"
                  />
                </div>
                <div className="about-client-name">
                  <strong>{client.name}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <ModernCta
          eyebrow="06 / START A CONVERSATION"
          title="LET’S BUILD A CLEARER VIEW OF YOUR ENERGY."
          description="Talk with CET about your metering, power-quality or connected-infrastructure requirements."
        />
      </main>
      <ModernFooter />
    </div>
  );
}
