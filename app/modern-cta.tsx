import type { ReactNode } from 'react';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';

type ModernCtaProps = {
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
};

export default function ModernCta({
  eyebrow = 'CONTACT',
  title = (
    <>
      YOUR NEXT CHALLENGE.
      <br />
      LET’S SOLVE IT TOGETHER.
    </>
  ),
  description = 'Talk with CET about your power monitoring, connected infrastructure or energy management needs.',
}: ModernCtaProps) {
  return (
    <section className="closing modern-contact shared-page-cta">
      <img
        className="modern-contact-photo"
        src="/assets/ai/modern-contact.jpg"
        alt="Contemporary Singapore commercial building interior"
        loading="lazy"
      />
      <div className="modern-contact-overlay" />
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="/contact" className="primary home-contact-cta">
          Book your consultation <ArrowUpRight size={20} />
        </a>
      </div>
      <div className="modern-contact-details home-contact-card">
        <div className="home-contact-card-heading">
          <span>CET SINGAPORE</span>
          <Phone size={22} aria-hidden="true" />
        </div>
        <a className="home-contact-phone" href="tel:+6566697158">
          <span>+65 6669 7158</span>
          <ArrowUpRight size={20} aria-hidden="true" />
        </a>
        <p>
          Product selection · System solutions
          <br />
          Technical and project support
        </p>
        <div className="home-contact-card-links">
          <a href="mailto:sg@cet-electric.com">
            <Mail size={18} aria-hidden="true" />
            Email our team
          </a>
          <a href="/contact">
            Customer support <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
