'use client';

import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Globe2,
  Menu,
  X,
} from 'lucide-react';

const megaMenus = {
  Solutions: {
    href: '/solutions',
    eyebrow: 'Connected infrastructure',
    title: 'Make every electrical system visible.',
    description:
      'Explore integrated monitoring and management solutions for critical facilities, buildings and energy networks.',
    image: '/assets/ai/modern-data.jpg',
    imageAlt: 'Engineer reviewing a connected energy monitoring system',
    links: [
      ['Data center solutions', '/solutions#solution-systems'],
      ['Power quality management', '/solutions#solution-systems'],
      ['Energy management system', '/solutions#solution-systems'],
      ['AI energy optimization', '/solutions#solution-systems'],
    ],
  },
  Products: {
    href: '/products',
    eyebrow: 'Measurement & control',
    title: 'Precision devices for every application.',
    description:
      'Find meters, monitors and connected devices designed for dependable energy measurement and control.',
    image: '/assets/ai/modern-range.jpg',
    imageAlt: 'Range of CET energy monitoring devices',
    links: [
      ['Power quality meters', '/products'],
      ['Panel meters', '/products'],
      ['Multi-circuit monitors', '/products'],
      ['Gateways & processors', '/products'],
    ],
  },
} as const;

type MegaName = keyof typeof megaMenus;

export default function ModernHeader({
  productPage = false,
  solutionPage = false,
  aboutPage = false,
  newsPage = false,
  contactPage = false,
  resourcePage = false,
}: {
  productPage?: boolean;
  solutionPage?: boolean;
  aboutPage?: boolean;
  newsPage?: boolean;
  contactPage?: boolean;
  resourcePage?: boolean;
}) {
  const [menu, setMenu] = useState(false);
  const [openMega, setOpenMega] = useState<MegaName | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const openMegaMenu = (name: MegaName) => {
    clearCloseTimer();
    setOpenMega(name);
  };
  const closeMegaMenu = () => {
    clearCloseTimer();
    setOpenMega(null);
  };
  const scheduleMegaClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpenMega(null), 180);
  };
  const closeNavigation = () => {
    setMenu(false);
    closeMegaMenu();
  };
  useEffect(() => () => clearCloseTimer(), []);

  return (
    <header
      className="site-nav"
      onKeyDown={(event) => {
        if (event.key === 'Escape') closeNavigation();
      }}
    >
      <a href="/" aria-label="CET homepage" className="brand">
        <img src="/assets/cets-logo.png" alt="CET" />
        <span>Energy intelligence</span>
      </a>
      <nav aria-label="Main navigation" className={menu ? 'is-open' : ''}>
        {(Object.keys(megaMenus) as MegaName[]).map((name) => {
          const item = megaMenus[name];
          const isOpen = openMega === name;
          const current =
            (name === 'Products' && productPage) ||
            (name === 'Solutions' && solutionPage);
          return (
            <div
              className="nav-mega-item"
              data-open={isOpen || undefined}
              key={name}
              onMouseEnter={() => openMegaMenu(name)}
              onMouseLeave={scheduleMegaClose}
            >
              <div className="nav-mega-trigger">
                <a
                  href={item.href}
                  aria-current={current ? 'page' : undefined}
                  onClick={closeNavigation}
                >
                  {name}
                </a>
                <button
                  type="button"
                  aria-label={`${isOpen ? 'Close' : 'Open'} ${name} menu`}
                  aria-expanded={isOpen}
                  onClick={() =>
                    isOpen ? closeMegaMenu() : openMegaMenu(name)
                  }
                >
                  <ChevronDown size={15} />
                </button>
              </div>
              <div className="nav-mega-panel" aria-label={`${name} overview`}>
                <a
                  className="nav-mega-visual"
                  href={item.href}
                  onClick={closeNavigation}
                >
                  <img src={item.image} alt={item.imageAlt} />
                  <span>
                    Explore {name.toLowerCase()} <ArrowUpRight size={20} />
                  </span>
                </a>
                <div className="nav-mega-info">
                  <span className="eyebrow">{item.eyebrow}</span>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                  <div className="nav-mega-links">
                    {item.links.map(([label, href]) => (
                      <a href={href} key={label} onClick={closeNavigation}>
                        <span>{label}</span>
                        <ArrowRight size={17} />
                      </a>
                    ))}
                  </div>
                  <a
                    className="nav-mega-all"
                    href={item.href}
                    onClick={closeNavigation}
                  >
                    View all {name.toLowerCase()} <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
        <a
          href="/resources"
          aria-current={resourcePage ? 'page' : undefined}
          onClick={closeNavigation}
          onMouseEnter={closeMegaMenu}
        >
          Resources
        </a>
        <a
          href="/news"
          aria-current={newsPage ? 'page' : undefined}
          onClick={closeNavigation}
          onMouseEnter={closeMegaMenu}
        >
          News
        </a>
        <a
          href="/about"
          aria-current={aboutPage ? 'page' : undefined}
          onClick={closeNavigation}
          onMouseEnter={closeMegaMenu}
        >
          About
        </a>
      </nav>
      <div className="nav-right">
        <span className="locale">
          <Globe2 size={16} /> EN
        </span>
        <a
          href="/contact"
          className="contact"
          aria-current={contactPage ? 'page' : undefined}
        >
          Book your consultation <ArrowUpRight size={17} />
        </a>
        <button
          className="mobile-menu"
          onClick={() => {
            setMenu(!menu);
            closeMegaMenu();
          }}
          aria-label={menu ? 'Close menu' : 'Open menu'}
          aria-expanded={menu}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
