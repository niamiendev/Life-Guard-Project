import Ionicons from '@expo/vector-icons/Ionicons'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Card from '../../../components/card'
import Row from '../../../components/row'
import Screen from '../../../components/screen'
import { bg, dark_grey, green, light_grey, red_dark, red_light, white, white_text } from '../../../utils/color'
import Section from '../../../components/health/section'
import SectionTitle from '../../../components/section-title'

const traitements = [
  {
    title: "Traitement 1",
    description: "Description du traitement 1"
  },
  {
    title: "Traitement 2",
    description: "Description du traitement 2"
  },
  {
    title: "Traitement 3",
    description: "Description du traitement 3"
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
              <Text style={{ color: white_text }}>28 ans </Text>
              <Text style={{ color: white_text }}>Abidjan - côte d'ivoire </Text>
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
          <Section title="Taille" value="168 cm" color={white} />
          <Section title="Poids" value="58 kg" color={white} />
        </Row>
        <Row>
          <Section title="Groupe sanguin" value="O+ RH+" color={red_light} />
          <Section title="Don d'organes" value="oui" color={green} />
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
          <Text style={{ color: red_light, fontSize: 14, fontWeight: "400", marginLeft:12 }}>Allergie sévère -- Pénicilline</Text>
        </Row>
      </Card>
      {/** traitements */}
      <SectionTitle text='Traitements' />
      <FlatList
        data={traitements}
        ItemSeparatorComponent={
          () => (
            <View style = {{height:1, backgroundColor:dark_grey}}></View>
          )
        }
        renderItem={({ item }) => (
          <Card
            style={{ padding: 16 }}
            backgroundColor={bg}
            borderRadius={4}
          >
            <Text style={{ color: white, fontSize: 14, fontWeight: "700" }}>{item.title}</Text>
            <Text style={{ color: light_grey, fontSize: 12, fontWeight: "400", marginTop: 4 }}>{item.description}</Text>
          </Card>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <SectionTitle text='Contact' />
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