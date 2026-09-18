import * as Haptics from 'expo-haptics'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Screen from '../../../components/screen'
import { spacing } from '../../../utils/spacing'


const Emergency = () => {

  const handleSOS = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning)
    // logique d'envoi SOS ici
  }

  return (
    <Screen style={styles.container}>

      {/* Bouton SOS */}
      <View style={{}}>
        <TouchableOpacity
          style={{}}
          onLongPress={handleSOS}
          delayLongPress={3000}
          onPressIn={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)}
          activeOpacity={0.85}
        >
          <Text style={{}}>SOS</Text>
          <Text style={{}}>Maintenir 3 sec</Text>
        </TouchableOpacity>
      </View>

    </Screen>
  )
}

export default Emergency

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.lg,
    gap: spacing.lg,
  },
  
})