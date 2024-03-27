import acceptLanguage from "accept-language";

export const getHeadersLocale = (acceptLanguageHeader = "en") => {
  acceptLanguage.languages(["en", "de"]);
  const locale = acceptLanguage.get(acceptLanguageHeader);
  return locale as "en" | "de";
};