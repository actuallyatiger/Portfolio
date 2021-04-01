import React from "react"
import { Link } from "gatsby"

import * as headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <Link to="/">
        <img src="./logo.svg" alt="Tiger Taylor" />
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
    </header>
  )
}

export default Header
