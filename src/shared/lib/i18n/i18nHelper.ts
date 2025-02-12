import i18n from './i18n' // убедитесь, что путь правильный
import { setCookie, getCookie } from 'typescript-cookie'

export const setLanguage = (lng: string) => {
  if (i18n.isInitialized && i18n.language !== lng) {
    // проверка инициализации
    i18n.changeLanguage(lng)
    setCookie('language', lng, { expires: 365 }) // сохраняем язык в cookie
  } else {
    i18n.on('initialized', () => {
      i18n.changeLanguage(lng)
      setCookie('language', lng, { expires: 365 })
    })
  }
}

export const getLanguage = (): string => {
  const savedLanguage = getCookie('language')
  return savedLanguage || 'ru'
}
