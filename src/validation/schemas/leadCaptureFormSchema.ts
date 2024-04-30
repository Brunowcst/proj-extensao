import * as Yup from 'yup';
import { validatePhone } from '../validators/phoneValidator';

export const leadCaptureFormSchema = Yup.object().shape({
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
  email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
});
