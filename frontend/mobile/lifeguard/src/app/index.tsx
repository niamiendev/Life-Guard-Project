import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Index(){

  const [compt, setCompt]  = useState(0)

  const compter = () =>{
      setCompt(compt + 1)
  }

  return (
    <View style = {styles.container}>
      <Text> Je pense que ca va mieux</Text>
      <Text style = {styles.title}> {compt} </Text>
      <TouchableOpacity style = {styles.button} activeOpacity={0.4} onPress={compter} >
        <Text> Compter </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      backgroundColor: "#b7e930",
      alignItems:'center',
      justifyContent:'center'
    },
    title :{
      fontSize: 60
    },
    button:{
      paddingHorizontal:12,
      paddingVertical:8,
      borderRadius:16,
      borderColor:"#0000ff",
      borderWidth:2,
      backgroundColor: "#ff0000"
    }
  }
)