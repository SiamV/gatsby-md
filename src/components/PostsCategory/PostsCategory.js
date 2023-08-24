import React from "react";
import { Link } from "gatsby";
import *as classes from "../../styles/categoryPage.module.css";

const PostsCategory = ({ folder, url, title }) => {

    return (
        <div className={classes.wrapperOneBottonBlock}>
            <li />
            <Link to={`/${folder}/${url}`} className={classes.wrapperLink}>
                {title}
            </Link>
        </div>

    )
}

export default PostsCategory
