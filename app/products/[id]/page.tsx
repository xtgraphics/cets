import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Download,
  FileText,
} from 'lucide-react';
import ModernFooter from '../../modern-footer';
import ModernCta from '../../modern-cta';
import ModernHeader from '../../modern-header';
import ModernMotion from '../../modern-motion';
import {
  getProduct,
  getRelatedProducts,
  productHref,
  products,
} from '../product-data';
import ProductGallery from './product-gallery';

type ProductDetailProps = {
  params: Promise<{ id: string }>;
};

const sourceBase = 'https://global.cet-electric.com/sg';

const imeter8 = {
  kicker: 'ADVANCED PQ ANALYZER',
  summary:
    'Class A power-quality analysis, precision energy measurement and deep event recording in one high-resolution platform.',
  overview: [
    'iMeter 8 is CET’s advanced power-quality analyzer for compliance monitoring. It combines Class 0.2S accuracy and advanced PQ functions in a DIN 192 enclosure with a high-resolution colour dot-matrix display.',
    'With 8 GB of onboard memory, extensive I/O, multiple time-synchronisation methods, dual Ethernet and dual RS-485 ports, the iMeter 8 gives power-quality teams the detail needed for intelligent monitoring and investigation.',
  ],
  images: [
    {
      src: '/assets/catalogue/1449-gallery/front.png',
      alt: 'Front view of the CET iMeter 8 power quality analyzer',
    },
    {
      src: '/assets/catalogue/1449-gallery/side.png',
      alt: 'Angled side view of the CET iMeter 8',
    },
    {
      src: '/assets/catalogue/1449-gallery/rear.png',
      alt: 'Rear connection view of the CET iMeter 8',
    },
    {
      src: '/assets/catalogue/1449-gallery/display.png',
      alt: 'CET iMeter 8 display and controls',
    },
    {
      src: '/assets/catalogue/1449-gallery/detail.png',
      alt: 'Detailed view of the CET iMeter 8 enclosure',
    },
    {
      src: '/assets/catalogue/1449-gallery/installed.png',
      alt: 'Installation view of the CET iMeter 8',
    },
  ],
  features: [
    'IEC 62053-22 Class 0.2S and IEC 61000-4-30 Edition 3.1 Class A certified',
    'DIN 192 format with 186 × 186 mm panel cutout',
    'High-resolution colour TFT LCD display',
    'Harmonics, demands, TOU, PQ, energy, waveform and event logging',
    '8 GB onboard memory for long-term recording',
    '2–150 kHz conducted-emission monitoring with GPS and IRIG-B support',
    'Modbus RTU/TCP, HTTPS, SNTP, SMTP, FTP, IEEE 1588 and IEC 61850',
    'Dual Ethernet, dual RS-485 and extensive digital and analogue I/O',
  ],
  documents: [
    {
      type: 'USER MANUAL',
      title: 'iMeter 8 English User Manual',
      edition: 'V1.0A · 2020-06-08',
      href: 'https://global.cet-electric.com/uploadfiles/2021/08/iMeter%208%20English%20User%20Manual%20V1.0A%20%2820200608%29.pdf',
    },
    {
      type: 'DATASHEET',
      title: 'iMeter 8 English Datasheet',
      edition: '2023-05-22',
      href: 'https://global.cet-electric.com/uploadfiles/2023/07/iMeter%208%C2%A0English%C2%A0Datasheet%C2%A0%2820230522%29.pdf',
    },
    {
      type: 'CATALOGUE',
      title: 'iMeter 8 Product Catalogue',
      edition: '2023 · 0529S',
      href: 'https://global.cet-electric.com/uploadfiles/2023/05/iMeter%208%20Catalogue%2820230529S%29.pdf',
    },
  ],
};

export function generateStaticParams() {
  return products.map(({ pid }) => ({ id: String(pid) }));
}

export async function generateMetadata({
  params,
}: ProductDetailProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return { title: 'Products | CET Singapore' };
  return {
    title: `${product.title} | CET Singapore`,
    description:
      product.pid === 1449
        ? imeter8.summary
        : `Explore the CET ${product.title} ${product.subtitle.toLowerCase()}.`,
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailProps) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  const featured = product.pid === 1449;
  const related = getRelatedProducts(product);
  const overview = featured
    ? imeter8.overview
    : [
        product.content ||
          `${product.title} is part of CET’s ${product.categoryName.toLowerCase()} portfolio for reliable measurement, monitoring and system integration.`,
        'For application guidance, detailed specifications and the latest product documentation, consult CET Singapore or the original product record.',
      ];
  const images = featured
    ? imeter8.images
    : [{ src: product.image, alt: `CET ${product.title}` }];

  return (
    <div className="website modern product-detail-page">
      <ModernMotion />
      <ModernHeader productPage />
      <main>
        <section className="product-detail-hero">
          <div className="catalogue-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/products">Products</a>
            <span>/</span>
            <span>{product.categoryName}</span>
          </div>
          <div className="product-detail-hero-grid">
            <div className="product-detail-heading">
              <a href="/products" className="product-detail-back">
                <ArrowLeft size={17} /> Back to catalogue
              </a>
              <span className="eyebrow">
                CET / {featured ? imeter8.kicker : product.subtitle}
              </span>
              <h1>{product.title}</h1>
              <p>
                {featured
                  ? imeter8.summary
                  : `Precision ${product.categoryName.toLowerCase()} technology for connected electrical systems.`}
              </p>
              <div className="product-detail-hero-actions">
                <a href="#documents" className="primary">
                  Download documents <Download size={20} />
                </a>
                <a href="/contact" className="text-link">
                  Talk to our team <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
            <ProductGallery images={images} productName={product.title} />
          </div>
        </section>

        <section className="product-detail-overview section-pad">
          <div>
            <span className="eyebrow">01 / PRODUCT OVERVIEW</span>
            <h2>
              BUILT FOR CLARITY.
              <br />
              <em>ENGINEERED FOR CONTROL.</em>
            </h2>
          </div>
          <div className="product-detail-overview-copy">
            {overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <a
              className="text-link"
              href={`${sourceBase}/Device/info.aspx?itemid=${product.pid}`}
              target="_blank"
              rel="noreferrer"
            >
              Original CET product record <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        {featured && (
          <section className="product-detail-features section-pad">
            <div className="section-heading">
              <div>
                <span className="eyebrow">02 / FEATURES</span>
                <h2>
                  DEEPER VISIBILITY.
                  <br />
                  <em>FASTER DECISIONS.</em>
                </h2>
              </div>
              <p>
                Measurement, logging and communications designed for demanding
                power-quality applications.
              </p>
            </div>
            <div className="product-feature-grid">
              {imeter8.features.map((feature, index) => (
                <article key={feature}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <Check size={21} />
                  <p>{feature}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        <section
          id="documents"
          className="product-detail-documents section-pad"
        >
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                {featured ? '03' : '02'} / DOWNLOADS
              </span>
              <h2>
                PRODUCT
                <br />
                <em>DOCUMENTATION.</em>
              </h2>
            </div>
            <p>
              Technical files to support selection, installation and day-to-day
              use.
            </p>
          </div>
          {featured ? (
            <div className="product-document-grid">
              {imeter8.documents.map((document, index) => (
                <a
                  href={document.href}
                  target="_blank"
                  rel="noreferrer"
                  key={document.title}
                >
                  <div>
                    <span>{String(index + 1).padStart(2, '0')} / PDF</span>
                    <FileText size={27} />
                  </div>
                  <span>{document.type}</span>
                  <h3>{document.title}</h3>
                  <p>{document.edition}</p>
                  <strong>
                    Download PDF <Download size={18} />
                  </strong>
                </a>
              ))}
            </div>
          ) : (
            <div className="product-document-empty">
              <FileText size={34} />
              <div>
                <h3>Find {product.title} documents</h3>
                <p>
                  Browse CET’s internal resource library or ask the Singapore
                  team for the latest manual, datasheet and catalogue.
                </p>
              </div>
              <a className="primary" href="/resources">
                Browse resources <ArrowRight size={19} />
              </a>
            </div>
          )}
        </section>

        {related.length > 0 && (
          <section className="product-detail-related section-pad">
            <div className="section-heading">
              <div>
                <span className="eyebrow">CONTINUE EXPLORING</span>
                <h2>
                  RELATED
                  <br />
                  <em>PRODUCTS.</em>
                </h2>
              </div>
              <a href="/products" className="text-link">
                View catalogue <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="catalogue-grid product-detail-related-grid">
              {related.map((item) => (
                <a
                  href={productHref(item.pid)}
                  className="catalogue-product"
                  key={item.pid}
                >
                  <div className="catalogue-product-image">
                    <img
                      src={item.image}
                      alt={`CET ${item.title}`}
                      loading="lazy"
                    />
                    <span className="catalogue-product-arrow">
                      <ArrowUpRight size={24} />
                    </span>
                  </div>
                  <div className="catalogue-product-copy">
                    <span>{item.subtitle}</span>
                    <h3>{item.title}</h3>
                    <div>
                      View product <ArrowRight size={18} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
        <ModernCta eyebrow="04 / CONTACT" />
      </main>
      <ModernFooter
        note="Independent redesign concept · Product content and photographs from CET."
        sourceHref={`${sourceBase}/Device/info.aspx?itemid=${product.pid}`}
      />
    </div>
  );
}
