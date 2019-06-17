import React, {Component} from 'react';

import {
  View,
  Text
} from 'react-native'

const restaurants = [
  {name: 'React Cafe', address: '123 Anywhere St'},
  {name: 'Fancy Restaurant', address: '779 Main St'},
  {name: 'Taco Place', address: '550 Maple Rd'}
]

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


        {
          restaurants.map((place, index) => {
            return (
              <View key={place.name}>
                <Text>{index + 1}</Text>
                <Text>{place.name}</Text>
                <Text style={{ color: 'gray' }}>{place.address}</Text>
                <Text>Info</Text>
              </View>
            )
          })
        }

      </View>
    );
  }
}