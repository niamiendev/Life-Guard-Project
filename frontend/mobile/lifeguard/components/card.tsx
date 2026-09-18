import { StyleSheet, View, ViewProps } from 'react-native'

type Props = ViewProps & {
    radius?: number,
    border?: boolean,
    borderColor?: string,
    backgroundColor?: string,
    padding?: number,
    opacity?: number
}


const Card = (
    {
        opacity,
        radius, border, borderColor, backgroundColor, padding,
        children, style, ...rest

    }: Props) => {
    return (
        <View
            style={
                [
                    styles.card,
                    {
                        borderWidth: border ? 1 : 0,
                        borderColor: border ? borderColor : "",
                        borderRadius: radius,
                        backgroundColor,
                        padding,
                        opacity
                    },
                    style
                ]
            }
            {...rest}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card:{
        alignSelf:"flex-start"
    }
})