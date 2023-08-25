import React from "react";
import { Link } from "gatsby";
import Seo from "../components/Seo/Seo";
import Layout from "../components/Layout/Layout";
import *as classes from "../styles/mainPage.module.css";
import { folderTitle } from "../constans/titles";

const HomePage = () => {
  return (
    <Layout>
      <div className={classes.wrapperAllPage}>
        <div className={classes.wrapperLeftFild}>
          {Object.entries(folderTitle).map((it) => {
            return <Link to={`/${it[0]}`} className={classes.wrapperLink} key={it[0]}>
              <button className={classes.menuButton}>
                {it[1]}
              </button>
            </Link>
          })}
        </div>
      </div>
    </Layout>
  )
}

export default HomePage

export const Head = () => {
  return < Seo title={"Юридическая помощь и консультации в Мексике."} description={"Решение миграционных вопросов в получении гражданства и резиденции Мексики. Бесплатные консультации и оказание услуг адвоката в Канкуне. "} robots={"index,follow"} />
}
