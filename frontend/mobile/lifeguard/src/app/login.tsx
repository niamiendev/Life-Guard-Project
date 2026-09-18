import { useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { Alert, StyleSheet } from 'react-native'
import Screen from '../../components/screen'
import { useAuth } from '../../context/authContext'

export default function Login() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { login, isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/(tabs)/emergency")
    }
  }, [isAuthenticated])

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
      

    </Screen>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1
    }
  }
)