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
} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from './screens/MainScreen';
import StackedBarChartScreen from './screens/StackedChartWrapper';
import PiechartScreen from './screens/SalesManPieChart';
import CategoryPiechartScreen from './screens/CustGroupPieChart';
import {ScreensProvider} from './context/ScreensContext';
const stack = createNativeStackNavigator();
const App = () => {
  return (
    // <View>
    //   <Text>Hello</Text>
    // </View>
    <NavigationContainer>
      <stack.Navigator>
        {/* <stack.screen name="CustGroupPieChart" component={PieChart} */}
        {/* <stack.Navigator initialRouteName="MainScreen"></stack.Navigator> */}
        <stack.Screen name="Main" component={MainScreen} />
        <stack.Screen
          name="SalesComparison"
          component={StackedBarChartScreen}
        />
        <stack.Screen name="SalesMan" component={PiechartScreen} />
        <stack.Screen name="CustGroup" component={CategoryPiechartScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <ScreensProvider>
      <App />
    </ScreensProvider>
  );
};
