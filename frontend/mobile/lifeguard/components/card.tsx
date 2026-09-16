import { StyleSheet, View, ViewProps } from 'react-native'
import { dark_grey } from '../utils/color'

type props = ViewProps & {
  backgroundColor?: string,
  borderRadius?: number,
  paddingHorizontal?: number,
  paddingVertical?: number,
  padding?: number,
  withBorder?: boolean
}

const Card = (
  { withBorder, backgroundColor, padding, borderRadius, paddingHorizontal, paddingVertical, children, style, ...rest }: props
) => {
  return (
    <View
      {...rest}
      style={
        [
          styles.card, {
            backgroundColor, borderRadius, padding,
            paddingHorizontal, paddingVertical,
            borderWidth: withBorder ? 1 : 0
          }, style
        ]
      }
    >
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    borderColor: dark_grey
  }
})