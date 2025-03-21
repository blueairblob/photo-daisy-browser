import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { Photo, ErrorState } from '../lib/types';
import PhotoThumbnail from './PhotoThumbnail';
import Loading from './Loading';

interface PhotoGridProps {
  photos: Photo[];
  loading: boolean;
  error: ErrorState | null;
  onPhotoPress?: (photo: Photo) => void;
}

const PhotoGrid = ({ photos, loading, error, onPhotoPress }: PhotoGridProps) => {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error.message}</Text>
      </View>
    );
  }

  if (photos.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No photos found</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={photos}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.gridContainer}
      renderItem={({ item }) => (
        <PhotoThumbnail 
          photo={item} 
          onPress={onPhotoPress}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    padding: 4,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: '#d32f2f',
    fontSize: 16,
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default PhotoGrid;
