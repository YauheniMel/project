export function toggleTheme(value: 'light' | 'dark') {
  localStorage.setItem('theme', value);
}

export function getThemeValue(): 'light' | 'dark' | null {
  return localStorage.getItem('theme') as 'light' | 'dark' | null;
}
