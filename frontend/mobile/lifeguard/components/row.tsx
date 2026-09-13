import { StyleSheet, View, ViewProps } from 'react-native'

const Row = (
    {children, style, ...rest}:ViewProps
) => {
  return (
    <View
        {...rest}
        style = {[styles.row, style]}
    >
      {children}
    </View>
  )
}

export default Row

const styles = StyleSheet.create({
    row:{
        flexDirection:"row",
        alignItems:"center"
    }
})