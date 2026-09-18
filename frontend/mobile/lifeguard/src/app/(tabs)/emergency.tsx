import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as Haptics from 'expo-haptics'
import Screen from '../../../components/screen'
import Row from '../../../components/row'
import Card from '../../../components/card'
import Ionicons from '@expo/vector-icons/Ionicons'
import { bg, dark_grey, green_light, light_grey, red_dark, white } from '../../../utils/color'
import { spacing } from '../../../utils/spacing'

// Constantes extraites du composant
const EMERGENCY_TYPES = ["Accident", "Maladie", "Incendie", "Police"] as const

const EMERGENCY_NUMBERS = [
  { number: "112", label: "Urgences" },
  { number: "15",  label: "SAMU" },
  { number: "18",  label: "Pompiers" },
] as const

const Emergency = () => {

  const handleSOS = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning)
    // logique d'envoi SOS ici
  }

  return (
    <Screen style={styles.container}>

      {/* Adresse */}
      <Row style={styles.addressRow}>
        <Text style={styles.address}>12 Rue de la Paix, Paris 75000</Text>
      </Row>

      {/* Filtres */}
      <Row gap={spacing.sm} style={styles.horizontalPadding}>
        {EMERGENCY_TYPES.map((item) => (
          <TouchableOpacity key={item} activeOpacity={0.5} onPress={() => {}}>
            <Card withBorder borderRadius={spacing.md} paddingHorizontal={spacing.md} paddingVertical={spacing.sm}>
              <Text style={styles.tagText}>{item}</Text>
            </Card>
          </TouchableOpacity>
        ))}
      </Row>

      {/* Bouton SOS */}
      <View style={styles.sosContainer}>
        <TouchableOpacity
          style={styles.sosButton}
          onLongPress={handleSOS}
          delayLongPress={3000}
          onPressIn={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)}
          activeOpacity={0.85}
        >
          <Text style={styles.sosLabel}>SOS</Text>
          <Text style={styles.sosSubLabel}>Maintenir 3 sec</Text>
        </TouchableOpacity>
      </View>

      {/* Numéros d'urgence */}
      <Row gap={spacing.sm} style={styles.horizontalPadding}>
        {EMERGENCY_NUMBERS.map(({ number, label }) => (
          <Card key={label} withBorder padding={spacing.sm} borderRadius={12} style={styles.numberCard}>
            <View style={styles.numberCardInner}>
              <Text style={styles.numberText}>{number}</Text>
              <Text style={styles.numberLabel}>{label}</Text>
            </View>
          </Card>
        ))}
      </Row>

      <View style={{ flex: 1 }} />

      {/* Footer */}
      <Row gap={spacing.sm} style={styles.footer}>
        <Ionicons name="notifications-outline" size={spacing.md} color={light_grey} />
        <Text style={styles.footerText}>3 contacts alertés à l'envoi</Text>
      </Row>

    </Screen>
  )
}

export default Emergency

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.lg,
    gap: spacing.lg,
  },
  addressRow: {
    borderBottomWidth: 1,
    borderBottomColor: dark_grey,
  },
  address: {
    color: light_grey,
    paddingBottom: spacing.md,
    paddingHorizontal: spacing.md,
  },
  horizontalPadding: {
    paddingHorizontal: spacing.md,
  },
  tagText: {
    color: light_grey,
  },
  sosContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  sosButton: {
    backgroundColor: red_dark,
    borderRadius: 100,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  sosLabel: {
    fontSize: spacing.xxl,
    fontWeight: "600",
    color: white,
  },
  sosSubLabel: {
    fontSize: spacing.md,
    color: white,
  },
  numberCard: {
    flex: 1,
  },
  numberCardInner: {
    alignItems: "center",
    gap: spacing.xs,
  },
  numberText: {
    fontSize: spacing.lg,
    color: white,
    fontWeight: "700",
  },
  numberLabel: {
    color: light_grey,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: light_grey,
  },
})