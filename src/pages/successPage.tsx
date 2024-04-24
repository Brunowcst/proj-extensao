import Footer from '@/components/Footer';
import '../app/globals.css';
import Image from 'next/image';
import Button from '@/components/Button';

interface Iprops {
    date: string,
    hours: string,
    event: string
}

export default function SuccessPage({date, hours, event}: Iprops) {
    return (
        <div className="flex flex-grow flex-col justify-center">
            <main className='container mx-auto px-8 py-8 flex flex-col md:flex-row gap-16 justify-center flex-1'>
                <div className='flex flex-col md:flex-row w-full md:w-1/2 h-full'>
                    <div className='container border-8 mb-8 md:mb-0 md:mr-8 w-full md:w-1/2 lg:w-full'>
                        <Image
                            src='/img/calendar.png'
                            alt=''
                            width='440'
                            height='30'
                            className='hidden md:block rounded-4xl object-cover'
                        />
                    </div>
                    <div className='container border-8 w-full md:w-1/2 lg:w-full h-full'>
                        <h1 className='text-subheading md:text-heading font-bold pt-8'>Está marcado!</h1>
                        <p className='pt-8'>Nos veremos no dia {date}, às {hours} h para {event}. Até lá! 🤩😍</p>
                        <p>Ah, caso tenha alguma dúvida entre em contato clicando no botão abaixo 💚</p>
                    </div>
                </div>
                <div className='container border-8 mb-8 md:mb-0 md:mr-8 w-full md:w-1/2 lg:w-full'>
                    <Button type='submit' className='px-7 md:px-5 md:text-sm lg:text-base'>
                        Agendar agora
                    </Button>
                </div>
            </main>
            <Footer />
        </div>
    )
}