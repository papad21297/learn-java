import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  HomeScreenBottomSheetInFront
} from '../screens/HomeScreenBottomSheetInFront'

function Gestures({children, _ref, ChildComponent,
contentsAccordingWithChapterId, contentLoading, pullUpBottomSheet,
currentState,
setCurrentState}) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {children}
      <HomeScreenBottomSheetInFront
        ref={_ref}
        ChildComponent={ChildComponent}
        contentsAccordingWithChapterId={contentsAccordingWithChapterId}
        contentLoading={contentLoading}
        pullUpBottomSheet={pullUpBottomSheet}
        currentState={currentState}
        setCurrentState={setCurrentState}
      />
    </GestureHandlerRootView>
  )
}

export {Gestures}