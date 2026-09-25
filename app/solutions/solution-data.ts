export type Solution = {
  id: string;
  image: string;
  diagram: string;
  title: string;
  kicker: string;
  headline: string;
  summary: string;
  overview: string[];
  capabilities: string[];
  applications: string[];
};

export const solutions: Solution[] = [
  {
    id: '174',
    image: '/assets/solutions/dcim-v2.jpg',
    diagram: '/assets/solutions/dcim.png',
    title: 'Data Center Infrastructure Management System',
    kicker: 'CONNECTED OPERATIONS',
    headline: 'ONE VIEW OF CRITICAL INFRASTRUCTURE.',
    summary:
      'Bring power, environment and facility information into one operational view for clearer capacity planning and faster response.',
    overview: [
      'CET’s data center infrastructure management approach connects electrical monitoring with the wider facility picture. Teams can review performance across rooms, rows and critical equipment without losing the detail behind each measurement.',
      'A shared information layer helps operations, engineering and management teams work from consistent data when they assess capacity, investigate events and plan the next change.',
    ],
    capabilities: [
      'Unified infrastructure dashboards',
      'Power and environmental visibility',
      'Capacity and utilization tracking',
      'Alarm and event coordination',
      'Energy performance analysis',
      'Operational reporting',
    ],
    applications: [
      'Internet data centers',
      'Colocation facilities',
      'Financial data centers',
      'Enterprise campuses',
    ],
  },
  {
    id: '173',
    image: '/assets/solutions/bms-v2.jpg',
    diagram: '/assets/solutions/bms.png',
    title: 'Building Management System',
    kicker: 'SMARTER FACILITIES',
    headline: 'CONNECT EVERY BUILDING SYSTEM.',
    summary:
      'Coordinate electrical, mechanical and environmental systems through a connected building-management experience.',
    overview: [
      'The building management solution gives facility teams a clearer view of the systems that shape comfort, resilience and energy use. It connects field information to an interface designed for day-to-day supervision.',
      'Open integration supports a coordinated operating model across meters, controllers and building services while helping teams identify unusual conditions earlier.',
    ],
    capabilities: [
      'Centralized equipment supervision',
      'Environmental condition monitoring',
      'Schedules and operating strategies',
      'Alarm routing and acknowledgement',
      'Trend visualization',
      'Cross-system integration',
    ],
    applications: [
      'Commercial buildings',
      'Data centers',
      'Healthcare facilities',
      'Education campuses',
    ],
  },
  {
    id: '178',
    image: '/assets/solutions/epms-v2.jpg',
    diagram: '/assets/solutions/epms.png',
    title: 'Electric Power Management System',
    kicker: 'POWER INTELLIGENCE',
    headline: 'SEE HOW POWER MOVES.',
    summary:
      'Turn distributed electrical measurements into a clear, real-time view of system health, demand and performance.',
    overview: [
      'CET’s electric power management system organizes data from connected meters and protection devices into a practical operating view. Teams can move from a site-level picture to the equipment behind an event.',
      'Historical trends, demand information and event context support faster investigation and more informed operating decisions across critical electrical networks.',
    ],
    capabilities: [
      'Real-time single-line views',
      'Demand and load monitoring',
      'Electrical event analysis',
      'Energy allocation and reporting',
      'Device health visibility',
      'Multi-site performance comparison',
    ],
    applications: [
      'Critical power systems',
      'Industrial facilities',
      'Commercial portfolios',
      'Utility distribution',
    ],
  },
  {
    id: '177',
    image: '/assets/solutions/chiller-v2.jpg',
    diagram: '/assets/solutions/chiller.png',
    title: 'Central Chiller Control System',
    kicker: 'COOLING PERFORMANCE',
    headline: 'CONTROL COOLING AS ONE SYSTEM.',
    summary:
      'Coordinate chillers, pumps and cooling-tower equipment around real operating demand and system efficiency.',
    overview: [
      'The central chiller control solution treats the cooling plant as a connected system. It gives operators one place to understand equipment status, load conditions and the relationships between major components.',
      'Control strategies can respond to changing demand while operational data helps engineering teams review performance and tune the plant over time.',
    ],
    capabilities: [
      'Plant-wide operating overview',
      'Load-responsive sequencing',
      'Pump and tower coordination',
      'Efficiency trend analysis',
      'Equipment status and alarms',
      'Performance reporting',
    ],
    applications: [
      'Data center cooling plants',
      'District cooling',
      'Large commercial buildings',
      'Industrial campuses',
    ],
  },
  {
    id: '179',
    image: '/assets/solutions/power-quality-v2.jpg',
    diagram: '/assets/solutions/power-quality.png',
    title: 'Power Quality Management System',
    kicker: 'ELECTRICAL RESILIENCE',
    headline: 'FIND THE SOURCE OF EVERY EVENT.',
    summary:
      'Capture, correlate and investigate power-quality conditions across the electrical network with the context teams need.',
    overview: [
      'CET’s power quality management solution brings measurements, waveforms and events together across connected monitoring points. It helps teams understand where a disturbance began and how it moved through the network.',
      'Clear event context supports root-cause investigation, compliance review and proactive work on the electrical conditions that can affect sensitive operations.',
    ],
    capabilities: [
      'Power-quality event capture',
      'Waveform and harmonic analysis',
      'Event sequence correlation',
      'Compliance-oriented reporting',
      'Disturbance source investigation',
      'Long-term condition trending',
    ],
    applications: [
      'Semiconductor facilities',
      'Data centers',
      'Healthcare environments',
      'Advanced manufacturing',
    ],
  },
  {
    id: '172',
    image: '/assets/solutions/ai-energy-v2.jpg',
    diagram: '/assets/solutions/ai-energy.png',
    title: 'AI Energy Optimization System',
    kicker: 'ADAPTIVE EFFICIENCY',
    headline: 'TURN OPERATING DATA INTO ACTION.',
    summary:
      'Use connected energy and equipment data to reveal patterns, prioritize opportunities and support continuous optimization.',
    overview: [
      'The AI energy optimization solution adds an analytical layer to connected facility data. It helps teams find patterns that are difficult to see in isolated dashboards or periodic reports.',
      'By combining operational context with ongoing performance data, the system supports a repeatable process for identifying opportunities, verifying changes and sustaining improvements.',
    ],
    capabilities: [
      'Performance pattern detection',
      'Energy baseline comparison',
      'Optimization opportunity ranking',
      'Anomaly identification',
      'Savings verification workflows',
      'Portfolio-level insights',
    ],
    applications: [
      'Data center portfolios',
      'Smart buildings',
      'Industrial operations',
      'Multi-site enterprises',
    ],
  },
];

export function getSolution(id: string) {
  return solutions.find((solution) => solution.id === id);
}

export function solutionHref(id: string) {
  return `/solutions/${id}`;
}

export function getRelatedSolutions(id: string) {
  const currentIndex = solutions.findIndex((solution) => solution.id === id);
  if (currentIndex < 0) return [];
  return [1, 2, 3].map(
    (offset) => solutions[(currentIndex + offset) % solutions.length],
  );
}
