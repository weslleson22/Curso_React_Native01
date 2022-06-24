import React from "react";

import { View, Text } from "react-native";
import Estilo from './estilo'

function Comp(){
    return <Text style={Estilo.fonteG}>Com #01 Oficial</Text>
}
 
function Comp1(){
    return <Text style={Estilo.fonteG}>Comp#022</Text>
}

function Comp2(){
    return <Text style={Estilo.fonteG}>Com #03</Text>

}

export {Comp1, Comp2}
export default Comp

