import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={HomeScreen} />
      <Tab.Screen name="Liked" component={ProfileScreen} />
      <Tab.Screen name="Suggested" component={ProfileScreen} />
    </Tab.Navigator>
  );
}


function HomeScreen(){
    return <View>
        <Text>Hi there from home screen</Text>
    </View>
}

function ProfileScreen(){
    return <View>
        <Text>Hi there from Profiel screen</Text>
    </View>
}