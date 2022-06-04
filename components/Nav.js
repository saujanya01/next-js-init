import navStyles from "../styles/Nav.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
        <ul className={navStyles.navUl}>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href={"/details"}>Details</Link>
            </li>
            <li>
                <Link href={"/about"}>About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav;