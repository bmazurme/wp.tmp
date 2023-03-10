// eslint-disable-next-line import/no-duplicates
import React, { forwardRef } from 'react';
// eslint-disable-next-line import/no-duplicates
import { type InputHTMLAttributes } from 'react';

type OwnProps = {
  // id?: string;
  label?: string;
  errorText?: string;
  className?: string;
  disabled?: boolean;
  value?: boolean;
};

export type CheckboxProps = OwnProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'pattern'>;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    value,
    className,
    errorText = '',
    type = 'checkbox',
    onChange,
    disabled,
    label,
    // id,
  } = props;

  // const [val, setVal] = useState<boolean>(value ?? false);
  // const toggle = () => {
  //   if (!disabled) {
  //     setVal(!val);
  //   }
  // };

  const currentClass = ['checkbox'];
  if (disabled) {
    currentClass.push('checkbox_disabled');
  }

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className={currentClass.join(' ')}>
      {label && <span className={`checkbox__label ${errorText ? 'checkbox__label_error' : ''}`}>{label}</span>}
      <input
        checked={value}
        value={value}
        disabled={disabled}
        ref={ref}
        onChange={onChange}
        type={type}
        readOnly
        className={`checkbox__input ${errorText !== '' ? 'checkbox__input_error' : ''}`}
      />
      {
        errorText
        && <span className={`${label}-checkbox-error checkbox__label_error`}>{ errorText }</span>
      }
      <span className={`checkbox__checkmark ${className ?? className}`} />
    </div>
  );
});

export default Checkbox;
