import React from "react"

import * as layoutStyles from "../styles/layout.module.scss"

import Seo from "./seo"
import Header from "./header"
import Footer from "./footer"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <Seo title={props.title} />
      <div className={layoutStyles.content}>
        <Header />
        <div className={layoutStyles.children}>{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
