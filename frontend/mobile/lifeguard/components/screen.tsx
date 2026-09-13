import { StyleSheet, Text, View, ViewProps } from 'react-native'
import React from 'react'
import { bg } from '../utils/color'

const Screen = (
    {children, style, ...rest } : ViewProps
) => {
  return (
    <View {...rest}
    style = {[styles.container, style]}>
      {children}
    </View>
  )
}

export default Screen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:bg
    }
})