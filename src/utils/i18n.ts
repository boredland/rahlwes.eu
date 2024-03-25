import en from '../locales/en.json'
import de from '../locales/de.json'
const locales = ['en', 'de'] as const
export type Locale = (typeof locales)[number]

const translations = {
  en,
  de,
} satisfies Record<Locale, Record<string, string>>

export const getLangFromUrl = (url: URL) => {
  const [, lang] = url.pathname.split('/')
  if (lang in locales) return lang as Locale
  return "en" as const
}

export const useTranslations = (lang: string) => {
  return function t(key: keyof (typeof translations)["en"]) {
    const dict = translations[lang] ?? translations.en;
    return dict[key]
  }
}

export const getCurrentLocalizedPath = (url: URL, lang: Locale) => {
  const path = url.pathname.split('/')
  path[1] = lang
  return path.join('/')
}

export const getStaticPaths = () => {
  const paths = [{ params: { lang: 'en' } }, { params: { lang: 'de' } }]

  return paths
}