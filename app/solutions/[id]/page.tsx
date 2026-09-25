import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircuitBoard,
} from 'lucide-react';
import ModernCta from '../../modern-cta';
import ModernFooter from '../../modern-footer';
import ModernHeader from '../../modern-header';
import ModernMotion from '../../modern-motion';
import {
  getRelatedSolutions,
  getSolution,
  solutionHref,
  solutions,
} from '../solution-data';

type SolutionDetailProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return solutions.map(({ id }) => ({ id }));
}

export async function generateMetadata({
  params,
}: SolutionDetailProps): Promise<Metadata> {
  const { id } = await params;
  const solution = getSolution(id);
  if (!solution) return { title: 'Solutions | CET Singapore' };
  return {
    title: `${solution.title} | CET Singapore`,
    description: solution.summary,
  };
}

export default async function SolutionDetailPage({
  params,
}: SolutionDetailProps) {
  const { id } = await params;
  const solution = getSolution(id);
  if (!solution) notFound();
  const related = getRelatedSolutions(id);

  return (
    <div className="website modern solution-detail-page">
      <ModernMotion />
      <ModernHeader solutionPage />
      <main>
        <section className="solution-detail-hero">
          <div className="catalogue-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/solutions">Solutions</a>
            <span>/</span>
            <span>{solution.title}</span>
          </div>
          <div className="solution-detail-hero-grid">
            <div className="solution-detail-heading">
              <a
                href="/solutions#solution-systems"
                className="product-detail-back"
              >
                <ArrowLeft size={17} /> Back to solutions
              </a>
              <span className="eyebrow">CET / {solution.kicker}</span>
              <h1>{solution.title}</h1>
              <p>{solution.summary}</p>
              <div className="product-detail-hero-actions">
                <a href="#capabilities" className="primary">
                  Explore capabilities <ArrowRight size={20} />
                </a>
                <a href="/contact" className="text-link">
                  Talk to our team <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
            <figure className="solution-detail-hero-image">
              <img src={solution.image} alt={`${solution.title} overview`} />
              <figcaption>
                <span>{solution.kicker}</span>
                <CircuitBoard size={20} aria-hidden="true" />
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="solution-detail-overview section-pad">
          <div>
            <span className="eyebrow">01 / SOLUTION OVERVIEW</span>
            <h2>{solution.headline}</h2>
          </div>
          <div className="solution-detail-overview-copy">
            {solution.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="solution-detail-platform section-pad">
          <figure>
            <img
              src={solution.diagram}
              alt={`${solution.title} system illustration`}
              loading="lazy"
            />
          </figure>
          <div>
            <span className="eyebrow">02 / CONNECTED PLATFORM</span>
            <h2>
              FROM FIELD DATA.
              <br />
              <em>TO OPERATIONAL CLARITY.</em>
            </h2>
            <p>
              Connect measurement, controls and operational context in a system
              designed to help teams see conditions, investigate changes and act
              with confidence.
            </p>
            <a href="/contact" className="text-link">
              Discuss your system <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        <section
          id="capabilities"
          className="solution-detail-capabilities section-pad"
        >
          <div className="section-heading">
            <div>
              <span className="eyebrow">03 / CAPABILITIES</span>
              <h2>
                BUILT AROUND
                <br />
                <em>HOW YOU OPERATE.</em>
              </h2>
            </div>
            <p>
              A practical set of connected capabilities for monitoring,
              investigation and continuous improvement.
            </p>
          </div>
          <div className="solution-capability-grid">
            {solution.capabilities.map((capability, index) => (
              <article key={capability}>
                <div>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <Check size={20} aria-hidden="true" />
                </div>
                <h3>{capability}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="solution-detail-applications section-pad">
          <div>
            <span className="eyebrow">04 / APPLICATIONS</span>
            <h2>
              DESIGNED FOR
              <br />
              <em>REAL ENVIRONMENTS.</em>
            </h2>
          </div>
          <ol>
            {solution.applications.map((application, index) => (
              <li key={application}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{application}</strong>
                <ArrowUpRight size={20} aria-hidden="true" />
              </li>
            ))}
          </ol>
        </section>

        <section className="solution-detail-related section-pad">
          <div className="section-heading">
            <div>
              <span className="eyebrow">CONTINUE EXPLORING</span>
              <h2>
                RELATED
                <br />
                <em>SOLUTIONS.</em>
              </h2>
            </div>
            <a href="/solutions#solution-systems" className="text-link">
              View all solutions <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="solution-related-grid">
            {related.map((item, index) => (
              <a
                href={solutionHref(item.id)}
                className="solution-related-card"
                key={item.id}
              >
                <div>
                  <img src={item.image} alt="" loading="lazy" />
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{item.title}</h3>
                <span>
                  Explore solution <ArrowUpRight size={18} />
                </span>
              </a>
            ))}
          </div>
        </section>

        <ModernCta eyebrow="05 / CONTACT" />
      </main>
      <ModernFooter />
    </div>
  );
}
