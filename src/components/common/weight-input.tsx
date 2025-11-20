'use client';

import { useState } from 'react';

import { Input } from '@/components/ui/input';

export function WeightInput() {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const raw = event.target.value.replace(/\D/g, '');

    if (!raw) {
      setValue('');
      return;
    }

    const formatted = (Number(raw) / 100).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    setValue(formatted + ' Kg');
  };

  return (
    <Input
      id='weight'
      name='weight'
      autoComplete='off'
      placeholder='0,00 Kg'
      value={value}
      onChange={handleChange}
      required
    />
  );
}
