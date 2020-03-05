import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

function CommonListItem({ title, contents }) {
  return (
    <View style={styles.item}>
      <Text numberOfLines={1} style={styles.title}>{title}</Text>
      <Text numberOfLines={3} style={styles.contents}>{contents}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  },
  contents: {
    fontSize: 12
  }
});

export default CommonListItem;