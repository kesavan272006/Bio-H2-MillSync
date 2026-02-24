'use client';

import { Features } from '../features';
import { 
  Milestone, 
  Map, 
  Factory, 
  BarChart4, 
  Network, 
  TrendingUp 
} from 'lucide-react';

export const Roadmaps = () => {
  return (
    <div>
      <Features color='16, 185, 129' secondaryColor='5, 150, 105'>
        <Features.Main
          text="From decentralized pilot hubs to a pan-India 'Green Hydrogen Corridor,' MillSync is engineered to scale across the 500+ sugar mills in the Indian sugarcane belt."
          title={
            <>
              National Scaling. <br /> Strategic Impact.
            </>
          }
          image='/image/roadmap.webp'
          imageSize='large'
          maxWidth='60rem'
        />
        <Features.Grid
          features={[
            {
              icon: Milestone,
              title: 'Phase 1: Pilot Sync.',
              text: 'Integrating with local mills to refine PINN-based thermal orchestration.',
            },
            {
              icon: Map,
              title: 'Hydrogen Corridors.',
              text: 'Mapping decentralized H₂ production to heavy-duty transport routes for FCEVs.',
            },
            {
              icon: Factory,
              title: 'Mill Retrofitting.',
              text: 'Turnkey integration of IISc-patented reactors into existing sugar mill infrastructure.',
            },
            {
              icon: BarChart4,
              title: 'SIGHT Aggregation.',
              text: 'Unified portal for managing MNRE subsidies and Carbon Credits at scale.',
            },
            {
              icon: Network,
              title: 'Digital Twin Mesh.',
              text: 'A networked swarm of AI-managed reactors ensuring regional energy stability.',
            },
            {
              icon: TrendingUp,
              title: 'Economic Sovereignty.',
              text: 'Leveraging indigenous agri-waste to reduce national energy import dependency.',
            },
          ]}
        />
        <Features.Card
          features={[
            {
              title: 'Regional Energy Hubs',
              text: 'Transforming rural sugar mills into the primary fueling backbone for India’s green logistics.',
              image: '/image/card-updates.webp',
              imageClass: 'md:top-[40%] top-[50%] left-[7%] max-w-[100%]',
            },
            {
              title: 'Net-Zero Benchmarking',
              text: 'Real-time monitoring of carbon sequestration across the entire national sugarcane belt.',
              image: '/image/card-roadmaps.webp',
              imageClass: 'md:top-[40%] top-[50%] left-[2%] max-w-[100%]',
            },
          ]}
        />
      </Features>
    </div>
  );
};