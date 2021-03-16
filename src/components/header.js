import React from "react"
import { Link } from "gatsby"

import * as headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <Link to="/" className={headerStyles.logo}>
        <span>TT</span><div className={headerStyles.logoDivider}></div><span>Tiger Taylor</span>
      </Link>
      <nav>
        <ul class={headerStyles.navList}>
          <li>
            <Link to="/about" class={headerStyles.navItem}>About</Link>
          </li>
          <li>
            <Link to="/projects" class={headerStyles.navItem}>Projects</Link>
          </li>
          <li>
            <Link to="/contact" class={headerStyles.navItem}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
