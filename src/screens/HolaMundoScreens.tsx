import React from 'react'
import { Text, View } from 'react-native';

const HolaMundoScreens = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center'

    }}>
      <Text
        style={{
          fontSize: 45,
          textAlign: 'center'
        }}
      >
        Hola Mundo</Text>
    </View>
  )
}

export default HolaMundoScreens;