
import ArticleList from "../components/ArticleList";
import type { Article } from "../types/article";

interface ArticlesPageProps {
  articles: Article[];
}

function ArticlesPage({ articles }: ArticlesPageProps) {
  return (
    <main>
      <h2>Nos articles</h2>
      <ArticleList articles={articles} />
    </main>
  );
}

export default ArticlesPage;
