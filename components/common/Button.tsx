import { ButtonProps } from '@/interfaces';

export default function Button({ text, size, shape }: ButtonProps) {
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button className={`${sizeClasses[size]} ${shape} bg-blue-600 text-white`}>
      {text}
    </button>
  );
}