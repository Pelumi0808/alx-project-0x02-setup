// interfaces/index.ts

export interface CardProps {
  title: string;
  content: string;
}
export interface ButtonProps {
  text: string;
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
}
// interfaces/index.ts

export interface PostProps {
  userId: number;
  id?: number;
  title: string;
  body: string;
}
