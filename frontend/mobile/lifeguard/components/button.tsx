import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { light_grey, white } from '../utils/color'

type props = TouchableOpacityProps & {
    withBorder?: boolean,
    backgroundColor?: string,
}
const Button = ({ withBorder, backgroundColor, children, ...props }: props) => {
    return (
        <TouchableOpacity
            {...props}
            style={
                [
                    styles.button, {
                        borderWidth: withBorder ? 1 : 0,
                        borderColor: light_grey,
                        backgroundColor: backgroundColor
                    }
                ]
            }
            activeOpacity={.5}
        >
            {children}
        </TouchableOpacity >
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: white,
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: "center"
    }
})