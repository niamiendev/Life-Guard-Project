import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Screen from '../../../components/screen'
import Row from '../../../components/row'
import { bg, dark_grey, green_light, light_grey, red_dark, red_light, white } from '../../../utils/color'
import Card from '../../../components/card'
import Ionicons from '@expo/vector-icons/Ionicons'

const Emergency = () => {
  const data = Array("Accident", "Maladie", "Incendie", "Police")
  return (
    <Screen style={styles.container}>
      <Row style={{ borderBottomWidth: 1, borderBottomColor: dark_grey }}>
        <Text style={styles.address}>12 Rue de la Paix, Paris 75000</Text>
      </Row>
      <Row gap={8} style={{ paddingHorizontal: 16 }}>
        {
          data.map((item, index) => (
            <TouchableOpacity
              activeOpacity={.5}
              key={index}
              onPress={
                () => {

                }
              }
            >
              <Card
                withBorder={true}
                borderRadius={16}
                paddingHorizontal={12}
                paddingVertical={4}
              >
                <Text style={{ color: light_grey }} >{item}</Text>
              </Card>
            </TouchableOpacity>

          ))
        }
      </Row>
      <View style={{ marginBottom: 16 }}></View>
      <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity style={
          {
            backgroundColor: "#ff0000",
            borderRadius: 100
          }
        }>
          <View style={
            {
              justifyContent: "center",
              alignItems: "center",
              width: 200,
              height: 200,
            }
          }>
            <Text style={
              {
                fontSize: 54,
                fontWeight: "600",
                color: white
              }
            }>SOS</Text>
            <Text style={
              {
                fontSize: 18,
                color: white
              }
            }
            >Maintenir 3 sec</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 16 }}></View>
      <Row gap={8} style={{ paddingHorizontal: 16 }}>
        <Card withBorder padding={8} borderRadius={12} style={{ width: "32%" }}>
          <View style={{ alignItems: "center", gap:4 }}>
            <Text style={{ fontSize: 24, color: white, fontWeight: "700" }}>112</Text>
            <Text style={{ color: light_grey }}>Urgences</Text>
          </View>
        </Card>
        <Card withBorder padding={8} borderRadius={12} style={{ width: "32%" }}>
          <View style={{ alignItems: "center", gap:4 }}>
            <Text style={{ fontSize: 24, color: white, fontWeight: "700" }}>15</Text>
            <Text style={{ color: light_grey }}>SAMU</Text>
          </View>
        </Card>
        <Card withBorder padding={8} borderRadius={12} style={{ width: "32%" }}>
          <View style={{ alignItems: "center", gap:4 }}>
            <Text style={{ fontSize: 24, color: white, fontWeight: "700" }}>18</Text>
            <Text style={{ color: light_grey }}>Pompiers</Text>
          </View>
        </Card>
      </Row>
      <View style={{ flex: 1 }}></View>
      <Row gap={8} style={{ justifyContent: "center", alignItems: "center" }}>
        <Ionicons name='notifications-outline' size={18} color={light_grey} />
        <Text style={{ color: light_grey }}>3 contacts alertés à l'envoi</Text>
      </Row>

    </Screen>
  )
}

export default Emergency

const styles = StyleSheet.create({

  container: {
    paddingVertical: 24,
    gap: 24
  },
  address: {
    color: light_grey,
    paddingBottom: 16,
    paddingHorizontal: 16
  }
})