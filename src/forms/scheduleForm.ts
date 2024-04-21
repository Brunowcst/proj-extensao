import { FormField } from '@/types/FormField';
import { scheduleFormSchema } from '@/validation/schemas/scheduleFormSchema';

export const scheduleForm = {
  initialValues: {
    name: '',
    phone: '',
    occasion: '',
    date: '',
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
      options: [
        {
          label: 'Qual sua ocasião?',
          value: '',
          props: {
            disabled: true,
          },
        },
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
      name: 'date',
      type: 'date',
      props: {
        min: new Date().toISOString().substring(0, 10),
      },
    },
  ] as FormField[],
};
