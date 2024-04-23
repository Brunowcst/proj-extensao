export default function Footer() {
  return (
    <footer className='bg-blackish text-white mt-10 p-6 text-sm font-bold rounded-t-4xl md:rounded-none'>
      <div className='container flex flex-col md:flex-row gap-6 mx-auto justify-between items-center text-center'>
        <div className='md:text-left'>
          <h4>Contato</h4>
          <a href='mailto:suporte@atilavinicius.com'>
            suporte@atilavinicius.com
          </a>
        </div>
        <div className='md:order-2 md:text-right'>
          <a href='#' className='block'>
            Termos de uso
          </a>
          <a href='#' className='block'>
            Políticas de privacidade
          </a>
        </div>
        <div className='md:order-1'>
          <h5>Átila Vinicius &copy; copyright {new Date().getFullYear()}</h5>
        </div>
      </div>
    </footer>
  );
}
