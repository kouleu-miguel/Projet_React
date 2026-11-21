export interface Article {
  id: string;
  title: string;
  category: string;
  content: string;
  author: string;
  createdAt: string;
}
export const articles : Article[] = [
  {
    id: "1",
    title: "Apprendre React",
    category: "Frontend",
    content: "Introduction à React.",
    author: "Miguel",
    createdAt: "2026-11-18T10:00:00.000Z",
  },
  {
    id: "2",
    title: "Comprendre TypeScript",
    category: "Programmation",
    content: "Introduction à TypeScript.",
    author: "Miguel",
    createdAt: "2026-11-17T10:00:00.000Z",
  },
];