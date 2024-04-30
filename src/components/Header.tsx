import makeupImage from '@/assets/img/makeup.webp';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='text-center md:px-16 md:py-10'>
      <Image
        priority
        src={makeupImage}
        width={600}
        height={400}
        alt=''
        className='md:hidden w-full rounded-b-4xl brightness-50'
      />
      <div className='px-2 py-5 items-center'>
        <h1 className='text-subheading md:text-heading font-bold'>
          Fique por dentro
        </h1>
        <p className='text-lg md:text-subheading w-4/5 md:w-full mx-auto'>
          Saiba todas as novidades e receba ofertas especiais.
        </p>
        <p className='text-lg md:text-subheading'>Inscreva-se abaixo:</p>
      </div>
    </header>
  );
}
