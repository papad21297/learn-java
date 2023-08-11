import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {forwardRef, useCallback, useImperativeHandle} from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Animated, {useSharedValue, withSpring, useAnimatedStyle,
  interpolate, Extrapolate} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

const pushingDownPercentage = 100;
const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const HomeScreenBottomSheetInFront = forwardRef(({ChildComponent, 
contentsAccordingWithChapterId, contentLoading, pullUpBottomSheet,
currentState, setCurrentState}, ref) => {
  const insets = useSafeAreaInsets();
  const MAX_TRANSLATE_Y = (SCREEN_HEIGHT * (
    pushingDownPercentage / -100)) + insets.top;
  const translateY = useSharedValue(0);
  const active = useSharedValue(false);
  const scrollTo = useCallback((destination) => {
    'worklet';
    active.value = destination !== 0;
    (destination <= -1000) ? (
      translateY.value = withSpring(MAX_TRANSLATE_Y, { damping: 50 })
    ) : (
      translateY.value = withSpring(destination, { damping: 50 })
    )
  }, []);
  const isActive = useCallback(() => {
    return active.value;
  }, []);
  useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
    scrollTo,
    isActive,
  ]);
  const context = useSharedValue({ y: 0 });
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > SCREEN_HEIGHT * -0.7 * (
        pushingDownPercentage / 100) + (1 - (pushingDownPercentage / 100))) {
        scrollTo(0);
      } else if (translateY.value < SCREEN_HEIGHT * -0.7 * (
        pushingDownPercentage / 100) + (1 - (pushingDownPercentage / 100))) {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 0],
      Extrapolate.CLAMP
    );

    return {
      borderRadius,
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
      <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
        <GestureDetector gesture={gesture}>
          <View style={styles.topBar}>
            <View style={styles.line} />
          </View>
        </GestureDetector>
        <ChildComponent
          componentHeight={SCREEN_HEIGHT - (insets.top + 34)}
          componentWidth={Dimensions.get('window').width}
          contentsAccordingWithChapterId={contentsAccordingWithChapterId}
          contentLoading={contentLoading}
          pullUpBottomSheet={pullUpBottomSheet}
          currentState={currentState}
          setCurrentState={setCurrentState}
        />
      </Animated.View>
  );
});
const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'hsl(0, 0%, 100%)',
    position: 'absolute',
    top: SCREEN_HEIGHT * (pushingDownPercentage / 100),
    borderRadius: 25,
  },
  topBar: {
    height: 34,
    width: '100%'
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
});

export {HomeScreenBottomSheetInFront}