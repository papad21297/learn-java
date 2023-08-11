import Constants from 'expo-constants';
import {homeScreenCodeTabStyles} from './homeScreenCodeTabStyles'
import {Dimensions, StyleSheet, View, Text,
TouchableOpacity, TextInput, ScrollView, Keyboard} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useRef, useState} from 'react';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {SvgUri} from 'react-native-svg';
import {getSplitArray} from '../hooks/getSplitArray'

const baseAddressUrl = Constants.expoConfig.extra.baseAddressUrl.replace(
  /^.(.*).$/, '$1'
);

function HomeScreenCodeTab() {
  const textInputRef = useRef();
  const insets = useSafeAreaInsets();
  const componentHeight = (Dimensions.get('window').height - (
    insets.top + insets.bottom)) * 0.92;
  const componentWidth = Dimensions.get('screen').width;
  const [currentCodeTab, setCurrentCodeTab] = useState(0);
  const [result, setResult] = useState('...');
  const [value, onChangeText] = useState('public class Program{\n  public static void\n  main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}');
  const styles = StyleSheet.create(homeScreenCodeTabStyles(
    componentHeight, componentWidth, insets.top, insets.bottom
  ));
  return (
    <View style={styles.container}>
      {(() => {
        if (currentCodeTab == 0) {
          return (
            <>
              <View style={styles.row1}>
                <ScrollView>
                  <SyntaxHighlighter 
                    language='java' 
                    style={[atomDark, {fontFamily: 'SOV_MonospaceHinted'}]}
                    highlighter={"prism" || "hljs"}
                  >
                    {value}
                  </SyntaxHighlighter>
                </ScrollView>
              </View>
              <View style={styles.row2}>
                <TextInput
                  ref={textInputRef}
                  editable
                  multiline
                  numberOfLines={120}
                  maxLength={160}
                  onChangeText={(text) => {
                    onChangeText(text);
                    // const previousText = value;
                    // const currentStateText = text;
                    // let splittedArray = getSplitArray(
                    //   previousText, currentStateText
                    // )
                    // if (splittedArray.length == 2) {
                    //   splittedArray.push('')
                    // }
                    // if (splittedArray.length == 1) {
                    //   splittedArray = ['', splittedArray[0], '']
                    // }
                    // // console.log(splittedArray.length);
                    // let resStr = '';
                    // for (let i = 0; i < splittedArray.length; i++) {
                    //   resStr += '"' + splittedArray[i].replace(
                    //     /\\/g, '\\\\'
                    //   ).replace(
                    //     /\"/g, '\\\"'
                    //   ).replace(
                    //     /\n/g, '\\n'
                    //   ) + '"';
                    //   if ((i + 1) < splittedArray.length) {
                    //     resStr += ', '
                    //   }
                    // }
                    // console.log(resStr);
                    // const leading = splittedArray[0];
                    // console.log('"' + leading.replace(
                    //   /\\/g, '\\\\'
                    // ).replace(
                    //   /\"/g, '\\\"'
                    // ).replace(
                    //   /\n/g, '\\n'
                    // ) + '"')
                    // let indentStr = '';
                    // let foundNonSpace = false
                    // for (let i = 0; i < leading.length; i++) {
                    //   if (leading[leading.length - i] != ' ') {
                    //     foundNonSpace = true;
                    //   }
                    //   if (leading[leading.length - i] == ' ') {
                    //     if (!foundNonSpace) {
                    //       indentStr += ' '
                    //     }
                    //   }
                    // }
                    // if (splittedArray[1] == '\n') {
                    //   onChangeText(
                    //     splittedArray[0]
                    //     + splittedArray[1] + indentStr
                    //     + splittedArray[2]
                    //   )
                    // }
                  }}
                  value={value}
                  style={{
                    fontSize: 16,
                    fontFamily: 'SOV_MonospaceHinted',
                    color: 'hsl(0, 0%, 100%)'
                  }}
                />
              </View>
              <View style={styles.row3}>
                <TouchableOpacity onPress={() => {Keyboard.dismiss()}}>
                  <View style={styles.row3col1}>
                    <SvgUri
                      width="80%"
                      height="80%"
                      uri={`${
                        baseAddressUrl
                      }/assets/static/vector_graphics/hide-keyboard-vector.svg`}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  async function postData (value) {
                    const response = await fetch(
                      'https://api.jdoodle.com/v1/execute',
                      {
                        method: 'POST',
                        // mode: 'cors',
                        // cache: 'no-cache',
                        // credentials: 'same-origin',
                        headers: {
                          "Content-Type": "application/json"
                        },
                        // redirect:'follow',
                        // referrerPolicy: 'no-referrer',
                        body: JSON.stringify({
                          "clientId": "229662bc68f8eae8c8659bd1c14aa44c",
                          "clientSecret": "80301b8425072473c0d01523a18aab5856591240a057d1103e8e7f8677383ea4",
                          "script": value,
                          "stdIn": "",
                          "language": "java",
                          "versionIndex": "4",
                          "compileOnly": "false"
                        })
                      }
                    );
                    return response.json()
                  }
                  Keyboard.dismiss()
                  setCurrentCodeTab(1);
                  postData(value).then((data) => {
                    console.log(JSON.stringify(data, null, 2));
                    setResult(data)
                  })
                }}>
                  <View style={styles.row3col2}>
                    <Text style={styles.row3col2text}>
                      RUN
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          )
        } else if (currentCodeTab == 1) {
          return (
            <View style={styles.row4}>
              <Text style={styles.row4titleText}>
                Result:
              </Text>
              <View style={styles.row4_1}>
                <ScrollView>
                  <Text style={styles.row4text}>
                    {result.output ? result.output : '...'}
                  </Text>
                </ScrollView>
              </View>
            </View>
          )
        }
      })()}
      <View style={styles.rowTab}>
        <TouchableOpacity onPress={() => {setCurrentCodeTab(0)}}>
          <View style={styles.rowTabCol1}>
            <Text style={styles.rowTabText}>
              โค้ด
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setCurrentCodeTab(1)}}>
          <View style={styles.rowTabCol2}>
            <Text style={styles.rowTabText}>
              RUN
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export {HomeScreenCodeTab}