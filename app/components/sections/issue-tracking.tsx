'use client';

import React from 'react';
import { Features } from '../features';
import { 
  ScanSearch, 
  ShieldAlert, 
  Zap, 
  Workflow, 
  Microscope, 
  LineChart 
} from 'lucide-react';

export const IssueTracking = () => {
  return (
    <Features color='16, 185, 129' secondaryColor='5, 150, 105'>
      <Features.Main
        title={
          <>
            Neural Orchestration.
            <br />
            Zero Downtime.
          </>
        }
        image='/image/issues.webp'
        imageSize='large'
        text='MillSync utilizes Deep Learning to synchronize the IISc-patented reactor with real-time sugar mill operations, ensuring 99.97% hydrogen purity.'
        maxWidth='80rem' // Fixed TypeScript error by adding required maxWidth
      />
      <Features.Grid
        features={[
          {
            icon: ShieldAlert,
            title: 'Predictive Safety:',
            text: 'PINN-based monitoring of 800°C - 1000°C thermal gradients to prevent reactor instability.',
          },
          {
            icon: LineChart,
            title: 'Yield Oracle:',
            text: 'TFT models predicting H₂ output based on bagasse moisture and steam pressure.',
          },
          {
            icon: ScanSearch,
            title: 'Anomaly Detection:',
            text: 'VAE-driven identification of sensor drift and catalyst degradation.',
          },
          {
            icon: Workflow,
            title: 'Waste-Heat Sync:',
            text: 'Automated orchestration of 450°C+ mill steam for maximized energy efficiency.',
          },
          {
            icon: Microscope,
            title: 'Purity Assurance:',
            text: 'Real-time syngas analysis ensuring compliance with ISO 14687 standards.',
          },
          {
            icon: Zap,
            title: 'Dynamic Scaling:',
            text: 'AI-driven load balancing between H₂ production and Bio-Char sequestration.',
          },
        ]}
      />
    </Features>
  );
};