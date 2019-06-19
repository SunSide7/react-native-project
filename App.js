import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView
} from 'react-native'

import Header from 'components/Header'

const restaurants = [
  {name: 'React Cafe', address: '123 Anywhere St'},
  {name: 'Fancy Restaurant', address: '779 Main St'},
  {name: 'Taco Place', address: '550 Maple Rd'},
  {name: "Tony's Dinner", address: '4101 College St'},
  {name: 'Pasta Central', address: '706 Harper St'},
  {name: 'Burger Builder', address: '4869 Hamilton Dr'},
  {name: 'Pizza Express', address: '1049 Bird St'},
  {name: 'Teriaki To Go', address: '1885 Tea Berry Lane'},
  {name: 'Maroon Deli', address: '1082 Stuart St'},
  {name: 'Prime Bar and Grill', address: '1848 Fairfax Dr'},
  {name: 'Dumping House', address: '747 Kelly Dr'},
  {name: 'Hot Chicken', address: '1816 Olive St'},
  {name: "Luna's Tap Room", address: '3256 Cherry Ridge Dr'},
  {name: "Bobby's Burgers", address: '4152 Berkley St'},
  {name: 'Turnpike Diner', address: '4571 Central Ave'},
  {name: 'Bombay Express', address: '65 Queens Lane'},
  {name: 'Coffe Central', address: '3228 Oakwood Circle'},
  {name: "King's Garden", address: '2935 Victoria St'},
  {name: 'Salads and More', address: '2454 Preston St'}
]

export default class App extends Component {

  state = {
    search: null
  }

  render() { 

    return (
      <View style={{
        flex: 1
      }}  >
        <Header />

        <TextInput 
          style={styles.input}
          placeholder="Live Search"
          onChangeText={text => {
            this.setState({ search: text })
          }}
          value={this.state.search}/>

        <ScrollView contentContainerStyle={{
          paddingTop: 30
        }}>
          {
            restaurants.filter(place => {
              return !this.state.search ||
                    place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
            }).map((place, index) => {
              return (
                <View key={place.name} style={[
                    styles.row,
                    {backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7'}
                  ]}  >
                  <View style={styles.edges}>
                    <Text>{index + 1}</Text>
                  </View>

                  <View style={{
                    flexDirection: 'column',
                    flex: 8
                  }}>
                    <Text>{place.name}</Text>
                    <Text style={styles.addressText}>{place.address}</Text>
                  </View>

                  <View style={styles.nameAddress}>
                    <Text>Info</Text>
                  </View>
                </View>
              )
            })
          }          
        </ScrollView>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  edges: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  nameAddress: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addressText: {
    color: 'gray'
  },
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5'
  }
})