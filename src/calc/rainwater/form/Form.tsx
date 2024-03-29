import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useErrorHandler } from 'react-error-boundary';

import Input from '../../../components/input';
import Button from '../../../components/button';
import SelectButton from '../../../components/select';

import places from '../utils/places';
import conditions from '../utils/conditions';
import getRainFlow from '../utils/calculation';

import { TypeResult } from '../utils/types';

import collection from '../../collection';

const options = places.map((x, i) => ({ label: x.name, value: i }));

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
  condition: number;
  // koef: number;
  timeInit: number;
  lengthPipe: number;
  lengthTray: number;
  velocityPipe: number;
  velocityTray: number;
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
  // {
  //   name: 'koef',
  //   label: 'Поправочный коэффициент',
  //   pattern: {
  //     value: /^[a-z0-9_-]{1,15}$/,
  //     message: 'Koef is invalid',
  //   },
  //   required: true,
  //   autoComplete: 'koef',
  // },
  {
    name: 'timeInit',
    label: 'Время поверхностной концентрации стока, мин',
    pattern: {
      value: /^[a-z0-9_-]{1,15}$/,
      message: 'T is invalid',
    },
    required: true,
    autoComplete: 'timeInit',
  },
  {
    name: 'lengthPipe',
    label: 'Длина трубы',
    pattern: {
      value: /^[a-z0-9_-]{1,15}$/,
      message: 'Length pipe is invalid',
    },
    required: true,
    autoComplete: 'lengthPipe',
  },
  {
    name: 'lengthTray',
    label: 'Длина лотка',
    pattern: {
      value: /^[a-z0-9_-]{1,15}$/,
      message: 'Length tray is invalid',
    },
    required: true,
    autoComplete: 'lengthTray',
  },
  {
    name: 'velocityPipe',
    label: 'Скорость',
    pattern: {
      value: /^[a-z0-9_-]{1,15}$/,
      message: 'Velocity pipe is invalid',
    },
    required: true,
    autoComplete: 'velocityPipe',
  },
  {
    name: 'velocityTray',
    label: 'Скорость',
    pattern: {
      value: /^[a-z0-9_-]{1,15}$/,
      message: 'Velocity tray is invalid',
    },
    required: true,
    autoComplete: 'velocityTray',
  },
];

export default function Form({ closePopupEditModule, setResult }
  : { closePopupEditModule: () => void, setResult: (result: TypeResult) => void }) {
  const errorHandler = useErrorHandler();
  const { control, handleSubmit } = useForm<FormPayload>({
    defaultValues: {
      roof: 0.31,
      flow: 0.224,
      pavements: 0.09,
      tracks: 0.125,
      ground: 0.064,
      cobblestone: 0.145,
      stone: 0,
      lawns: 0.38,
      place: 1,
      intensity: 80,
      condition: 0,
      // koef: 0.65,
      timeInit: 5,
      lengthPipe: 350,
      lengthTray: 50,
      velocityPipe: 0.8,
      velocityTray: 0.7,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const {
        roof, pavements, tracks, ground, cobblestone, stone, lawns,
        place, condition, intensity, lengthPipe, lengthTray, velocityPipe, velocityTray, timeInit,
      } = data;
      const area = {
        roof, pavements, tracks, ground, cobblestone, stone, lawns,
      };
      const result = getRainFlow({
        area,
        place,
        condition,
        intensity,
        lengthPipe,
        lengthTray,
        velocityPipe,
        velocityTray,
        timeInit,
      });
      setResult(result);
      console.log(result);

      [1, 2, 3, 4].forEach((x) => collection.get(x));

      closePopupEditModule();
    } catch ({ status, data: { reason } }) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });

  return (
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
          name={'condition' as keyof FormPayload}
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
  );
}
