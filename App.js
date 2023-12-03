import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { displayImage } from './myFetch'
const App = () => {


  const [imageUri,setImageUri]= useState('')
  const [imageUri1,setImageUri1]= useState('https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') 

    const displayImages=async()=>{
 //     alert('Display Image')
 
 await  displayImage().then((results)=>{
  console.log('result of display Image',results)   
 
//  setImageUri(results)
    }) 
    }
    return (
    <View style={{backgroundColor:'#D3D3D3',flex:1,justifyContent:'center',alignItems:'center'}}>
       <Text>Home</Text>
     <View style={{flexDirection:'row'}}>
     <View style={{height:200,width:200,borderColor:'red',borderWidth:1,marginLeft:10}}>
  {imageUri?

       <Image source={{uri:imageUri}} style={{height:200,width:200}} />
:
<Text>No Image Found</Text>
      }
       </View>

</View>
<TouchableOpacity onPress={()=>displayImages()}
style={{marginTop:20,backgroundColor:'red',padding:10}}>
  <Text style={{color:'white'}}>Display Image</Text>
</TouchableOpacity>
</View>

  )
}

export default App

const styles = StyleSheet.create({})