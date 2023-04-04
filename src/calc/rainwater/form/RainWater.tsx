import React from 'react';

import Form from './Form';
import CalcSidebar from './CalcSidebar';

export default function RainWater({ closePopupEditModule, setResult }
  : { closePopupEditModule: () => void, setResult: any }) {
  return (
    <div className="m-container">
      <div className="m-container__main">
        <h2 className="title">Расчет расхода дождевых вод по методу предельных интенсивностей (Qr)</h2>
        <span className="document-link">
          Расчет расхода поверхностных сточных вод (Qr) методом предельных интенсивностей
          производится по формулам рекомендаций 2015 НИИ ВОДГЕО к СП 32.13330.2018, пункт «6.2.1».
        </span>
        <Form closePopupEditModule={closePopupEditModule} setResult={setResult} />
      </div>
      <div className="m-container__sidebar">
        <CalcSidebar />
      </div>
    </div>
  );
}
