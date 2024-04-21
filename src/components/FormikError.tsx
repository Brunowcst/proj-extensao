import clsx from 'clsx';
import { ErrorMessage } from 'formik';

interface IProps {
  name: string;
  className?: string;
}

export default function FormikError({ className, name }: IProps) {
  return (
    <span className={clsx('text-red-600 text-sm', className)}>
      <ErrorMessage name={name} />
    </span>
  );
}
