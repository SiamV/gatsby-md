import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout/Layout";
import { categoryTitlesSearch } from "../constans/titles";
import *as classes from "../styles/search.module.css"

const Search = ({ data }) => {
    const [search, setSearch] = useState("");
    const posts = data.allMarkdownRemark.nodes;
    const selectedPosts = posts.filter((post) => {
        return post.frontmatter.search.toLowerCase().includes(search.toLowerCase()) || post.html.toLowerCase().includes(search.toLowerCase()) || post.frontmatter.title.toLowerCase().includes(search.toLowerCase())
    }).sort((a, b) => a.frontmatter.category.localeCompare(b.frontmatter.category));

    return (
        <Layout>
            <div className={classes.wrapperSearch}>
                <h2>Введите ключевое слово для поиска:</h2>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => { setSearch(e.target.value) }}
                />
                <p><strong>Наиболее соответствует запросу:</strong></p>
                {search.length > 1 ?
                    selectedPosts.map((it) => {
                        let text = it.html.replace(/<[^>]+>/g, '').split(" ")
                        function findPartial(a, s) {
                            for (var i = 0; i < a.length; ++i)
                                if (a[i].indexOf(s) >= 0)
                                    return i;
                            return -1;
                        }
                        let indexArr = findPartial(text, search)
                        let findStr = text.slice(indexArr - 5, indexArr + 5).join(" ")

                        return (
                            <div key={it.id} className={classes.wrapperOneSearch}>
                                <div>
                                    <Link to={`/${it.frontmatter.folder}/${it.frontmatter.url}`} >
                                        {categoryTitlesSearch[it.frontmatter.category]} / {it.frontmatter.title}
                                    </Link>
                                </div>
                                {findStr.length > 0 ? <div>{`...${findStr}...`}</div> : null}
                            </div>
                        )
                    }
                    )
                    : null}
            </div>
        </Layout>
    )
}

export default Search

export const query = graphql`
query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          url
          title
          folder
          category
          search
        }
        html
        id
      }
    }
  }
`
