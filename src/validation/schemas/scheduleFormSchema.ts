import { toZonedTime } from 'date-fns-tz';
import * as Yup from 'yup';
import { validatePhone } from '../validators/phoneValidator';

export const scheduleFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Curto demais, use no mínimo 2 caracteres')
    .max(50, 'Longo demais, use no máximo 50 caracteres')
    .required('Campo obrigatório'),
  phone: Yup.string()
    .required('Campo obrigatório')
    .test({
      test(value, context) {
        const valiadtionResult = validatePhone(value);

        if (valiadtionResult === '') return true;
        return context.createError({ message: valiadtionResult });
      },
    }),
  occasion: Yup.string().required('Campo obrigatório'),
  date: Yup.date()
    .required('Campo obrigatório')
    .min(
      toZonedTime(new Date(), 'America/Fortaleza'),
      'Selecione uma data válida'
    ),
});
