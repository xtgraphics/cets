import {ArrowUpRight} from 'lucide-react';

const base='https://global.cet-electric.com/sg';

export default function ModernFooter({note='Independent redesign concept · Company information adapted from CET Singapore.'}:{note?:string}){
 return <footer className="catalogue-footer"><div className="footer-brand"><img src="/assets/cets-logo.png" alt="CET"/><p>Making electric energy safer,<br/>more reliable and more efficient.</p></div><div><strong>CET Singapore</strong><a href="tel:+6566697158">+65 6669 7158</a><a href={base+'/CustomerSupport'}>Contact <ArrowUpRight size={16}/></a></div><div><strong>Explore</strong><a href="/">Home</a><a href="/solutions">Solutions</a><a href="/products">Products</a><a href="/about">About</a><a href={base+'/News'}>News</a></div><div className="footer-bottom"><span>{note}</span><a href="https://www.cetsingapore.com/about/">Original CET Singapore page ↗</a></div></footer>
}
