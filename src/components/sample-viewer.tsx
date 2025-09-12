'use client';

import React from 'react';
import type { SampleSlug } from '@/lib/types';

// Import new simplified components
import MCRCAdvancedV2 from '@/samples/mcrc-advanced-v2';
import SectorKE14Operations from '@/samples/sector-ke14-operations';
import RadarControllerWorkstation from '@/samples/radar-controller-workstation';
import DataAnalystWorkstation from '@/samples/data-analyst-workstation';

// Import other existing components
import FlightControllerWorkstation from '@/samples/rokaf-flight-controller-workstation';
import ROKAFMCRCAISystem from '@/samples/rokaf-mcrc-ai-system';
import ROKAFMCRCSystem from '@/samples/rokaf-mcrc-east-asia';
import CommCoordinatorWorkstation from '@/samples/comm-coordinator-workstation';

const components: Record<SampleSlug, React.ComponentType> = {
  'rokaf-data-analyst-workstation': DataAnalystWorkstation,
  'rokaf-flight-controller-workstation': FlightControllerWorkstation,
  'rokaf-mcrc-advanced-v2': MCRCAdvancedV2,
  'rokaf-mcrc-ai-system': ROKAFMCRCAISystem,
  'rokaf-mcrc-east-asia': ROKAFMCRCSystem,
  'rokaf-radar-controller-workstation': RadarControllerWorkstation,
  'rokaf-sector-ke14-operations': SectorKE14Operations,
  'comm-coordinator-workstation': CommCoordinatorWorkstation,
};

export function SampleViewer({ slug }: { slug: SampleSlug }) {
  const Component = components[slug];

  if (!Component) {
    return (
      <div className="min-h-screen bg-gray-900 text-red-300 font-mono flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Sample not found</h1>
          <p>Slug: {slug}</p>
          <p>Available slugs: {Object.keys(components).join(', ')}</p>
        </div>
      </div>
    );
  }

  return <Component />;
}
