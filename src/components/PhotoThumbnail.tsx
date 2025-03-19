
import React, { useState } from 'react';
import { Photo } from '@/lib/types';
import { cn } from '@/lib/utils';

interface PhotoThumbnailProps {
  photo: Photo;
  onClick?: (photo: Photo) => void;
  className?: string;
}

/**
 * Individual photo thumbnail component
 */
const PhotoThumbnail = ({ photo, onClick, className }: PhotoThumbnailProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  const handleClick = () => {
    if (onClick) onClick(photo);
  };
  
  return (
    <div 
      className={cn(
        "photo-thumbnail group", 
        {
          "animate-scale-in": isLoaded && !hasError,
          "cursor-pointer": !!onClick,
        },
        className
      )}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 skeleton-loading rounded-md" />
      )}
      
      {hasError ? (
        <div className="flex h-full w-full items-center justify-center bg-muted/30 rounded-md">
          <span className="text-xs text-muted-foreground">Failed to load</span>
        </div>
      ) : (
        <img
          src={photo.url}
          alt={photo.name}
          className={cn(
            "transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true);
            setIsLoaded(true);
          }}
          loading="lazy"
        />
      )}
      
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-xs text-white truncate">{photo.name}</p>
      </div>
    </div>
  );
};

export default PhotoThumbnail;
