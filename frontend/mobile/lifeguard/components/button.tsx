import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { light_grey, white } from '../utils/color'

type props = TouchableOpacityProps & {
    withBorder?: boolean,
    isDashed?:boolean,
    backgroundColor?: string,
}
const Button = ({ withBorder,isDashed, backgroundColor, style, children, ...props }: props) => {
    return (
        <TouchableOpacity
            {...props}
            style={
                [
                    styles.button, {
                        borderStyle:isDashed ? "dashed" : "solid",
                        borderWidth: withBorder ? 1 : 0,
                        borderColor: light_grey,
                        backgroundColor: backgroundColor
                    },
                    style
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