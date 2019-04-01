import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/temple-logo-t-box.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#A32036`,
      marginBottom: `1.45rem`,
    }}
  >
    <nav
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <img
          style={{
            display: "inline",
            width: "100px",
          }}
          src={logo}
          alt="Temple University logo"
        />
        <h1 style={{
          margin: 0,
          fontFamily: "serif",
        }}> {siteTitle}</h1>
      </Link>

      <Link
        to="/about"
        style={{
          color: `white`,
          fontFamily: "sans-serif",
          textDecoration: `none`,
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        About
      </Link>

      <Link
        to="/faculty"
        style={{
          color: `white`,
          fontFamily: "sans-serif",
          textDecoration: `none`,
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Faculty
      </Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
