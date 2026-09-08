import type {Metadata} from 'next';
import Catalogue from './product-catalogue';
export const metadata:Metadata={title:'Device catalogue | CET Singapore',description:'Explore CET power quality meters, panel meters, DIN meters, multi-circuit monitors, gateways and measurement devices.'};
export default function ProductsPage(){return <Catalogue/>}
