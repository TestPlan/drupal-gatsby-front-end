import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

function IndexPage({ data }) {
  const homePage = data.allNodePage.edges[0].node

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>{homePage.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: homePage.body.value }} />
      <Link to="/about">Go to about page</Link>
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
