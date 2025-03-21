import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

const Header = ({ 
  title = "Photos", 
  subtitle = "Browse your photo collection" 
}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && (
        <Text style={styles.subtitle}>{subtitle}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  }
});

export default Header;
