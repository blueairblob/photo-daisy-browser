
/**
 * Supabase client configuration for accessing storage
 * Note: In a production app, these would be stored in environment variables
 */
import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-url-polyfill/auto';

// Supabase configuration
// These are placeholder values - replace them with your actual Supabase credentials
const supabaseUrl = 'https://tvucfqzldbcghtxddtmq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2dWNmcXpsZGJjZ2h0eGRkdG1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5ODk4OTcsImV4cCI6MjA1NTU2NTg5N30.5p5Gq-Q2PPaJfTQKrzVGwh8fGHBd8dM8HYnii1O3sQw';

// Initialize Supabase client with AsyncStorage for React Native
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Storage bucket name
export const PHOTOS_BUCKET = 'photos';

/**
 * Get the public URL for a file in the storage bucket
 */
export const getPublicUrl = (filePath: string): string => {
  const { data } = supabase.storage.from(PHOTOS_BUCKET).getPublicUrl(filePath);
  return data.publicUrl;
};
