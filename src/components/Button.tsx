import starIcon from '@/assets/icons/star.svg';
import clsx from 'clsx';
import Image from 'next/image';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'primary' | 'link';
}

export default function Button({
  children,
  variant = 'primary',
  className,
  ...rest
}: IProps) {
  return (
    <button
      className={clsx(
        'flex items-center gap-2 bg-primary font-bold px-5 py-3 rounded-lg shadow-button disabled:text-disabledFg disabled:bg-disabledBg hover:brightness-110 transition-all ease-out',
        className
      )}
      {...rest}
    >
      <Image src={starIcon} width={10} height={10} alt='' />
      {children}
    </button>
  );
}
