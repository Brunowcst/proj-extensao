import Header from '@/components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <main className='container mx-auto px-10'>
        <Image src='/img/makeup.png' alt='' width='517' height='371' />
        <form action=''>
          <div>
            <label htmlFor='name'>Nome:</label>
            <input id='name' name='name' type='text' required />
          </div>
          <div>
            <label htmlFor='phone'>Telefone (WhatsApp):</label>
            <input id='phone' type='tel' name='phone' maxLength={15} required />
          </div>
          <div>
            <label htmlFor='occasion'>Ocasião</label>
            <select name='occasion' id='occasion' required>
              <option value='' selected disabled>
                Qual sua ocasião?
              </option>
              <option value='aniversario'>Aniversário</option>
              <option value='batizado'>Batizado</option>
              <option value='casamento'>Casamento</option>
            </select>
          </div>
          <div>
            <label htmlFor='date'>Data desejada para o atendimento</label>
            <input
              id='date'
              type='date'
              required
              min={new Date().toISOString().substring(0, 10)}
            />
          </div>
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
