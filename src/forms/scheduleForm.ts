import { FormField } from '@/types/FormField';
import { scheduleFormSchema } from '@/validation/schemas/scheduleFormSchema';
import { toZonedTime } from 'date-fns-tz';

export const scheduleForm = {
  initialValues: {
    name: '',
    phone: '',
    occasion: '',
    date: null,
  },
  validationSchema: scheduleFormSchema,
  fields: [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Nome e sobrenome',
    },
    {
      name: 'phone',
      type: 'tel',
      placeholder: 'Telefone (WhatsApp)',
    },
    {
      name: 'occasion',
      as: 'select',
      placeholder: 'Qual sua ocasião?',
      options: [
        {
          label: 'Aniversário',
          value: 'aniversario',
        },
        {
          label: 'Batizado',
          value: 'batizado',
        },
        {
          label: 'Casamento',
          value: 'casamento',
        },
      ],
    },
    {
      placeholder: 'Data desejada para o atendimento',
      name: 'date',
      type: 'date',
      props: {
        min: toZonedTime(new Date(), 'America/Fortaleza'),
      },
    },
  ] as FormField[],
};
