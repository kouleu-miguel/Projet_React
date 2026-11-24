import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { FormEvent } from "react";
import type { Article } from "../types/article";

interface NewArticlePageProps {
  onAddArticle: (article: Article) => void;
}

function NewArticlePage({ onAddArticle }: NewArticlePageProps) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newArticle: Article = {
      id: Date.now().toString(),
      title: title.trim(),
      category: category.trim(),
      content: content.trim(),
      author: author.trim(),
      createdAt: new Date().toISOString(),
    };

    onAddArticle(newArticle);
    navigate("/articles");
  }

  return (
    <main className="new-article-page">
      <div className="form-container">
        <h2>Créer un nouvel article</h2>
        <p className="form-description">
          Partage tes connaissances et tes expériences.
        </p>

        <form className="article-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Titre</label>
            <input
              id="title"
              type="text"
              placeholder="Ex : Apprendre React"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Catégorie</label>
            <input
              id="category"
              type="text"
              placeholder="Ex : Frontend"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Contenu</label>
            <textarea
              id="content"
              placeholder="Écris ton article ici..."
              value={content}
              onChange={(event) => setContent(event.target.value)}
              rows={7}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">Auteur</label>
            <input
              id="author"
              type="text"
              placeholder="Ton nom"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Ajouter l'article
          </button>
        </form>
      </div>
    </main>
  );
}

export default NewArticlePage;
