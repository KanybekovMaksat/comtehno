// import WhatsAppIcon from '@mui/icons-material/WhatsApp'
// import TelegramIcon from '@mui/icons-material/Telegram'
// import YouTubeIcon from '@mui/icons-material/YouTube'
// import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload'
// import GoogleIcon from '@mui/icons-material/Google'
// import GTranslateIcon from '@mui/icons-material/GTranslate'
// import ExtensionIcon from '@mui/icons-material/Extension'

import Marquee from 'react-fast-marquee'
import { PartnersCard } from './PartnersCard'
import { partnerTypes } from '~entities/partner'

export const PartnersList: React.FC<{ data: partnerTypes.Partner[] }> = ({
  data,
}) => {
  // const parnerLogoList: PartnerCard[] = [
  //   {
  //     slug: 'whatsapp',
  //     icon: <WhatsAppIcon className="r-md:text-4xl text-5xl text-green" />,
  //     nameLogo: 'WhatsApp',
  //   },
  //   {
  //     slug: 'whatsapp',
  //     icon: <TelegramIcon className="r-md:text-4xl text-5xl text-blue" />,
  //     nameLogo: 'Telegram',
  //   },
  //   {
  //     slug: 'whatsapp',
  //     icon: <YouTubeIcon className="r-md:text-4xl text-5xl text-red" />,
  //     nameLogo: 'YouTube',
  //   },
  //   {
  //     slug: 'whatsapp',
  //     icon: (
  //       <AssuredWorkloadIcon className="r-md:text-4xl text-5xl text-[#392fc1]" />
  //     ),
  //     nameLogo: 'Assured',
  //   },
  //   {
  //     slug: 'whatsapp',
  //     icon: <GoogleIcon className="r-md:text-4xl text-5xl text-blue" />,
  //     nameLogo: 'Google',
  //   },
  //   {
  //     slug: 'whatsapp',
  //     icon: <GTranslateIcon className="r-md:text-4xl text-5xl" />,
  //     nameLogo: 'GTranslate',
  //   },
  //   {
  //     slug: 'whatsapp',
  //     icon: <ExtensionIcon className="r-md:text-4xl text-5xl" />,
  //     nameLogo: 'Extension',
  //   },
  // ]

  return (
    <Marquee
      direction="left"
      speed={100}
      gradient={true}
      className="r-md:mb-20 mb-[100px] r-md:h-20 h-[200px] w-full"
    >
      <div className="flex r-md:gap-4 r-md:mr-4 gap-6 mr-6">
        {data.map((partnerCard: partnerTypes.Partner, index: number) => (
          <PartnersCard key={index} {...partnerCard} />
        ))}
      </div>
    </Marquee>
  )
}
