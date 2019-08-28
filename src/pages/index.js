import React from "react";
import Layout from "./../components/layout.js";
import { graphql } from "gatsby";

import Gallery from "../components/gallery.js";

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
                aspectRatio
                src
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default ({ data }) => {
  return (
    <Layout>
      {/* data.allSanityMoment.edges.map(({ node }) => (
      <>
        <h3>{node.title}</h3>
        <Image fluid={node.media.asset.fluid} />
      </>
    )) */}
      <Gallery
        images={data.allSanityMoment.edges.map(({ node }) => ({
          ...node.media.asset.fluid,
          caption: node.title,
        }))}
        itemsPerRow={[2, 3]}
      />
    </Layout>
  );
};
