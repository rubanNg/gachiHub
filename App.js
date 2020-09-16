import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native';
import{ HttpClient } from './http/httpClient' 
import { urls } from './urls';

export default function App() {

  const [channelList, setChannelList] = useState([]);

  function loadChannels() {
    HttpClient.get(urls.channelVideos('UCDF2z2dZ7k9rOye1S137INA')).ready(function (response) {
      setChannelList(response.items);
      console.log(response)
    }, function(error) {
      setChannelList([]);
    });
  }

  useEffect(() => {
    loadChannels();
  }, []);

  function keyExtractor(item , index) { return index }

  function renderItem({ item, index }) {
    return (
      <Button title={item.snippet.title} onPress={(event) => listItemClick(event, item.snippet.title)}>
      </Button>
    )
  }

  function listItemClick(event, message) {
    Alert.alert('Наименование ', message);
  }

  return (
    <View style={styles.container}>
      <FlatList style={ styles.list } keyExtractor={keyExtractor} data={channelList} renderItem={renderItem} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  list: {
    width: '100%',
  },
  listItem: {
    height: 50,
    width: '100%',
    color: 'white',
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 2,
  }
});
