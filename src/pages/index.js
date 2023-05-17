import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout.js";

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
      }
  `);


  const posts = data.allMdx.nodes;
  console.log(posts);


  return (
    <Layout>
        <h1>Hello Frontend Masters!!!</h1>
        <Link to="/about">link to about</Link>

        <h2>Check my blog</h2>
        <ul>
          { posts.map((post) => ( <li key={post.id}><Link to={post.slug}>{post.frontmatter.title}</Link></li> )) }
        </ul>
    </Layout>
  );
}
