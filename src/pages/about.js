import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

function AboutPage({ data }) {
  const aboutPage = data.allNodePage.edges[0].node

  return (
    <Layout>
      <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
      <h1>{aboutPage.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: aboutPage.body.value }} />
      <Link to="/">Go to home page</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    allNodePage(
      filter: { uuid: { eq: "5bd8b12f-4125-482c-a45d-d21d63f038da" } }
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

export default AboutPage
