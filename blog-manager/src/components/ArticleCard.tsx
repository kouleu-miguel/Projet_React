import type { Article } from "../types/article";

interface ArticleCardProps{
    article : Article
}
export default function ArticleCard ({article}: ArticleCardProps){
    return(
        <article className="article-card">
            <h2>{article.title}</h2>

            <p>Catégorie : {article.category}</p>

            <p>{article.content}</p>

            <p>Auteur : {article.author}</p>

            <p>
                 Publié le :{" "}
                {new Date(article.createdAt).toLocaleDateString("fr-FR")}
            </p>
        </article>

    )

}