'use client';
import { useState } from 'react';
import { ArrowUpRight, ArrowRight, Pause, Play } from 'lucide-react';
import { ImageStreamHero } from '@/components/ui/image-stream-hero';
const images=[
 {src:'/assets/stream/solar.jpg',alt:'Solar panels on a rooftop'},
 {src:'/assets/meters.png',alt:'CET power measurement devices'},
 {src:'/assets/stream/electrical.jpg',alt:'Electrical connections and cables'},
 {src:'/assets/software.png',alt:'CET energy management software'},
];
export default function ModernHero(){const [paused,setPaused]=useState(false);return <section aria-labelledby="modern-hero-heading" className="modern-stream-section"><ImageStreamHero images={images} speed={24} cards={12} axis={56} className={`modern-stream ${paused?'stream-paused':''}`}><div className="modern-stream-content"><div className="modern-stream-title"><div className="eyebrow"><span className="status-dot"/> ENGINEERED FOR A CONNECTED WORLD</div><h1 id="modern-hero-heading">Better energy.<br/><em>By design.</em></h1></div><div className="modern-product-feature"><img src="/assets/meters.png" alt="CET power quality meters and monitoring devices" fetchPriority="high"/><span>PRECISION ENGINEERED. PURPOSE BUILT.</span></div><div className="modern-stream-bottom"><p>From precision metering to intelligent systems.<br/>A clearer view of the energy that moves your world.</p><div className="modern-stream-actions"><a className="primary" href="#solutions">Explore solutions <ArrowUpRight size={19}/></a><a className="text-link" href="#products">Discover our products <ArrowRight size={18}/></a></div></div></div></ImageStreamHero><button className="stream-motion" aria-label={paused?'Play image animation':'Pause image animation'} aria-pressed={paused} onClick={()=>setPaused(!paused)}>{paused?<Play size={14}/>:<Pause size={14}/>}<span>{paused?'Play motion':'Pause motion'}</span></button></section>}
