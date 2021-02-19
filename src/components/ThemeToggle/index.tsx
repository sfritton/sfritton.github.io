import React, { useCallback, useEffect, useState } from 'react';
import styles from './themeToggle.module.css';

export type Theme = 'modern-dark' | 'modern-light' | 'windows-95';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('modern-dark');

  // default to local storage
  useEffect(() => {
    const rememberedTheme = localStorage.getItem('theme');

    if (!rememberedTheme) return;

    setTheme(rememberedTheme as Theme);
  }, []);

  // whenever the theme updates, store it in local storage
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleChange = useCallback<(event: React.ChangeEvent<HTMLSelectElement>) => void>(
    (e) => setTheme(e.target.value as Theme),
    [],
  );

  return (
    <label className={styles.themeToggle}>
      <span className={styles.label}>Theme</span>
      <select value={theme} onChange={handleChange}>
        <option value="modern-dark">Modern Dark</option>
        <option value="modern-light">Modern Light</option>
        <option value="windows-95">Windows 95</option>
      </select>
    </label>
  );
};
