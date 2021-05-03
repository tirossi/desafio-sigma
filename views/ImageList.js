import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from '../assets/styles/styles';

const ImageList = (props) => {
  const DATA = props.route.params.imageList;

  const Item = ({ title, url, description }) => (
    <TouchableOpacity style={styles.listItem} onPress={() => props.navigation.navigate('ImageContent', {
      title: title,
      url: url,
      description: description
    })}>
      <Image
        source={{ uri: url }}
        style={styles.imageItem}
      />
      <Text style={styles.titleItem}>{title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      url={item.url}
      description={item.description}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

export default ImageList;