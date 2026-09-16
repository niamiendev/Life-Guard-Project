import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, Text, View } from 'react-native'
import { dark_grey, light_grey, white } from '../utils/color'
import Row from './row'

type props = {
    icon: keyof typeof Ionicons.glyphMap,
    emergencyName: string,
    description: string,
    date: string,
    color: string
}

const EmergencyItem = ({ icon, emergencyName, description, date, color }: props) => {

    return (
        <Row style={styles.row}>
            <Row gap={16}>
                <Ionicons name={icon} size={24} color={color} />
                <View style={styles.col}>
                    <Text style={{ color: white, fontSize:16 }}>{emergencyName}</Text>
                    <Text style={{ color: light_grey, textAlign: "left", fontSize: 12 }}>{description}</Text>
                </View>
            </Row>
            <Text style={{ color: color, textAlign: "right" }}>{date}</Text>

        </Row>
    )
}

export default EmergencyItem

const styles = StyleSheet.create({
    row: {
        borderBottomWidth: 1,
        borderColor: dark_grey,
        paddingHorizontal: 16,
        paddingVertical: 12,
        justifyContent: "space-between"
    },
    col: {
        gap: 4
    },
    badge: {
        paddingHorizontal: 2,
        paddingVertical: 4,
        textAlign: 'center',
        borderRadius: 50,
        fontSize: 12
    },

})