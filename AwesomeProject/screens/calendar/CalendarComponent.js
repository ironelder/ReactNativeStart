import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList, Dimensions} from 'react-native';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

function JBCalendarComponent() {
  const flag = {value: false};
  return (
    <View style={{flexDirection: 'column'}}>
      <TestView />
    </View>
  );
}

function TestView() {
  const SECTIONS = [
    {
      content: '달력 출력될 부분',
    },
  ];

  const [state, setState] = useState({
    activeSections: SECTIONS,
  });

  const _renderHeader = section => {
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#9a9',
          paddingHorizontal: 10,
          paddingVertical: 20,
        }}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{flex: 1, backgroundColor: '#FFF'}}
            onPress={() => {
              console.log(' view Click ');
              return;
            }}>
            <Text style={{flex: 1, textAlign: 'left'}}>{'<<'} 2020.01</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 17,
            }}>
            2020.02
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{flex: 1, textAlign: 'right'}}>2020.03{'>>'}</Text>
        </View>
      </View>
    );
  };

  const _renderContent = section => {
    const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
    const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
    const workout = {key: 'workout', color: 'green'};
    return (
      <CalendarList
        markedDates={{
          '2017-10-25': {
            dots: [vacation, massage, workout],
            selected: true,
            selectedColor: 'red',
          },
          '2017-10-26': {dots: [massage, workout], disabled: true},
        }}
        onVisibleMonthsChange={months => {
          console.log('now these months are visible', months);
        }}
        // Enable horizontal scrolling, default = false
        horizontal={true}
        // Enable paging on horizontal, default = false
        pagingEnabled={true}
        markingType={'multi-dot'}
        dayComponent={({date, state}) => {
          return (
            <View style={{flexDirection: 'column'}} backgroundColor="#ded">
              <Text
                style={{
                  textAlign: 'center',
                  color: state === 'disabled' ? 'gray' : 'black',
                }}>
                {date.day}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: state === 'disabled' ? 'gray' : 'black',
                  fontSize: 9,
                }}>
                {date.day}일
              </Text>
            </View>
          );
        }}
      />
    );
  };

  const _updateSections = activeSections => {
    setState({activeSections});
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Accordion
        style={{flex: 1}}
        sections={SECTIONS}
        activeSections={state.activeSections}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={_updateSections}
      />
      {/* <View
        style={{
          position: 'absolute',
          zIndex: 2,
          left: 0,
          height: 50,
          width: Dimensions.get('window').width / 3,
          backgroundColor: '#ced',
        }}>
        <Text style={{flex: 1, textAlign: 'left', textAlignVertical: 'center'}}>
          {'<<'} 2020.01
        </Text>
      </View>

      <View
        style={{
          position: 'absolute',
          zIndex: 2,
          right: 0,
          height: 50,
          width: Dimensions.get('window').width / 3,
          backgroundColor: '#ced',
        }}>
        <Text
          style={{flex: 1, textAlign: 'right', textAlignVertical: 'center'}}>
          2020.03{'>>'}
        </Text>
      </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
export default JBCalendarComponent;
