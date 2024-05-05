import Button from '@/components/Button';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import '../globals.css';

export const metadata: Metadata = {
    title: "Átila Vinícius - Comunidade"
}

export default function SuccessPage() {
    return (
        <div className="flex flex-grow flex-col justify-center">
            <main className='container mx-auto px-8 py-8 flex flex-col  gap-16 justify-center items-center'>
                <div className='container mb-8 md:mb-0 md:mr-8 w-full md:w-2/3 lg:w-full'>
                    <p className='pt-8 pb-8 text-center text-xl md:text-4x1 font-semibold'>Agora você ficará por dentro de todas as novidades! 🤩😍</p>
                    <div className="w-full flex justify-center">
                        <Image
                            src='/img/undraw_chat.png'
                            alt=''
                            width='440'
                            height='440'
                            className='rounded-4xl object-cover w-full md:w-1/4'
                        />
                    </div>
                    <p className='pt-8 pb-16 text-center text-xl md:text-4x1 font-semibold'>Ah, se quiser ficar ainda mais perto de mim, participe da minha comunidade do zap 💚</p>
                    <div className="flex justify-center">
                        <Link href="https://www.instagram.com/atilaviniciuss/" passHref>
                            <Button type='button' className='px-7 md:px-5 md:text-sm lg:text-base' variant='link' rel="noopener">
                                Agendar agora
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}