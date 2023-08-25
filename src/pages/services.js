import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo/Seo";
import Layout from "../components/Layout/Layout";
import PostsCategory from "../components/PostsCategory/PostsCategory";
import BackButton from "../components/BackButton/BackButton";
import *as classes from "../styles/categoryPage.module.css";

const Services = ({ data }) => {
    const posts = data.allMarkdownRemark.nodes
    return (
        <Layout>
            <div className={classes.wrapperCategoryBlock}>
                <h1>УСЛУГИ И ПОМОЩЬ</h1>
                <div className={classes.wrapperContentBlock}>
                    <h2>Задачки со звездочкой</h2>
                    {posts.filter(it => it.frontmatter.category === "hard-tasks")
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
                    <h2>Работа с документами</h2>
                    {posts.filter(it => it.frontmatter.category === "services-in-institutions")
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
                    <h2>Услуги в учреждениях</h2>
                    {posts.filter(it => it.frontmatter.category === "work-with-documents")
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
            <BackButton path={'/'} />
        </Layout>
    )
}

export default Services

export const Head = () => {
    return < Seo title={"Оказание услуг и помощи при работе в миграционном офисе и других учреждениях Мексики."} description={"Собрать пакет документов в миграционный офис для подачи на резиденцию, услуги переводчика в Канкуне или помощь при сопровождении родов в Мексике."} robots={"index,follow"} />
}

export const query = graphql`
query MyQuery {
    allMarkdownRemark(filter: {frontmatter: {folder: {eq: "services"}}}) {
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
