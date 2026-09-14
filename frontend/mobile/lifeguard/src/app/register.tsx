import { Color, Link, useRouter } from 'expo-router'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../../components/button'
import Input from '../../components/input'
import Row from '../../components/row'
import Screen from '../../components/screen'
import { bg, blue, green, green_opacity, light_grey, white, white_text } from '../../utils/color'
import Ionicons from '@expo/vector-icons/Ionicons'
import Card from '../../components/card'

export default function Index() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  return (
    <Screen style={styles.container}>
      <Row style={{ gap: 16, marginBottom: 16 }}>
        <Ionicons name="shield-checkmark-outline" size={42} color={white} />
        <View style={{ gap: 8 }}>
          <Text style={{ color: white, fontSize: 28, fontWeight: "700" }}>LifeG</Text>
          <Card backgroundColor={green_opacity} style={{ paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12 }}>
            <Text style={{ color: green, fontWeight: "bold" }}>Réseau actif 24/7</Text>
          </Card>
        </View>
      </Row>
      <Text style={{ color: white, fontSize: 24, fontWeight: "700" }}>S'inscrire</Text>
      <View style={{ gap: 16 }}>
        <Input placeholder='Identifiant' icon='person-outline' value={username} onChangeText={setUsername} />
        <Input placeholder='Email' icon='mail-outline' value={username} onChangeText={setUsername} />
        <Input placeholder='Mot de passe' icon='lock-closed-outline' value={password} onChangeText={setPassword} />
        <Input placeholder='Confirmer le mot de passe' icon='lock-closed-outline' value={password} onChangeText={setPassword} />

      </View>
      <View style={{ gap: 16, marginTop: 16 }}>
        <Button
          withBorder={true}
          backgroundColor={bg}
          onPress={() => { router.push("/(tabs)/emergency") }}
        >
          <Text style={{ color: white }}>Créer un compte</Text>
        </Button>
        <Link href="/" style={{ color:"transparent", marginTop:24 }}>
            <Text style={{ color: white_text, textAlign: "center" }}>Déjà un compte ? Connectez-vous</Text>
          </Link>
      </View>

      <View style={{ flex: 1 }} ></View>
      <Text style={styles.bottomText}>
        Données de la localisation et de santé chiffrées de bout en bout
      </Text>

    </Screen>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      color: white,
      paddingHorizontal: 16,
      paddingVertical: 24,
      gap: 16
    },
    buttonText: {
      color: white_text
    },
    bottomText: {
      paddingHorizontal: 42,
      color: light_grey,
      textAlign: "center",
      fontSize: 12,
    }
  }
)