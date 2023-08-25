import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo/Seo";
import Layout from "../components/Layout/Layout";
import PostsCategory from "../components/PostsCategory/PostsCategory";
import BackButton from "../components/BackButton/BackButton";
import *as classes from "../styles/categoryPage.module.css";

const LawMigration = ({ data }) => {
    const posts = data.allMarkdownRemark.nodes
    return (
        <Layout>
            <div className={classes.wrapperCategoryBlock}>
                <h1>ЗАКОН И МИГРАЦИОННЫЕ ВОПРОСЫ</h1>
                <div className={classes.wrapperContentBlock}>
                    <h2>Ведение иммиграционных судебных процессов:</h2>
                    {posts.filter(it => it.frontmatter.category === "immigration")
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
                    <h2>Семейный кодекс</h2>
                    {posts.filter(it => it.frontmatter.category === "family")
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
                    <h2>Административный кодекс</h2>
                    {posts.filter(it => it.frontmatter.category === "administrative")
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
                    <h2>Защита прав человека и другие судебные инстанции</h2>
                    {posts.filter(it => it.frontmatter.category === "protection-human")
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
                    <h2>ДТП</h2>
                    {posts.filter(it => it.frontmatter.category === "accident-auto")
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

export default LawMigration

export const Head = () => {
    return < Seo title={"Консультация с адвокатом в Мексике по законам страны и оказание помощи."} description={"Работаем по защите прав человека в Мексике. Оказываем помощь в судебных инстанциях по миграционным, семейным или административным вопросам."} robots={"index,follow"} />
}

export const query = graphql`
query MyQuery {
    allMarkdownRemark(filter: {frontmatter: {folder: {eq: "law"}}}) {
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
