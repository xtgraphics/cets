'use client';
import {useState} from 'react';
import {ArrowUpRight,Globe2,Menu,X} from 'lucide-react';
export default function ModernHeader({productPage=false,solutionPage=false,aboutPage=false}:{productPage?:boolean;solutionPage?:boolean;aboutPage?:boolean}){
 const [menu,setMenu]=useState(false);
 return <header className="site-nav"><a href="/" aria-label="CET homepage" className="brand"><img src="/assets/cets-logo.png" alt="CET"/><span>Energy intelligence</span></a><nav aria-label="Main navigation" className={menu?'is-open':''}>{['Solutions','Products','Resources','News','About'].map(n=><a key={n} href={n==='Products'?'/products':n==='Solutions'?'/solutions':n==='About'?'/about':`/${'#'+n.toLowerCase()}`} aria-current={(productPage&&n==='Products')||(solutionPage&&n==='Solutions')||(aboutPage&&n==='About')?'page':undefined} onClick={()=>setMenu(false)}>{n}</a>)}</nav><div className="nav-right"><span className="locale"><Globe2 size={16}/> EN</span><a href={aboutPage||productPage||solutionPage?'https://global.cet-electric.com/sg/CustomerSupport':'#contact'} className="contact">Contact <ArrowUpRight size={17}/></a><button className="mobile-menu" onClick={()=>setMenu(!menu)} aria-label={menu?'Close menu':'Open menu'} aria-expanded={menu}>{menu?<X/>:<Menu/>}</button></div></header>
}
