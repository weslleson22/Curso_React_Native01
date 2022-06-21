/*

*/
import React from 'react';
import {View, Text} from 'react-native'

import Primeiro from'./components/Primeiro'
import CompPadrao, {Comp1, Comp2} from './components/Multi'

export default ()=> (
    <View>
        <CompPadrao/>
        <Comp1/>
        <Comp2/>
        <Primeiro/>
    </View>
)