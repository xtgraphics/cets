'use client';

import type {FormEvent} from 'react';
import {ArrowUpRight} from 'lucide-react';

export default function ContactForm(){
 function handleSubmit(event:FormEvent<HTMLFormElement>){
  event.preventDefault();
  const data=new FormData(event.currentTarget);
  const supportType=String(data.get('supportType')||'Customer support');
  const subject=`CET Singapore enquiry — ${supportType}`;
  const body=[
   `Name: ${data.get('name')||''}`,
   `Company: ${data.get('company')||''}`,
   `Email: ${data.get('email')||''}`,
   `Phone: ${data.get('phone')||''}`,
   `Country: ${data.get('country')||''}`,
   `Support type: ${supportType}`,
   '',
   String(data.get('message')||'')
  ].join('\n');
  window.location.href=`mailto:sg@cet-electric.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
 }

 return <form className="contact-form" onSubmit={handleSubmit}>
  <div className="contact-form-grid">
   <label><span>Name *</span><input name="name" autoComplete="name" required/></label>
   <label><span>Company *</span><input name="company" autoComplete="organization" required/></label>
   <label><span>Email *</span><input name="email" type="email" autoComplete="email" required/></label>
   <label><span>Phone *</span><input name="phone" type="tel" autoComplete="tel" required/></label>
   <label><span>Country *</span><input name="country" autoComplete="country-name" required/></label>
   <label><span>Support type *</span><select name="supportType" defaultValue="Customer support" required><option>Customer support</option><option>Product enquiry</option><option>Technical support</option><option>RMA request</option></select></label>
   <label className="contact-form-message"><span>How can we help? *</span><textarea name="message" rows={6} required/></label>
  </div>
  <div className="contact-form-submit"><p>Submitting opens your email app with these details addressed to CET Singapore.</p><button className="primary" type="submit">Prepare message <ArrowUpRight size={20}/></button></div>
 </form>
}
