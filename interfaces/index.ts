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