import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, View } from 'react-native'

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
        <View></View>
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
})