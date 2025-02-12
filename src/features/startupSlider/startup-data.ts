// import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
// import {MakalaBoxIcon} from '~shared/assets/icons'

// import akhmedAkay from './images/akhmed-akay.png';
// import makalaMaks from './images/startup-maksat.png';

// interface Startup {
//   id: number
//   bg: string
//   date: {
//     icon: JSX.Element
//     title: string
//   }
//   person: {
//     icon: JSX.Element
//     title: string
//   }
//   startupProject: {
//     icon: JSX.Element
//     title: string
//     description: string
//     // buttons: {
//     //   buttonViseble: {
//     //     name: string;
//     //     icon: JSX.Element;
//     //   };
//     //   buttonMoreDetails: {
//     //     name: string;
//     //     icon: JSX.Element;
//     //   };
//     // };
//   }
// }

// export const useData = () => {
//   const startupList: Startup[] = [
//     {
//       id: 1,
//       bg: makalaMaks,
//       date: {
//         icon: <CalendarMonthOutlinedIcon />,
//         title: '2 ноября 2024',
//       },
//       person: {
//         icon: <PersonOutlineOutlinedIcon />,
//         title: 'Каныбеков Максат',
//       },
//       startupProject: {
//         icon: <MakalaBoxIcon />,
//         title: 'Makala Box',
//         description:
//           'Makalabox (Коробка Статей) — это университетский веб-сайт, организованный в формате системы тематических блогов, называемых боксами, и включающий элементы новостного портала.',
//         // buttons: {
//         //   buttonViseble: {
//         //     name: "Посетить сайт",
//         //     icon: <ArrowOutwardOutlinedIcon />,
//         //   },
//         //   buttonMoreDetails: {
//         //     name: "Подробнее",
//         //     icon: <KeyboardArrowRightOutlinedIcon />
//         //   }
//         // }
//       },
//     },
//     {
//       id: 2,
//       bg: akhmedAkay,
//       date: {
//         icon: <CalendarMonthOutlinedIcon />,
//         title: '2 ноября 2024',
//       },
//       person: {
//         icon: <PersonOutlineOutlinedIcon />,
//         title: 'Сартов Ахмед',
//       },
//       startupProject: {
//         icon: <MakalaBoxIcon />,
//         title: 'Up-web',
//         description:
//           'Up-web (Коробка Статей) — это университетский веб-сайт, организованный в формате системы тематических блогов, называемых боксами, и включающий элементы новостного портала.',
//         // buttons: {
//         //   buttonViseble: {
//         //     name: "Посетить сайт",
//         //     icon: <ArrowOutwardOutlinedIcon />,
//         //   },
//         //   buttonMoreDetails: {
//         //     name: "Подробнее",
//         //     icon: <KeyboardArrowRightOutlinedIcon />
//         //   }
//         // }
//       },
//     },
//   ]

//   return {
//     startupList
//   }
// }