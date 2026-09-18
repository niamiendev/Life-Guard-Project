import { useRouter } from 'expo-router'
import { useState } from 'react'
import { StyleSheet } from 'react-native'
import Screen from '../../components/screen'

export default function ForgotScreen() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  return (
    <Screen style={styles.container}>
      
    </Screen>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1
    },
  }
)