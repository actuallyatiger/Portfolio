import React from "react"

import Layout from "../components/layout"

import * as indexStyles from "../styles/index.module.scss"

import files from "../images/files.svg"

const Home = () => {
  return (
    <Layout title="Home">
      <div className={indexStyles.hero}>
        <h1>Tiger Taylor</h1>
        <img src={files} alt="'Page Loaded' inside a text editor" />
      </div>
    </Layout>
  )
}

export default Home
