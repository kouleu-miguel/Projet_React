import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";

export default function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/articles" element={<ArticlesPage />} />

        <Route
          path="/articles/:id"
          element={<ArticleDetailPage />}
        />
      </Routes>

      <Footer />
    </div>
  );
}
