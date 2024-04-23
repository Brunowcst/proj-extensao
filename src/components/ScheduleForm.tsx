'use client';

import Button from '@/components/Button';
import StarATag from '@/components/StarATag';
import { scheduleForm } from '@/forms/scheduleForm';
import { Form, Formik } from 'formik';
import FormikFieldRenderer from './FormikFieldRenderer';

interface IProps {
  formClassName?: string;
}

export default function ScheduleForm({ formClassName }: IProps) {
  return (
    <Formik
      initialValues={scheduleForm.initialValues}
      onSubmit={(values) => console.log(values)}
      validationSchema={scheduleForm.validationSchema}
    >
      {({ dirty, isValid }) => {
        return (
          <Form className={formClassName}>
            {scheduleForm.fields.map((field, i) => (
              <FormikFieldRenderer field={field} key={i} />
            ))}

            <div className='flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 mt-6'>
              <Button
                type='submit'
                className='px-7 md:px-5 md:text-sm lg:text-base'
                disabled={!isValid || !dirty}
              >
                Agendar agora
              </Button>
              <StarATag href='#' className='text-xs md:text-sm lg:text-base'>
                Já fiz meu agendamento
              </StarATag>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
