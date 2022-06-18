import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src="/assets/Logo.svg" alt="" />
      </div>
    </header>
  );
}
