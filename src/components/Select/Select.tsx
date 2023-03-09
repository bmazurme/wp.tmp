/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-pattern */
import React, { Fragment } from 'react';

import classnames from 'classnames';

import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

type OptionProps<T> = {
  label: string;
  value: T;
};

type SelectProps<T> = {
  value: T;
  errorText?: string;
  labelText?: string;
  classes?: {
    button?: string,
    list?: string,
    size?: string,
  },
  options: OptionProps<T>[];
  onChange: (value: T) => void;
};

export default function Select<T>({
  value,
  options,
  classes,
  errorText,
  labelText,
  onChange,
}: SelectProps<T>) {
  const { label } = options.find((item) => item.value === value) ?? options[0];

  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative">
        {labelText && <label className={`select-button__label ${errorText ? 'select-button__label_error' : ''}`}>{ labelText }</label>}
        <Listbox.Button className={classnames(
          'select-button',
          { 'select-button_sm': classes?.size },
          { 'select-button_error': errorText },
          classes?.button,
        )}
        >
          <span className="block truncate text-black">{label}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className={classnames(
            'select-options z-40',
            { 'select-options_sm': classes?.size },
            classes?.list,
          )}
          >
            {options.map((item) => (
              <Listbox.Option
                key={item.label}
                value={item.value}
                className={({ active }) => classnames(
                  'cursor-pointer select-none bg-hover-gray relative py-2 pl-10 pr-4',
                  {
                    'bg-secondary-disabled': active,
                    'text-gray-900': !active,
                    'text-black': active,
                  },
                )}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={classnames('block truncate', {
                        'font-medium': selected,
                        'font-normal': !selected,
                      })}
                    >
                      {item.label}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-secondary-normal">
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
        {
          errorText
          && <span className={`${label}-select-button-error select-button__label_error`}>{ errorText }</span>
        }
      </div>
    </Listbox>
  );
}
