import clsx from 'clsx';
import { HTMLProps } from 'react';

interface IProps extends HTMLProps<HTMLInputElement> {}

export default function Input({ className, ...rest }: IProps) {
  return (
    <input
      className={clsx(
        className,
        'border border-blackish rounded-lg p-3 w-full focus:outline-primary caret-primary'
      )}
      {...rest}
    />
  );
}
