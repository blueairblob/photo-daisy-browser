
/**
 * Type definitions for the photo browser app
 */

// Photo item from Supabase storage
export interface Photo {
  id: string;
  name: string;
  url: string;
  createdAt: string;
  size?: number;
}

// Error state type
export interface ErrorState {
  message: string;
  code?: string;
}
