import { StyleSheet, View, ViewProps } from 'react-native'
import { dark_grey } from '../utils/color'

type props = ViewProps & {
  backgroundColor?:string ,
  borderRadius?:number,
}

const Card = (
    { backgroundColor, borderRadius,children, style, ...rest }:props
) => {
  return (
    <View
        {...rest}
        style = {[styles.card,{
          borderRadius:borderRadius,
          backgroundColor:backgroundColor
        }, style]}
    >
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card:{
        borderWidth:1,
        borderColor:dark_grey
    }
})