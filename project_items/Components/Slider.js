import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from 'rn-range-slider';

import Thumb from '../Slider/Thumb';
import Rail from '../Slider/Rail';
import RailSelected from '../Slider/RailSelected';
import Notch from '../Slider/Notch';
import Label from '../Slider/Label';

const SliderScreen = () => {
  const [rangeDisabled, setRangeDisabled] = useState(false);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);
  const [floatingLabel, setFloatingLabel] = useState(false);

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);
  const toggleRangeEnabled = useCallback(
    () => setRangeDisabled(!rangeDisabled),
    [rangeDisabled],
  );

  return (
    <View
      style={{
        alignItems: 'stretch',
        padding: 12,
        bottom: '3%',
      }}>
      <Slider
        style={{width: '80%', alignSelf: 'center'}}
        min={min}
        max={max}
        step={1}
        disableRange={rangeDisabled}
        floatingLabel={floatingLabel}
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={handleValueChange}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <Text
          style={{
            width: 50,
            color: 'black',
            fontSize: 13,
            marginLeft: '12%',
            marginRight: '12%',
          }}>
          {low}k $
        </Text>
        <Text
          style={{
            width: 50,
            color: 'black',
            fontSize: 13,
            marginLeft: '12%',
            marginRight: '12%',
          }}>
          {high}k $
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'stretch',
    padding: 12,
    flex: 1,
    backgroundColor: '#555',
  },
  slider: {width: '80%', alignSelf: 'center'},
  button: {},
  header: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 12,
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  valueText: {
    width: 50,
    color: 'black',
    fontSize: 13,
    marginLeft: '12%',
    marginRight: '12%',
  },
});

export default SliderScreen;
