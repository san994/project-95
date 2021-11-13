import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class FactCard extends React.Component {
 constructor(){
    super()
    this.state={
     factData:this.props.facts.value,
     likes:this.props.likes
    }
 }
 render(){
  return (
     <View>
     <SafeAreaView/>
     <View>
       <View>
         <Text>
           {this.state.factData.name}
         </Text>
         <Text>
           {this.state.factData.fact}
         </Text>
       </View>
     </View>
   </View>
 );
 }
}