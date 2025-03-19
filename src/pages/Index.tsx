
import React, { useState } from 'react';
import { usePhotos } from '@/hooks/usePhotos';
import { Photo } from '@/lib/types';
import Header from '@/components/Header';
import PhotoGrid from '@/components/PhotoGrid';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const { photos, loading, error } = usePhotos();
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
    // In a more complete app, this would open a photo detail view
    toast({
      title: photo.name,
      description: `Photo selected: ${photo.url}`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background animate-fade-in">
      <Header 
        title="Photo Browser" 
        subtitle={`${photos.length} photos in your collection`} 
      />
      
      <main className="flex-1 container max-w-7xl mx-auto">
        <div className="py-2">
          <PhotoGrid 
            photos={photos} 
            loading={loading} 
            error={error}
            onPhotoClick={handlePhotoClick} 
          />
        </div>
      </main>
      
      <footer className="py-4 px-6 text-center text-xs text-muted-foreground">
        <p>Photo Browser &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Index;
