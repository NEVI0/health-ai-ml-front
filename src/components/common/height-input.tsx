'use client';

import { useState } from 'react';

import { Input } from '@/components/ui/input';

export function HeightInput() {
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

    setValue(formatted + 'm');
  };

  return (
    <Input
      id='height'
      name='height'
      autoComplete='off'
      placeholder='0,00m'
      value={value}
      onChange={handleChange}
      required
    />
  );
}
