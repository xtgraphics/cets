import type { Metadata } from 'next';
import { ArrowUpRight, Activity } from 'lucide-react';
import ModernHeader from '../modern-header';
import ModernFooter from '../modern-footer';
import ModernCta from '../modern-cta';
import { solutionHref, solutions } from './solution-data';
export const metadata: Metadata = {
  title: 'Data Center Solutions | CET Singapore',
  description:
    'CET data center solutions: infrastructure, building and electric power management, central chiller control, power quality and AI energy optimization.',
};
const base = 'https://global.cet-electric.com/sg';
export default function SolutionsPage() {
  return (
    <div className="website modern solutions-site solutions-editorial">
      <ModernHeader solutionPage />
      <main>
        <section className="catalogue-intro">
          <div className="catalogue-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Solutions</span>
            <span>/</span>
            <span>Data Center</span>
          </div>
          <div className="catalogue-title-row">
            <div>
              <span className="eyebrow">CET / SOLUTIONS</span>
              <h1>
                DATA
                <br />
                <span>CENTER.</span>
              </h1>
            </div>
            <div className="catalogue-intro-note">
              <Activity size={40} />
              <p>
                Explore CET data center solutions.
                <br />
                Find your connected system below.
              </p>
            </div>
          </div>
        </section>
        <section className="solutions-sectors">
          <div>
            <span className="eyebrow">01 / DATA CENTER</span>
            <h2>Data center</h2>
            <ul>
              {[
                'Internet Data Center',
                'Financial Data Center',
                'Telecom Operators',
                'COLO Data Center',
              ].map((name, i) => (
                <li key={name}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <figure>
            <img
              src="/assets/solutions/data-center.png"
              alt="CET data center infrastructure illustration"
              loading="lazy"
            />
          </figure>
        </section>
        <section className="solutions-systems" id="solution-systems">
          <div className="solutions-systems-heading">
            <span className="eyebrow">02 / SYSTEMS</span>
            <h2>Solutions</h2>
            <span>06 / CONNECTED SYSTEMS</span>
          </div>
          <div className="solutions-systems-grid">
            {solutions.map((solution, i) => (
              <a
                key={solution.id}
                href={solutionHref(solution.id)}
                className="solution-system-card"
              >
                <div className="solution-system-image">
                  <img
                    src={solution.image}
                    alt={solution.title + ' — CET solution illustration'}
                    loading="lazy"
                  />
                </div>
                <div className="solution-system-copy">
                  <span className="solution-editorial-number">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3>{solution.title}</h3>
                  <div>
                    Explore solution <ArrowUpRight size={23} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
        <ModernCta eyebrow="03 / CONTACT" />
      </main>
      <ModernFooter
        note="Independent redesign concept · Solution content and imagery from CET."
        sourceHref={base + '/Datacenter'}
      />
    </div>
  );
}
