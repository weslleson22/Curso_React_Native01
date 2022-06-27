/*

*/
import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import Aleatorio from './components/Aleatorio';
import MinMax from './components/MinMax';
import Primeiro from'./components/Primeiro'
import CompPadrao, {Comp1, Comp2} from './components/Multi'

export default ()=> (
    <View style={style.App}>  
       
       <Aleatorio min={1} max={60}/>
       <Aleatorio min={1} max={60}/>
       <Aleatorio min={1} max={60}/>
       <Aleatorio min={1} max={60}/>
       <Aleatorio min={1} max={60}/>
       <Aleatorio min={1} max={60}/>

       {/* <CompPadrao/>
       
        <Comp1/>
        <Comp2/>
        <Primeiro/>
        <MinMax min="3" max="20"/>
        <MinMax min="3" max="94"/>*/}
        
    </View>
)
const style = StyleSheet.create({
    App:{
    
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
    
    }
})

