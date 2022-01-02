import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>Weather Forecaster</div>
    </nav>
  )
}
