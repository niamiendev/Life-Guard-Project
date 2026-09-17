import { StyleSheet, Text, View } from 'react-native'
import { light_grey } from '../utils/color'

type props = {
  marginTop?: number,
  marginBottom?: number,
  text: string
}
const SectionTitle = ({ marginBottom, marginTop, text, ...rest }: props) => {
  return (
    <View style={
      {
        marginTop: marginTop ? 16 : 0,
        marginBottom: marginBottom ? 16 : 0
      }
    }
      {...rest} >
      <Text style={styles.content}>{text}</Text>
    </View>
  )
}

export default SectionTitle

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 16,
    color: light_grey,
    fontWeight: "500"
  }
})