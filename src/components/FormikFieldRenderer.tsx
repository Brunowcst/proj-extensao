'use client';

import FieldWrapper from '@/components/FieldWrapper';
import FormikError from '@/components/FormikError';
import FormikField from '@/components/FormikField';
import Select from '@/components/Select';
import { FormField } from '@/types/FormField';
import DateInput from './DateInput';

interface IProps {
  field: FormField;
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

export default function FormikFieldRenderer({ field }: IProps) {
  return (
    <FieldWrapper>
      {generateInput(field)}
      <FormikError name={field.name} />
    </FieldWrapper>
  );
}
