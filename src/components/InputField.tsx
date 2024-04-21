import { HTMLProps } from 'react';
import Input from './Input';
import clsx from 'clsx';

interface IProps extends HTMLProps<HTMLInputElement> {
  label?: string;
}

export default function InputField({
  id,
  placeholder,
  label,
  className,
  ...rest
}: IProps) {
  return (
    <div className={clsx(className, 'mb-4 max-w-full md:w-[512px]')}>
      <label
        htmlFor={id}
        className='border-0 overflow-hidden absolute w-1 h-1 m-[-1px] p-0'
      >
        {label || placeholder}
      </label>
      <Input id={id} placeholder={placeholder} {...rest} />
    </div>
  );
}
