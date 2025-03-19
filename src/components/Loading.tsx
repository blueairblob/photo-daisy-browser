
import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

interface LoadingProps {
  message?: string;
}

/**
 * Loading spinner component with configurable message
 */
const Loading = ({ message = 'Loading photos...' }: LoadingProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
    padding: 20,
  },
  message: {
    marginTop: 12,
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  }
});

export default Loading;
