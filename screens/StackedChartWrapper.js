// export default StackedBarChartScreen;
import React, {useState} from 'react';
import {View, Text, StyleSheet, processColor} from 'react-native';
import {BarChart} from 'react-native-charts-wrapper';

const StackedBarChartScreen = () => {
  const [selectedEntry, setSelectedEntry] = useState(null);

  const legend = {
    enabled: true,
    textSize: 14,
    form: 'SQUARE',
    formSize: 14,
    xEntrySpace: 14,
    yEntrySpace: 5,
    wordWrapEnabled: true,
  };

  const data = {
    dataSets: [
      {
        values: [
          {y: [40, 30], marker: ['T', 'C']},
          {y: [50, 20], marker: ['T', 'C']},
          {y: [40, 30], marker: ['T', 'C']},
          {y: [50, 20], marker: ['T', 'C']},
          {y: [40, 30], marker: ['T', 'C']},
        ],
        label: '',
        config: {
          colors: [processColor('#66ff66'), processColor('#ff6666')], //C0FF8C
          stackLabels: ['Traditional', 'Customer'],
        },
      },
    ],
  };

  const xAxis = {
    granularityEnabled: true,
    granularity: 1,
    drawLabels: true,
    limitLines: Array.from({length: 24}, (_, i) => ({
      limit: i,
      label: i % 2 === 0 ? 'MMD' : 'SGD',
      valueFont: 3,
    })),
  };

  // const handleSelect = event => {
  //   const entry = event.nativeEvent;
  //   setSelectedEntry(entry ? JSON.stringify(entry) : null);
  //   console.log(event.nativeEvent);
  // };

  return (
    <View style={{flex: 1}}>
      <View style={{height: 80}}>
        {/* <Text> selected entry</Text>
        // <Text> {selectedEntry}</Text> */}
      </View>

      <View style={styles.container}>
        <BarChart
          style={styles.chart}
          xAxis={xAxis}
          data={data}
          legend={legend}
          drawValueAboveBar={false}
          marker={{
            enabled: true,
            markerColor: processColor('#F0C0FF8C'),
            textColor: processColor('white'),
            markerFontSize: 14,
          }}
          // highlights={highlights}
          // onSelect={handleSelect}
          // onChange={event => console.log(event.nativeEvent)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  chart: {
    flex: 1,
  },
});

export default StackedBarChartScreen;
