import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Newspaper,
} from 'lucide-react';
import ModernFooter from '../../modern-footer';
import ModernCta from '../../modern-cta';
import ModernHeader from '../../modern-header';
import ModernMotion from '../../modern-motion';
import { getNewsStory, newsHref, sourceHref, stories } from '../news-data';

type NewsDetailProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return stories.map(({ id }) => ({ id }));
}

export async function generateMetadata({
  params,
}: NewsDetailProps): Promise<Metadata> {
  const { id } = await params;
  const story = getNewsStory(id);
  if (!story) return { title: 'News | CET Singapore' };
  return {
    title: `${story.title} | CET Singapore`,
    description: story.body,
  };
}

export default async function NewsDetailPage({ params }: NewsDetailProps) {
  const { id } = await params;
  const story = getNewsStory(id);
  if (!story) notFound();

  const related = stories.filter((item) => item.id !== story.id).slice(0, 3);

  return (
    <div className="website modern news-detail-page">
      <ModernMotion />
      <ModernHeader newsPage />
      <main>
        <section className="catalogue-intro news-detail-hero">
          <div className="catalogue-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/news">News &amp; Events</a>
            <span>/</span>
            <span>{story.title}</span>
          </div>
          <div className="news-detail-title-row">
            <div>
              <span className="eyebrow">CET / EVENT ANNOUNCEMENT</span>
              <h1>{story.title}</h1>
            </div>
            <div className="news-detail-intro">
              <Newspaper size={38} />
              <p>{story.body}</p>
            </div>
          </div>
          <figure className="news-detail-cover">
            <img
              src={`/assets/ai/${story.image}`}
              alt={`Editorial illustration accompanying ${story.title}; not a photograph of the event`}
              fetchPriority="high"
            />
            <figcaption>
              <span>EVENT ANNOUNCEMENT</span>
              <time dateTime={story.date}>{story.label}</time>
            </figcaption>
          </figure>
        </section>

        <article className="news-detail-article section-pad">
          <aside className="news-detail-facts" aria-label="Article information">
            <span>ARTICLE INFORMATION</span>
            <dl>
              <div>
                <dt>
                  <CalendarDays size={18} /> Published
                </dt>
                <dd>{story.label}</dd>
              </div>
              <div>
                <dt>
                  <MapPin size={18} /> Region
                </dt>
                <dd>{story.region}</dd>
              </div>
            </dl>
            <a className="text-link" href="/news">
              Back to newsroom <ArrowLeft size={18} />
            </a>
          </aside>
          <div className="news-detail-copy">
            <p className="news-detail-lead">{story.body}</p>
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="news-detail-source">
              <span>MORE INFORMATION</span>
              <p>
                Visit CET’s original announcement for the latest event details
                and enquiries.
              </p>
              <a className="text-link" href={sourceHref(story.id)}>
                Original announcement <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </article>

        <section
          className="news-detail-related section-pad"
          aria-labelledby="related-news"
        >
          <div className="section-heading">
            <div>
              <span className="eyebrow">01 / CONTINUE READING</span>
              <h2 id="related-news">
                MORE FROM THE
                <br />
                <em>NEWSROOM.</em>
              </h2>
            </div>
            <a className="text-link" href="/news">
              View all news <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="modern-news-grid news-detail-related-grid">
            {related.map((item) => (
              <article key={item.id}>
                <a href={newsHref(item.id)} className="modern-news-photo">
                  <img
                    src={`/assets/ai/${item.image}`}
                    alt={`Editorial illustration accompanying ${item.title}; not a photograph of the event`}
                    loading="lazy"
                  />
                </a>
                <time dateTime={item.date}>{item.label}</time>
                <span className="news-category">EVENT ANNOUNCEMENT</span>
                <h3>
                  <a href={newsHref(item.id)}>{item.title}</a>
                </h3>
                <p>{item.body}</p>
                <a href={newsHref(item.id)} className="text-link">
                  Read announcement <ArrowUpRight size={18} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <ModernCta
          eyebrow="02 / START A CONVERSATION"
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
        sourceHref={sourceHref(story.id)}
      />
    </div>
  );
}
