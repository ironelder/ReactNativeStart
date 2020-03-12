import React from 'react';
import { TextInput, SafeAreaView, Text, View, StyleSheet, FlatList, RefreshControl } from 'react-native';
import CommonListItem from '../web_tab/WebCommonListItem';
import Frisbee from 'frisbee';
import { API_KEY } from '../../constants';
import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import reducer from '../../reduxFolder/ReducerJS';
import { actionCreatorsForKaKao as KaKaoAction } from '../../reduxFolder/ReducerJS';

function ImageScreen({ state, dispatch, navigation }) {
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
      const requestURL = '/image';
      let res = await api.get(requestURL, {
        body: {
          query: 'test',
          page: 1
        }
      });
      console.log("res = ", res.body.meta);
      dispatch({ type: 'DATA_LOAD_COMPLETE', response: res.body })
      return res.body;
    }
    catch (err) {
      console.log('[requestTestAsync::err]', err);
    }
  }

  const resetTestAsync = async () => {
    try {
      dispatch({
        type: 'DATA_LOAD_COMPLETE', response: {
          meta: {
            is_end: true
          },
          documents: []
        }
      })
      return null;
    }
    catch (err) {
      console.log('[requestTestAsync::err]', err);
    }
  }

  React.useEffect(() => {
    console.log('=============    mount it!   ================');
    requestTestAsync();
  }, []);


  return (
    <SafeAreaView>
      <View>
        <FlatList
          backgroundColor='yellow'
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => {
                // requestTestAsync();
                resetTestAsync();
              }}
            />
          }
          data={state.datas}
          renderItem={
            ({ item }) => (
              <CommonListItem
                title={item.display_sitename}
                contents={item.doc_url} />
            )
          }
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0.1}
          onEndReached={() => {
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

const mapStateToProps = state => {
  let storedRepositories = state.datas;
  console.log("mapStateToProps state =  is OK");
  return {
    ...state,
    datas: storedRepositories
  };
};

// const mapDispatchToProps = (dispatch) => {
//   console.log("mapDispatchToProps dispatch = ", dispatch);
//   return {
//     // dataLoadComplete: bindActionCreators(KaKaoAction.dataLoadComplete, dispatch)
//     dataLoadComplete: (response) => dispatch({ action: 'DATA_LOAD_COMPLETE', response })
//   };
// }

export default connect(mapStateToProps)(ImageScreen);