import {StatusBar} from 'expo-status-bar';
import FontsInjection from '../hooks/FontsInjection';
import {useAuth} from '../contexts/Auth';
import {useState, useCallback, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Gestures} from '../contexts/Gestures'
import {
  HomeScreenBottomSheetInFrontComponent
} from '../screens/HomeScreenBottomSheetInFrontComponent';
import {chaptersFiltering} from '../hooks/chaptersFiltering';
import {initializeApp} from "firebase/app";
import {getDatabase, ref, child, get} from "firebase/database";
import {firebaseConfig} from '../configData';

var app = initializeApp(firebaseConfig);
const dbRef = ref(getDatabase());
function Router() {
  const [contentLoading, setContentLoading] = useState(true);
  const [
    contentsAccordingWithChapterId, setContentsAccordingWithChapterId
  ] = useState('...');
  const ref = useRef(null);
  const [currentState, setCurrentState] = useState(0);
  const pullUpBottomSheet = useCallback((chapterId) => {
    setContentLoading(true);
    setCurrentState(0);
    get(
      child(dbRef, 'java_lessons')
    ).then((snapshot) => {
      snapshot.exists() ? (
        (() => {
          setContentsAccordingWithChapterId(
            chaptersFiltering(
              chapterId,
              snapshot.val()?.lessons,
              snapshot.val()?.exercises
            )
          );
          // console.log(JSON.stringify(chaptersFiltering(
          //   chapterId,
          //   snapshot.val()?.lessons,
          //   snapshot.val()?.exercises
          // ), null, 2));
        })()
      ) : (
        console.log("No data available")
      )
    }
    ).catch((error) => {
      console.error(error);
    }).finally(() => {
      setContentLoading(false);
  });
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-1000);
    }
  }, []);
  const {authData, loading} = useAuth();
  if (loading) {return null;}
  return (
    <FontsInjection>
      <SafeAreaProvider>
        <Gestures
          _ref={ref}
          ChildComponent={HomeScreenBottomSheetInFrontComponent}
          contentsAccordingWithChapterId={contentsAccordingWithChapterId}
          contentLoading={contentLoading}
          pullUpBottomSheet={pullUpBottomSheet}
          currentState={currentState}
          setCurrentState={setCurrentState}
        >
          <NavigationContainer>
            {/* <AppStack pullUpBottomSheet={pullUpBottomSheet}/> */}
            {authData ? <AppStack pullUpBottomSheet={pullUpBottomSheet}/> : <AuthStack />}
          </NavigationContainer>
        </Gestures>
        <StatusBar style="light" />
      </SafeAreaProvider>
    </FontsInjection>
  )
}

export {Router}