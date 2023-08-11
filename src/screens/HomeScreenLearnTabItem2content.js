import {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView,
TouchableOpacity} from 'react-native';
import {
  homeScreenLearnTabItem2contentStyles
} from './homeScreenLearnTabItem2contentStyles';
import {initializeApp} from "firebase/app";
import {getDatabase, ref, child, get} from "firebase/database";
import {firebaseConfig} from '../configData';
import {topicsSplitting} from '../hooks/topicsSplitting';

var app = initializeApp(firebaseConfig);
const dbRef = ref(getDatabase());
function HomeScreenLearnTabItem2content({componentHeight, componentWidth,
  pullUpBottomSheet}) {
  const [loading, setLoading] = useState(true);
  const [topics, setTopics] = useState([]);
  const [focusedModule, setFocusedModule] = useState(0);
  useEffect(() => {
    get(
      child(dbRef, 'java_lessons')
    ).then((snapshot) => {
      snapshot.exists() ? (
        (() => {
          setTopics(topicsSplitting(snapshot.val()?.modules, snapshot.val(
          )?.chapters));
          // console.log(JSON.stringify(topicsSplitting(snapshot.val()?.modules, snapshot.val(
          // )?.chapters), null, 2));
        })()
      ) : (
        console.log("No data available")
      )
    }
    ).catch((error) => {
      console.error(error);
    }).finally(() => {
      setLoading(false);
    });
  }, [])
  const styles = StyleSheet.create(
    homeScreenLearnTabItem2contentStyles(
      componentHeight, componentWidth
    )
  );
  return (
    !loading ? (
      <View style={styles.container}>
        <View style={styles.row1}>
          <ScrollView horizontal={true}>
            {topics.map((item) => {
              return (
                <TouchableOpacity key={item.id} onPress={() => {
                  setFocusedModule(topics.indexOf(item))
                }}>
                  <View style={[styles.row1scrollViewThinBorderItem, {
                    backgroundColor: (
                      topics.indexOf(item) == focusedModule
                    ) ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 0%)'
                  }]}>
                    <Text style={[styles.row1scrollViewItemThinText, {
                      color: (
                        topics.indexOf(item) == focusedModule
                      ) ? 'hsl(0, 0%, 0%)' : 'hsl(0, 0%, 100%)'
                      }]}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        </View>
        <View style={styles.row2}>
          <ScrollView>
            <Text style={styles.row2thinText}>
              {Object.keys(topics[focusedModule]?.children).map((_item) => {
                const item = topics[focusedModule]?.children[_item]
                return (
                  <View key={item.id} style={styles.row2cell}>
                    <TouchableOpacity onPress={() => {
                      pullUpBottomSheet(item.id)
                    }}>
                      <View style={styles.row2item}>
                        <View style={styles.row2itemRow1}>
                          <Text style={styles.row2boldText}>
                            {item.data_title}
                          </Text>
                        </View>
                        <View style={styles.row2itemRow2} />
                        <View style={styles.row2itemRow3}>
                          <Text style={styles.row2thinText}>
                            {item.data_type}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                )
              })}
            </Text>
          </ScrollView>
        </View>
      </View>
    ) : (null)
  )
}

export {HomeScreenLearnTabItem2content}