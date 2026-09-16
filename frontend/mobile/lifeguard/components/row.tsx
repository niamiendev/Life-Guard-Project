import { StyleSheet, View, ViewProps } from 'react-native'

type props = ViewProps & {
  gap?:number
}
const Row = (
    {gap, children, style, ...rest}:props
) => {
  return (
    <View
        {...rest}
        style = {[
          styles.row,{gap},style]}
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