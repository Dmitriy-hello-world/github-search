import styles from './ThemeSwitcher.module.scss';
import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';
import { useEffect, useState } from 'react';

interface ThemeSwitcherProps { }

export const ThemeSwitcher = ({ }: ThemeSwitcherProps) => {
  const [ isDark, setIsDark ] = useState(false);
  const ThemeText = isDark ? 'Switch to light' : 'Switch to Dark';
  const ThemeIcon = isDark ? SunIcon : MoonIcon;
 
  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className={styles.switcher} onClick={() => setIsDark(!isDark)}>
      <span>{ThemeText}</span>
      {' '}
      <ThemeIcon />
    </div>
  )
};
