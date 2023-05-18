import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout.js";

export const query = graphql`
    query CocktailQuery {
      file(name: {eq: "cocktail"}) {
        childImageSharp {
          gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
      }
    }
`;


export default function AboutPage({ data }) {
  console.log(data);
  return (
    <Layout title="About" description="Description di about">

        <GatsbyImage
            image={getImage(data.file)}
            alt="cocktail"
          /> 

        <h1>Page About</h1>
        <Link to="/">vai alla home</Link>
    </Layout>
    
  );
}
