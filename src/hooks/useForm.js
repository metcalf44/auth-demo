import { useState } from 'react';

export const useForm = (initial) => {
  const [values, setValues] = useState(initial);

  const updateValue = (event) => {
    const { type, checked, value, name } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setValues((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const resetValues = () => setValues(initial);

  return [values, updateValue, resetValues];
};
