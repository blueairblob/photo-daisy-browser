
import { useState, useEffect } from 'react';
import { supabase, PHOTOS_BUCKET, getPublicUrl } from '@/lib/supabase';
import { Photo, ErrorState } from '@/lib/types';

/**
 * Custom hook to fetch photos from Supabase storage
 */
export const usePhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorState | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch list of files from the photos bucket
        const { data, error: storageError } = await supabase
          .storage
          .from(PHOTOS_BUCKET)
          .list('', {
            sortBy: { column: 'created_at', order: 'desc' }
          });

        if (storageError) {
          throw new Error(`Failed to fetch photos: ${storageError.message}`);
        }

        if (!data) {
          setPhotos([]);
          return;
        }

        // Filter only image files and map to Photo objects
        const imageFiles = data
          .filter(file => !file.id.includes('/') && file.name.match(/\.(jpeg|jpg|png|webp)$/i))
          .map(file => ({
            id: file.id,
            name: file.name,
            url: getPublicUrl(file.name),
            createdAt: file.created_at || new Date().toISOString(),
            size: file.metadata?.size
          }));

        setPhotos(imageFiles);
      } catch (err) {
        console.error('Error fetching photos:', err);
        setError({
          message: err instanceof Error ? err.message : 'Failed to fetch photos',
          code: 'fetch_error'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return { photos, loading, error };
};
