import React from "react"
import { Helmet } from "react-helmet"
import { Link, graphql, useStaticQuery } from "gatsby"

import * as layoutStyles from "../styles/layout.module.scss"

import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"

const Layout = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          image
          titleTemplate
        }
      }
    }
  `)

  return (
    <div className={layoutStyles.container}>
      <SEO title={props.title} />
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
