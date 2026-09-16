import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../../../components/button'
import Card from '../../../components/card'
import EmergencyItem from '../../../components/emergency-section'
import Row from '../../../components/row'
import Screen from '../../../components/screen'
import SectionTitle from '../../../components/section-title'
import { blue_light, dark_grey, green_light, light_grey, white_deg } from '../../../utils/color'

const Direct = () => {
  return (
    <Screen style={styles.container}>
      <View style={styles.map}>
        <Ionicons name='location-outline' size={32} color={light_grey} />
        <Text style={{ color: light_grey }}>12 Rue de la Paix, Paris 750002</Text>
      </View>
      <SectionTitle text='Secours engagés' />
      <EmergencyItem
        icon='bus-outline'
        emergencyName='SAMU 75'
        description='En route'
        color={blue_light}
        date='4 min'
      />
      <EmergencyItem
        icon='shield-outline'
        emergencyName='Police nationale'
        description='Dépêchée'
        color={blue_light}
        date='7 min'
      />
      <SectionTitle text='Contacts' />
      <View style={{ gap: 16, paddingHorizontal: 16, paddingVertical: 16 }}>
        <Row style={{ justifyContent: "space-between" }}>
          <Row gap={16}>
            <Card backgroundColor={dark_grey} padding={8} borderRadius={24}>
              <Text style={{ color: white_deg }}>MR</Text>
            </Card>
            <Text style={{ color: white_deg }}>Marie R.</Text>
          </Row>
          <Text style={{ color: green_light }}>En ligne</Text>
        </Row>
        <Row style={{ justifyContent: "space-between" }}>
          <Row gap={16}>
            <Card backgroundColor={dark_grey} padding={8} borderRadius={24}>
              <Text style={{ color: white_deg }}>TK</Text>
            </Card>
            <Text style={{ color: white_deg }}>Thomas K.</Text>
          </Row>
          <Text style={{ color: green_light }}>En ligne</Text>
        </Row>
      </View>
      <View style={{ padding: 16, gap: 8 }}>
        <Text style = {{color : light_grey}}>Journal </Text>
        <Row gap={16}>
          <Text style={{ color: light_grey }}>09:43</Text>
          <Text style={{ color: white_deg }}>Alerte SOS déclenchée -- Agression</Text>
        </Row>
        <Row gap={16}>
          <Text style={{ color: light_grey }}>09:44</Text>
          <Text style={{ color: white_deg }}>Liason 112 établie -- 1 min 20</Text>
        </Row>
      </View>
      <Button backgroundColor={green_light} style={{ marginHorizontal: 16 }}>
        <Text style={{ fontWeight: "bold" }}>Je suis en sécurité</Text>
      </Button>

    </Screen>
  )
}

export default Direct

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    gap: 16
  },
  map: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 120,
    gap: 8,
    borderBottomWidth: 1,
    borderColor: dark_grey
  }
})