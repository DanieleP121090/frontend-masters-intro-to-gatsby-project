import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout.js";

export default function AboutPage() {
  return (
    <Layout title="About" description="Description di about">
        <h1>Page About</h1>
        <Link to="/">vai alla home</Link>
    </Layout>
    
  );
}
