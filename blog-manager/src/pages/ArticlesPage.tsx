
import { useState } from "react";
import ArticleList from "../components/ArticleList";
import type { Article } from "../types/article";

interface ArticlesPageProps {
  articles: Article[];
  onUpdateArticle: (article: Article) => void;
  onDeleteArticle: (id: string) => void;
}

function ArticlesPage({
  articles,
  onUpdateArticle,
  onDeleteArticle,
}: ArticlesPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  // Récupérer les catégories disponibles
  const categories = [...new Set(articles.map((article) => article.category))];

  // Filtrer les articles
  let filteredArticles = articles.filter((article) => {
    const matchesTitle = article.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" || article.category === selectedCategory;

    return matchesTitle && matchesCategory;
  });

  // Trier les articles par date
  filteredArticles = [...filteredArticles].sort((a, b) => {
    if (sortOrder === "newest") {
      return (
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
      );
    }

    return (
      new Date(a.createdAt).getTime() -
      new Date(b.createdAt).getTime()
    );
  });

  return (
    <main>
      <h2>Nos articles</h2>

      <section className="article-filters">
        <input
          type="text"
          placeholder="Rechercher un article..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="">Toutes les catégories</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          value={sortOrder}
          onChange={(event) => setSortOrder(event.target.value)}
        >
          <option value="newest">Plus récent</option>
          <option value="oldest">Plus ancien</option>
        </select>
      </section>

      {filteredArticles.length > 0 ? (
        <ArticleList
          articles={filteredArticles}
          onUpdateArticle={onUpdateArticle}
          onDeleteArticle={onDeleteArticle}
        />
      ) : (
        <p className="no-articles">
          Aucun article ne correspond à votre recherche.
        </p>
      )}
    </main>
  );
}

export default ArticlesPage;
