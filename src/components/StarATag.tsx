import clsx from 'clsx/lite';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import starIcon from '@/assets/icons/star.svg';
import Image from 'next/image';

interface IProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

export default function StarATag({ className, children, ...rest }: IProps) {
  return (
    <a
      className={clsx(
        'flex items-center justify-center gap-2 font-bold hover:brightness-110 ease-out transition-all',
        className
      )}
      {...rest}
    >
      <div className='p-2 bg-primary shadow-linkStar rounded-lg'>
        <Image src={starIcon} width={10} height={10} alt='' />
      </div>
      <span className='underline decoration-2'>{children}</span>
    </a>
  );
}
