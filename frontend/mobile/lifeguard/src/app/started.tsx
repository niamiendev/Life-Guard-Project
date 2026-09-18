import Ionicons from '@expo/vector-icons/Ionicons'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import Button from '../../components/button'
import Card from '../../components/card'
import Row from '../../components/row'
import Screen from '../../components/screen'
import TextView from '../../components/textview'
import { PRIMARY, TEXT } from '../../utils/color'
import { SIZE } from '../../utils/size'

const StartedScreen = () => {
  return (
    <Screen style={styles.container} >
      <View style={styles.header}>
        <View style = {[styles.center]}>
          <Card
            radius={SIZE.lg}
            padding={SIZE.lg}
            backgroundColor={PRIMARY.tints[500]}
          >
            <Ionicons name='shield-checkmark-outline'
              size={SIZE.xxl}
              color={TEXT.titleWhite}
            />
          </Card>
        </View>
        <TextView
          color={TEXT.titleWhite}
          size={SIZE.xl}
          style={{ fontWeight: "900" }}
        >
          LifeGuard
        </TextView>
        <View>

          <TextView
            color={TEXT.labelGray}
            size={SIZE.md}
          >
            Votre sécurité, à portée de doigt.
          </TextView>
          <TextView
            color={TEXT.labelGray}
            size={SIZE.md}
          >
            Alertez les secours en un instant.
          </TextView>
        </View>
      </View>
      <View style={styles.buttons}>
        <Button
          onPress={() => { router.push("/login") }}
          border >
          <TextView >Connexion</TextView>
        </Button>
        <Button
          onPress={() => { router.push("/register") }}
          border >
          <TextView >Créer un compte</TextView>
        </Button>
      </View>
      <View style={styles.conditions}>

        <TextView
          color={TEXT.labelGray}
          size={SIZE.smx}
        >
          En continuant, vous acceptez nos
        </TextView>
        <Row gap={SIZE.xs}>

          <TextView
            color={PRIMARY.tints[800]}
            size={SIZE.smx}
          >
            Conditions d'utilsation
          </TextView>
          <TextView
            color={TEXT.labelGray}
            size={SIZE.smx}
          >
            et notre
          </TextView>
          <TextView
            color={PRIMARY.tints[800]}
            size={SIZE.smx}
          >
            Politique de confidentialité
          </TextView>
        </Row>
      </View>
    </Screen>
  )
}

export default StartedScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: SIZE.xl,
    padding: SIZE.lg
  },
  header: {
    alignItems: "center",
    gap: SIZE.md,
    marginBottom: SIZE.xl
  },
  conditions: {
    alignItems: "center",
    gap: SIZE.xs
  },
  buttons: {
    gap: SIZE.smx,
    width: "100%"
  },
  center:{
    justifyContent: "center",
     width: "100%"
  }
})