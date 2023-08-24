import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo/Seo";
import Layout from "../components/Layout/Layout";
import PostsCategory from "../components/PostsCategory/PostsCategory";
import *as classes from "../styles/categoryPage.module.css";
import BackButton from "../components/BackButton/BackButton";

const Residence = ({ data }) => {
    const posts = data.allMarkdownRemark.nodes
    return (
        <Layout>
            <div className={classes.wrapperCategoryBlock}>
                <h1>РЕЗИДЕНЦИЯ И ГРАЖДАНСТВО</h1>
                <div className={classes.wrapperContentBlock}>
                    <h2>ВНЖ</h2>
                    {posts.filter(it => it.frontmatter.category === "temprorary")
                        .sort((a, b) => a.frontmatter.sort - b.frontmatter.sort).map(post => {
                            return (
                                <div key={post.id} >
                                    <PostsCategory
                                        folder={post.frontmatter.folder}
                                        url={post.frontmatter.url}
                                        title={post.frontmatter.title}
                                    />
                                </div>

                            )
                        })}
                    <h2>ПМЖ</h2>
                    {posts.filter(it => it.frontmatter.category === "permanent")
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
                    <h2>Натурализация</h2>
                    {posts.filter(it => it.frontmatter.category === "naturalizacion")
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
            <BackButton path={'/'}/>
        </Layout >
    )
}

export default Residence

export const Head = () => {
    return < Seo title={"Получение ВНЖ и ПМЖ в Мексике по браку или рождению ребенка."} description={"Раздел перечня услуг и помощи в получении резиденции и гражданства Мексики. Выберете подходящую для вас программу для консультации."} robots={"index,follow"} />
}

export const query = graphql`
query MyQuery {
    allMarkdownRemark(filter: {frontmatter: {folder: {eq: "residence"}}}) {
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
