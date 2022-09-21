import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './style';

export function Header({ title }) {
  return (
    <View style={styles.title}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}