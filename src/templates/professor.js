import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default ({ data }) => {
  const professor = data.nodeArticle
  return (
    <Layout>
      <div>
        <h2>{professor.title}</h2>
        <small>
          <em>{Date(professor.created)}</em>
        </small>
        <div
          style={{ maxWidth: `900px`, marginBottom: `1.45rem`, width: `100%` }}
        >
          <Img

            style={{
              maxWidth: '200px',
              height: '200px',
              width: '200px',
              objectFit: 'contain',
              borderRadius: '50%'
            }}
            fluid={
              professor.relationships.field_image.localFile.childImageSharp.fluid
            }
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: professor.body.value }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    nodeArticle(id: { eq: $id }) {
      title
      body {
        value
      }
      created
      relationships {
        field_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 200, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`