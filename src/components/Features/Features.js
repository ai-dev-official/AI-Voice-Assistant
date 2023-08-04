import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Features = () => {
  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      className="space-y-4">
      <View style={styles.container}>
        <Text style={styles.title}>Features</Text>
        <View style={styles.featureItem}>
          <View style={styles.iconContainer}>
            <Image
              source={require('../../../assets/images/chatgptIcon.png')}
              style={styles.icon}
            />
            <Text style={styles.featureTitle}>chatGPT</Text>
          </View>
          <Text style={styles.featureDescription}>
            ChatGPT is an incredible AI model that brings you the convenience of
            instant and knowledgeable responses, assisting you with creative
            ideas across a vast spectrum of topics.
          </Text>
        </View>
        <View style={[styles.featureItem, {backgroundColor: '#D8BFD8'}]}>
          <View style={styles.iconContainer}>
            <Image
              source={require('../../../assets/images/dalleIcon.png')}
              style={styles.icon}
            />
            <Text style={styles.featureTitle}>Dalle</Text>
          </View>
          <Text style={styles.featureDescription}>
            Dalle is an exceptional AI model that provides you with instant and
            knowledgeable responses while assisting you with creative ideas on a
            diverse array of topics.
          </Text>
        </View>
        <View style={[styles.featureItem, {backgroundColor: '#90EE90'}]}>
          <View style={styles.iconContainer}>
            <Image
              source={require('../../../assets/images/smartaiIcon.png')}
              style={styles.icon}
            />
            <Text style={styles.featureTitle}>SmartAI</Text>
          </View>
          <Text style={styles.featureDescription}>
            SmartAI is a remarkable AI model designed to deliver instant and
            knowledgeable responses, offering valuable insights and creative
            ideas across a wide range of subjects.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp('80%'),
    paddingVertical: hp('4%'),
  },
  title: {
    fontSize: wp('6.5%'),
    fontWeight: 'bold',
    color: '#4A5568',
  },
  featureItem: {
    backgroundColor: '#86D0CB',
    padding: wp('4%'),
    borderRadius: wp('2%'),
    marginTop: hp('2%'),
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  icon: {
    height: hp('4%'),
    width: hp('4%'),
  },
  featureTitle: {
    fontSize: wp('4.8%'),
    fontWeight: 'bold',
    color: '#4A5568',
    marginLeft: wp('1%'),
  },
  featureDescription: {
    fontSize: wp('3.8%'),
    color: '#4A5568',
    fontWeight: '600',
  },
});

export default Features;
