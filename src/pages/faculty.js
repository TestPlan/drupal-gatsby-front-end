import React, { Component } from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

class ProfessorsTemplate extends Component {
  render() {
    const professors = this.props.data.allNodeArticle.edges

    return (
      <Layout>
        <h1>Faculty</h1>
        <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr'

        }}
        >
          {professors.map(({ node }) => (
            <div key={node.uuid} style={{ marginBottom: 150 }}>
              <Link
                to={`faculty/${node.title
                  .toLowerCase()
                  .toLowerCase()
                  .replace(/ /g, "-")
                  .replace(/\./g, "")}`}
              >
                {node.relationships &&
                  node.relationships.field_image &&
                  node.relationships.field_image.localFile &&
                  node.relationships.field_image.localFile.childImageSharp &&
                  node.relationships.field_image.localFile.childImageSharp
                    .fluid && (
                    <Img
                      style={{
                        maxWidth: "200px",
                        height: "200px",
                        width: "200px",
                        objectFit: "contain",
                        borderRadius: "50%",
                      }}
                      fluid={
                        node.relationships.field_image.localFile.childImageSharp
                          .fluid
                      }
                    />
                  )}
              </Link>

              <Link
                to={`faculty/${node.title
                  .toLowerCase()
                  .toLowerCase()
                  .replace(/ /g, "-")
                  .replace(/\./g, "")}`}
              >
                <h2>{node.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

export default ProfessorsTemplate

export const articleQuery = graphql`
  query professorsQuery {
    allNodeArticle {
      edges {
        node {
          uuid
          title
          relationships {
            field_tags {
              name
            }
            field_image {
              filename
              url
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
    }
  }
`
