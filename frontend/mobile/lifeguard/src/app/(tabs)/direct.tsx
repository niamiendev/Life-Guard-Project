import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../../../components/button'
import Card from '../../../components/card'
import EmergencyItem from '../../../components/emergency-section'
import Row from '../../../components/row'
import Screen from '../../../components/screen'
import SectionTitle from '../../../components/section-title'
import { blue_light, dark_grey, green_light, light_grey, white_deg } from '../../../utils/color'
import { spacing } from '../../../utils/spacing'

// Données extraites du JSX
const RESCUE_UNITS = [
  { icon: 'bus-outline',    name: 'SAMU 75',           description: 'En route',   color: blue_light, date: '4 min' },
  { icon: 'shield-outline', name: 'Police nationale',  description: 'Dépêchée',   color: blue_light, date: '7 min' },
] as const

const CONTACTS = [
  { initials: 'MR', name: 'Marie R.',   status: 'En ligne' },
  { initials: 'TK', name: 'Thomas K.',  status: 'En ligne' },
] as const

const JOURNAL_ENTRIES = [
  { time: '09:43', message: 'Alerte SOS déclenchée — Agression' },
  { time: '09:44', message: 'Liaison 112 établie — 1 min 20' },
] as const

const Direct = () => {
  return (
    // paddingHorizontal global — plus besoin de le répéter dans chaque section
    // gap uniforme entre les blocs principaux
    <Screen style={styles.container}>

      {/* Carte / Localisation */}
      {/* marginHorizontal négatif pour que la bordure soit pleine largeur
            malgré le paddingHorizontal du Screen */}
      <View style={styles.map}>
        <Ionicons name="location-outline" size={32} color={light_grey} />
        <Text style={styles.mapAddress}>12 Rue de la Paix, Paris 75002</Text>
      </View>

      {/* Secours engagés */}
      <View style={styles.section}>
        <SectionTitle text="Secours engagés" />
        {RESCUE_UNITS.map((unit) => (
          <EmergencyItem
            key={unit.name}
            icon={unit.icon}
            emergencyName={unit.name}
            description={unit.description}
            color={unit.color}
            date={unit.date}
          />
        ))}
      </View>

      {/* Contacts */}
      <View style={styles.section}>
        <SectionTitle text="Contacts" />
        {CONTACTS.map((contact) => (
          // Extrait en ligne locale — idéalement un composant ContactItem dédié
          <Row key={contact.name} style={styles.contactRow}>
            <Row gap={spacing.md}>
              <Card backgroundColor={dark_grey} padding={spacing.sm} borderRadius={24}>
                <Text style={styles.contactInitials}>{contact.initials}</Text>
              </Card>
              <Text style={styles.contactName}>{contact.name}</Text>
            </Row>
            <Text style={styles.contactStatus}>{contact.status}</Text>
          </Row>
        ))}
      </View>

      {/* Journal */}
      <View style={styles.section}>
        <SectionTitle text="Journal" />
        {JOURNAL_ENTRIES.map((entry) => (
          <Row key={entry.time} gap={spacing.md}>
            <Text style={styles.journalTime}>{entry.time}</Text>
            <Text style={styles.journalMessage}>{entry.message}</Text>
          </Row>
        ))}
      </View>

      <View style={{ flex: 1 }} />

      {/* Bouton principal */}
      {/* Plus de marginHorizontal ici — géré par le Screen */}
      <Button backgroundColor={green_light}>
        <Text style={styles.buttonText}>Je suis en sécurité</Text>
      </Button>

    </Screen>
  )
}

export default Direct

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.md,   //  Une seule fois, global (16px)
    paddingVertical: spacing.lg,     // 24px haut et bas
    gap: spacing.lg,                 // 24px uniforme entre chaque bloc
  },
  map: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    gap: spacing.sm,                 // 8px entre l'icône et l'adresse
    borderBottomWidth: 1,
    borderColor: dark_grey,
    marginHorizontal: -spacing.md,  // Annule le paddingHorizontal du Screen
    paddingHorizontal: spacing.md,  //    pour que la bordure soit pleine largeur
    marginBottom: -spacing.lg,      // Compense le gap du Screen sous la bordure
  },
  mapAddress: {
    color: light_grey,
  },
  section: {
    gap: spacing.md,                 // 16px entre les éléments d'une même section
  },
  contactRow: {
    justifyContent: 'space-between',
  },
  contactInitials: {
    color: white_deg,
  },
  contactName: {
    color: white_deg,
  },
  contactStatus: {
    color: green_light,
  },
  journalTime: {
    color: light_grey,
  },
  journalMessage: {
    color: white_deg,
    flex: 1,                         // Le message prend l'espace restant
                                     //    évite le débordement sur petits écrans
  },
  buttonText: {
    fontWeight: 'bold',
  },
})