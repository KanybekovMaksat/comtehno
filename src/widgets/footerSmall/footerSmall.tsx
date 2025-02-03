import { jsx } from '@emotion/react';
import { WhatsApp as WhatsAppIcon, Instagram as InstagramIcon, MailOutline as MailOutlineIcon } from '@mui/icons-material';

export const FooterSmal: React.FC = () => {

  interface contactsFooterProps {
    icon: JSX.Element,
    text: string,
    href: string
  }

  const contactsFooter: contactsFooterProps[]  = [
    { icon: <InstagramIcon />, text: 'comtehno.kg', href: 'https://www.instagram.com/comtehno.kg/' },
    { icon: <WhatsAppIcon />, text: '+996 707 379 957', href: 'https://wa.me/996707379957' },
    { icon: <MailOutlineIcon />, text: 'comtehno.kg@gmail.com', href: 'mailto:comtehno.kg@gmail.com' }
  ]
  
  return (
    <footer className='pt-[40px] pb-[40px]'>
    <div className="container flex flex-wrap justify-between">
      <div className='flex flex-col w-full max-w-[576px] sm:flex-row mb-[24px] gap-[10px] sm:gap-[24px]'>
        {contactsFooter.map(({ icon, text, href }: contactsFooterProps, index: number) => (
          <a key={index} className='flex gap-[4px]' href={href} target="_blank" rel="noopener noreferrer">
            {icon}
            <p className='text-[15px] md:text-[16px] text-[#52525B]'>{text}</p>
          </a>
        ))}
      </div>
      <h3 className='text-[15px] md:text-[16px] text-[#52525B]'>Сайт разработан студентами КОМТЕХНО</h3>
    </div>
  </footer>
  )
}

