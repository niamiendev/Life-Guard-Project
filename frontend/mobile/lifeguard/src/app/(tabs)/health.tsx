import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, Text, View } from 'react-native'
import Card from '../../../components/card'
import Params from '../../../components/params'
import Row from '../../../components/row'
import Screen from '../../../components/screen'
import SectionTitle from '../../../components/section-title'
import { bg, green_light, light_grey, red_dark, red_light, white, white_deg } from '../../../utils/color'

const traitements = [
  {
    title: "Vantoline",
    description: "si besoin"
  },
  {
    title: "Coveram 10/5",
    description: "1 cp / j"
  }
]
const Health = () => {
  return (
    <Screen style={[styles.container]}>
      {/** en tête */}
      <Row style={[{ justifyContent: "space-between", marginHorizontal: 16 }]}>
        <Row style={[{ gap: 16 }]}>
          <Card
            borderRadius={12}
            backgroundColor={red_dark}>
            <Text
              style={
                {
                  color: red_light,
                  fontSize: 28,
                  fontWeight: "700",
                  margin: 8
                }
              }
            >
              O+
            </Text>
          </Card>
          <View style={[styles.header]}>
            <Text style={{ color: white, fontSize: 18, fontWeight: "700" }}>Léa Fontaine</Text>
            <View style={{ marginTop: 4 }}>
              <Text style={{ color: white_deg }}>28 ans </Text>
              <Text style={{ color: white_deg }}>Abidjan - côte d'ivoire </Text>
            </View>
          </View>
        </Row>
        <Card style={{ paddingVertical: 4, paddingHorizontal: 8 }} borderRadius={8}>
          <Row style={{ gap: 8 }}>
            <Ionicons name='lock-closed-outline' size={12} color={light_grey} />
            <Text style={{ color: light_grey, fontSize: 12 }}  >Vérrouillé</Text>
          </Row>
        </Card>
      </Row>
      {/** tab de données */}
      <View>
        <Row>
          <Params title="Taille" value="168 cm" color={white} />
          <Params title="Poids" value="58 kg" color={white} />
        </Row>
        <Row>
          <Params title="Groupe sanguin" value="O+ RH+" color={red_light} />
          <Params title="Don d'organes" value="oui" color={green_light} />
        </Row>
      </View>
      {/** allergies */}
      <Card
        style={{ marginHorizontal: 16, padding: 16 }}
        backgroundColor={red_dark}
        borderRadius={12}
      >
        <Row>
          <Ionicons name='alert-circle-outline' size={16} color={red_light} />
          <Text style={{ color: red_light, fontSize: 14, fontWeight: "400", marginLeft: 12 }}>Allergie sévère -- Pénicilline</Text>
        </Row>
      </Card>
      {/** traitements */}
      <SectionTitle text='Traitements' />
      <View>
        {
          traitements.map(({ title, description }) => (
            <Card
              key={title}
              style={{ padding: 16, borderWidth: 0, borderBottomWidth: 1 }}
              backgroundColor={bg}
            >
              <Row style = {{justifyContent:'space-between'}}>
                <Text style={{ color: white, fontSize: 16, fontWeight: "700" }}>{title}</Text>
                <Text style={{ color: light_grey, fontSize: 12, fontWeight: "400", marginTop: 4 }}>{description}</Text>
              </Row>

            </Card>
          ))
        }
      </View>
    </Screen>

  )
}

export default Health

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    gap: 16,
  },
  header: {
  }
})