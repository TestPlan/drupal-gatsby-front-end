/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, hero }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        style={
          hero
            ? {
                backgroundImage: `url(${hero})`,
                backgroundRepeat: "no-repeat",
                maxWidth: "1400px",
                margin: "0 auto",
                boxShadow: "0 20px 48px rgba(22,30,42,0.16)",
                minHeight: "100vh",
              }
            : {
                maxWidth: "1400px",
                margin: "0 auto",
                boxShadow: "0 20px 48px rgba(22,30,42,0.16)",
                minHeight: "100vh",
              }
        }
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>© {new Date().getFullYear()}</footer>
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
