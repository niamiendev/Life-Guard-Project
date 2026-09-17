import { Link, useRouter } from 'expo-router'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../../components/button'
import Hearder from '../../components/header'
import Input from '../../components/input'
import Screen from '../../components/screen'
import { bg, light_grey, white, white_deg } from '../../utils/color'
import useAuth, { Profile } from '../../hooks/useAuth'
import { Alert } from "react-native"


export default function Index() {
  const router = useRouter()
  const { register } = useAuth()

  const [fullname, setFullname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const CreateAccount = async () => {
    const sp = fullname.split(" ")
    if (
      fullname.trim() != ""
      && username.trim() != ""
      && email.trim() != ""
      && password.trim() != ""
    ) {
      const profile = {
        username: username.trim(),
        email: email.trim(),
        password: password,
        first_name: sp[0],
        last_name: sp.slice(1).join(" "),
        address: "Abidjan",
        phone_number: "0700000000",
        blood_type: "O+",
      }

      try {
        const response = await register(profile)
    
      } catch (error) {
        console.log("ERREUR REGISTER :", error)
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
      <Text style={{ color: white, fontSize: 24, fontWeight: "700" }}>S'inscrire</Text>
      <View style={{ gap: 16 }}>
        <Input placeholder='Nom complet' icon='person-outline' value={fullname} onChangeText={setFullname} />
        <Input placeholder='Identifiant' icon='person-outline' value={username} onChangeText={setUsername} />
        <Input placeholder='Email' icon='mail-outline' value={email} onChangeText={setEmail} />
        <Input placeholder='Mot de passe' icon='lock-closed-outline' value={password} onChangeText={setPassword} />

      </View>
      <View style={{ gap: 16, marginTop: 16 }}>
        <Button
          withBorder={true}
          backgroundColor={bg}
          onPress={CreateAccount}
        >
          <Text style={{ color: white }}>Créer un compte</Text>
        </Button>
        <Link href="/" style={{ color: "transparent", marginTop: 24 }}>
          <Text style={{ color: white_deg, textAlign: "center" }}>Déjà un compte ? Connectez-vous</Text>
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