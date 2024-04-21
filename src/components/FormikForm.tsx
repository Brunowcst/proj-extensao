'use client';

import FieldWrapper from '@/components/FieldWrapper';
import FormikError from '@/components/FormikError';
import FormikField from '@/components/FormikField';
import Select from '@/components/Select';
import { FormField } from '@/types/FormField';
import { Form, Formik } from 'formik';

interface IProps {
  initialValues: Record<string, any>;
  onSubmit: (values: any) => void;
  validationSchema?: object;
  formClassName?: string;
  fields: FormField[];
  children?: any;
}

function generateInput(field: FormField, errors: any, touched: any) {
  return (
    <FormikField
      name={field.name}
      placeholder={field.placeholder}
      type={field.type}
      className={errors[field.name] && touched[field.name] && 'border-red-600'}
      {...field.props}
    />
  );
}

function generateSelect(
  field: FormField,
  errors: any,
  touched: any,
  setFieldValue: any
) {
  return (
    <Select
      errors={errors}
      field={field}
      touched={touched}
      setFieldValue={setFieldValue}
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
      {({ errors, touched, setFieldValue }) => (
        <Form className={formClassName}>
          {fields.map((field, i) => (
            <FieldWrapper key={i}>
              {field.as && field.as == 'select'
                ? generateSelect(field, errors, touched, setFieldValue)
                : generateInput(field, errors, touched)}
              <FormikError name={field.name} />
            </FieldWrapper>
          ))}

          {children}
        </Form>
      )}
    </Formik>
  );
}
