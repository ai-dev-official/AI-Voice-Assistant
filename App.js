import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React,{useEffect} from 'react'
import Navigation from './src/navigation/Navigation'
import { apiCall } from './src/api/openAi'

export default function App() {

    // useEffect(()=>{
    //     // apiCall('create an image of a dog playing with cat')
    // },[])

  return (
    <>
    <StatusBar backgroundColor='transparent' barStyle='dark-content'  />
    <Navigation />
    </>
  )
}