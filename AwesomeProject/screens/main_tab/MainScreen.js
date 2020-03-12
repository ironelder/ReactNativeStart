import React from 'react';
import { TextInput, SafeAreaView, Text, View, StyleSheet, FlatList, RefreshControl, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CardItem from './MainScreenCardItem';
import { dev as DevTestData} from './DevTest'
import { TouchableOpacity } from 'react-native-gesture-handler';

function MainScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
          <CardItem navigation={navigation} title={DevTestData.title} contents={DevTestData.contents} cardtype='MY_CARD'>
          </CardItem>
        <Button
          title="체크리스트"
          onPress={() => navigation.navigate('CheckList')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default MainScreen;