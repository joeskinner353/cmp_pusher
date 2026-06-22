// Tag Component

import { cn } from '@/lib/utils/cn';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  className?: string;
}

export function Tag({ children, variant = 'default', className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        'transition-colors duration-200',
        {
          'bg-gray-800 text-gray-300 hover:bg-gray-700': variant === 'default',
          'border border-gray-700 text-gray-400 hover:border-gray-600':
            variant === 'outline',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
