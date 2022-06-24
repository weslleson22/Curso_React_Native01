import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";
 

export default props =>(
    //console.warn(props)
    
    <Text style= {estilo.fonteG}>
        O valor {props.max} eh maior que o valor {props.min}!
    </Text>
    
)  