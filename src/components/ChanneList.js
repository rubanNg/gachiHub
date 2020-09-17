import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput, FlatList, TouchableOpacity, Alert, Image
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import HttpClient from '../httpClient';
import { urls } from '../utils';
import { globalStyles } from '../utils/commonStyles'

export default function ChanneList(props) {

  const [channelList, setChannelList] = useState([]);


  useEffect(() => {
    loadChannels();
  }, []);


  function errorcallBack(error) {
    Alert.alert('Error channelsInfo', error.message);
  }


  function loadChannels() {
    HttpClient.get(urls.channeslListIds()).ready(listIds => {
      console.log('listIds ', listIds);
      HttpClient.get(urls.channelsInfo(listIds), {}).ready(resposne => {
        setChannelList(resposne.items);
      }, errorcallBack);
    }, errorcallBack);
  }

  function onChangeText(value) {}

  function itemClick(event) {}

  return (
    <React.Fragment>
      <View style={style.mainView}>
        {/* <View style={style.inputView}>
          <TextInput style={style.input} placeholder="Фильтрация по названию" onChangeText={value => onChangeText(value)}/>
        </View> */}
        <View style={style.listView}>
          <FlatList style={style.list}  
            renderItem={ ({ item }) => <ChanneListItem onClick={itemClick} item={item}/> }
            keyExtractor={(item) => item.etag }
            data={channelList}>
          </FlatList>
        </View>
      </View>
    </React.Fragment>
  )
}


function ChanneListItem(props) {

  const { onClick, item } = props;

  return (
    <React.Fragment>
      <TouchableOpacity onPress={(event) => onClick(event)} style={style.listItem}>
        <View style={style.listItemContent}>
          <Image style={style.imageAvatar} source={{ uri: item.snippet.thumbnails.default.url }}></Image>
          <Text style={style.listItemContentTextStyle} >{ item.snippet.title }</Text>
        </View>
      </TouchableOpacity>
    </React.Fragment>
  )
}

const style = StyleSheet.create({
  mainView: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#3A4356',
  },
  input: { 
    height: '100%', 
    borderColor: 'gray', 
    borderBottomColor: '#008EF4',
    borderBottomWidth: 2,
    width: '100%',
    color: 'white',
  },
  inputView:{ height: 50, width: '100%', padding: 5, paddingRight: 10, paddingLeft: 10, },
  listView: { 
    flex: 1, 
    alignItems: 'flex-start', 
    justifyContent: 'flex-start', 
    paddingTop: 5,
    width: '100%',
  },
  list: {
    width: '100%',
  },
  listItem: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    width: '100%',
    height: 60,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  listItemContent: {
    backgroundColor: '#3F4A5D',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 5,
  },
  imageAvatar: {
    height: 30,
    width: 30,
    resizeMode: 'stretch',
    borderRadius: 15,
  },
  listItemContentTextStyle: {
    paddingLeft: 10,
    color: 'white',
  }
});