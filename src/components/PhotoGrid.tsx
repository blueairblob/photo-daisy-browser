
import React from 'react';
import { Photo, ErrorState } from '@/lib/types';
import PhotoThumbnail from './PhotoThumbnail';
import Loading from './Loading';

interface PhotoGridProps {
  photos: Photo[];
  loading: boolean;
  error: ErrorState | null;
  onPhotoClick?: (photo: Photo) => void;
}

/**
 * Grid layout for displaying photos
 */
const PhotoGrid = ({ photos, loading, error, onPhotoClick }: PhotoGridProps) => {
  // Display loading state
  if (loading) {
    return <Loading />;
  }

  // Display error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] p-8 text-center">
        <div className="h-12 w-12 rounded-full bg-red-50 flex items-center justify-center mb-4">
          <svg 
            className="h-6 w-6 text-red-400" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium mb-1">Error loading photos</h3>
        <p className="text-sm text-muted-foreground max-w-md">{error.message}</p>
      </div>
    );
  }

  // Display empty state
  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] p-8 text-center">
        <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
          <svg 
            className="h-6 w-6 text-blue-400" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium mb-1">No photos found</h3>
        <p className="text-sm text-muted-foreground">Upload some photos to your Supabase storage to get started.</p>
      </div>
    );
  }

  // Display grid of photos
  return (
    <div className="photo-grid">
      {photos.map((photo) => (
        <PhotoThumbnail 
          key={photo.id} 
          photo={photo} 
          onClick={onPhotoClick} 
        />
      ))}
    </div>
  );
};

export default PhotoGrid;
