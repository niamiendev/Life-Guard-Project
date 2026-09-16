import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Button from '../../../components/button'
import Card from '../../../components/card'
import ContactItem from '../../../components/contact-section'
import Row from '../../../components/row'
import Screen from '../../../components/screen'
import SectionTitle from '../../../components/section-title'
import { blue_dark, blue_light, green_dark, green_light, light_grey, red_dark, red_light, white, white_deg } from '../../../utils/color'

const contacts = () => {
  return (
    <Screen style={styles.container}>
      <View style={[{ marginHorizontal: 16 }]}>
        <Text style={styles.title}>Contacts</Text>
        <Text style={styles.subTitle}>3 contacts de confiance actifs</Text>
      </View>
    
      <Card
        withBorder={true}
        borderRadius={24}
        style={[{ paddingHorizontal: 12, paddingVertical: 4, marginHorizontal: 16 }]}
      >
        <Row style={[{ alignItems: "center", gap: 8 }]}>
          <Ionicons color={light_grey} name='search' size={18} />
          <TextInput
            style={styles.input}
            placeholder='Rechercher...'
            placeholderTextColor={light_grey}

          />
        </Row>
      </Card>
      <View>
        <SectionTitle text='PRIORITE 1' />
        <ContactItem
          name='Marie Fontaine'
          numero='+33612645678'
          description='Contact ICE'
          backgroundColor={red_dark}
          color={red_light} />
        <SectionTitle text='CONTACTS DE CONFIANCE' marginTop={16} />
        <ContactItem
          name='Thomas Kader'
          numero='+33612645678'
          description='Alerté en priorité 2'
          backgroundColor={green_dark}
          color={green_light} />
        <ContactItem
          name='Sophie Brun'
          numero='+33612645678'
          description='Alerté en priorité 3'
          backgroundColor={blue_dark}
          color={blue_light} />
      </View>
      <Button
        withBorder={true}
        isDashed={true}
        style={{ marginHorizontal: 16 }}
      >
        <Row gap={16}>
          <Ionicons name={'add'} size={24} color={white_deg} />
          <Text style={{ color: white_deg }}>Ajouter un contact</Text>
        </Row>
      </Button>
      <Card
        backgroundColor={blue_dark}
        padding={12}
        borderRadius={12}
        style={{ marginHorizontal: 16 }}
      >
        <Row gap={8} style={{ alignItems: "flex-start", width: "100%" }}>
          <Ionicons name='information-circle-outline' size={24} color={blue_light} />
          <Text style={{ color: blue_light, width: "95%" }}>
            En cas d'alerte SOS, vos contacts sont notifiés dans l'ordre de priorité avec votre position en temps réel.
          </Text>
        </Row>
      </Card>

    </Screen>
  )
}

export default contacts

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
    gap: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: white
  },
  subTitle: {
    fontSize: 14,
    fontWeight: 500,
    color: white_deg
  },
  search: {

  },
  input: {
    width: "90%",
    //backgroundColor:red_light
  }

})