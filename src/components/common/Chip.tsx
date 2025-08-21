import React from 'react';
import { cn } from '@/lib/utils';

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  number?: string;
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({
  text,
  number,
  className,
  ...props
}) => {
  return (
    <div className={cn('pulse-chip', className)} {...props}>
      {number && (
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
          {number}
        </span>
      )}
      <span>{text}</span>
    </div>
  );
};