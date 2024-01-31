import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  LogBox,
  Button,
  TouchableOpacity,
} from 'react-native';

const MainScreen = ({navigation}) => {
  return (
    <View>
      <Button
        title="StackedBarChartScreen"
        onPress={() => navigation.navigate('SalesComparison')}
      />
      <Button
        title="SalesManPieChart"
        onPress={() => navigation.navigate('SalesMan')}
      />
      <Button
        title="CustomerCategory"
        onPress={() => navigation.navigate('CustGroup')}
      />
    </View>
  );
};

export default MainScreen;
