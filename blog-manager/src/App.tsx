

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import NewArticlePage from "./pages/NewArticlePage";

import { articles } from "./types/article";
import type { Article } from "./types/article";

function App() {
  const [articleList, setArticleList] = useState<Article[]>(articles);

  // Ajouter un article
  function handleAddArticle(newArticle: Article) {
    setArticleList((previousArticles) => [
      ...previousArticles,
      newArticle,
    ]);
  }

  // Modifier un article
  function handleUpdateArticle(updatedArticle: Article) {
    setArticleList((previousArticles) =>
      previousArticles.map((article) => {
        if (article.id === updatedArticle.id) {
          return updatedArticle;
        } else {
          return article;
        }
      }),
    );
  }

  // Supprimer un article
  function handleDeleteArticle(id: string) {
    setArticleList((previousArticles) =>
      previousArticles.filter((article) => article.id !== id),
    );
  }

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/articles"
          element={
            <ArticlesPage
              articles={articleList}
              onUpdateArticle={handleUpdateArticle}
              onDeleteArticle={handleDeleteArticle}
            />
          }
        />

        <Route
          path="/articles/:id"
          element={<ArticleDetailPage articles={articleList} />}
        />

        <Route
          path="/new"
          element={<NewArticlePage onAddArticle={handleAddArticle} />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
