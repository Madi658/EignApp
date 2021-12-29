import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Label = ({text, ...restProps}) => {
  return (
    <View style={styles.root} {...restProps}>
      <Text style={styles.text}>{text}k $</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
});

export default memo(Label);
