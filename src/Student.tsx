import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

type Props = {
  user: User;
};

const Student = ({user}: Props) => {
  return (
    <View style={styles.container}>
      <Text>Hello Mr.{user.name}</Text>
      <Text>You should be a {user.role}</Text>
    </View>
  );
};

export default Student;

const styles = StyleSheet.create({
  container: {},
});
