import React from "react";
import Seo from "../components/Seo/Seo";
import Layout from "../components/Layout/Layout";

const Search = ({ data }) => {
    return (
        <Layout>
            <div>Здесь будет реализована система поиска</div>
        </Layout>
    )
}

export default Search

export const Head = ({ data }) => {
    return < Seo title={"seodata.seotitle"} description={"seodata.seodescription"} robots={"seodata.robots"} />
}
