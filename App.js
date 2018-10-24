import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  createElementsFromList(list) {
    return(list.map((listElement) => {
      return(
        <Text style={styles.groceryItem}>{listElement}</Text>
      )
    }))
  }

  render() {
    const groceryList = [
      "Banana",
      "Cononut",
      "Agave",
      "Small Child",
      "Huge cone of sugar",
    ]

    return (
      <View style={styles.container}>
        <View>
          {this.createElementsFromList(groceryList)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  groceryItem: {
    fontSize: 50,
  },
});
