import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, StyleSheet} from 'react-native';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

function MainScreenCardItem({navigation, title, contents, cardtype}) {
  const updateView = title => {
    if (
      title !== undefined &&
      title.update_date !== '' &&
      title.update_date !== undefined
    ) {
      return (
        <View style={{flex: 1, flexDirection: 'row-reverse'}}>
          <Text
            style={{
              textAlignVertical: 'center',
              color: '#FFFFFF',
              fontSize: 11,
            }}>
            업데이트 {title.update_date}
          </Text>
        </View>
      );
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('CheckList')}>
      <View style={styles.card}>
        <View style={styles.cardTitleView}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text
              style={{
                textAlignVertical: 'center',
                color: '#FFFFFF',
                fontSize: 15,
              }}>
              {title.name}
            </Text>
          </View>
          {updateView(title)}
        </View>
        <View style={styles.cardContentsView}>
          {ContentView(contents, cardtype)}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

function ContentView(contents, cardtype) {
  if (cardtype === 'MY_CARD') {
    return <MyMenuCardContent key={1} contents={contents} />;
  } else {
    return <CheckListCardContent key={2} contents={contents} />;
  }
}

function CheckListCardContent({contents}) {
  const contentArray = [];
  for (let i in contents.items) {
    if (contents.card_type === 'CANCEL') {
      contentArray.push(
        <CheckLsitCardContentCancelItem key={i} item={contents.items[i]} />,
      );
    } else {
      contentArray.push(
        <CheckLsitCardContentCommonItem key={i} item={contents.items[i]} />,
      );
    }
  }
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <Text
        style={{
          fontSize: 27,
          marginVertical: 10,
          color: '#FFF',
          textAlignVertical: 'center',
          textAlign: 'center',
        }}>
        {contents.count_num} 건
      </Text>
      <View style={{flexDirection: 'column'}}>{contentArray}</View>
    </View>
  );
}

function CheckLsitCardContentCommonItem({item}) {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text
        style={{
          flex: 1,
          flexDirection: 'row',
          color: '#FFF',
          textAlign: 'right',
          marginRight: 20,
        }}>
        {item.name}
      </Text>
      <Text
        style={{
          flex: 1,
          flexDirection: 'row',
          color: '#FFF',
          textAlign: 'left',
          marginLeft: 20,
        }}>
        {item.value} {item.type === 'NUMBER' ? '건' : '원'}
      </Text>
    </View>
  );
}

function CheckLsitCardContentCancelItem({item}) {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text
        style={{
          flex: 2,
          flexDirection: 'row',
          color: '#FFF',
          textAlign: 'right',
          marginRight: 20,
        }}>
        {item.name}
      </Text>
      <Text
        style={{
          flex: 1,
          flexDirection: 'row',
          color: '#FFF',
          textAlign: 'center',
        }}>
        {item.count !== undefined ? `${item.count}건` : ''}
      </Text>
      <Text
        style={{
          flex: 2,
          flexDirection: 'row',
          color: '#FFF',
          textAlign: 'left',
          marginLeft: 20,
        }}>
        {item.value} 원
      </Text>
    </View>
  );
}

function MyMenuCardContent({contents}) {
  const contentArray = contents.items.map((data, index) => (
    <MyMenuCardContentItem key={index} item={data} />
  ));
  return (
    <View style={{flex: 1}}>
      {/* 체크리스트 항목 컨텐츠의 날짜 영역 */}
      <View style={{flex: 1}}>
        <Text
          style={{
            flex: 1,
            textAlignVertical: 'center',
            textAlign: 'center',
            color: '#FFFFFF',
            marginVertical: 10,
          }}>
          {contents.date}
        </Text>
      </View>

      {/* 체크리스트 항목 컨텐츠의 내용 영역 */}
      <View
        style={{
          flex: 3,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 5,
        }}>
        {contentArray}
      </View>
    </View>
  );
}

export function MyMenuCardContentItem({item}) {
  return (
    <View style={{flex: 1, marginHorizontal: 5}}>
      {/* 숫자 영역 */}
      <Text
        style={{
          flex: 1,
          textAlignVertical: 'center',
          textAlign: 'center',
          color: '#FFFFFF',
          fontSize: 29,
        }}>
        {item.count}
      </Text>

      {/* 글자 영역 */}
      <Text
        style={{
          flex: 1,
          textAlignVertical: 'top',
          textAlign: 'center',
          color: '#FFFFFF',
        }}>
        {item.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 8,
    borderRadius: 10,
  },
  cardTitleView: {
    flex: 1,
    flexDirection: 'row',
  },
  cardContentsView: {
    flex: 4,
    flexDirection: 'column',
  },
});

MainScreenCardItem.propTypes = {
  title: PropTypes.object.isRequired,
  contents: PropTypes.object.isRequired,
};

export default MainScreenCardItem;
