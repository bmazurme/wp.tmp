import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useErrorHandler } from 'react-error-boundary';

import Input from '../../components/Input';
import Button from '../../components/Button';
import SelectButton from '../../components/Select';

import getRainFlow from './calc';

const options = [
  { label: 'Побережья Белого и Баренцева морей', value: 1 },
  { label: 'Север Европейской части России и Западной Сибири', value: 2 },
  { label: 'Равнинные области запада и центра Европейской части России', value: 3 },
  { label: 'Возвышенности Европейской части России, западный склон Урала', value: 4 },
  { label: 'Низовье Волги и Дона', value: 5 },
  { label: 'Нижнее Поволжье', value: 6 },
  { label: 'Наветренные склоны возвышенностей Европейской части России и Северное Предкавказье', value: 7 },
  { label: 'Ставропольская возвышенность, северные предгорья Большого Кавказа, северный склон Большого Кавказа', value: 8 },
  { label: 'Южная часть Западной Сибири', value: 9 },
  { label: 'Алтай', value: 10 },
  { label: 'Северный склон Западных Саян', value: 11 },
  { label: 'Средняя Сибирь', value: 12 },
  { label: 'Хребет Хамар-Дабан', value: 13 },
  { label: 'Восточная Сибирь', value: 14 },
  { label: 'Бассейны рек Шилки и Аргуни, долина р.Среднего Амура', value: 15 },
  { label: 'Бассейны рек Охотского моря и Колымы, северная часть Нижнеамурской низменности', value: 16 },
  { label: 'Побережье Охотского моря, бассейны рек Берингова моря, центральная и западная части Камчатки', value: 17 },
  { label: 'Восточное побережье Камчатки южнее 56° с.ш.', value: 18 },
  { label: 'Побережье Татарского пролива', value: 19 },
  { label: 'Район о.Ханка', value: 20 },
  { label: 'Бассейны рек Японского моря, о.Сахалин, Курильские острова', value: 21 },
  { label: 'Дагестан', value: 22 },
];

const conditions = [
  { label: 'Благоприятные и средний', value: 1 },
  { label: 'Неблагоприятеные', value: 2 },
  { label: 'Особо неблагоприятные', value: 3 },
];

type FormPayload = {
  roof: number;
  pavements: number;
  tracks: number;
  ground: number;
  cobblestone: number;
  stone: number;
  lawns: number;
  place: number;
  intensity: number;
  conditions: number;
  k: number;
  n: number;
  q: number;
  p: number;
  gamma: number;
  t: number;
  length1: number;
  length2: number;
  velocity1: number;
  velocity2: number;
  flow: number;
};

const inputs = [
  {
    name: 'roof',
    label: 'Кровля зданий и сооружений, асфальтобетонные покрытия дорог',
    pattern: {
      value: /^[a-z0-9_-]{1,15}$/,
      message: 'Roof is invalid',
    },
    required: true,
    autoComplete: 'roof',
  },
  {
    name: 'pavements',
    label: 'Брусчатые мостовые и черные щебеночные покрытия дорог',
    pattern: {
      value: /^[a-z0-9_-]{1,15}$/,
      message: 'Pavements is invalid',
    },
    required: true,
    autoComplete: 'pavements',
  },
  {
    name: 'tracks',
    label: 'Гравийные садово-парковые дорожки',
    pattern: {
      value: /^[a-z0-9_-]{1,15}$/,
      message: 'Tracks is invalid',
    },
    required: true,
    autoComplete: 'tracks',
  },
  {
    name: 'ground',
    label: 'Грунтовые поверхности(спланированные)',
    pattern: {
      value: /^[a-z0-9_-]{1,15}$/,
      message: 'Ground is invalid',
    },
    required: true,
    autoComplete: 'ground',
  },
  {
    name: 'cobblestone',
    label: 'Булыжные мостовые',
    pattern: {
      value: /^[a-z0-9_-]{1,15}$/,
      message: 'Cobblestone is invalid',
    },
    required: true,
    autoComplete: 'cobblestone',
  },
  {
    name: 'stone',
    label: 'Щебеночные покрытия, не обработанные вяжущими',
    pattern: {
      value: /^[a-z0-9_-]{1,15}$/,
      message: 'Stone is invalid',
    },
    required: true,
    autoComplete: 'stone',
  },
  {
    name: 'lawns',
    label: 'Газоны',
    pattern: {
      value: /^[a-z0-9_-]{1,15}$/,
      message: 'Lawns is invalid',
    },
    required: true,
    autoComplete: 'lawns',
  },
  {
    name: 'intensity',
    label: 'Интенсивность дождя, л/с',
    pattern: {
      value: /^[a-z0-9_-]{1,15}$/,
      message: 'Intensity is invalid',
    },
    required: true,
    autoComplete: 'intensity',
  },
  {
    name: 'k',
    label: 'Поправочный коэффициент',
    pattern: {
      value: /^[a-z0-9_-]{1,15}$/,
      message: 'K is invalid',
    },
    required: true,
    autoComplete: 'k',
  },
  {
    name: 'n',
    label: 'Показатель степени n',
    pattern: {
      value: /^[a-z0-9_-]{1,15}$/,
      message: 'N is invalid',
    },
    required: true,
    autoComplete: 'n',
  },
  {
    name: 'q',
    label: 'Среднее кол-во дождя за год',
    pattern: {
      value: /^[a-z0-9_-]{1,15}$/,
      message: 'Q is invalid',
    },
    required: true,
    autoComplete: 'Q',
  },
  {
    name: 'p',
    label: 'Период однократного превышения расчетной интенсивности дождя',
    pattern: {
      value: /^[a-z0-9_-]{1,15}$/,
      message: 'P is invalid',
    },
    required: true,
    autoComplete: 'p',
  },
  {
    name: 'gamma',
    label: 'Показатель степени "гамма"',
    pattern: {
      value: /^[a-z0-9_-]{1,15}$/,
      message: 'Gamma is invalid',
    },
    required: true,
    autoComplete: 'gamma',
  },
  {
    name: 't',
    label: 'Время поверхностной концентрации стока, мин',
    pattern: {
      value: /^[a-z0-9_-]{1,15}$/,
      message: 'T is invalid',
    },
    required: true,
    autoComplete: 't',
  },
  {
    name: 'length1',
    label: 'Длина трубы',
    pattern: {
      value: /^[a-z0-9_-]{1,15}$/,
      message: 'Length is invalid',
    },
    required: true,
    autoComplete: 'length1',
  },
  {
    name: 'length2',
    label: 'Длина лотка',
    pattern: {
      value: /^[a-z0-9_-]{1,15}$/,
      message: 'Length is invalid',
    },
    required: true,
    autoComplete: 'length2',
  },
  {
    name: 'velocity1',
    label: 'Скорость',
    pattern: {
      value: /^[a-z0-9_-]{1,15}$/,
      message: 'Velocity is invalid',
    },
    required: true,
    autoComplete: 'velocity1',
  },
  {
    name: 'velocity2',
    label: 'Скорость',
    pattern: {
      value: /^[a-z0-9_-]{1,15}$/,
      message: 'Velocity is invalid',
    },
    required: true,
    autoComplete: 'velocity2',
  },
];

export default function Ws({ closePopupEditModule }
  : { closePopupEditModule: () => void }) {
  const errorHandler = useErrorHandler();
  const { control, handleSubmit } = useForm<FormPayload>({
    defaultValues: {
      roof: 1,
      flow: 2,
      pavements: 3,
      tracks: 4,
      ground: 5,
      cobblestone: 6,
      stone: 7,
      lawns: 8,
      place: 1,
      intensity: 10,
      conditions: 1,
      k: 12,
      n: 13,
      q: 14,
      p: 15,
      gamma: 16,
      t: 17,
      length1: 18,
      length2: 19,
      velocity1: 20,
      velocity2: 21,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      getRainFlow(data);
      console.log(data);

      closePopupEditModule();
    } catch ({ status, data: { reason } }) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });

  return (
    <div className="m-container">
      <div className="m-container__main">
        <h2 className="title">Расчет расхода дождевых вод по методу предельных интенсивностей (Qr)</h2>
        <span className="document-link">
          Расчет расхода поверхностных сточных вод (Qr) методом предельных интенсивностей
          производится по формулам рекомендаций 2015 НИИ ВОДГЕО к СП 32.13330.2018, пункт «6.2.1».
        </span>
        <form onSubmit={onSubmit} className="calc__form">
          <div className="inbox">
            <Controller
              name={'place' as keyof FormPayload}
              control={control}
              render={({ field }) => (
                <SelectButton
                  labelText="Географические условия расположения объекта"
                  classes={{ list: 'bottom-full' }}
                  options={options}
                  onChange={(e) => field.onChange(e)}
                  value={field.value}
                />
              )}
            />
          </div>
          <div className="inbox">
            <Controller
              name={'conditions' as keyof FormPayload}
              control={control}
              render={({ field }) => (
                <SelectButton
                  labelText="Условия расположения коллекторов"
                  value={field.value}
                  classes={{ list: 'bottom-full' }}
                  options={conditions}
                  onChange={(e) => field.onChange(e)}
                />
              )}
            />
          </div>
          {inputs.map((input) => (
            <Controller
              key={input.name}
              name={input.name as keyof FormPayload}
              rules={{
                pattern: input.pattern,
                required: input.required,
              }}
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  {...input}
                  className="input inbox__input"
                  errorText={fieldState.error?.message}
                />
              )}
            />
          ))}
          <Button submit isValid className="button_submit" value="Рассчитать" />
        </form>
      </div>
      <div className="m-container__sidebar">
        <Button isValid className="button_small" value="Status" />
        <Button isValid className="button_small" value="Calc 1" />
        <Button isValid className="button_small" value="Calc 2" />
        <Button isValid className="button_small" value="Calc 3" />
        <Button isValid className="button_small" value="Template" />
        <Button isValid className="button_small" value="Export" />
        <Button isValid className="button_small" value="Share" />
      </div>
    </div>
  );
}
