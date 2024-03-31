import en from '../locales/en.json'
import de from '../locales/de.json'
const locales = ['en', 'de'] as const
export type Locale = (typeof locales)[number]

const translations = {
  en,
  de,
} satisfies Record<Locale, Record<string, string | string[]>>

export const getLangFromUrl = (url: URL) => {
  const [, lang] = url.pathname.split('/')
  if (lang in locales) return lang as Locale
  return "en" as const
}

export const useTranslations = (lang: Locale = "de") => {
  return function t<Key extends  keyof (typeof translations)["en"]>(key: Key) {
    const dict = translations[lang] ?? translations.en;
    return dict[key]
  }
}

export const getCurrentLocalizedPath = (url: URL, lang: Locale = "de") => {
  const path = url.pathname.split('/')
  path[1] = lang
  return path.join('/')
}

export const getStaticPaths = () => {
  const paths = [{ params: { lang: 'en' } }, { params: { lang: 'de' } }]

  return paths
}