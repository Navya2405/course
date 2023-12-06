import {View, Text, Image} from "react-native";
// const logoImg=require("./assets/adaptive-icon.png");

export default function App() {
  return (
     <View style ={{ flex: 1, backgroundColor: "plum", padding:60}}> 
          <Text style={{color:"white"}}> World</Text>
       <View 
        style={{ width: 200, height:200, backgroundColor:"lightblue"}}> 
       </View>
       <View 
        style={{ width: 200, height:200, backgroundColor:"white"}}> 
       </View>
    
        <Image 
          source={require('./assets/adaptive-icon.png')}
          style={{width:200, height:200}}>
        </Image>
       
     </View>
     
  );
}
