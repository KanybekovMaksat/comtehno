// import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next'
// import { getLanguage, setLanguage } from '~shared/lib/i18n'

// export const SelectedLanguage = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false)
//   const { i18n } = useTranslation()

//   useEffect(() => {
//     const savedLanguage = getLanguage()
//     if (savedLanguage && savedLanguage !== i18n.language) {
//       i18n.changeLanguage(savedLanguage)
//     }
//   }, [i18n])

//   const languageMap: { [key: string]: string } = {
//     en: 'English',
//     ru: 'Русский',
//     ky: 'Кыргызча',
//   }

//   const currentLanguage = languageMap[i18n.language] || 'Language'

//   const handleLanguageChange = (lng: string) => {
//     setLanguage(lng)
//     window.location.reload()
//   }

//   const theme = useTheme()
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

//   return (
//     <div className="relative r-md:hidden justify-self-end">
//     <button
//       className="text-[black] text-md font-medium hover:text-gray-400 flex items-center"
//       onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//       >
//       {/* <LanguageIcon className="mr-2" /> */}
//       {currentLanguage}
//       <svg
//         className={`w-5 h-5 ml-2 transition-transform ${
//           isDropdownOpen ? 'rotate-180' : ''
//         }`}
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" ></path>
//       </svg>
//     </button>
//     {isDropdownOpen && (
//       <div className="absolute right-0 mt-2 bg-white text-gray-800 rounded-md shadow-lg z-50">
//         <ul className="py-2">
//           {Object.entries(languageMap).map(([key, label]) => (
//             <li key={key}>
//               <button
//                 className="text-black block px-4 py-2 hover:bg-primary hover:text-white w-full text-left"
//                 onClick={() => handleLanguageChange(key)}
//               >
//                 {label}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     )}
//   </div>
//   )
// };