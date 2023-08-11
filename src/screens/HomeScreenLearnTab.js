import Constants from 'expo-constants';
import {homeScreenLearnTabStyles} from './homeScreenLearnTabStyles';
import {
  Dimensions, StyleSheet, View, Text, ScrollView,
  TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import {SvgUri} from 'react-native-svg';
import {HomeScreenLearnTabItem1content} from './HomeScreenLearnTabItem1content';
import {HomeScreenLearnTabItem2content} from './HomeScreenLearnTabItem2content';

const baseAddressUrl = Constants.expoConfig.extra.baseAddressUrl.replace(
  /^.(.*).$/, '$1'
);

function HomeScreenLearnTab({userInfoDataObject, signOut, pullUpBottomSheet}) {
  const insets = useSafeAreaInsets();
  const [currentTab, setCurrentTab] = useState(1);
  const componentHeight = (Dimensions.get('window').height - (
    insets.top + insets.bottom
  )) * 0.92;
  const componentWidth = Dimensions.get('screen').width;
  const styles = StyleSheet.create(homeScreenLearnTabStyles(
    insets.top, insets.bottom, componentHeight, componentWidth));
  return (
    <View style={styles.contentContainer}>
      <View style={styles.row1}>
        <View style={styles.row1col1}>
          <Text style={styles.row1col1text1}>หน้าเลือกบทเรียน</Text>
          <Text style={styles.row1col1text2}>Java</Text>
        </View>
        <View style={styles.row1col2}>
          <View style={styles.row1col2row1}>
            <ScrollView horizontal={true}><View style={
              styles.row1col2row1container}><Text style={
                styles.row1col2row1text}>{`ชื่อผู้ใช้: "${
                  userInfoDataObject?.name}" (อีเมล: "${
                    userInfoDataObject?.email}")`}</Text></View></ScrollView>
          </View>
          <View style={styles.row1col2row2}>
            <TouchableOpacity onPress={signOut}><View
              style={styles.row1col2row2touchableOpacity}><Text style={
                styles.row1col2row2touchableOpacityText}>ออกจากระบบ</Text>
              </View></TouchableOpacity>
          </View>
        </View>
      </View>
      {/* <View style={styles.row2}>
        <TouchableOpacity><View style={styles.row2touchableOpacity}><View
          style={styles.row2touchableOpacityCol1}><Icon
            name='play-circle-outline' size={componentHeight * 0.05} color={
              'hsl(0, 0%, 100%)'} /></View><View style={
                styles.row2touchableOpacityCol2}><Text style={
                  styles.row2touchableOpacityCol2text}>เริ่มเรียน / เรียนต่อ</Text>
                </View></View></TouchableOpacity>
      </View> */}
      <View style={styles.row3}>
        <TouchableOpacity onPress={() => {setCurrentTab(0)}}>
          <View style={styles.row3col1}><SvgUri width={componentWidth * 0.43}
            height={componentWidth * 0.09} uri={(currentTab == 0) ? `${
              baseAddressUrl
            }/assets/static/vector_graphics/page-home-tab-learn-inner-tab-part-item-1-active-true.svg`
            : `${
              baseAddressUrl
            }/assets/static/vector_graphics/page-home-tab-learn-inner-tab-part-item-1-active-false.svg`
          } /></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setCurrentTab(1)}}>
          <View style={styles.row3col2}><SvgUri width={
            componentWidth * 0.43} height={componentWidth * 0.09} uri={(
              currentTab == 1) ? `${
                baseAddressUrl
              }/assets/static/vector_graphics/page-home-tab-learn-inner-tab-part-item-2-active-true.svg`
              : `${
                baseAddressUrl
              }/assets/static/vector_graphics/page-home-tab-learn-inner-tab-part-item-2-active-false.svg`
            } /></View>
        </TouchableOpacity>
      </View>
      <View style={styles.row4}></View>
      {(() => {
        switch(currentTab) {

          case 0:
            return (
              <HomeScreenLearnTabItem1content
                componentHeight={(componentHeight * 0.73) - 2}
                componentWidth={componentWidth}
              />
            )

          case 1:
            return (
              <HomeScreenLearnTabItem2content
                componentHeight={(componentHeight * 0.73) - 2}
                componentWidth={componentWidth}
                pullUpBottomSheet={pullUpBottomSheet}
              />
            )

        }
      })()}
    </View>
  )
}

export {HomeScreenLearnTab}