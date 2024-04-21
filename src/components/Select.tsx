import clsx from 'clsx';
import {
  DetailedHTMLProps,
  PropsWithChildren,
  SelectHTMLAttributes,
} from 'react';

interface IProps
  extends PropsWithChildren<
    DetailedHTMLProps<
      SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >
  > {
  label: string;
}

export default function Select({
  className,
  children,
  id,
  label,
  ...rest
}: IProps) {
  return (
    <>
      <label
        htmlFor={id}
        className='border-0 overflow-hidden absolute w-1 h-1 m-[-1px] p-0'
      >
        {label}
      </label>
      <select
        id={id}
        {...rest}
        className={clsx(
          'border mb-4 border-blackish rounded-lg p-3 w-full focus:outline-primary caret-primary accent-primary',
          className
        )}
      >
        {children}
      </select>
    </>
  );
}
