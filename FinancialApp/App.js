import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import TransactionsList from './screens/TransactionsList';
import TransactionDetail from './screens/TransactionDetail';
import Summary from './screens/Summary';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#f7f7f7',
    primary: '#6200ee',
  },
};

function TransactionsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#6200ee' }, headerTintColor: '#fff' }}>
      <Stack.Screen name="TransactionsList" component={TransactionsList} options={{ title: 'Transactions' }} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetail} options={{ title: 'Transaction Details' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={AppTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Transactions') {
              iconName = 'list';
            } else if (route.name === 'Summary') {
              iconName = 'pie-chart';
            }

            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#6200ee',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Transactions" component={TransactionsStack} />
        <Tab.Screen name="Summary" component={Summary} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
