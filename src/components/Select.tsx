import { FormField } from '@/types/FormField';
import clsx from 'clsx';
import { useId } from 'react';
import ReactSelect from 'react-select';

interface IProps {
  field: FormField;
  errors: any;
  touched: any;
  setFieldValue: any;
}

export default function Select({
  field,
  errors,
  touched,
  setFieldValue,
}: IProps) {
  return (
    <ReactSelect
      instanceId={useId()}
      options={field.options}
      placeholder={field.placeholder}
      unstyled={true}
      name={field.name}
      onChange={(newValue) => {
        setFieldValue(field.name, (newValue as any).value);
      }}
      classNames={{
        container: (props) =>
          clsx(props.isFocused && 'outline outline-primary rounded-lg'),
        control: () =>
          clsx(
            'border border-blackish rounded-lg p-3 w-full',
            errors[field.name] && touched[field.name] && 'border-red-600'
          ),
        input: () => 'caret-primary',
        menuList: () => 'bg-white border-blackish border rounded mt-1',
        option: (props) =>
          clsx(
            'p-2 disabled:text-red',
            props.isSelected && 'bg-primary',
            props.isDisabled && 'bg-gray-300 text-gray-600',
            props.isFocused && !props.isDisabled && 'bg-primary brightness-110'
          ),
      }}
    />
  );
}
