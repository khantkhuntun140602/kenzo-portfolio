// src/data/projects.js
// Featured project case studies.

export const projects = [
  {
    id: 'hotel-bi-dashboard',
    title: 'Hotel Performance BI Dashboard',
    summary:
      'Business Intelligence dashboard for hotel performance monitoring including occupancy rate, ADR, booking trends, revenue analysis, age segmentation, and cancellation tracking.',
    tech: ['Power BI', 'SQL', 'Data Analytics'],
    features: ['Revenue Tracking', 'Occupancy Analysis', 'Guest Segmentation', 'KPI Monitoring'],
    metric: { value: 'ADR · RevPAR', label: 'core KPIs modeled' },
    accent: 'signal',
  },
  {
    id: 'agent-based-modeling',
    title: 'Agent-Based Modeling Project',
    summary:
      'Simulation model analyzing household energy consumption behavior using cognitive-behavioral frameworks and predictive analytics.',
    tech: ['Python', 'Data Analytics', 'Simulation Modeling'],
    features: ['Agent Simulation', 'Data Collection', 'Predictive Modeling', 'Visualization'],
    metric: { value: 'N agents', label: 'behavioral simulation' },
    accent: 'circuit',
  },
  {
    id: 'product-management-system',
    title: 'Product Management System',
    summary: 'CRUD application developed using .NET MVC and SQLite.',
    tech: ['C#', '.NET MVC', 'SQLite'],
    features: ['Create Products', 'Update Products', 'Delete Products', 'Pagination', 'Async Operations'],
    metric: { value: 'CRUD', label: 'full lifecycle' },
    accent: 'signal',
  },
]
