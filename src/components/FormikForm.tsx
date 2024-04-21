'use client';

import FieldWrapper from '@/components/FieldWrapper';
import FormikError from '@/components/FormikError';
import FormikField from '@/components/FormikField';
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

function generateSelect(field: FormField, errors: any, touched: any) {
  return (
    <FormikField
      name={field.name}
      as={field.as}
      className={errors[field.name] && touched[field.name] && 'border-red-600'}
    >
      {field.options?.map((option) => (
        <option value={option.value} {...option.props} key={option.value}>
          {option.label}
        </option>
      ))}
    </FormikField>
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
      {({ errors, touched }) => (
        <Form className={formClassName}>
          {fields.map((field, i) => (
            <FieldWrapper key={i}>
              {field.as && field.as == 'select'
                ? generateSelect(field, errors, touched)
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
