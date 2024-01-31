import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  processColor,
  TouchableOpacity,
} from 'react-native';
import {PieChart} from 'react-native-charts-wrapper';
import Context from '../context/ScreensContext';

const CategoryPiechartScreen = ({navigation}) => {
  const [selectedEntry, setSelectedEntry] = useState(null);
  //const [value, setValue] = useState(45);
  const value = useContext(Context);
  const chartData = {
    dataSets: [
      {
        values: [
          {value: value, label: 'Retail'},
          {value: value, label: 'SemiWholeSale'},
          {value: value, label: 'WholeSale'},

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
            processColor('#00ff00'),
            processColor('#ff0000'),
            processColor('#ffff00'),
            // processColor('#33ff33'),
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
  //   const navigateToSalesMan = () => {
  //     const valueToSend = 'Hello from SenderScreen';
  //     // Navigate to 'SalesMan' screen and pass the value as a parameter
  //     navigation.navigate('SalesMan', valueToSend);
  //   };
  return (
    <View style={styles.container}>
      {/* <Text>Value:{value}</Text> */}
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        {/* <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 15,
            color: 'black',
          }}>
          
        </Text> */}
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
        <TouchableOpacity onPress={() => navigation.navigate('SalesMan')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 15,
                height: 15,
                backgroundColor: '#00ff00',
                marginRight: 5,
              }}></View>
            <Text style={{marginLeft: 5, fontWeight: 'bold'}}>Retail</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SalesMan')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 15,
                height: 15,
                backgroundColor: '#ff0000',
                marginRight: 5,
              }}></View>
            <Text style={{marginLeft: 5, fontWeight: 'bold'}}>
              SemiWholeSale
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SalesMan')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 15,
                height: 15,
                backgroundColor: '#ffff00',
                marginRight: 5,
              }}></View>
            <Text style={{marginLeft: 5, fontWeight: 'bold'}}>WholeSale</Text>
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

export default CategoryPiechartScreen;
