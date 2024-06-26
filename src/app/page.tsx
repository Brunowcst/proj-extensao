'use client'
import Image from "next/image";
import makeupImage from '@/assets/img/makeup.webp';
import Header from '@/components/Header';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export default function Home() {

  return (
    <div className='flex flex-grow flex-col justify-center md:mb-10'>
      <Header />
      <main className='container mx-auto px-8 flex flex-col md:flex-row gap-16 justify-center'>
        <Image
          priority
          src={makeupImage}
          alt=''
          width='600'
          height='400'
          className='hidden md:block rounded-4xl object-cover max-w-[50%] brightness-75'
        />
        <LeadCaptureForm formClassName='flex flex-col justify-center md:w-[512px]' />
      </main>
    </div>
  );
}
