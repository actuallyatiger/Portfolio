import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import * as p404Styles from "../styles/404.module.scss"

const Page404 = () => {
  return (
    <Layout title="Page Not Found" className={p404Styles.container}>
      <h1 className={p404Styles.h1}>Page Not Found</h1>
      <p className={p404Styles.p}>Sorry, that page could not be found. </p>
      <Link to="/" className={p404Styles.linkHome}>
        Return to homepage.
      </Link>
    </Layout>
  )
}

export default Page404
