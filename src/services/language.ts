export function toggleLanguage(value: 'eng' | 'by') {
  localStorage.setItem('language', value);
}

export function getLanguageValue(): 'eng' | 'by' | null {
  return localStorage.getItem('language') as 'eng' | 'by' | null;
}
