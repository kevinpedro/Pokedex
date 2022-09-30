import React from 'react'
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

export const Loading = () => {
  return (
    <View style = { styles.activityIndicator}>
    <ActivityIndicator
      size={50}
      color= "gray">
      </ActivityIndicator>
        <Text>Cargando...</Text>
  </View>
  )
}


const styles = StyleSheet.create({
    activityIndicator: {
      flex: 1,
      // backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
  
