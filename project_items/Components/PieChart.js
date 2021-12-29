import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {VictoryPie} from 'victory-native';
import {generateRandomData} from './data';
import viewStyles from './Styles/view-styles';

export default function PieView() {
  const [data, setData] = React.useState(generateRandomData());

  React.useEffect(() => {
    const updateDataHandle = setInterval(() => {
      setData(generateRandomData());
    }, 3000);
    return () => {
      clearInterval(updateDataHandle);
    };
  }, []);

  return (
    <ScrollView style={viewStyles.container}>
      <VictoryPie
        innerRadius={100}
        colorScale={['#3CD7E1', '#FECA7A', '#F2994A', '#C1DAFF', '#0042CC']}
      />
    </ScrollView>
  );
}

PieView.navigationOptions = {
  headerTitle: 'VictoryPie',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  monospace: {
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
  },
  contentContainer: {
    alignItems: 'center',
  },
  header: {
    fontWeight: '600',
    padding: 15,
    fontSize: 18,
  },
});
