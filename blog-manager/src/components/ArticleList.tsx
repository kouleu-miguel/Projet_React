
import type { Article } from "../types/article";
import ArticleCard from "./ArticleCard";

interface ArticleListProps {
  articles: Article[];
  onUpdateArticle: (article: Article) => void;
  onDeleteArticle: (id: string) => void;
}

function ArticleList({
  articles,
  onUpdateArticle,
  onDeleteArticle,
}: ArticleListProps) {
  return (
    <section className="article-list">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          onUpdateArticle={onUpdateArticle}
          onDeleteArticle={onDeleteArticle}
        />
      ))}
    </section>
  );
}

export default ArticleList;
