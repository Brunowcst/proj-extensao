'use client';

import Button from '@/components/Button';
import StarATag from '@/components/StarATag';
import { scheduleForm } from '@/forms/scheduleForm';
import FormikForm from './FormikForm';

export default function ScheduleForm() {
  return (
    <FormikForm
      fields={scheduleForm.fields}
      initialValues={scheduleForm.initialValues}
      onSubmit={(values) => console.log(values)}
      validationSchema={scheduleForm.validationSchema}
    >
      <div className='flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 mt-6'>
        <Button type='submit' className='px-7 md:px-5 md:text-sm lg:text-base'>
          Agendar agora
        </Button>
        <StarATag href='#' className='text-xs md:text-sm lg:text-base'>
          Já fiz meu agendamento
        </StarATag>
      </div>
    </FormikForm>
  );
}
