import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, Text, View } from 'react-native'
import { dark_grey, white, white_deg } from '../utils/color'
import Card from './card'
import Row from './row'

type props = {
    name: string,
    numero: string,
    description: string,
    backgroundColor: string,
    color: string
}

const ContactItem = ({ name, numero, description, backgroundColor, color }: props) => {

    const tab = name.split(" ")
    const initial = tab[0][0] + tab[1][0]
    return (
        <Row style={styles.row}>
            <Row gap={16}>
                <Card
                    padding={12}
                    backgroundColor={backgroundColor} borderRadius={50}>
                    <Text style={{ color: color }}>{initial}</Text>
                </Card>
                <View style={styles.col}>
                    <Text style={{ color: white, fontSize: 18 }}>{name}</Text>
                    <Text style={{ color: white_deg }}>{numero}</Text>
                    <Card
                        backgroundColor={backgroundColor}
                        paddingHorizontal={8}
                        paddingVertical={4}
                        borderRadius={12}
                    >
                        <Text style={{ color: color, textAlign: "center",fontSize:12 }}>{description}</Text>
                    </Card>
                </View>
            </Row>
            <Row gap={8}>
                <Card withBorder={true} padding={8} borderRadius={24}>
                    <Ionicons name='chatbox-outline' size={18} color={white_deg} />
                </Card>
                <Card withBorder={true} padding={8} borderRadius={24}>
                    <Ionicons name='call-outline' size={18} color={white_deg} />
                </Card>
            </Row>
        </Row>
    )
}

export default ContactItem

const styles = StyleSheet.create({
    row: {
        borderBottomWidth: 1,
        borderColor: dark_grey,
        paddingHorizontal: 16,
        paddingVertical:12,
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