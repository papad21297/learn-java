import {
  homeScreenLearnTabMinimumComponentStyles
} from './homeScreenLearnTabMinimumComponentStyles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Dimensions, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

function HomeScreenLearnTabMinimumComponent({pullUpBottomSheet}) {
  const insets = useSafeAreaInsets();
  const componentHeight = (Dimensions.get('window').height - (
    insets.top + insets.bottom)) * 0.92;
  const componentWidth = Dimensions.get('screen').width;
  const styles = StyleSheet.create(homeScreenLearnTabMinimumComponentStyles(
    componentHeight, componentWidth, insets.top, insets.bottom
  ));
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        pullUpBottomSheet()
      }}>
        <View style={styles.row1}>
          <Text style={styles.row1text}>
            LEARN (เลิร์น)
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export {HomeScreenLearnTabMinimumComponent}