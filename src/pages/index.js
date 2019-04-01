import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import hero from "../images/temple-hero.jpg"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

function IndexPage({ data }) {
  const homePage = data.allNodePage.edges[0].node

  const textStyles = {
    color: "#fefefe",
    background: 'linear-gradient(rgba(255, 0, 0, 0.55), rgba(255, 0, 0, 0.55))',
    display: "inline-block",
    padding: ".5rem 1rem",
    position: 'absolute',
    top: '40%',
  }

  return (
    <Layout hero={hero}
    style={{
      position: 'relative'
    }}
    >
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <h1 style={textStyles}>Nothing Is Beyond You</h1>
    </Layout>
  )
}

export const query = graphql`
  query {
    allNodePage(
      filter: { uuid: { eq: "df75968f-3a2b-45ce-983b-11ad733bb570" } }
    ) {
      edges {
        node {
          uuid
          title
          body {
            value
          }
        }
      }
    }
  }
`

export default IndexPage
