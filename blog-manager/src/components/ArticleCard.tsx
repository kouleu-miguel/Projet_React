
import { Link } from "react-router-dom";
import type { Article } from "../types/article";

interface ArticleCardProps {
  article: Article;
}

function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      to={`/articles/${article.id}`}
      className="article-card-link"
    >
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
    </Link>
  );
}

export default ArticleCard;
