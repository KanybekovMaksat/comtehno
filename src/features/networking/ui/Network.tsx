import { AppBar, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
// import { Link, useNavigate } from 'react-router-dom';
// import { pathKeys } from '~shared/lib/react-router';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface NetworkProps {
  className?: string;
}

export const Network: React.FC<NetworkProps> = (props) => {
  // const navigate = useNavigate()

  interface InfoHeaderItem {
    img: JSX.Element;
    title: string;
  }

  const infoHeader: InfoHeaderItem[] = [
    {
      img: <LocalPhoneIcon className="text-black" />,
      title: "+996 707 379 957",
    },
    {
      img: <EmailIcon className="text-black" />,
      title: "comtehno.kg@gmail.com",
    },
    {
      img: <LocationOnIcon className="text-black" />,
      title: "Виноградная улица, 1/14",
    }
  ];

  return (
    <AppBar position="static" className="bg-white shadow-none font-medium px-6 md:px-20 border-b-2 border-solid border-[#A1A1AA] mb-2">
      <Toolbar className="flex justify-between">
        <div className='flex items-center gap-4'>
          {infoHeader.map((item: InfoHeaderItem, index: number) => (
            <div key={index}>
              <Tooltip title={item.title}>
                <IconButton color="inherit">
                  {item.img}
                </IconButton>
              </Tooltip>
              <Typography className='font-medium' color='black' variant="caption">{item.title}</Typography>
            </div>
          ))}
        </div>
        <div className='flex gap-3'>
          <Tooltip title="Instagram">
            <IconButton>
              <InstagramIcon className='text-black' />
            </IconButton>
          </Tooltip>
          <Tooltip title="WhatsApp">
            <IconButton>
              <WhatsAppIcon className='text-black' />
            </IconButton>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
}
