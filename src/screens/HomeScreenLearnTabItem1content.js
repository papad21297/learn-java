import Constants from 'expo-constants';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {
  homeScreenLearnTabItem1contentStyles
} from './homeScreenLearnTabItem1contentStyles';
import ProgressStatus from '../../assets/static/ProgressStatus';
import {SvgUri} from 'react-native-svg';
import Icon from "react-native-vector-icons/Ionicons";

const baseAddressUrl = Constants.expoConfig.extra.baseAddressUrl.replace(
  /^.(.*).$/, '$1'
);

const percentageOfProgress = 20;

function HomeScreenLearnTabItem1content({componentHeight, componentWidth}) {
  const styles = StyleSheet.create(
    homeScreenLearnTabItem1contentStyles(componentHeight, componentWidth)
  );
  return (
    <View style={styles.container}>
      {/* <View style={styles.row1}>
        <View style={styles.row1col1}>
          <Text style={styles.row1col1text}>
            ความคืบหน้า
          </Text>
        </View>
        <View style={styles.row1col2}>
          <Text style={styles.row1col2text}>
            {percentageOfProgress}%
          </Text>
        </View>
      </View>
      <View style={styles.row2}>
        <ProgressStatus
          height={componentHeight * 0.1}
          percentageOfProgress={percentageOfProgress}
        />
      </View> */}
      <View style={styles.row3} />
      <ScrollView>
        <View style={styles.row4_1}>
          <Text style={styles.row4_1text}>
            ทำไมต้อง Java?
          </Text>
        </View>
        <View style={styles.row4_2}>
          <View style={styles.row4_2col1}>
            <SvgUri
              width={componentHeight * 0.07}
              height={componentHeight * 0.07}
              uri={`${
                baseAddressUrl
              }/assets/static/vector_graphics/star-badge.svg`}
            />
          </View>
          <View style={styles.row4_2col2}>
            <Text style={styles.row4_2col2text}>
              Java เป็นหนึ่งในภาษาการเขียนโปรแกรมคอมพิวเตอร์ที่เป็นที่นิยมมากที่สุด
            </Text>
          </View>
        </View>
        <View style={styles.row4_3}>
          <View style={styles.row4_3col1}>
            <SvgUri
              width={componentHeight * 0.2}
              height={componentHeight * 0.2}
              uri={`${
                baseAddressUrl
              }/assets/static/vector_graphics/software-development-icon-with-java-logo-on-top.svg`}
            />
          </View>
          <View style={styles.row4_3col2}>
            <Text style={styles.row4_3col2text}>
              Java สามารถใช้สร้าง
            </Text>
            {[
              'แอปพลิเคชันสำหรับ Android', 'เกมส์', 'แอปพลิเคชันการธนาคาร',
              'เว็บแอปพลิเคชัน', 'รวมถึงสิ่งอื่น ๆ อีกมากมาย!'
            ].map((item) => {
              return (
                <View key={item} style={styles.row4_3col2item}>
                  <View style={styles.row4_3col2itemcol1}>
                    <Text style={styles.row4_3col2itemcol1text}>
                      -
                    </Text>
                  </View>
                  <View style={styles.row4_3col2itemcol2}>
                    <Text style={styles.row4_3col2itemcol2text}>
                      {item}
                    </Text>
                  </View>
                </View>
              )
            })}
          </View>
        </View>
        <View style={styles.row4_4}>
          <Text style={styles.row4_4text}>
          สิ่งที่จะได้จากการเรียนจาวา:
          </Text>
        </View>
        <View style={styles.row4_5}>
          <View style={styles.row4_5col1}>
            <Icon
              name='bulb-outline' size={componentHeight * 0.07}
              color='hsl(0, 0%, 100%)' />
          </View>
          <View style={styles.row4_5col2}>
            <Text>
              <Text style={styles.row4_5col2thinText}>
                ได้เรียนรู้ Java{' '}
              </Text>
              <Text style={styles.row4_5col2boldText}>
                เพื่อสร้างโปรแกรมที่สามารถใช้งานได้ในชีวิตจริง
              </Text>
              <Text style={styles.row4_5col2thinText}>
                {' ('}ได้เรียนรู้ Java ผ่านการลงมือปฏิบัติจริง{')'}
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.row5} />
    </View>
  )
}

export {HomeScreenLearnTabItem1content};