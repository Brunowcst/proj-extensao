import makeupImage from '@/assets/img/makeup.webp';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='text-center md:px-16 md:py-10'>
      <Image
        src={makeupImage}
        width={600}
        height={400}
        alt=''
        className='md:hidden w-full rounded-b-4xl brightness-50'
      />
      <div className='px-2 py-5'>
        <h1 className='text-subheading md:text-heading font-bold'>
          Aqui você é única!
        </h1>
        <p className='text-lg md:text-subheading'>
          Insira os dados e reserve sua data agora!
        </p>
      </div>
    </header>
  );
}
