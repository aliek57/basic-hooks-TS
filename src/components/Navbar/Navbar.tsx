import { NavLink } from "react-router-dom"
import styles from './Navbar.module.css'

const Navbar: React.FC = () => {
  return (
    <nav>
        <NavLink to='/' className={({ isActive }) => isActive ? styles.active : undefined}>Home</NavLink>
        <NavLink to='/state' className={({ isActive }) => isActive ? styles.active : undefined}>useState</NavLink>
        <NavLink to='/effect' className={({ isActive }) => isActive ? styles.active : undefined}>useEffect</NavLink>
        <NavLink to='/memo' className={({ isActive }) => isActive ? styles.active : undefined}>useMemo</NavLink>
    </nav>
  )
}

export default Navbar