import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const transactions = [
  { id: '1', name: 'Groceries', amount: '$50', date: '2024-07-20' },
  { id: '2', name: 'Rent', amount: '$500', date: '2024-07-01' },
  { id: '3', name: 'Utilities', amount: '$150', date: '2024-07-15' },
  { id: '4', name: 'Internet', amount: '$60', date: '2024-07-10' },
  { id: '5', name: 'iPhone', amount: '$1999', date: '2024-07-05' },
  { id: '6', name: 'Insurance', amount: '$100', date: '2024-07-25' },
];

export default function TransactionsList({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="receipt" size={24} color="black" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.subtitle}>{item.amount}</Text>
              <Text style={styles.subtitle}>{item.date}</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="black" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  item: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'gray',
  },
});
