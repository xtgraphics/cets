export type NewsStory = {
  id: string;
  date: string;
  label: string;
  title: string;
  body: string;
  image: string;
  region: string;
  paragraphs: string[];
};

export const stories: NewsStory[] = [
  {
    id: '1860',
    date: '2025-09-30',
    label: '30 September 2025',
    title: 'Data Centre World Asia 2025',
    body: 'CET’s invitation to connect around power monitoring and energy management in Singapore.',
    image: 'modern-news-1860.jpg',
    region: 'Singapore',
    paragraphs: [
      'CET is joining Data Centre World Asia 2025 to share practical approaches to power monitoring, connected infrastructure and energy management for critical facilities.',
      'The event brings data-centre operators, engineers and technology partners together in Singapore. CET’s team will be available to discuss how precise measurement and connected systems can improve visibility across electrical infrastructure.',
      'Visitors can explore CET products and system solutions for dependable monitoring, clearer operational insight and better energy decisions across data-centre environments.',
    ],
  },
  {
    id: '1308',
    date: '2025-03-06',
    label: '6 March 2025',
    title: 'Hannover Messe 2025',
    body: 'Explore CET’s exhibition announcement for the international industrial technology event.',
    image: 'modern-news-1308.jpg',
    region: 'Hannover, Germany',
    paragraphs: [
      'CET welcomes customers and partners to Hannover Messe 2025, where the team will present its latest products and solutions for energy measurement, power quality and connected monitoring.',
      'The exhibition provides an opportunity to explore multifunction meters, power-quality monitors, wireless metering, motor protection and wireless temperature monitoring with CET specialists.',
      'Meet the international sales team to discuss project requirements, regional partnerships and practical ways to improve the visibility and performance of electrical systems.',
    ],
  },
  {
    id: '1273',
    date: '2024-10-11',
    label: '11 October 2024',
    title: 'Data Centre World Madrid 2024',
    body: 'A look back at CET’s participation in the data center industry gathering in Madrid.',
    image: 'modern-news-1273.jpg',
    region: 'Madrid, Spain',
    paragraphs: [
      'CET joined Data Centre World Madrid 2024 to present an integrated view of data-centre power and building infrastructure.',
      'The showcase brought together electric power management, building management, data-centre infrastructure management and chiller-plant operation alongside intelligent monitoring devices.',
      'The event created a focused setting for conversations about resilient operations, precise metering and the connected systems required by modern critical facilities.',
    ],
  },
  {
    id: '1272',
    date: '2024-08-19',
    label: '19 August 2024',
    title: 'Electric & Power Indonesia 2024',
    body: 'Meet CET in Jakarta for a showcase of power and energy management systems, cloud software and intelligent devices.',
    image: 'modern-building.jpg',
    region: 'Jakarta, Indonesia',
    paragraphs: [
      'CET participated in Electric & Power Indonesia 2024 with a portfolio designed for dependable power and energy management.',
      'The exhibition featured power and energy monitoring systems, EnerEcoSys Cloud and intelligent terminal products for commercial, industrial and utility applications.',
      'Visitors met the CET team to explore monitoring requirements, connected metering architectures and opportunities to improve energy visibility across their operations.',
    ],
  },
  {
    id: '1271',
    date: '2024-07-22',
    label: '22 July 2024',
    title: 'Vietnam ETE & Enertec Expo 2024',
    body: 'Discover CET’s connected metering, monitoring and energy-management technologies at Vietnam’s energy exhibition.',
    image: 'modern-energy.jpg',
    region: 'Vietnam',
    paragraphs: [
      'CET joined Vietnam ETE & Enertec Expo 2024 to share technologies for electrical measurement, energy saving and connected power management.',
      'The display combined power and energy monitoring systems with cloud software, power-quality meters, multifunction meters and LoRaWAN energy meters.',
      'The event gave customers and partners a direct view of how CET devices and software work together from the point of measurement to operational reporting.',
    ],
  },
  {
    id: '1270',
    date: '2024-07-22',
    label: '22 July 2024',
    title: 'Enlit Africa 2024',
    body: 'CET brings power monitoring, EnerEcoSys Cloud and intelligent terminal products to the energy community in Cape Town.',
    image: 'modern-data.jpg',
    region: 'Cape Town, South Africa',
    paragraphs: [
      'CET participated in Enlit Africa 2024 with connected solutions for power monitoring and energy management.',
      'The team presented EnerEcoSys Cloud alongside power-quality meters, multifunction meters, LoRaWAN energy meters and communications processors.',
      'The exhibition supported conversations with utilities, engineers and solution partners about reliable measurement and scalable energy intelligence across the region.',
    ],
  },
  {
    id: '1269',
    date: '2024-04-22',
    label: '22 April 2024',
    title: 'Singapore & China Industrial Cooperation',
    body: 'CET presents complete energy-management and power-quality monitoring solutions at Singapore Expo.',
    image: 'modern-quality.jpg',
    region: 'Singapore',
    paragraphs: [
      'CET exhibited at the International Industrial Cooperation event for Singapore and China, bringing energy-monitoring expertise to Singapore Expo.',
      'The team presented complete approaches to energy management and power-quality monitoring for commercial, industrial and utility environments.',
      'The event connected CET with exhibitors, visitors and potential partners looking for dependable monitoring products and integrated system solutions.',
    ],
  },
];

export const newsHref = (id: string) => `/news/${id}`;
export const sourceHref = (id: string) =>
  `https://global.cet-electric.com/sg/News/info.aspx?itemid=${id}`;

export function getNewsStory(id: string) {
  return stories.find((story) => story.id === id);
}
