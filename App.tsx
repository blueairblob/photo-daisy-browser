
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Header from './src/components/Header';
import PhotoGrid from './src/components/PhotoGrid';
import { usePhotos } from './src/hooks/usePhotos';

export default function App() {
  const { photos, loading, error } = usePhotos();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
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
  }
});
