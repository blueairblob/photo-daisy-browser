
import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingProps {
  message?: string;
  className?: string;
}

/**
 * Loading spinner component with configurable message
 */
const Loading = ({ message = 'Loading photos...', className }: LoadingProps) => {
  return (
    <div className={cn("flex flex-col items-center justify-center min-h-[200px] gap-3", className)}>
      <div className="relative h-10 w-10">
        <div className="absolute top-0 h-10 w-10 rounded-full border-2 border-muted"></div>
        <div className="absolute top-0 h-10 w-10 rounded-full border-t-2 border-primary animate-spin"></div>
      </div>
      <p className="text-sm text-muted-foreground font-medium">{message}</p>
    </div>
  );
};

export default Loading;
