import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, TextInput } from 'react-native'
import { light_grey, white_text } from '../utils/color'
import Card from './card'
import Row from './row'

type Props = {
    icon?: keyof typeof Ionicons.glyphMap
    value: string,
    placeholder?: string,
    onChangeText: (text: string) => void
}

const Input = ({
    icon,
    value,
    placeholder,
    onChangeText
}: Props) => {
    return (
        <Card borderRadius={16} style={styles.card}>
            <Row style={styles.row}>
                {icon && (
                    <Ionicons
                        name={icon}
                        size={24}
                        color={light_grey}
                    />
                )}

                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor={light_grey}
                    keyboardType={placeholder === 'Email' ? 'email-address' : 'default'}
                />
            </Row>
        </Card>
    )
}

export default Input

const styles = StyleSheet.create({
    card: {
        paddingVertical: 12,
        paddingHorizontal:12
    },
    row: {
        gap: 8
    },
    input: {
        color: white_text,
        width: "100%",
    }
})