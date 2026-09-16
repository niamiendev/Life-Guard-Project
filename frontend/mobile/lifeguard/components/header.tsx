import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, Text, View } from 'react-native'
import { green_dark, green_light, white } from '../utils/color'
import Card from './card'

const Hearder = () => {
    return (
        <View style={[styles.container]}>
            <Ionicons name="shield-checkmark-outline" size={64} color={white} />
            <View style={{ gap: 8 }}>
                <Text style={{ color: white, fontSize: 28, fontWeight: "700", textAlign:"center" }}>Life Guard</Text>
                <Card backgroundColor={green_dark} style={{ paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12 }}>
                    <Text style={{ color: green_light, fontWeight: "bold", fontSize:11, textAlign:"center" }}>Réseau actif 24/7</Text>
                </Card>
            </View>
        </View>
    )
}

export default Hearder

const styles = StyleSheet.create({
    container: {
        justifyContent:"center",
        alignItems:"center",
        marginBottom: 16,
        gap: 8,
    }
})