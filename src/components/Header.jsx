// Header.jsx
import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}