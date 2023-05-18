import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout.js";

import { imageWrapper }  from '../styles/index.module.css';




export default function IndexPage() {

  const data = useStaticQuery(graphql`
      query GetBlogPosts {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
          nodes {
            id
            slug
            frontmatter {
              date
              description
              title
            }
          }
        }
        allSanityEpisode(
            sort: {fields: date, order: DESC}
            limit: 10
            filter: {youtubeID: {ne: "null"}}
        ) {
            nodes {
                id
                guest {
                    name
                }
                title
                gatsbyPath(filePath: "/episodes/{SanityEpisode.slug__current}")
            }
        }
      }
  `);


  const posts = data.allMdx.nodes;
  const episodes = data.allSanityEpisode.nodes;

  return (
    <Layout>
        <div className={imageWrapper}>
          <StaticImage 
              src="../images/ivana-la-61jg6zviI7I-unsplash.jpg" 
              alt="corgi" 
              placeholder="dominantColor"
              width={300}
              height={300}
          />
        </div>
        
        <h1>Hello Frontend Masters!!!</h1>
        <Link to="/about">link to about</Link>

        <h2>Check my blog</h2>
        <ul>
          { posts.map((post) => ( <li key={post.id}><Link to={post.slug}>{post.frontmatter.title}</Link></li> )) }
        </ul>

        <h2>Latest episodes</h2>
        <ul>
          { episodes.map((episode) => ( <li key={episode.id}><Link to={episode.gatsbyPath}>{episode.title}</Link></li> )) }
        </ul>
    </Layout>
  );
}
