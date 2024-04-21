import Header from '@/components/Header';
import Image from 'next/image';
import ScheduleForm from '@/components/ScheduleForm';

export default function Home() {
  return (
    <div className='flex flex-grow flex-col justify-center'>
      <Header />
      <main className='container mx-auto px-8 flex flex-col md:flex-row gap-16 justify-center'>
        <Image
          src='/img/makeup.png'
          alt=''
          width='517'
          height='371'
          className='hidden md:block rounded-4xl object-cover'
        />
        <ScheduleForm />
      </main>
    </div>
  );
}
