import React, {Component} from 'react';
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import {ENTRIES1} from '../../Examples/static/entries';

export default class FlatListBasics extends Component {
  //   renderSeparator = () => {
  //     return (
  //       <View
  //         style={{
  //           height: 1,
  //           width: '100%',
  //           backgroundColor: '#000',
  //         }}
  //       />
  //     );
  //   };
  //handling onPress action
  getListViewItem = item => {
    Alert.alert(item.key);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 450, backgroundColor: 'white', width: '100%'}}>
          <FlatList
            keyExtractor={item => item.id}
            data={ENTRIES1[0].design}
            horizontal
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  aspectRatio: 1,
                }}>
                <Image
                  style={{height: '100%', width: '100%'}}
                  resizeMode="cover"
                  source={{uri: item.illustration}}></Image>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '50%',
    width: '100%',
    backgroundColor: 'red',
    marginTop: '20%',
  },
  item: {
    padding: 50,
    fontSize: 18,
    height: 44,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);
