import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Alert, StyleSheet } from 'react-native'
import Screen from '../../components/screen'
import { useAuth } from '../../context/authContext'


export default function RegisterScreen() {
  const router = useRouter()
  const { register } = useAuth()

  const [fullname, setFullname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRgister = async () => {
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
      
    </Screen>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
    }
  }
)