import type { Metadata } from 'next';
import ResourcesCatalogue from './resources-catalogue';

export const metadata: Metadata = {
  title: 'Engineering resources | CET Singapore',
  description:
    'Download CET catalogues, selection guides, product brochures and software information for power monitoring projects.',
};

export default function ResourcesPage() {
  return <ResourcesCatalogue />;
}
