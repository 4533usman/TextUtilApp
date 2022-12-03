import { Button , StyleSheet} from "react-native"
import React from 'react'
const Cbtn = () => {
  return (
    <Button title="1" style={styles.bt}/>
  )
}

const styles = StyleSheet.create({
    bt:{
        height:70,
        width:70,
        justifyContent:'center'
    }
})

export default Cbtn