import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../assets/styles/styles';
import Card from './Card';

const ImageContent = (props) => {
  title = props.route.params.title;
  url = props.route.params.url;
  description = props.route.params.description;

  return(
    <Card>
      <Image style={styles.cardImage} source={{ uri: url }} />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </Card>
  );
}

export default ImageContent;