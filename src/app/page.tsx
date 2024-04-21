import Header from '@/components/Header';
import InputField from '@/components/InputField';
import Select from '@/components/Select';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <main className='container mx-auto px-8 flex flex-col md:flex-row gap-16 justify-center'>
        <Image
          src='/img/makeup.png'
          alt=''
          width='517'
          height='371'
          className='hidden md:block rounded-4xl object-cover'
        />
        <form action='' className='mt-3 md:max-w-[50%]'>
          <InputField
            placeholder='Nome e sobrenome'
            id='name'
            name='name'
            type='text'
            required
          />
          <InputField
            placeholder='Telefone (WhatsApp)'
            id='phone'
            name='phone'
            type='tel'
            required
            maxLength={15}
          />
          <Select
            name='occasion'
            id='occasion'
            required
            label='Qual sua ocasião?'
          >
            <option value='' selected disabled>
              Qual sua ocasião?
            </option>
            <option value='aniversario'>Aniversário</option>
            <option value='batizado'>Batizado</option>
            <option value='casamento'>Casamento</option>
          </Select>
          <InputField
            placeholder='Data desejada para o atendimento'
            id='date'
            type='date'
            required
            min={new Date().toISOString().substring(0, 10)}
          />
          <div>
            <button type='submit'>
              <Image src='/icons/star.svg' alt='' width='10' height='10' />
              <span>Agendar agora</span>
            </button>
            <a href='#'>
              <Image src='/icons/star.svg' alt='' width='10' height='10' />
              <span>Já fiz meu agendamento</span>
            </a>
          </div>
        </form>
      </main>
      <footer>
        <div>
          <h4>Contato</h4>
          <a href='mailto:suporte@atilavinicius.com'>
            suporte@atilavinicius.com
          </a>
        </div>
        <div>
          <a href='#'>Termos de uso</a>
          <a href='#'>Políticas de privacidade</a>
        </div>
        <div>
          <h5>Átila Vinicius &copy; copyright {new Date().getFullYear()}</h5>
        </div>
      </footer>
    </>
  );
}
