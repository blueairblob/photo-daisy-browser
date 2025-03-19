
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

/**
 * App header component
 */
const Header = ({ 
  title = "Photos", 
  subtitle = "Browse your photo collection" 
}: HeaderProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && (
          <Text style={styles.subtitle}>{subtitle}</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  }
});

export default Header;
