import { useRouter } from 'expo-router'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../../components/button'
import Input from '../../components/input'
import Row from '../../components/row'
import Screen from '../../components/screen'
import { bg, white, white_text } from '../../utils/color'

export default function Index() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  return (
    <Screen style={styles.container}>
      <View style={{ gap: 16 }}>

        <Input placeholder='Identifiant' icon='person-outline' value={username} onChangeText={setUsername} />
        <Input placeholder='Mot de passe' icon='lock-closed-outline' value={password} onChangeText={setPassword} />

        <Button
        backgroundColor={white}
          onPress={() => { router.push("/(tabs)/emergency") }}
        >
          <Text style={styles.buttonText}>Connexion</Text>
        </Button>
      </View>
      <Row style={{ width: "100%" }}>
        <Button
          style={{ width: "50%" }}
          backgroundColor={bg}
          withBorder={true}
          onPress={() => { }}
        >
          <Text style={{color:bg}}>Face ID</Text>
        </Button>

        <Button
          style={{ width: "50%" }}
          backgroundColor={bg}
          withBorder={true}
          onPress={() => { }}
        >
          <Text style={styles.buttonText}>Google</Text>
        </Button>

      </Row>

    </Screen>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      color: white,
      padding: 16
    },
    buttonText: {
      color: white_text
    }
  }
)