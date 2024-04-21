import Image from 'next/image';

export default function Header() {
  return (
    <header className='text-center md:px-16 md:py-10'>
      <Image
        src='/img/makeup-header.png'
        width={360}
        height={258}
        alt=''
        className='md:hidden'
      />
      <div className='px-2 py-4'>
        <h1 className='text-subheading md:text-heading font-bold'>
          Aqui você é única!
        </h1>
        <p className='text-lg md:text-subheading mb-2'>
          Insira os dados e reserve sua data agora!
        </p>
      </div>
    </header>
  );
}
