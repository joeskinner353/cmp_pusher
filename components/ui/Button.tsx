// Button Component

import { cn } from '@/lib/utils/cn';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-md font-medium',
          'transition-all duration-200 ease-out-cubic',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950',
          'disabled:pointer-events-none disabled:opacity-50',
          
          // Variants
          {
            'bg-gray-100 text-gray-950 hover:bg-gray-200 active:bg-gray-300':
              variant === 'primary',
            'bg-gray-800 text-gray-100 hover:bg-gray-700 active:bg-gray-600':
              variant === 'secondary',
            'bg-transparent text-gray-100 hover:bg-gray-800 active:bg-gray-700':
              variant === 'ghost',
            'border border-gray-700 bg-transparent text-gray-100 hover:bg-gray-800 hover:border-gray-600':
              variant === 'outline',
          },
          
          // Sizes
          {
            'h-9 px-4 text-sm': size === 'sm',
            'h-11 px-6 text-base': size === 'md',
            'h-14 px-8 text-lg': size === 'lg',
          },
          
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
