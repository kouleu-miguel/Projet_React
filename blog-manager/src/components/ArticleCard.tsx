
import { useState } from "react";
import { Link } from "react-router-dom";
import type { Article } from "../types/article";
import EditArticleModal from "./EditArticleModal";

interface ArticleCardProps {
  article: Article;
  onUpdateArticle: (article: Article) => void;
  onDeleteArticle: (id: string) => void;
}

function ArticleCard({
  article,
  onUpdateArticle,
  onDeleteArticle,
}: ArticleCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  function handleDelete() {
    const confirmed = window.confirm(
      "Voulez-vous vraiment supprimer cet article ?",
    );

    if (confirmed) {
      onDeleteArticle(article.id);
    }
  }

  return (
    <>
      <article className="article-card">
        <Link
          to={`/articles/${article.id}`}
          className="article-card-link"
        >
          <h2>{article.title}</h2>

          <p>Catégorie : {article.category}</p>

          <p>{article.content}</p>

          <p>Auteur : {article.author}</p>

          <p>
            Publié le :{" "}
            {new Date(article.createdAt).toLocaleDateString("fr-FR")}
          </p>
        </Link>

        <div className="article-actions">
          <button
            type="button"
            onClick={() => setIsEditing(true)}
          >
            Modifier
          </button>

          <button type="button" onClick={handleDelete}>
            Supprimer
          </button>
        </div>
      </article>

      {isEditing && (
        <EditArticleModal
          article={article}
          onUpdateArticle={onUpdateArticle}
          onClose={() => setIsEditing(false)}
        />
      )}
    </>
  );
}

export default ArticleCard;
