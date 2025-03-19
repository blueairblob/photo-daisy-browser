
import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Photo, ErrorState } from '../lib/types';
import PhotoThumbnail from './PhotoThumbnail';
import Loading from './Loading';

interface PhotoGridProps {
  photos: Photo[];
  loading: boolean;
  error: ErrorState | null;
  onPhotoPress?: (photo: Photo) => void;
  onPhotoClick?: (photo: Photo) => void;  // Add this new prop to support web version
}

// Calculate the number of columns based on screen width
const numColumns = 3;

/**
 * Grid layout for displaying photos
 */
const PhotoGrid = ({ photos, loading, error, onPhotoPress, onPhotoClick }: PhotoGridProps) => {
  // Handle both prop versions (for compatibility between web and mobile)
  const handlePhotoAction = (photo: Photo) => {
    if (onPhotoClick) {
      onPhotoClick(photo);
    } else if (onPhotoPress) {
      onPhotoPress(photo);
    }
  };

  // Display loading state
  if (loading) {
    return <Loading />;
  }

  // Display error state
  if (error) {
    return (
      <View style={styles.messageContainer}>
        <View style={styles.errorIcon}>
          <Text style={styles.errorIconText}>!</Text>
        </View>
        <Text style={styles.messageTitle}>Error loading photos</Text>
        <Text style={styles.messageText}>{error.message}</Text>
      </View>
    );
  }

  // Display empty state
  if (photos.length === 0) {
    return (
      <View style={styles.messageContainer}>
        <View style={styles.emptyIcon}>
          <Text style={styles.emptyIconText}>📷</Text>
        </View>
        <Text style={styles.messageTitle}>No photos found</Text>
        <Text style={styles.messageText}>
          Upload some photos to your Supabase storage to get started.
        </Text>
      </View>
    );
  }

  // Calculate item width based on screen width and number of columns
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = (screenWidth - (numColumns + 1) * 8) / numColumns;

  // Display grid of photos
  return (
    <FlatList
      data={photos}
      renderItem={({ item }) => (
        <View style={{ width: itemWidth }}>
          <PhotoThumbnail 
            photo={item} 
            onPress={() => handlePhotoAction(item)} 
          />
        </View>
      )}
      keyExtractor={item => item.id}
      numColumns={numColumns}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 4,
  },
  row: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  messageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    minHeight: 300,
  },
  messageTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 16,
  },
  messageText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  errorIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#ffebee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorIconText: {
    color: '#d32f2f',
    fontSize: 24,
    fontWeight: 'bold',
  },
  emptyIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyIconText: {
    fontSize: 24,
  }
});

export default PhotoGrid;
