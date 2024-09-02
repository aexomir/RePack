import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

type Props = {
  user: User;
};

const Teacher = ({user}: Props) => {
  return (
    <View style={styles.container}>
      <Text>Hello Mr.{user.name}</Text>
      <Text>You must be a {user.role}</Text>
    </View>
  );
};

export default Teacher;

const styles = StyleSheet.create({
  container: {},
});
