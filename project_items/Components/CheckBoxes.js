import React, {Component, useState} from 'react';
import {Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
const CheckBoxes = props => {
  const [checked, setChecked] = useState(true);

  return (
    <View>
      <CheckBox title={props.textTitle} checked={checked} />
    </View>
  );
};
export default CheckBoxes;
