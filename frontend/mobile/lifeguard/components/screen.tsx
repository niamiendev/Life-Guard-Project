import { StyleSheet, Text, View, ViewProps } from 'react-native'
import React from 'react'
import { bg } from '../utils/color'
import { SafeAreaView } from 'react-native-safe-area-context'

const Screen = (
  { children, style, ...rest }: ViewProps
) => {
  return (
    <SafeAreaView style={styles.container}>

      <View {...rest}
        style={[styles.container, style]}>
        {children}
      </View>
    </SafeAreaView>
  )
}

export default Screen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bg
  }
})