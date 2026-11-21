import { useParams } from "react-router-dom";
import { articles } from "../types/article";

export default function ArticleDetailPage() {
  const { id } = useParams();

  const article = articles.find((article) => article.id === id);

  if (!article) {
    return <p>Article introuvable.</p>;
  }

  return (
    <main className="article-detail">
      <h2>{article.title}</h2>

      <p>Catégorie : {article.category}</p>

      <p>{article.content}</p>

      <p>Auteur : {article.author}</p>

      <p>
        Publié le :{" "}
        {new Date(article.createdAt).toLocaleDateString("fr-FR")}
      </p>
    </main>
  );
}

