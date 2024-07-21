import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const transactions = [
  { id: '1', name: 'Groceries', amount: 50, date: '2024-07-20' },
  { id: '2', name: 'Rent', amount: 500, date: '2024-07-01' },
  { id: '3', name: 'Utilities', amount: 150, date: '2024-07-15' },
  { id: '4', name: 'Internet', amount: 60, date: '2024-07-10' },
  { id: '5', name: 'iPhone', amount: 1999, date: '2024-07-05' },
  { id: '6', name: 'Insurance', amount: 100, date: '2024-07-25' },
];

export default function Summary() {
  const totalTransactions = transactions.length;
  const totalAmount = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  const largestTransaction = Math.max(...transactions.map(transaction => transaction.amount));
  const smallestTransaction = Math.min(...transactions.map(transaction => transaction.amount));

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Summary</Text>
        <Text style={styles.text}>Total Transactions: {totalTransactions}</Text>
        <Text style={styles.text}>Total Amount: ${totalAmount}</Text>
        <Text style={styles.text}>Largest Transaction: ${largestTransaction}</Text>
        <Text style={styles.text}>Smallest Transaction: ${smallestTransaction}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  card: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
});
