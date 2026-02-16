"use client"

import { useLanguage } from "./language-context"
import { translations } from "./translations"

export type TranslationKeys = typeof translations.en

export function useTranslations(): TranslationKeys {
  const { language } = useLanguage()
  return translations[language] as TranslationKeys
}
