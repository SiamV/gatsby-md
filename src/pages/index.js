import React from "react";
import { Link } from "gatsby";
import Seo from "../components/Seo/Seo";
import Layout from "../components/Layout/Layout";
import *as classes from "../styles/mainPage.module.css";


const HomePage = ({ data }) => {
  return (
    <Layout>
      <div className={classes.wrapperAllPage}>
        <div className={classes.wrapperLeftFild}>
          <Link to={"/residence"} className={classes.wrapperLink}>
            <button className={classes.menuButton}>
              РЕЗИДЕНЦИЯ И ГРАЖДАНСТВО
            </button>
          </Link>
          <Link to={"/law"} className={classes.wrapperLink}>
            <button className={classes.menuButton}>
              ЗАКОН И МИГРАЦИОННЫЕ ВОПРОСЫ
            </button>
          </Link>
          <Link to={"/taxation"} className={classes.wrapperLink}>
            <button className={classes.menuButton}>
              НАЛОГООБЛАЖЕНИЕ И ДЕЯТЕЛЬНОСТЬ
            </button>
          </Link>
          <Link to={"/services"} className={classes.wrapperLink}>
            <button className={classes.menuButton}>
              УСЛУГИ И ПОМОЩЬ
            </button>
          </Link>
        </div>
        <div className={classes.wrapperRightField} />
      </div>
    </Layout>
  )
}

export default HomePage

export const Head = () => {
  return < Seo title={"Юридическая помощь и консультации в Мексике."} description={"Решение миграционных вопросов в получении гражданства и резиденции Мексики. Бесплатные консультации и оказание услуг адвоката в Канкуне. "} robots={"index,follow"} />
}


// export const query = graphql`
// query getPage {
//   wpPage(slug: {eq: "main-page"}) {
//     seodata {
//       seotitle
//       seodescription
//       robots
//     }
//     title
//     content
//     images {
//       slider {
//         localFile {
//           childImageSharp {
//             gatsbyImageData(
//               placeholder: BLURRED
//               formats: [AUTO, WEBP]
//             )
//             id
//           }
//           base
//         }
//       }
//     }
//   }
// }
// `
