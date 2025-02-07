import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { InstagramIcon } from "~shared/assets/icons";
import { GmailIcon } from "~shared/assets/icons";
import { WhatsappIcon } from "~shared/assets/icons";


interface Contact {
    id: number;
    icon: JSX.Element;
    text: string;
  }
  
  const contacts: Contact[] = [
    { id: 1, icon: <WhatsappIcon />, text: '+996 707 379 957' },
    { id: 2, icon: <InstagramIcon />, text: 'instagram_handle' },
    { id: 3, icon: <GmailIcon />, text: 'email@example.com' }
  ];

export const PriceTagContact = () => {
  return (
   <div className='flex flex-col sm:w-[586px] gap-6 justify-center'>
    {contacts.map((contact: Contact) => (
      <div key={contact.id} className='lg:w-[446px] h-[80px] rounded-xl bg-[#F4F4F5] flex items-center justify-between p-6'>
        <div className='flex gap-4 items-center'>
          {contact.icon}
          <p className='text-lg md:text-xl font-medium text-black'>{contact.text}</p>
        </div>
        <ArrowOutwardIcon className='w-6 h-6' />
      </div>
    ))}
  </div>
  )
}
