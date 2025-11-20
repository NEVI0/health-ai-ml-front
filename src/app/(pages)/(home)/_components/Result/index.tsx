'use client';

import { Activity } from 'react';

import { useHomeContext } from '../../_context';

export default function Result() {
  const { result, error } = useHomeContext();

  return (
    <section className='border flex flex-col items-center justify-center gap-8 p-8 rounded-2xl'>
      <Activity name='message' mode={!result && !error ? 'visible' : 'hidden'}>
        <small className='text-sm'>
          Informe seus dados no formulário acima para obter o resultado
        </small>
      </Activity>

      <Activity name='error' mode={error ? 'visible' : 'hidden'}>
        <small className='text-sm text-red-600'>{error}</small>
      </Activity>

      <Activity name='result' mode={result ? 'visible' : 'hidden'}>
        <small className='text-sm text-green-600'>{result}</small>
      </Activity>
    </section>
  );
}

