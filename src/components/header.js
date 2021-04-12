import React from "react"
import { Link } from "gatsby"

import * as headerStyles from "../styles/header.module.scss"

import logoSVG from "../images/logo.svg"
import menuIcon from "../images/menu.svg"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <Link to="/" className={headerStyles.logo}>
        <img src={logoSVG} alt="Tiger Taylor" />
      </Link>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link to="/about" className={headerStyles.navItem}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className={headerStyles.navItem}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className={headerStyles.navItem}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <img src={menuIcon} alt="Menu" className={headerStyles.menu} />
    </header>
  )
}

export default Header
