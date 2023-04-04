import React from 'react';

import TempSidebar from './TempSidebar';
import RainWaterTemplate from './RainWaterTemplate';
import { TypeResult } from '../utils/types';

export default function Template({ closePopupEditModule, result }
  : { closePopupEditModule: () => void, result: TypeResult | null }) {
  return (
    <div className="m-container">
      <div className="m-container__main">
        <RainWaterTemplate result={result} />
      </div>
      <div className="m-container__sidebar">
        <TempSidebar />
      </div>
    </div>
  );
}
