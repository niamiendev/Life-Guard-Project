import { StyleSheet, Text, View } from 'react-native'
import { dark_grey, light_grey } from '../utils/color'

type props = {
    title: string,
    value: string,
    color: string
}
const Params = (props: props) => {
    return (
        <View style ={[styles.container,{width: "50%"}]}>
            <Text style={{ color: light_grey, fontSize: 14, fontWeight: "400" }}>{props.title}</Text>
            <Text
                style={{ color: props.color, fontSize: 18, fontWeight: "700" }}
            >
                {props.value}
            </Text>
        </View>
    )
}

export default Params

const styles = StyleSheet.create({
    container: {
        gap: 4,
        padding:16,
        borderWidth: 1,
        borderColor: dark_grey
    }
})
