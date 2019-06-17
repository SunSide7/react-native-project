import React, {Component} from 'react';

import {
  View,
  Text
} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={{
          padding: 40,
          fontSize: 30,
          textAlign: 'center',
          color: '#0066cc',
          fontWeight: '300'
        }}>Restourant Review</Text>

        <Text>React Cafe</Text>
        <Text style={{color: "gray"}}>
          123 Anywhere St
        </Text>

        <Text>Fancy Restourant</Text>
        <Text style={{color: "gray"}}>
          799 Main St
        </Text>
      </View>
    );
  }
}