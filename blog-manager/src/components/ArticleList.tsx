import type { Article } from "../types/article";
import ArticleCard from "./ArticleCard";

interface ArticleListProps{
    articles : Article[] 
}
export default function ArticleList({articles} : ArticleListProps){
    return(
        <section className="article-list">
            {articles.map((article) => (
                <ArticleCard
                    key={article.id}
                    article={article}
                />
            ))}
        </section>
    )
}