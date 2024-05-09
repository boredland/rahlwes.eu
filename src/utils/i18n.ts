import i18next from "i18next";
import type {
	TranslationFunction,
	TranslationFunctionArgs,
	TranslationKeys,
} from "translations";
import de from "../locales/de.json";
import en from "../locales/en.json";

const locales = ["en", "de"] as const;
export type Locale = (typeof locales)[number];

const translations = {
	en,
	de,
} satisfies Record<Locale, Record<string, string | string[]>>;

export const getLangFromUrl = (url: URL) => {
	const [, lang] = url.pathname.split("/");
	if (lang in locales) return lang as Locale;
	return "en" as const;
};

type Value<Key extends TranslationKeys> = (typeof translations.en)[Key];

export const useTranslations = (lng: Locale = "de") => {
	return <Key extends TranslationKeys>(
		...args: TranslationFunctionArgs<Key>
	) => {
		const dict = translations[lng] ?? translations.en;
		i18next.init({
			lng,
			resources: {
				[lng]: {
					translation: dict,
				},
			},
		});

		return i18next.t(args[0], {
			returnObjects: true,
			...(args.at(1) as Record<string, string> | undefined),
		}) as Value<Key>;
	};
};

export const getCurrentLocalizedPath = (url: URL, lang: Locale = "de") => {
	const path = url.pathname.split("/");
	path[1] = lang;
	return path.join("/");
};

export const getStaticPaths = () => {
	const paths = [{ params: { lang: "en" } }, { params: { lang: "de" } }];
	return paths;
};
