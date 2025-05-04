/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SelectRepairTypeComponent from './screens/repair_type_select_screen/select_repair_type.component';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <SelectRepairTypeComponent />
    </SafeAreaProvider>
  );
}

export default App;
