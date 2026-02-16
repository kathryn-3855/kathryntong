"use client"

import { useLanguage } from "./language-context"
import { translations } from "./translations"

// Type that represents the structure of translations (both en and zh have the same keys)
export type TranslationKeys = typeof translations.en

// Helper function to ensure type safety
function getTranslations(language: "en" | "zh"): TranslationKeys {
  return translations[language] as TranslationKeys
}

export function useTranslations(): TranslationKeys {
  const { language } = useLanguage()
  return getTranslations(language)
}
