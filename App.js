import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import ChanneList from './src/components/ChanneList';

export default function App() {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <ChanneList></ChanneList>
      </View>
    </React.Fragment> 
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
