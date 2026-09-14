import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, Text, View } from 'react-native'
import Card from '../../../components/card'
import Row from '../../../components/row'
import Screen from '../../../components/screen'
import { light_grey, red_dark, red_light, white, white_text } from '../../../utils/color'

const Health = () => {
  return (
    <Screen style={[styles.container]}>
      <Row style = {[{justifyContent:"space-between"}]}>
        <Row style = {[{ gap:16}]}>
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
            <Text style={{ color: white, fontSize:18, fontWeight:"700" }}>Léa Fontaine</Text>
            <Text style={{ color: white_text }}>28 ans </Text>
            <Text style={{ color: white_text }}>Abidjan - côte d'ivoire </Text>
          </View>
        </Row>
        <Card style = {{paddingVertical:4, paddingHorizontal:8}} borderRadius={8}>
          <Row style = {{gap:8}}>
            <Ionicons name='lock-closed-outline' size={18} color={light_grey} />
            <Text style={{ color: light_grey }}>Vérrouillé</Text>
          </Row>
        </Card>
      </Row>
      <Row>
        
      </Row>
    </Screen>
  )
}

export default Health

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16
  },
  header: {
  }
})