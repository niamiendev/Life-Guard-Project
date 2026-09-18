import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import Card from '../../components/card'
import Screen from '../../components/screen'
import TextView from '../../components/textview'
import { useAuth } from '../../context/authContext'
import { PRIMARY, TEXT } from '../../utils/color'
import { SIZE } from '../../utils/size'

export default function LoginScreen() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { login, isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/(tabs)/home")
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
    <Screen>
      <View style={styles.container}>
        <View style={styles.upSection}>
          <Card
            opacity={.5}
            radius={SIZE.md}
            padding={SIZE.md}
            backgroundColor={TEXT.titleWhite}
          >
            <Ionicons name='shield-checkmark-outline'
              size={SIZE.xl}
              color={TEXT.labelGray}
            />
          </Card>
          <View>
            <TextView size={SIZE.lg} style={{ fontWeight: "900" }}>
              Bon retour
            </TextView>
            <TextView size={SIZE.md} color={TEXT.secondaryWhite}>
              Connectez-vous à votre espace LifeGuard
            </TextView>
          </View>
        </View>
        <View style={styles.downSection}>

        </View>
      </View>

    </Screen>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1
    },
    upSection: {
      flex: 1 / 3,
      backgroundColor: PRIMARY.emergencyRed,
      justifyContent: "flex-end",
      padding: SIZE.md,
      paddingVertical: SIZE.xxl,
      gap: 16
    },
    downSection: {
      flex: 2 / 3

    }
  }
)