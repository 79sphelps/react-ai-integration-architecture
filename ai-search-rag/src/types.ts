export interface Document {
  id: string;
  title: string;
  content: string;
}

export interface RankedDocument extends Document {
  score: number;
}

export interface RAGResponse {
  answer: string;
  sources: Document[];
}
