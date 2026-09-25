'use client';
import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowRight, Activity } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import ModernHeader from '../modern-header';
import ModernFooter from '../modern-footer';
import ModernCta from '../modern-cta';
import catalogue from './catalogue.json';
import { productHref } from './product-data';
const base = 'https://global.cet-electric.com/sg';
const categoryIds = new Set(catalogue.map((category) => String(category.id)));

export default function Catalogue() {
  const [selected, setSelected] = useState('141');

  useEffect(() => {
    const syncCategoryFromUrl = () => {
      const category = new URLSearchParams(window.location.search).get(
        'category',
      );
      if (category && categoryIds.has(category)) setSelected(category);
    };

    syncCategoryFromUrl();
    window.addEventListener('popstate', syncCategoryFromUrl);
    return () => window.removeEventListener('popstate', syncCategoryFromUrl);
  }, []);

  const selectCategory = (category: string) => {
    setSelected(category);
    const url = new URL(window.location.href);
    url.searchParams.set('category', category);
    window.history.replaceState(null, '', url);
  };

  return (
    <div className="website modern catalogue-site">
      <ModernHeader productPage />
      <main>
        <section className="catalogue-intro">
          <div className="catalogue-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Products</span>
            <span>/</span>
            <span>Device</span>
          </div>
          <div className="catalogue-title-row">
            <div>
              <span className="eyebrow">CET / DEVICE CATALOGUE</span>
              <h1>
                PRECISION.
                <br />
                <span>CONNECTED.</span>
              </h1>
            </div>
            <div className="catalogue-intro-note">
              <Activity size={40} />
              <p>
                Explore CET measurement devices.
                <br />
                Find your meter group below.
              </p>
            </div>
          </div>
        </section>
        <Tabs
          value={selected}
          onValueChange={(value) => selectCategory(String(value))}
          className="catalogue-layout"
        >
          <aside className="catalogue-sidebar">
            <span className="eyebrow">BROWSE DEVICES</span>
            <h2>Meter group</h2>
            <TabsList className="catalogue-categories" aria-label="Meter group">
              {catalogue.map((c) => (
                <TabsTrigger key={c.id} value={String(c.id)}>
                  {c.name}
                  <ArrowUpRight size={16} />
                </TabsTrigger>
              ))}
            </TabsList>
            <a className="catalogue-system-link" href={base + '/System'}>
              Explore systems <ArrowUpRight size={18} />
            </a>
          </aside>
          <div className="catalogue-results">
            {catalogue.map((c) => (
              <TabsContent key={c.id} value={String(c.id)}>
                <div className="catalogue-results-heading">
                  <div>
                    <span className="eyebrow">SELECTED / METER GROUP</span>
                    <h2>{c.name}</h2>
                  </div>
                  <span>
                    {String(c.products.length).padStart(2, '0')} PRODUCTS
                  </span>
                </div>
                <div className="catalogue-grid">
                  {c.products.map((p, index) => (
                    <a
                      key={p.pid}
                      className="catalogue-product"
                      href={productHref(p.pid)}
                    >
                      <div className="catalogue-product-image">
                        <span className="catalogue-product-index">
                          {String(index + 1).padStart(2, '0')} / CET
                        </span>
                        <img
                          src={p.image}
                          alt={`CET ${p.title}`}
                          loading={c.id === 141 && index < 2 ? 'eager' : 'lazy'}
                        />
                        <span className="catalogue-product-arrow">
                          <ArrowUpRight size={25} />
                        </span>
                      </div>
                      <div className="catalogue-product-copy">
                        <span>{p.subtitle}</span>
                        <h3>{p.title}</h3>
                        {p.content && (
                          <p>{p.content.replace(/<[^>]*>/g, '')}</p>
                        )}
                        <div>
                          More information <ArrowRight size={19} />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
                {c.products.length === 0 && (
                  <p className="catalogue-empty">
                    No devices are currently listed in this meter group.{' '}
                    <a href={base + '/CustomerSupport'}>
                      Contact CET for assistance.
                    </a>
                  </p>
                )}
              </TabsContent>
            ))}
          </div>
        </Tabs>
        <ModernCta eyebrow="02 / CONTACT" />
      </main>
      <ModernFooter
        note="Independent redesign concept · Product content and photographs from CET."
        sourceHref={base + '/device/list141'}
      />
    </div>
  );
}
