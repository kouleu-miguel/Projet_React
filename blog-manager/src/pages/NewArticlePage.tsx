
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

  const [errors, setErrors] = useState({
    title: "",
    category: "",
    content: "",
  });

  function validateForm() {
    const newErrors = {
      title: "",
      category: "",
      content: "",
    };

    if (title.trim() === "") {
      newErrors.title = "Le titre est obligatoire.";
    }

    if (category.trim() === "") {
      newErrors.category = "La catégorie est obligatoire.";
    }

    if (content.trim() === "") {
      newErrors.content = "Le contenu est obligatoire.";
    }

    setErrors(newErrors);

    return (
      newErrors.title === "" &&
      newErrors.category === "" &&
      newErrors.content === ""
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

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

            {errors.title && (
              <p className="error-message">{errors.title}</p>
            )}
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

            {errors.category && (
              <p className="error-message">{errors.category}</p>
            )}
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

            {errors.content && (
              <p className="error-message">{errors.content}</p>
            )}
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
