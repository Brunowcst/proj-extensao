'use client';

import FieldWrapper from '@/components/FieldWrapper';
import FormikError from '@/components/FormikError';
import FormikField from '@/components/FormikField';
import Select from '@/components/Select';
import { FormField } from '@/types/FormField';
import { Form, Formik } from 'formik';
import DateInput from './DateInput';

interface IProps {
  initialValues: Record<string, any>;
  onSubmit: (values: any) => void;
  validationSchema?: object;
  formClassName?: string;
  fields: FormField[];
  children?: any;
}

function generateInput(field: FormField) {
  if (field.as && field.as == 'select') return <Select field={field} />;
  if (field.type == 'date') return <DateInput field={field} />;
  return (
    <FormikField
      name={field.name}
      placeholder={field.placeholder}
      type={field.type}
      mask={field.mask}
      {...field.props}
    />
  );
}

export default function FormikForm({
  initialValues,
  onSubmit,
  validationSchema,
  formClassName,
  fields,
  children,
}: IProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className={formClassName}>
        {fields.map((field, i) => (
          <FieldWrapper key={i}>
            {generateInput(field)}
            <FormikError name={field.name} />
          </FieldWrapper>
        ))}

        {children}
      </Form>
    </Formik>
  );
}
