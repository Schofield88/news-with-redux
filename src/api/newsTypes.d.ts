interface Source {
  name: string;
  id: string | null;
}

interface Article {
  author: string | null;
  content: string | null;
  description: string;
  publishedAt: Date;
  source: Source;
  title: string;
  url: string;
  urlToImage: string | null;
}

interface NewsResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export { NewsResponse, Article, Source };
