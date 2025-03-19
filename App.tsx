
import React from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import Header from './src/components/Header';
import PhotoGrid from './src/components/PhotoGrid';
import { usePhotos } from './src/hooks/usePhotos';

export default function App() {
  const { photos, loading, error } = usePhotos();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header />
      <PhotoGrid
        photos={photos}
        loading={loading}
        error={error}
        onPhotoPress={(photo) => console.log('Photo pressed:', photo.name)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
