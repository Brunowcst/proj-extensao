import clsx from 'clsx';
import { Field, FieldAttributes } from 'formik';

interface IProps extends FieldAttributes<any> {}

export default function FormikField({ className, ...props }: IProps) {
  return (
    <Field
      className={clsx(
        'border border-blackish rounded-lg p-3 w-full focus:outline-primary caret-primary',
        className
      )}
      {...props}
    />
  );
}
