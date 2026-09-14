import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { white_text } from '../utils/color'

type props = {
    text: string
}
const SectionTitle = ({text}:props) => {
  return (
    <View>
      <Text style = {styles.content}>{text}</Text>
    </View>
  )
}

export default SectionTitle

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 16,
        color: white_text,
    }
})