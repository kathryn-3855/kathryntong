"use client"

import { useLanguage } from "./language-context"
import { translations } from "./translations"

// Type that represents the structure of translations (both en and zh have the same keys)
export type TranslationKeys = typeof translations.en

export function useTranslations(): TranslationKeys {
  const { language } = useLanguage()
  // TypeScript needs this assertion because it sees translations[language] as a union type
  // but we know both en and zh have the same structure, so we can safely assert
  return translations[language] as TranslationKeys
}
