'use client';

import { Button, ButtonHighlight } from '../button';
import { Features } from '../features';
import { ChevronRight } from '../icons/chevronRight';
import { 
  Cpu, 
  Database, 
  Settings, 
  Network, 
  Globe, 
  Zap, 
  Server,
  Radio
} from 'lucide-react';

export const Workflows = () => {
  return (
    <div>
      <Features color='16, 185, 129' secondaryColor='5, 150, 105'>
        <Features.Main
          title={
            <>
              Universal Sync. <br />
              Exponential Efficiency.
            </>
          }
          text='From IoT sensor arrays to national carbon credit ledgers, MillSync integrates every layer of the green hydrogen supply chain.'
          maxWidth='65rem'
          buttonChildren={
            <>
              Explore Ecosystem
              <ButtonHighlight className='-mr-2 ml-2 bg-emerald-500/20'>
                <ChevronRight className='fill-emerald-400' />
              </ButtonHighlight>
            </>
          }
        />
        <Features.Grid
          features={[
            {
              title: 'Hardware IoT Mesh',
              text: 'Real-time telemetry from reactor thermal nodes and steam flow sensors.',
              icon: [Cpu, Radio],
            },
            {
              title: 'Mill Logistics Sync',
              text: 'Integrating with sugar mill supply chains for optimized bagasse feedstock timing.',
              icon: [Network, Settings],
            },
            {
              title: 'Yield Oracle AI',
              text: 'Neural engines processing localized weather and feedstock data for yield prediction.',
              icon: Server,
            },
            {
              title: 'MNRE SIGHT Portal',
              text: 'Seamless data bridge to government portals for subsidy realization.',
              icon: Globe,
            },
            {
              title: 'Carbon Credit Ledger',
              text: 'Syncing Bio-Char sequestration data to international carbon marketplaces.',
              icon: [Database, Zap],
            },
            {
              title: 'Hydrogen Grid Ops',
              text: 'Interfacing with regional FCEV fueling hubs for demand-side balancing.',
              icon: Zap,
            },
          ]}
        />
      </Features>
    </div>
  );
};