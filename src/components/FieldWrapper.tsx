import clsx from 'clsx/lite';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function FieldWrapper({ className, children, ...rest }: IProps) {
  return (
    <div className={clsx('mb-4 max-w-full', className)} {...rest}>
      {children}
    </div>
  );
}
