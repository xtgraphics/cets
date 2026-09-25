import type { Metadata } from 'next';
import { ArrowUpRight, Newspaper } from 'lucide-react';
import ModernFooter from '../modern-footer';
import ModernCta from '../modern-cta';
import ModernHeader from '../modern-header';
import ModernMotion from '../modern-motion';
import { newsHref, stories } from './news-data';

export const metadata: Metadata = {
  title: 'News & Events | CET Singapore',
  description:
    'Read the latest event announcements and company updates from CET Singapore.',
};

const base = 'https://global.cet-electric.com/sg';

export default function NewsPage() {
  const [featured, ...archive] = stories;
  return (
    <div className="website modern news-page">
      <ModernMotion />
      <ModernHeader newsPage />
      <main>
        <section className="catalogue-intro news-page-hero">
          <div className="catalogue-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>News & Events</span>
          </div>
          <div className="catalogue-title-row">
            <div>
              <span className="eyebrow">CET / NEWSROOM</span>
              <h1>
                IDEAS IN MOTION.
                <br />
                <span>CET IN THE WORLD.</span>
              </h1>
            </div>
            <div className="catalogue-intro-note">
              <Newspaper size={40} />
              <p>
                Company updates, event announcements and perspectives from CET’s
                work in energy intelligence.
              </p>
            </div>
          </div>
        </section>

        <article
          className="news-featured section-pad"
          aria-labelledby="featured-story"
        >
          <a href={newsHref(featured.id)} className="news-featured-image">
            <img
              src={`/assets/ai/${featured.image}`}
              alt={`Editorial illustration accompanying ${featured.title}; not a photograph of the event`}
              fetchPriority="high"
            />
          </a>
          <div className="news-featured-copy">
            <div className="news-featured-meta">
              <span>FEATURED</span>
              <time dateTime={featured.date}>{featured.label}</time>
            </div>
            <h2 id="featured-story">
              <a href={newsHref(featured.id)}>{featured.title}</a>
            </h2>
            <p>{featured.body}</p>
            <a href={newsHref(featured.id)} className="primary">
              Read announcement <ArrowUpRight size={20} />
            </a>
          </div>
        </article>

        <section
          className="news-index section-pad"
          aria-labelledby="latest-news"
        >
          <div className="section-heading">
            <div>
              <span className="eyebrow">01 / LATEST UPDATES</span>
              <h2 id="latest-news">
                FROM THE
                <br />
                <em>NEWSROOM.</em>
              </h2>
            </div>
            <p>
              Follow CET at industry events and discover where our teams are
              sharing the next generation of energy-management technology.
            </p>
          </div>
          <div className="modern-news-grid news-page-grid">
            {archive.map((story) => (
              <article key={story.id}>
                <a href={newsHref(story.id)} className="modern-news-photo">
                  <img
                    src={`/assets/ai/${story.image}`}
                    alt={`Editorial illustration accompanying ${story.title}; not a photograph of the event`}
                    loading="lazy"
                  />
                </a>
                <time dateTime={story.date}>{story.label}</time>
                <span className="news-category">EVENT ANNOUNCEMENT</span>
                <h3>
                  <a href={newsHref(story.id)}>{story.title}</a>
                </h3>
                <p>{story.body}</p>
                <a href={newsHref(story.id)} className="text-link">
                  Read announcement <ArrowUpRight size={18} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <ModernCta
          eyebrow="02 / STAY CONNECTED"
          title={
            <>
              LET’S TALK
              <br />
              ENERGY INTELLIGENCE.
            </>
          }
          description="Connect with CET Singapore for product guidance, system solutions and technical support."
        />
      </main>
      <ModernFooter
        note="Independent redesign concept · News information adapted from CET."
        sourceHref={base + '/News'}
      />
    </div>
  );
}
