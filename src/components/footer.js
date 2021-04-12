import React from "react"

import * as footerStyles from "../styles/footer.module.scss"

const Footer = () => {
  const scrollTo = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  return (
    <footer className={footerStyles.footer}>
      <h3>Tiger Taylor © 2021</h3>
      <button className={footerStyles.toTop} onClick={() => scrollTo()}>
        Back to Top
      </button>
    </footer>
  )
}

export default Footer
