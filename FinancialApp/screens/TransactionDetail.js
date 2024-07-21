import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function TransactionDetail({ route }) {
  const { transaction } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{transaction.name}</Text>
        <Text style={styles.text}>Amount: {transaction.amount}</Text>
        <Text style={styles.text}>Date: {transaction.date}</Text>
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
