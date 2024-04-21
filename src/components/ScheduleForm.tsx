'use client';

import Button from '@/components/Button';
import InputField from '@/components/InputField';
import Select from '@/components/Select';
import StarATag from '@/components/StarATag';
import { useState } from 'react';

export default function ScheduleForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [occasion, setOccasion] = useState('');
  const [date, setDate] = useState('');

  return (
    <form
      action=''
      className='mt-3 md:max-w-[50%]'
      onSubmit={(e) => e.preventDefault()}
    >
      <InputField
        placeholder='Nome e sobrenome'
        id='name'
        name='name'
        type='text'
        required
        value={name}
        onChange={(e) => setName((e.target as HTMLInputElement).value)}
      />
      <InputField
        placeholder='Telefone (WhatsApp)'
        id='phone'
        name='phone'
        type='tel'
        required
        maxLength={15}
        value={phone}
        onChange={(e) => setPhone((e.target as HTMLInputElement).value)}
      />
      <Select
        name='occasion'
        id='occasion'
        required
        label='Qual sua ocasião?'
        value={occasion}
        onChange={(e) => setOccasion((e.target as HTMLSelectElement).value)}
      >
        <option value='' disabled>
          Qual sua ocasião?
        </option>
        <option value='aniversario'>Aniversário</option>
        <option value='batizado'>Batizado</option>
        <option value='casamento'>Casamento</option>
      </Select>
      <InputField
        placeholder='Data desejada para o atendimento'
        id='date'
        type='date'
        required
        min={new Date().toISOString().substring(0, 10)}
        value={date}
        onChange={(e) => setDate((e.target as HTMLInputElement).value)}
      />
      <div className='flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 mt-6'>
        <Button type='submit' className='px-7 md:px-5 md:text-sm lg:text-base'>
          Agendar agora
        </Button>
        <StarATag href='#' className='text-xs md:text-sm lg:text-base'>
          Já fiz meu agendamento
        </StarATag>
      </div>
    </form>
  );
}
