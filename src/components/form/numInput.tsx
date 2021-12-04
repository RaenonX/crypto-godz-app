import React from 'react';

import FormControl from 'react-bootstrap/FormControl';


type Props = {
  value: number | string,
  onChange: (newValue: number) => void,
  step?: number,
};

export const NumberInput = ({value, onChange, step}: Props) => {
  return (
    <FormControl
      type="number"
      value={Number(value).toString()}
      onChange={(e) => onChange(+e.target.value)}
      step={step}
    />
  );
};
