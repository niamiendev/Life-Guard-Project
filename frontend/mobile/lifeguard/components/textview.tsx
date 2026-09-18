import { StyleSheet, Text, TextProps } from 'react-native'
import { TEXT } from '../utils/color'
import { SIZE } from '../utils/size'

type Props = TextProps & {
    children: string,
    size?: number,
    color?: string
}

const TextView = (
    { children, style, size = SIZE.md , color = TEXT.secondaryWhite, ...rest }: Props
) => {
    return (

        <Text
            style={
                [
                    {
                        fontSize: size,
                        color: color
                    },
                    style
                ]
            } {...rest} >
            {children}
        </Text>

    )
}

export default TextView

const styles = StyleSheet.create({})