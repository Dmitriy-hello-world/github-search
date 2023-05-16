import { ThemeSwitcher } from 'components/ThemeSwitcher';
import styles from './TheHeader.module.scss';

interface TheHeaderProps { }

export const TheHeader = ({ }: TheHeaderProps) => (
  <div className={styles.header}>
    <div className={styles.logo}>
      DevFinder
    </div>
    <ThemeSwitcher />
  </div>
);
