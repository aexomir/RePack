import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import ModuleResolver from './src/ModuleResolver';

const Student = React.lazy(
  () => import(/* webpackChunkName: "student" */ './src/Student'),
);

const Teacher = React.lazy(
  () => import(/* webpackChunkName: "teacher" */ './src/Teacher'),
);

const user: User = {
  name: 'mammadi',
  role: 'teacher',
};

function App() {
  ModuleResolver.init();

  const Side = React.useMemo(
    () =>
      user.role === 'student' ? (
        <Student user={user} />
      ) : (
        <Teacher user={user} />
      ),
    [],
  );

  return (
    <View style={styles.container}>
      <React.Suspense fallback={<Text>Loading...</Text>}>{Side}</React.Suspense>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
