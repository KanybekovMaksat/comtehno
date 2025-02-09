import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { InstagramIcon } from "~shared/assets/icons";
import { GmailIcon } from "~shared/assets/icons";
import { WhatsappIcon } from "~shared/assets/icons";


interface Contact {
  id: number;
  icon: JSX.Element;
  text: string;
  link: string;
}

const contacts: Contact[] = [
  { id: 1, icon: <WhatsappIcon />, text: '+996 707 379 957', link: 'https://wa.me/996707379957' },
  { id: 2, icon: <InstagramIcon />, text: 'comtehno.kg', link: 'https://www.instagram.com/comtehno.kg' },
  { id: 3, icon: <GmailIcon />, text: 'comtehno.kg@gmail.com', link: 'mailto:comtehno.kg@gmail.com' }
];

export const PriceTagContact = () => {
  return (
    <div className='flex flex-col w-full gap-6 justify-center'>
      {contacts.map((contact: Contact) => (
        <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer" className='w-full'>
          <div className='cursor-pointer h-[80px] rounded-xl bg-[#F4F4F5] flex items-center justify-between p-6'>
            <div className='flex gap-4 items-center'>
              {contact.icon}
              <p className='r-md:text-lg text-xl font-medium text-black'>{contact.text}</p>
            </div>
            <ArrowOutwardIcon className='w-6 h-6' />
          </div>
        </a>
      ))}
    </div>
  );
}
