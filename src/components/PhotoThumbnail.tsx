
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { Photo } from '../lib/types';

interface PhotoThumbnailProps {
  photo: Photo;
  onPress?: (photo: Photo) => void;
}

/**
 * Individual photo thumbnail component
 */
const PhotoThumbnail = ({ photo, onPress }: PhotoThumbnailProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  const handlePress = () => {
    if (onPress) onPress(photo);
  };
  
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={handlePress}
      activeOpacity={0.7}
    >
      {!isLoaded && !hasError && (
        <View style={styles.placeholder} />
      )}
      
      {hasError ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Failed to load</Text>
        </View>
      ) : (
        <Image
          source={{ uri: photo.url }}
          style={styles.image}
          contentFit="cover"
          transition={300}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true);
            setIsLoaded(true);
          }}
        />
      )}
      
      <View style={styles.labelContainer}>
        <Text style={styles.label} numberOfLines={1}>{photo.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 4,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    aspectRatio: 1,
    position: 'relative',
  },
  placeholder: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#e0e0e0',
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(230, 230, 230, 0.3)',
  },
  errorText: {
    fontSize: 12,
    color: '#666',
  },
  labelContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 6,
  },
  label: {
    color: 'white',
    fontSize: 12,
  },
});

export default PhotoThumbnail;
