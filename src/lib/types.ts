
/**
 * Type definitions for the photo browser app
 */

export interface Photo {
  id: string;
  name: string;
  url: string;
  createdAt: string;
  size?: number;
}

export interface ErrorState {
  message: string;
  code?: string;
}
