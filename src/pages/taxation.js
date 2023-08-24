import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo/Seo";
import Layout from "../components/Layout/Layout";
import PostsCategory from "../components/PostsCategory/PostsCategory";
import *as classes from "../styles/categoryPage.module.css";

const Taxation = ({ data }) => {
    const posts = data.allMarkdownRemark.nodes
    return (
        <Layout>
            <div className={classes.wrapperCategoryBlock}>
                <h1>НАЛОГООБЛАЖЕНИЕ И ДЕЯТЕЛЬНОСТЬ</h1>
                <div className={classes.wrapperContentBlock}>
                    <h2>Физические лица:</h2>
                    {posts.filter(it => it.frontmatter.category === "individuales")
                        .sort((a, b) => a.frontmatter.sort - b.frontmatter.sort).map(post => {
                            return (
                                <div key={post.id}>
                                    <PostsCategory
                                        folder={post.frontmatter.folder}
                                        url={post.frontmatter.url}
                                        title={post.frontmatter.title}
                                    />
                                </div>
                            )
                        })}
                    <h2>Юридические лица:</h2>
                    {posts.filter(it => it.frontmatter.category === "organizations")
                        .sort((a, b) => a.frontmatter.sort - b.frontmatter.sort).map(post => {
                            return (
                                <div key={post.id}>
                                    <PostsCategory
                                        folder={post.frontmatter.folder}
                                        url={post.frontmatter.url}
                                        title={post.frontmatter.title}
                                    />
                                </div>
                            )
                        })}
                </div>
            </div>

        </Layout>
    )
}

export default Taxation

export const Head = () => {
    return < Seo title={"Раздел по открытию фирмы в Мексике или постановки на учет в налоговую страны."} description={"Как открыть фирму в Мексике и какие налоги необходимо платить. Индивидуальные предприниматели и корпорации."} robots={"index,follow"} />
}

export const query = graphql`
query MyQuery {
    allMarkdownRemark(filter: {frontmatter: {folder: {eq: "taxation"}}}) {
      nodes {
        frontmatter {
          title
          folder
          category
          url
          seoTitle
          seoDescription
          robots
          sort
        }
        id
      }
    }
  }
`
