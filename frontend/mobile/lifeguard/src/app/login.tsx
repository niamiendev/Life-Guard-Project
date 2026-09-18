import Ionicons from '@expo/vector-icons/Ionicons'
import { Link, useRouter } from 'expo-router'
import { useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import Button from '../../components/button'
import Hearder from '../../components/header'
import Input from '../../components/input'
import Row from '../../components/row'
import Screen from '../../components/screen'
import { useAuth } from '../../context/authContext'
import { bg, light_grey, white, white_deg } from '../../utils/color'

export default function Login() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useAuth()

  const handleLogin = async () => {

    if (username.trim() !== "" && password.trim() !== "") {

      try {
        
        login(username, password)

      } catch (error) {
        console.log(error)
        Alert.alert(
                "Erreur",
                "Nom d'utilisateur ou mot de passe incorrect."
            )
      }
    } else {
      Alert.alert(
        "Erreur",
        "Veuillez vérifiez les champs à remplir."
      )
    }

  }


  return (
    <Screen style={styles.container}>
      <Hearder />
      <Text style={{ color: white, fontSize: 24, fontWeight: "700" }}>Se connecter</Text>
      <View style={{ gap: 16 }}>

        <Input placeholder='Identifiant' icon='person-outline' value={username} onChangeText={setUsername} />
        <Input placeholder='Mot de passe' icon='lock-closed-outline' value={password} onChangeText={setPassword} />
        <Link href="/forgot">
          <Text style={{ color: white_deg, textAlign: "right" }}>Mot de passe oublié ?</Text>
        </Link>
      </View>
      <View style={{ gap: 16, marginTop: 16 }}>
        <Button
          backgroundColor={white}
          onPress={handleLogin}
        >
          <Text style={{ color: bg }}>Connexion</Text>
        </Button>
        <Button
          withBorder={true}
          backgroundColor={bg}
          onPress={() => { router.push("/register") }}
        >
          <Text style={{ color: white }}>Créer un compte</Text>
        </Button>
      </View>
      <Row style={{ width: "98%", justifyContent: "space-between", alignItems: "center" }}>
        <View style={{ width: "45%", height: 1, backgroundColor: light_grey }}></View>
        <Text style={{ color: white }}> OU </Text>
        <View style={{ width: "45%", height: 1, backgroundColor: light_grey }}></View>
      </Row>

      <Row style={
        {
          width: "98%", gap: "2%",
          justifyContent: "space-between",

        }
      }>
        <Button
          style={{ width: "50%", height: 60 }}
          backgroundColor={bg}
          withBorder={true}
          onPress={() => { }}
        >
          <Row style={{ gap: 8, alignItems: "center", justifyContent: "center" }}>
            <Ionicons name="finger-print-outline" size={24} color={white} />
            <Text style={styles.buttonText}>Face ID</Text>
          </Row>
        </Button>

        <Button
          style={{ width: "50%", height: 60 }}
          backgroundColor={bg}
          withBorder={true}
          onPress={() => { }}
        >
          <Row style={{ gap: 8, alignItems: "center", justifyContent: "center" }}>
            <Text style={[styles.buttonText, { fontWeight: "bold", fontSize: 22 }]}>G</Text>
            <Text style={styles.buttonText}>Google</Text>
          </Row>
        </Button>

      </Row>
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
      color: white_deg
    },
    bottomText: {
      paddingHorizontal: 42,
      color: light_grey,
      textAlign: "center",
      fontSize: 12,
    }
  }
)