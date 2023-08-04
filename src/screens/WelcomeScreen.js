import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Sentience</Text>
        <Text style={styles.subtitle}>The Future is here, powered by AI.</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/welcome.png')}
          style={styles.image}
        />
      </View>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Home')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  textContainer: {
    marginTop: hp(2),
  },
  title: {
    fontSize: wp(10),
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#4A5568',
  },
  subtitle: {
    fontSize: wp(4),
    textAlign: 'center',
    fontWeight: '600',
    color: '#4A5568',
    letterSpacing: wp(0.2),
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: wp(75),
    height: wp(75),
  },
  button: {
    backgroundColor: '#10B981',
    marginHorizontal: wp(5),
    padding: wp(4),
    borderRadius: wp(2),
  },
  buttonText: {
    fontSize: wp(6),
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});

export default WelcomeScreen;
