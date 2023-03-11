import React, { forwardRef, type InputHTMLAttributes } from 'react';

type OwnProps = {
  label?: string;
  errorText?: string;
  className?: string;
  value: boolean;
  defaultChecked: any;
};

export type CheckboxProps = OwnProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'pattern'>;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    value,
    className,
    errorText = '',
    onChange,
    disabled,
    label,
    defaultChecked,
  } = props;

  const currentClass = ['checkbox'];

  if (disabled) {
    currentClass.push('checkbox_disabled');
  }

  const [checked, setChecked] = React.useState(defaultChecked);
  React.useEffect(() => {
    if (onChange) {
      onChange(checked);
    }
  }, [checked]);

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className={currentClass.join(' ')} onClick={() => setChecked(!checked)}>
      {label && (
      <span className={`checkbox__label ${errorText ? 'checkbox__label_error' : ''}`}>
        {label}
      </span>
      )}
      <input
        ref={ref}
        type="checkbox"
        value={value}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
        className={`checkbox__input ${errorText !== '' ? 'checkbox__input_error' : ''}`}
      />
      {
        errorText
        && <span className={`${label}-checkbox-error checkbox__label_error`}>{ errorText }</span>
      }
      <span className={`checkbox__checkmark ${className ?? className}`} ref={ref} />
    </div>
  );
});

export default Checkbox;
