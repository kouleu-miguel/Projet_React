import ArticleList from "../components/ArticleList";
import { articles } from "../types/article";

export default function ArticlesPage() {
  return (
    <main>
      <h2>Nos articles</h2>

      <ArticleList articles={articles} />
    </main>
  );
}
