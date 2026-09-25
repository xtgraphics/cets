import type { Metadata } from 'next';
import { ArrowUpRight, Headphones, Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from './contact-form';
import ModernCta from '../modern-cta';
import ModernFooter from '../modern-footer';
import ModernHeader from '../modern-header';
import ModernMotion from '../modern-motion';

export const metadata: Metadata = {
  title: 'Contact & Customer Support | CET Singapore',
  description:
    'Contact CET Singapore for customer support, product guidance and RMA requests.',
};

const base = 'https://global.cet-electric.com/sg';
const locations = [
  {
    name: 'Shenzhen Headquarter',
    lines: [
      'Floor 33–35, Building #6',
      'Shenzhen International Innovation Valley',
      'Dashi First Road, Nanshan District',
      'Shenzhen, Guangdong, P.R. China 518055',
    ],
  },
  {
    name: 'Shenzhen Factory',
    lines: [
      'Building #4, Beishan Industrial Area',
      'Beishan Road, Yantian District',
      'Shenzhen, Guangdong, P.R. China 518081',
    ],
  },
  {
    name: 'Wuhan R&D Centre',
    lines: [
      'CET Building, Guanggu Centre',
      '#303 Guanggu Road, Donghu High-tech Zone',
      'Wuhan, P.R. China 430200',
    ],
  },
];

export default function ContactPage() {
  return (
    <div className="website modern contact-page">
      <ModernMotion />
      <ModernHeader contactPage />
      <main>
        <section className="catalogue-intro contact-page-hero">
          <div className="catalogue-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Contact</span>
          </div>
          <div className="catalogue-title-row">
            <div>
              <span className="eyebrow">CET / CUSTOMER SUPPORT</span>
              <h1>
                HOW CAN WE
                <br />
                <span>HELP?</span>
              </h1>
            </div>
            <div className="catalogue-intro-note">
              <Headphones size={42} />
              <p>
                Talk with CET Singapore about product selection, technical
                support or an existing installation.
              </p>
            </div>
          </div>
        </section>

        <section
          className="contact-channels section-pad"
          aria-labelledby="contact-direct"
        >
          <div className="section-heading">
            <div>
              <span className="eyebrow">01 / CONTACT DIRECTLY</span>
              <h2 id="contact-direct">
                THE RIGHT TEAM.
                <br />
                <em>WITHIN REACH.</em>
              </h2>
            </div>
            <p>
              Choose the channel that works for you. CET Singapore’s support
              team is available by email and phone.
            </p>
          </div>
          <div className="contact-channel-grid">
            <a
              className="product-card contact-channel"
              href="mailto:sg@cet-electric.com"
            >
              <span className="product-number">EMAIL / SINGAPORE</span>
              <Mail className="product-icon" size={38} />
              <h3>sg@cet-electric.com</h3>
              <span className="product-bottom">
                Send an email <ArrowUpRight size={20} />
              </span>
            </a>
            <a className="product-card contact-channel" href="tel:+6566697158">
              <span className="product-number">PHONE / SINGAPORE</span>
              <Phone className="product-icon" size={38} />
              <h3>+65 6669 7158</h3>
              <span className="product-bottom">
                Call CET Singapore <ArrowUpRight size={20} />
              </span>
            </a>
          </div>
        </section>

        <section
          className="resources section-pad contact-support"
          aria-labelledby="contact-form-title"
        >
          <div>
            <span className="eyebrow">02 / CONTACT FORM</span>
            <h2 id="contact-form-title">
              LEAVE YOUR
              <br />
              <em>MESSAGE.</em>
            </h2>
            <p>
              Share your contact details and tell the CET Singapore team how
              they can help.
            </p>
            <img
              className="modern-resource-photo"
              src="/assets/ai/modern-resources.jpg"
              alt="CET engineer reviewing electrical test equipment"
              loading="lazy"
            />
          </div>
          <ContactForm />
        </section>

        <section
          className="contact-locations section-pad"
          aria-labelledby="global-locations"
        >
          <div className="section-heading">
            <div>
              <span className="eyebrow">03 / CET LOCATIONS</span>
              <h2 id="global-locations">
                ENGINEERING
                <br />
                <em>ACROSS THE REGION.</em>
              </h2>
            </div>
            <p>
              CET’s headquarters, manufacturing and research facilities support
              customers and projects worldwide.
            </p>
          </div>
          <div className="contact-location-grid">
            {locations.map((location, index) => (
              <article
                className="product-card contact-location-card"
                key={location.name}
              >
                <div>
                  <span className="product-number">
                    {String(index + 1).padStart(2, '0')} / LOCATION
                  </span>
                  <MapPin size={27} />
                </div>
                <h3>{location.name}</h3>
                <address>
                  {location.lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
              </article>
            ))}
          </div>
        </section>

        <ModernCta
          eyebrow="04 / LEAVE YOUR MESSAGE"
          title={
            <>
              YOUR QUESTION.
              <br />
              OUR NEXT STEP.
            </>
          }
          description="Send your request through CET’s customer-support form and include the details the team needs to respond."
        />
      </main>
      <ModernFooter
        note="Independent redesign concept · Support information adapted from CET Singapore."
        sourceHref={base + '/CustomerSupport'}
      />
    </div>
  );
}
