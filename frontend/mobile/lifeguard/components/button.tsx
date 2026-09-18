import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { DARK_BACKGROUNDS } from '../utils/color'
import { SIZE } from '../utils/size'

type Props = TouchableOpacityProps & {
    radius?: number,
    border?: boolean,
    borderColor?: string,
    backgroundColor?: string,
    padding?: number
}
const Button = (
    { radius = SIZE.smx, border, borderColor = DARK_BACKGROUNDS.darkGray,
        backgroundColor, padding = SIZE.smx,
        children, style, ...rest }: Props
) => {
    return (
        <TouchableOpacity activeOpacity={.5} {...rest} style={
            [
                styles.button,
                {
                    borderWidth: border ? 1 : 0,
                    borderColor: border ? borderColor : "",
                    borderRadius: radius,
                    backgroundColor,
                    padding: padding,

                },
                style
            ]
        }  >
            {children}
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        alignItems:"center"
    }
})