import { FormField } from '@/types/FormField';
import { maskPhone } from '@/utils/masks/phone';
import { leadCaptureFormSchema } from '@/validation/schemas/leadCaptureFormSchema';

export const leadCaptureForm = {
  initialValues: {
    name: '',
    phone: '',
    email: '',
  },
  validationSchema: leadCaptureFormSchema,
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
      mask: maskPhone,
      props: {
        maxLength: 15,
      },
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Seu melhor e-mail',
    },
  ] as FormField[],
};
