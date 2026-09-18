import { StyleSheet, View, ViewProps } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DARK_BACKGROUNDS } from '../utils/color'

type Props = ViewProps & {}

const Screen = (
  { children, style, ...rest }: Props
) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View {...rest}
        style={[styles.container, style]}>
        {children}
      </View>
    </SafeAreaView>
  )
}

export default Screen

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: DARK_BACKGROUNDS.appBlack,
  },
  container: {
    flex: 1,
  }
})