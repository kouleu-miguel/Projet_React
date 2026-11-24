
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

  function handleAddArticle(newArticle: Article) {
    setArticleList((previousArticles) => [
      ...previousArticles,
      newArticle,
    ]);
  }

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/articles"
          element={<ArticlesPage articles={articleList} />}
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
