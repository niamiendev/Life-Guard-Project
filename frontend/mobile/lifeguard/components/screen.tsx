import { StyleSheet, View, ViewProps } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { bg, white_text } from '../utils/color'

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
    backgroundColor: bg,
    color:white_text
  }
})