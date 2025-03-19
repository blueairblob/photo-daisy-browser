
import React from 'react';

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

/**
 * App header component
 */
const Header = ({ 
  title = "Photos", 
  subtitle = "Browse your photo collection" 
}: HeaderProps) => {
  return (
    <div className="sticky top-0 z-10 backdrop-blur-md bg-background/80 border-b px-4 py-4">
      <div className="flex flex-col">
        <h1 className="text-xl font-medium tracking-tight">{title}</h1>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default Header;
