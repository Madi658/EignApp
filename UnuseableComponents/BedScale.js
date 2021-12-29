import React, {Component} from 'react';
import {Text, View} from 'react-native';
export default class BedScale extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', marginLeft: '1%', width: '80%'}}>
        <View
          style={{
            height: 50,
            width: '15%',
            backgroundColor: '#0042CC',
            marginTop: '2%',
            marginLeft: '5%',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderEndWidth: 1,
          }}>
          <Text style={{fontSize: 18, color: '#fff'}}>Any</Text>
        </View>
        <View
          style={{
            height: 50,
            width: '15%',
            backgroundColor: '#DFE9FF',
            marginTop: '2%',
            justifyContent: 'center',
            alignItems: 'center',
            borderEndWidth: 1,
          }}>
          <Text style={{fontSize: 18}}>1</Text>
        </View>
        <View
          style={{
            height: 50,
            width: '15%',
            backgroundColor: '#DFE9FF',
            marginTop: '2%',
            justifyContent: 'center',
            alignItems: 'center',
            borderEndWidth: 1,
          }}>
          <Text style={{fontSize: 18}}>2</Text>
        </View>
        <View
          style={{
            height: 50,
            width: '15%',
            backgroundColor: '#DFE9FF',
            marginTop: '2%',
            justifyContent: 'center',
            alignItems: 'center',
            borderEndWidth: 1,
          }}>
          <Text style={{fontSize: 18}}>3</Text>
        </View>
        <View
          style={{
            height: 50,
            width: '15%',
            backgroundColor: '#DFE9FF',
            marginTop: '2%',
            justifyContent: 'center',
            alignItems: 'center',
            borderEndWidth: 1,
          }}>
          <Text style={{fontSize: 18}}>4</Text>
        </View>
        <View
          style={{
            height: 50,
            width: '15%',
            backgroundColor: '#DFE9FF',
            marginTop: '2%',
            justifyContent: 'center',
            alignItems: 'center',
            borderEndWidth: 1,
          }}>
          <Text style={{fontSize: 18}}>5</Text>
        </View>
        <View
          style={{
            height: 50,
            width: '15%',
            backgroundColor: '#DFE9FF',
            marginTop: '2%',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}>
          <Text style={{fontSize: 18}}>6+</Text>
        </View>
      </View>
    );
  }
}
