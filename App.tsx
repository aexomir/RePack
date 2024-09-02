import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import ModuleResolver from './src/ModuleResolver';

const MyChunk = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./src/MyChunk')), 10000);
  });
});

function App() {
  ModuleResolver.init();

  return (
    <View style={styles.container}>
      <React.Suspense fallback={<Text>Loading...</Text>}>
        <MyChunk />
      </React.Suspense>
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
