import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function FieldWrapper({ className, children, ...rest }: IProps) {
  return (
    <div className={clsx('mb-4 max-w-full md:w-[512px]', className)} {...rest}>
      {children}
    </div>
  );
}
