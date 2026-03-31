import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  loading?: boolean;
}

export const Button = ({
  variant = 'primary',
  loading,
  children,
  className,
  disabled,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={clsx(
        'px-4 py-2 rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2',
        {
          'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500':
            variant === 'primary',
          'bg-gray-200 hover:bg-gray-300 text-gray-900':
            variant === 'secondary',
          'bg-transparent hover:bg-gray-100': variant === 'ghost',
          'opacity-50 cursor-not-allowed': disabled || loading,
        },
        className
      )}
      aria-busy={loading}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};