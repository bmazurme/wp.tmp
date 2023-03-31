import React from 'react';

export default function Nvk() {
  return (
    <ul className="nvk">
      <li className="section">
        <h3 className="section__title">Section 1-1</h3>
        <div className="section__container">

          <div className="section__table">
            <div className="table_liner">
              <span>M 1:500 по горизонтали</span>
              <span>M 1:100 по вертикали</span>
            </div>
            <div className="table__border">
              <div className="table_h1">
                Отметка низа или лотка трубы
              </div>
              <div className="table_h2">
                Проектная отметка земли
              </div>
              <div className="table_h3">
                Натурная отметка земли
              </div>
              <div className="table_pipe">
                Обозначение трубы и тип изоляции
              </div>
              <div className="table_ground">
                Основание
              </div>
              <div className="table_length-slope">
                Длина Уклон
              </div>
              <div className="table_length">
                Расстояние
              </div>
              <div className="table_number">
                Номер колодца, точки, угла поворота
              </div>
            </div>
          </div>
          <div className="section__space">1</div>
          <div className="section__main">
            <div className="section__image">
              2
            </div>
          </div>
        </div>

      </li>
    </ul>
  );
}
