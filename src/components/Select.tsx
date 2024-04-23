import { FormField } from '@/types/FormField';
import clsx from 'clsx/lite';
import { useField } from 'formik';
import { useId } from 'react';
import ReactSelect from 'react-select';

interface IProps {
  field: FormField;
}

export default function Select({ field }: IProps) {
  const [_, meta, helpers] = useField(field.name);

  return (
    <ReactSelect
      instanceId={useId()}
      options={field.options}
      placeholder={field.placeholder}
      unstyled={true}
      name={field.name}
      onChange={(newOption) => helpers.setValue((newOption as any).value)}
      onMenuClose={() => helpers.setTouched(true)}
      classNames={{
        placeholder: () => 'opacity-50',
        container: (props) =>
          clsx(props.isFocused && 'outline outline-primary rounded-lg'),
        control: () =>
          clsx(
            'border border-blackish rounded-lg p-3 w-full',
            meta.error && meta.touched && 'border-red-600'
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
