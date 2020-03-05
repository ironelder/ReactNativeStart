import React from 'react';
import { TextInput, SafeAreaView, Text, View, StyleSheet, FlatList, RefreshControl } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import ListItem from './WebListItem';
import CommonListItem from './WebCommonListItem';
import Frisbee from 'frisbee';
import { DATA } from '../../testData/testData';
import { API_KEY } from '../../constants'

function WebScreen({ navigation }) {

  //Item Click Event
  const [selected, setSelected] = React.useState(new Map());
  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      setSelected(newSelected);
    },
    [selected],
  );

  // create a new instance of Frisbee
  const initialLoadData = {
    loading: false, // user list loading
    isRefreshing: false,
    isEnd: false,
    page: 1,
    data: []
  };
  const [loadData, setLoadData] = React.useState(initialLoadData);

  const api = new Frisbee({
    baseURI: 'https://dapi.kakao.com/v2/search', // optional
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `KakaoAK ${API_KEY}`
    }
  });

  const requestTestAsync = async () => {
    try {
      const requestURL = '/web';
      let res = await api.get(requestURL, {
        body: {
          query: 'test',
          page: loadData.page
        }
      });
      let endData = res.body.meta.is_end;
      if (loadData.isRefreshing) {
        let listData = res.body.documents;
        setLoadData({ loading: false, isRefreshing: false, data: listData, isEnd: endData, page: 1 });
      } else {
        let pageNumber = loadData.page;
        if (!endData) {
          pageNumber++;
        }
        let listData = loadData.data;
        let currentData = listData.concat(res.body.documents);
        setLoadData({ loading: false, isRefreshing: false, data: currentData, isEnd: endData, page: pageNumber });
      }
      console.log("page = ", loadData.page);
      return res.body;
    }
    catch (err) {
      console.log('[requestTestAsync::err]', err);
    }
  }

  React.useEffect(() => {
    loadData.page = 1;
    loadData.data = [];
    requestTestAsync();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.topSearchContainer}>
          <View style={styles.searchInputContainer}>
            <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Search ..."
              placeholderTextColor="grey"
              style={styles.searchInput}
            />
          </View>
        </View>
        <FlatList
          backgroundColor='yellow'
          refreshControl={
            <RefreshControl
              refreshing={loadData.isRefreshing}
              onRefresh={() => {
                setLoadData({ isRefreshing: true });
                requestTestAsync();
              }}
            />
          }
          data={loadData.data}
          renderItem={
            ({ item }) => (
              // <ListItem
              //   id={item.url}
              //   title={item.title}
              //   selected={!!selected.get(item.url)}
              //   onSelect={onSelect}
              // />
              <CommonListItem
                title={item.title}
                contents={item.contents} />
            )
          }
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0.1}
          onEndReached={() => {
            if (!loadData.isEnd) {
              requestTestAsync();
              console.log("Not End");
            } else {
              console.log("End");
            }
          }
          } />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchInput: {
    flex: 1,
    fontWeight: "700",
    backgroundColor: "white"
  },
  searchInputContainer: {
    flexDirection: "row",
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: "white",
    marginHorizontal: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    elevation: 3,
    shadowOpacity: 1
  },
  topSearchContainer: {
    backgroundColor: "white",
    justifyContent: 'center',
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd"
  }
})

export default WebScreen;