/* eslint-disable max-len */
/* eslint-disable no-useless-escape */
import React from 'react';
import { InlineMath } from 'react-katex';

import Button from '../../components/Button';
import { TypeResult } from './types';

export default function RainWaterTemplate({ closePopupEditModule, result }
  : { closePopupEditModule: () => void, result: TypeResult | null }) {
  const formQ = 'Q_r=\\dfrac{Z_{mid}\\cdot A^{1.2}\\cdot F}{t_{r}^{1.2n-0.1}}';
  const zMid = 'Z_{mid} -';
  const formResult = `Q_r=\\dfrac{${result?.zMid.toFixed(2)}\\cdot ${result?.flow.toFixed(2)}^{1.2}\\cdot ${result?.areaSumm.toFixed(2)}}{${result?.time.timeSumm.toFixed(2)}^{1.2\\cdot ${result?.n.toFixed(2)}-0.1}}`;
  const formA = 'A=q_{20}\\cdot 20^n\\cdot \\bigg( 1 + \\dfrac{lg\\medspace P}{lg\\medspace m_r}\\bigg)^{\\gamma}';
  const formAResult = `A=${result?.intensity.toFixed(2)}\\cdot 20^{${result?.n.toFixed(2)}} \\cdot \\bigg( 1 + \\dfrac{lg\\medspace ${result?.p.toFixed(2)}}{lg\\medspace ${result?.mr.toFixed(2)}}\\bigg)^{${result?.gamma.toFixed(2)}} = ${result?.a.toFixed(2)}`;

  return (
    <div className="m-container">
      <div className="m-container__main">
        <h2 className="title">Расчет расхода дождевых вод по методу предельных интенсивностей (Qr)</h2>
        <span className="document-link">
          Расчет расхода поверхностных сточных вод (Qr) методом предельных интенсивностей
          производится по формулам рекомендаций 2015 НИИ ВОДГЕО к СП 32.13330.2018, пункт «6.2.1».
        </span>
        <div className="calc__result">
          <span>Расчет по формуле:</span>
          <InlineMath>{formQ}</InlineMath>
          <span>
            где
            <InlineMath>\medspace A\medspace , \medspace n\medspace -\medspace</InlineMath>
            xпараметры, характеризующие расчетную интенсивность дождя для конкретной местности;
          </span>
          <span>
            <InlineMath>{zMid}</InlineMath>
            среднее значение коэффициента покрова, характеризующего поверхность бассейна стока;
          </span>
          <span>
            <InlineMath>F -\medspace</InlineMath>
            расчетная площадь стока, га;
          </span>
          <span>
            <InlineMath>t_r -\medspace</InlineMath>
            расчетная продолжительность протекания дождевых вод по поверхности и трубам до расчетного участка
          </span>

          <h5 className="result__title">Исходные данные</h5>
          <span>{`Суммарная площадь стоков: ${result?.areaSumm.toFixed(2)} Га`}</span>
          <span>из них:</span>
          <ul className="result__list">
            <li>
              {`Кровля зданий и сооружений, асфальтобетонные покрытия дорог: ${result?.area.roof.toFixed(2)} Га`}
            </li>
            <li>
              {`Брусчатые мостовые и черные щебеночные покрытия дорог: ${result?.area.pavements.toFixed(2)} Га`}
            </li>
            <li>{`Булыжные мостовые: ${result?.area.cobblestone.toFixed(2)} Га`}</li>
            <li>{`Щебеночные покрытия, не обработанные вяжущими: ${result?.area.stone.toFixed(2)} Га`}</li>
            <li>{`Гравийные садово-парковые дорожки: ${result?.area.tracks.toFixed(2)} Га`}</li>
            <li>{`Грунтовые поверхности (спланированные): ${result?.area.ground.toFixed(2)} Га`}</li>
            <li>{`Газоны: ${result?.area.ground.toFixed(2)} Га`}</li>
          </ul>
          <span>Поправочный коэффициент: 1</span>
          <span>{`Интенсивность дождя: ${result?.intensity} л/с`}</span>
          <span>{`Среднее количество дождей за год: ${result?.mr}`}</span>
          <span>{`Показатель степени "гамма": ${result?.gamma}`}</span>
          <span>{`Показатель степени n: ${result?.n}`}</span>
          <span>{`Период однократного превышения расчетной интенсивности дождя: ${result?.p}`}</span>
          <span>{`Время поверхностной концентрации стока: ${result?.time.timeInit} мин.`}</span>
          <span>Продолжительность протекания дождевых вод:</span>
          <span>по уличным лоткам:</span>
          <span>{`0.021 * ${result?.lengthTray} / ${result?.velocityTray} = ${result?.time.timeTray.toFixed(2)} мин.`}</span>
          <span>по трубам до рассчитываемого сечения:</span>
          <span>{`0.017 * ${result?.lengthPipe} / ${result?.velocityPipe} = ${result?.time.timePipe.toFixed(2)} мин.`}</span>
          <span>Среднее значение коэффициента стока:</span>
          <span>Для водонепроницаемых поверхностей:</span>
          <ul className="result__list">
            <li>при А = 300: 0.32</li>
            <li>при А = 400: 0.3</li>
            <li>при А = 500: 0.29</li>
            <li>при А = 600: 0.28</li>
            <li>при А = 700: 0.27</li>
            <li>при А = 800: 0.26</li>
            <li>при А = 1000: 0.25</li>
            <li>при А = 1200: 0.24</li>
            <li>при А = 1500: 0.23</li>
          </ul>
          <span>{`Брусчатые мостовые и черные щебеночные покрытия дорог: ${result?.area.pavements.toFixed(2)} га`}</span>
          <span>{`Булыжные мостовые: ${result?.area.cobblestone.toFixed(2)} га`}</span>
          <span>{`Щебеночные покрытия, не обработанные вяжущими: ${result?.area.stone.toFixed(2)} Га`}</span>
          <span>{`Гравийные садово-парковые дорожки: ${result?.area.tracks.toFixed(2)} Га`}</span>
          <span>{`Грунтовые поверхности (спланированные): ${result?.area.ground.toFixed(2)} Га`}</span>
          <span>{`Газоны: ${result?.area.ground.toFixed(2)} Га`}</span>

          <h5 className="result__title">Расчет</h5>
          <span>Параметр А считаем в два этапа:</span>
          <InlineMath>{formA}</InlineMath>
          <InlineMath>{formAResult}</InlineMath>
          <span>{`Среднее значение коэффициента стока для водонепроницаемых поверхностей: ${result?.zMid.toFixed(2)}`}</span>
          <span>Среднее значение коэффициента, характеризующего поверхность бассейна стока (z)</span>
          <span>{`(${result?.area.roof.toFixed(2)} * ${result?.z.toFixed(2)} + ${result?.area.pavements.toFixed(2)} * 0.22 + ${result?.area.cobblestone.toFixed(2)} * 0.14 + ${result?.area.stone.toFixed(2)} * 0.13 + ${result?.area.tracks.toFixed(2)} * 0.09 + ${result?.area.ground.toFixed(2)} * 0.06 + ${result?.area.lawns.toFixed(2)} * 0.04) / ${result?.areaSumm.toFixed(2)} = ${result?.zMid.toFixed(2)}`}</span>
          <span>Расчетная продолжительность дождя:</span>
          <span>{`${result?.time.timeInit.toFixed(2)} + 0.021 * ${result?.time.timeTray.toFixed(2)} + 0.017 * ${result?.time.timeTray.toFixed(2)} = ${result?.time.timeSumm.toFixed(2)}`}</span>
          <span>Расходы дождевых вод:</span>
          <InlineMath>{formResult}</InlineMath>

          <h5 className="result__title">Результат</h5>
          <span>{`Расходы дождевых вод: ${result?.flow.toFixed(2)} л/с`}</span>
        </div>
      </div>
      <div className="m-container__sidebar">
        <Button isValid className="button_small" value="Print" />
        <Button isValid className="button_small" value="Share" />
      </div>
    </div>
  );
}
