import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import PhotoGrid from './src/components/PhotoGrid';
import Header from './src/components/Header';
import { usePhotos } from './src/hooks/usePhotos';

export default function App() {
  const { photos, loading, error } = usePhotos();

  console.log('Photos:', photos);
  console.log('Loading:', loading);
  console.log('Error:', error);


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header 
        title="Photo Browser" 
        subtitle={`${photos.length} photos in your collection`} 
      />
      <View style={styles.main}>
        <PhotoGrid
          photos={photos}
          loading={loading}
          error={error}
          onPhotoPress={(photo) => console.log('Photo pressed:', photo.name)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  main: {
    flex: 1,
    padding: 8,
  }
});