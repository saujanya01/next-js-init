import Article from "./Article";
import articleStyle from "../styles/Article.module.css";

const ArticleList = ({articles}) => {
  return (
    <div className={articleStyle.grid}>
        {articles.map((article, index)=>{
          return (
            <Article key={index} article={article} />
          )
        })}
    </div>
  )
}

export default ArticleList;