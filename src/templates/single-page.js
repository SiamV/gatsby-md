import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo/Seo";
import Layout from "../components/Layout/Layout";
import *as classes from "../styles/singlePage.module.css";


const SingleTourMexico = ({ data }) => {
  const { html } = data.markdownRemark;
  return (
    <Layout>
      <div className={classes.wrapperSinglePage}>
        <div dangerouslySetInnerHTML={{ __html: html }} className={classes.contentSinglePage}/>
      </div>
    </Layout>
  )
}

export default SingleTourMexico

export const Head = ({ data }) => {
  const { robots, seoDescription, seoTitle } = data.markdownRemark.frontmatter;
  return < Seo title={seoTitle} description={seoDescription} robots={robots} />
}

export const query = graphql`
query MyQuery($url: String) {
  markdownRemark(frontmatter: {url: {eq: $url}}) {
    html
    frontmatter {
      robots
      seoDescription
      seoTitle
    }
  }
}
`
