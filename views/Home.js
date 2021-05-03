import React, {useState, useEffect} from 'react';
import { Text, View, Image, Button } from 'react-native';
import styles from '../assets/styles/styles';
import ImageRequest from '../api/ImageRequest';

const Home = ({ navigation }) => {
  const [imageList, setImageList] = useState([]);

  useEffect(() =>{
    apiResponse();
  }, []);

  const apiResponse = async () => {
    const response = await ImageRequest
      .get('https://c37612585d5c9984c7757c2b1446fe84.m.pipedream.net');
    setImageList(response.data);
    console.log(imageList);
  }

  if (!imageList) {
    return
  }

  return (
    <View style={styles.container}>
      <Image style={styles.homeLogo} source={require('../assets/imgs/logoTitle.png')} />
      <Image style={styles.homeAvatar} source={require('../assets/imgs/lucas.png')} />
      <View style={styles.homeButton}>
        <Button
          color='#26CB17'
          title='Prosseguir'
          onPress={() => navigation.navigate('ImageList', {
            imageList: imageList
          })}
        />
      </View>
    </View>
  );
}

export default Home;