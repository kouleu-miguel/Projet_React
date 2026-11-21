import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";

export default function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/articles" element={<ArticlesPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
