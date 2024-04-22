import clsx from 'clsx/lite';
import { Field, FieldAttributes, useField } from 'formik';

interface IProps extends FieldAttributes<any> {}

export default function FormikField({ className, ...props }: IProps) {
  const [_, meta, __] = useField(props.name);
  return (
    <Field
      className={clsx(
        'border border-blackish rounded-lg p-3 w-full focus:outline-primary caret-primary',
        meta.error && meta.touched && 'border-red-600',
        className
      )}
      {...props}
    />
  );
}
