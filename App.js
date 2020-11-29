import React, {useState} from 'react';
import {Text ,StyleSheet, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

const pendingView = () => (
  <View style={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{fontSize: 30, color: 'red'}}>Loading...</Text>
  </View>
);

const App = () => {
  const [image, setImage] = useState(null);

  const takePicture = async(camera) => {
    try {
      const options = {quality: 0.9, base64: false}
      const data = await camera.takePictureAsync(options)
      setImage(data.uri)
    } catch (error) {
      console.warn(error);
    }
  }
  return(
    <View>
      <Text>keep it up, da fak</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
