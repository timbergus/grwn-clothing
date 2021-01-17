import './form-input.scss';

import { FC } from 'react';

const FormInput: FC<FormInputProps> = ({
  id,
  name,
  type,
  value,
  label,
  required,
  onChange,
}) => (
  <div className="group">
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      required={required}
      onChange={onChange}
      className="input"
    />
    {label ? (
      <label htmlFor={id} className={`${value.length ? 'shrink' : ''} label`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
