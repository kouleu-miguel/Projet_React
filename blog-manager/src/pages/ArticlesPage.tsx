
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
  return (
    <main>
      <h2>Nos articles</h2>

      <ArticleList
        articles={articles}
        onUpdateArticle={onUpdateArticle}
        onDeleteArticle={onDeleteArticle}
      />
    </main>
  );
}

export default ArticlesPage;
