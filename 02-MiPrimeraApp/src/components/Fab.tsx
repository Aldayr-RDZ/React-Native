import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, TouchableNativeFeedback} from 'react-native'

interface Props{
    title: string;
    onPress:()=> void;
    position ?: 'br'|'bl';
}


export const Fab = ({title, onPress, position='br'}: Props) => {
   
    return (
        <TouchableOpacity
        style={ [styles.fabLocation,
                (position=='bl') ? styles.left: styles.right
        
        ] }
        onPress= {onPress}
    >
        <View style= {styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
        </View>
        
        </TouchableOpacity>
    
    )
}

const styles= StyleSheet.create({
  
    fabLocation:{
        position:'absolute' ,
        bottom: 250,
        
 },
 right:{
    right:25
 },
 left:{
    left:25
 },
 fabLocationLeft:{
     position:'absolute' ,
     bottom: 250,
     left: 80
 },
 fab:{
     backgroundColor: '#EB8FFF',
     width: 90,
     height: 50,
     borderRadius: 50,
     justifyContent: 'center',
     shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
 },
 fabText:{
     color: 'white',
     fontSize: 25,
     fontWeight: 'bold',
     alignSelf: 'center'
 }
})
