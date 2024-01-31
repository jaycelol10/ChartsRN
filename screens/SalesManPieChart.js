import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  processColor,
  TouchableOpacity,
} from 'react-native';
import {PieChart} from 'react-native-charts-wrapper';

const PiechartScreen = () => {
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [value, setValue] = useState(45);
  //const {valuee} = route.params;

  const chartData = {
    dataSets: [
      {
        values: [
          {value: 45, label: 'R1'},
          {value: 45, label: 'R2'},
          {value: 45, label: 'R3'},
          {value: 45, label: 'R4'},
          {value: 45, label: 'R5'},
          //{ value: 45, label: 'Retail6' },
          // { value: 45, label: 'Retail7' },
          // { value: 45, label: 'Retail8' },
          // { value: 45, label: 'Retail9' },
          // { value: 45, label: 'Retail10' },
          // { value: 45, label: 'Retail11' },
          // { value: 45, label: 'Retail12' },
        ],
        label: '',
        config: {
          colors: [
            processColor('#00e600'),
            processColor('#00cc00'),
            processColor('#00b300'),
            processColor('#009900'),
            processColor('#33ff33'),
            // processColor('#FFFCF2'),
            // processColor('#A39567'),
            // processColor('#D7AD21'),
            // processColor('#CCC5B9'),
            // processColor('#D17753'),
            // processColor('#CD6B78'),
            // processColor('#3360AE'),
          ],
          valueTextSize: 15,
          valueTextColor: processColor('green'),
          sliceSpace: 2,
          selectionShift: 10,
        },
      },
    ],
  };

  const chartDescription = {
    text: '',
    textSize: 15,
    textColor: processColor('black'),
  };

  const handleSelect = event => {
    const entry = event.nativeEvent;
    setSelectedEntry(entry ? JSON.stringify(entry) : null);
    console.log(event.nativeEvent);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 15,
            color: 'black',
          }}>
          Retails in MMD
        </Text>
      </View>
      <View style={styles.chartContainer}>
        <PieChart
          style={styles.chart}
          chartBackgroundColor={processColor('white')}
          chartDescription={chartDescription}
          data={chartData}
          legend={{
            enabled: false,
            textSize: 10,
            form: 'SQUARE',
            horizontalAlignment: 'LEFT',
            verticalAlignment: 'BOTTOM',
            orientation: 'VERTICAL',
            wordWrapEnabled: true,
          }}
          highlights={[{x: 2}]}
          entryLabelColor={processColor('black')}
          entryLabelTextSize={15}
          drawEntryLabels
          styledCenterText={{
            text: 'Total Sales',
            color: processColor('#003300'),
            size: 20,
            fontWeight: 'bold',
          }}
          centerTextRadiusPercent={100}
          holeRadius={45}
          holeColor={processColor('#f0f0f0')}
          transparentCircleRadius={45}
          transparentCircleColor={processColor('#f0f0f088')}
          maxAngle={350}
          onSelect={handleSelect}
          onChange={event => console.log(event.nativeEvent)}
        />
      </View>
      <View style={{backgroundColor: 'white', margin: 10}}>
        {/* <Text>{selectedEntry}</Text> */}
        <TouchableOpacity onPress={() => setValue(20)}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 15,
                height: 15,
                backgroundColor: '#00e600',
                marginRight: 5,
              }}></View>
            <Text style={{marginLeft: 5, fontWeight: 'bold'}}>R1</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setValue(20)}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 15,
                height: 15,
                backgroundColor: '#00cc00',
                marginRight: 5,
              }}></View>
            <Text style={{marginLeft: 5, fontWeight: 'bold'}}>R2</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setValue(20)}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 15,
                height: 15,
                backgroundColor: '#00b300',
                marginRight: 5,
              }}></View>
            <Text style={{marginLeft: 5, fontWeight: 'bold'}}>R3</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setValue(20)}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 15,
                height: 15,
                backgroundColor: '#009900',
                marginRight: 5,
              }}></View>
            <Text style={{marginLeft: 5, fontWeight: 'bold'}}>R4</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setValue(20)}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 15,
                height: 15,
                backgroundColor: '#33ff33',
                marginRight: 5,
              }}></View>
            <Text style={{marginLeft: 5, fontWeight: 'bold'}}>R5</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  chartContainer: {
    flex: 1,
  },
  chart: {
    flex: 1,
  },
});

export default PiechartScreen;
