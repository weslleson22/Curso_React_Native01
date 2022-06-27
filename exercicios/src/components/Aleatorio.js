import React from "react";
import { Text } from "react-native";
import Estilo from './estilo';

export default ({min, max}) => {
     
    const delta = max - min + 1
    const aleatoria = parseInt(Math.random() * delta + min)
    //const aleatoria = 10
    
    return(
        
        <Text style={Estilo.fonteG}> 
            O valor aleatorio é {aleatoria}
        </Text>

    )
}
