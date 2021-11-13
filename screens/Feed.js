import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import firebase from "firebase"

import FactCard from './FactCard';

export default class FeedScreen extends React.Component{
constructor(){
  super()
  this.state={
    stories:[]
  }
}

componentDidMount=()=>{
  this.fetchFacts()
}

fetchFacts = () => {
  firebase
    .database()
    .ref("/posts/")
    .on(
      "value",
      snapshot => {
        let stories = [];
        if (snapshot.val()) {
          Object.keys(snapshot.val()).forEach(function (key) {
            stories.push({
              key: key,
              value: snapshot.val()[key]
            });
          });
        }
        this.setState({ stories: stories });
      },
      function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      }
    );
};

keyExtractor=(item,index)=>{
  index.toString()
}

renderItem=({item:facts})=>{
  return(
    <FactCard facts={facts} navigation={this.props.navigation}/>
  )
}

render() {
  return (
    <View>
      <View>
        <FlatList
         keyExtractor={this.keyExtractor}
         date={this.state.stories}
         renderItem={this.renderItem}
        />
      </View>
    </View>
  );
}
}