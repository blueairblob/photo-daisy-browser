import { useState, useEffect } from 'react';
import { Photo, ErrorState } from '../lib/types';

// Simulated data fetch for demo purposes
// In a real app, this would connect to a real API or Supabase
export const usePhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorState | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Sample data
        const samplePhotos: Photo[] = [
          {
            id: '1',
            name: 'Beach sunset',
            url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=300',
            createdAt: new Date().toISOString(),
          },
          {
            id: '2',
            name: 'Mountain view',
            url: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=300',
            createdAt: new Date().toISOString(),
          },
          {
            id: '3',
            name: 'City skyline',
            url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=300',
            createdAt: new Date().toISOString(),
          },
          {
            id: '4',
            name: 'Forest path',
            url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=300',
            createdAt: new Date().toISOString(),
          },
          {
            id: '5',
            name: 'Lake reflection',
            url: 'https://images.unsplash.com/photo-1480497490787-505ec076689f?q=80&w=300',
            createdAt: new Date().toISOString(),
          },
          {
            id: '6',
            name: 'Desert landscape',
            url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=300',
            createdAt: new Date().toISOString(),
          }
        ];
        
        setPhotos(samplePhotos);
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
