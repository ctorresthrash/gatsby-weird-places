import React from "react"
import Layout from "./../components/layout.js"
import { graphql } from "gatsby"
import Image from "gatsby-image"

export const query = graphql`
  {
    allSanityMoment {
      edges {
        node {
          id
          title
          location
          media {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

export default ({ data }) => (
  <Layout>
    {data.allSanityMoment.edges.map(({ node }) => (
      <>
        <h3>{node.title}</h3>
        <Image fluid={node.media.asset.fluid} />
      </>
    ))}
  </Layout>
)
