import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListScreen from '../ListScreen';
import AddScreen from '../AddScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListScreen"
        component={ListScreen}
        options={{
          title: 'Yapılacaklar',
          headerTitleAlign: 'center', // Başlığı ortala
        }}
      />
      <Stack.Screen
        name="AddScreen"
        component={AddScreen}
        options={{
          headerBackTitleVisible: false, // Geri butonunun yanındaki başlık metnini kaldırır
          animation: 'fade_from_bottom',
          title: 'Yeni Görev Ekle',
          headerTitleAlign: 'center', // Başlığı ortala
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
