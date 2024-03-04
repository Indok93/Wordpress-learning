import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.scss"

export const Navbar = () => {
  return (
    <nav className={styles.navigation}>
        <ul>
            <li><NavLink>Home</NavLink></li>
            <li><NavLink>About</NavLink></li>
            <li><NavLink>Contact</NavLink></li>
        </ul>
    </nav>
  )
}
