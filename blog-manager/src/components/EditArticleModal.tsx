
import { useState } from "react";
import type { SyntheticEvent } from "react";
import type { Article } from "../types/article";

interface EditArticleModalProps {
  article: Article;
  onUpdateArticle: (article: Article) => void;
  onClose: () => void;
}

function EditArticleModal({
  article,
  onUpdateArticle,
  onClose,
}: EditArticleModalProps) {
  const [title, setTitle] = useState(article.title);
  const [category, setCategory] = useState(article.category);
  const [content, setContent] = useState(article.content);
  const [author, setAuthor] = useState(article.author);

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    const updatedArticle: Article = {
      ...article,
      title: title.trim(),
      category: category.trim(),
      content: content.trim(),
      author: author.trim(),
    };

    onUpdateArticle(updatedArticle);
    onClose();
  }

  return (
    <div className="modal-overlay">
      <div className="edit-modal">
        <h2>Modifier l'article</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="edit-title">Titre</label>
            <input
              id="edit-title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="edit-category">Catégorie</label>
            <input
              id="edit-category"
              type="text"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="edit-content">Contenu</label>
            <textarea
              id="edit-content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              rows={6}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="edit-author">Auteur</label>
            <input
              id="edit-author"
              type="text"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </div>

          <div className="modal-actions">
            <button type="button" onClick={onClose}>
              Annuler
            </button>

            <button type="submit">
              Enregistrer les modifications
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditArticleModal;
