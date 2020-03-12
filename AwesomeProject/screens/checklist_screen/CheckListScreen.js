import React from 'react';
import { Text, View, StyleSheet,FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MyMenuCardContentItem } from '../main_tab/MainScreenCardItem';
import { dev as DevTestData} from '../main_tab/DevTest'
import CardItem from '../main_tab/MainScreenCardItem';


function CheckListScreen({ navigation }) {
  const contentArray = [];
  for(let i in DevTestData.contents.items){
    contentArray.push(
      <MyMenuCardContentItem key={i} item={DevTestData.contents.items[i]} />
    );
  }
  return (
      <View style={{flex:1, flexDirection:'column'}}>
        <ScrollView style={{flex:1, backgroundColor:'#FFFFFF'}}>
          <View style={{flex:1, backgroundColor:'#000000', padding:10}}>
            {/* 날짜 표기를 위한 뷰 */}
            <View style={{flex:1, flexDirection:'column'}}>
              <Text style={{flex:1, color:'#FFF', textAlignVertical:'center', textAlign:'center', marginBottom:5}}>
                어제 2020.02.17 월요일
              </Text>
              <Text style={{flex:1, color:'#FFF', textAlignVertical:'center', textAlign:'center', marginBottom:5}}>
                업데이트 오늘 오전 11:37
              </Text>
            </View>

            {/* 패널을 표기하기 위한 뷰 */}
            <View style={{flex:1, flexDirection:'row'}}>
            {contentArray}
            </View>
          </View>

          <CardItem navigation={navigation} title={DevTestData.title} contents={DevTestData.contents}>
          </CardItem>
          <CardItem navigation={navigation} title={DevTestData.title} contents={DevTestData.contents}>
          </CardItem>
          <CardItem navigation={navigation} title={DevTestData.title} contents={DevTestData.contents}>
          </CardItem>
          <CardItem navigation={navigation} title={DevTestData.title} contents={DevTestData.contents}>
          </CardItem>
          <CardItem navigation={navigation} title={DevTestData.title} contents={DevTestData.contents}>
          </CardItem>
          <CardItem navigation={navigation} title={DevTestData.title} contents={DevTestData.contents}>
          </CardItem>
        </ScrollView>
      </View>
  );
}

export default CheckListScreen;