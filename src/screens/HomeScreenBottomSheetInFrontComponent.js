import {
  homeScreenBottomSheetInFrontComponentStyles
} from './homeScreenBottomSheetInFrontComponentStyles';
import {StyleSheet, View, Text, ScrollView,
TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {customizedNavigationStyling,
removeDuplicateAdjacentElements} from '../configData';

function HomeScreenBottomSheetInFrontComponent({
  componentHeight, componentWidth, contentsAccordingWithChapterId,
  contentLoading, pullUpBottomSheet, currentState, setCurrentState}) {
  const styles = StyleSheet.create(
    homeScreenBottomSheetInFrontComponentStyles(
      componentHeight, componentWidth,
      !contentLoading ? contentsAccordingWithChapterId[
        "grouped_filter"].length : 0
    )
  );
  const groupCoord = (!contentLoading ? contentsAccordingWithChapterId[
    "linear_array"][currentState]?.coord.split(',')[0] : '...');
  const memberCoord = (!contentLoading ? contentsAccordingWithChapterId[
    "linear_array"][currentState]?.coord.split(',')[1] : '...');
  const layer1contentGrouped = removeDuplicateAdjacentElements(((
    !contentLoading && (
    currentState <= (!contentLoading ? (
      contentsAccordingWithChapterId["linear_array"].length - 1
    ) : 0)
  )) ? (
    contentsAccordingWithChapterId[
      contentsAccordingWithChapterId[
        "linear_array"
      ][
        currentState
      ]?.path.split('/')[0]
    ][
      parseInt(contentsAccordingWithChapterId[
        "linear_array"
      ][
        currentState
      ]?.path.split('/')[1]) - 1
    ]
  ) : []).map((item) => {return item.data_type.replace(
    /([a-z])([A-Z])/g, '$1 $2'
  ).split(' ')[0]}))
  return (
    <View style={styles.container}>
      {!contentLoading ? (
        <>
          <View style={styles.row1}>
            <ScrollView horizontal={true}>
              {!contentLoading ? (
                contentsAccordingWithChapterId["grouped_filter"]
              ).map((item) => {
                  return (
                    <View key={
                      contentsAccordingWithChapterId["grouped_filter"].indexOf(
                        item)} style={[
                          styles.row1scrollViewItem,
                          customizedNavigationStyling(groupCoord,
                            contentsAccordingWithChapterId[
                              "grouped_filter"].indexOf(item), componentHeight,
                            componentWidth)
                        ]}>
                      {
                        !(groupCoord == contentsAccordingWithChapterId[
                          "grouped_filter"].indexOf(item))
                        ? (<Text style={styles.row1scrollViewItemText}>{
                          contentsAccordingWithChapterId["grouped_filter"
                          ].indexOf(item)}</Text>)
                        : (
                          (!contentLoading ? Object.keys(
                            contentsAccordingWithChapterId["grouped_filter"][
                              contentsAccordingWithChapterId["grouped_filter"
                              ].indexOf(item)]) : {}).map((subItem) => {
                            return (
                              <Icon
                                key={(!contentLoading ? Object.keys(
                                  contentsAccordingWithChapterId[
                                    "grouped_filter"][
                                      contentsAccordingWithChapterId[
                                        "grouped_filter"].indexOf(item)]) : {}
                                        ).indexOf(subItem)}
                                name={{"tell": "book", "ask": "help",
                                "quizChapterAsk": "clipboard",
                                "projectChapterTellJavaProblemCodeContent":
                                  "desktop"}[subItem]}
                                size={(memberCoord == (!contentLoading
                                  ? Object.keys(contentsAccordingWithChapterId[
                                    "grouped_filter"][
                                      contentsAccordingWithChapterId[
                                        "grouped_filter"].indexOf(item)]): {}
                                        ).indexOf(subItem)) ? (componentHeight
                                        * 0.04) : (componentHeight * 0.02)}
                                color={'hsl(0, 0%, 0%)'}
                              />
                            )
                          })
                        )
                      }
                    </View>
                  )
              }) : null}
            </ScrollView>
          </View>
          <View style={styles.row2}>
            <View style={styles.row2existingPanel}>
              <ScrollView>
                {removeDuplicateAdjacentElements(((!contentLoading && (
                  currentState <= (!contentLoading ? (
                    contentsAccordingWithChapterId["linear_array"].length - 1
                  ) : 0)
                )) ? (
                  contentsAccordingWithChapterId[
                    contentsAccordingWithChapterId[
                      "linear_array"
                    ][
                      currentState
                    ]?.path.split('/')[0]
                  ][
                    parseInt(contentsAccordingWithChapterId[
                      "linear_array"
                    ][
                      currentState
                    ]?.path.split('/')[1]) - 1
                  ]
                ) : []).map((item) => {return item.data_type})).map((item) => {
                  if (item.id > 0) {
                    return (
                      <View key={item.id} style={
                        styles.row2existingPanelItemContainer}><Text>
                        {item.children.map((subItem) => {
                          return (
                            <Text
                              key={item.children.indexOf(subItem)}
                              style={styles.row2text}
                            >
                              {((!contentLoading && (
                                  currentState <= (!contentLoading ? (
                                    contentsAccordingWithChapterId[
                                      "linear_array"].length - 1
                                  ) : 0)
                                )) ? (
                                  contentsAccordingWithChapterId[
                                    contentsAccordingWithChapterId[
                                      "linear_array"
                                    ][
                                      currentState
                                    ]?.path.split('/')[0]
                                  ][
                                    parseInt(contentsAccordingWithChapterId[
                                      "linear_array"
                                    ][
                                      currentState
                                    ]?.path.split('/')[1]) - 1
                                  ]
                                ) : [])[subItem].data_text}
                              {/*
                                {((!contentLoading && (
                                    currentState <= (!contentLoading ? (
                                      contentsAccordingWithChapterId[
                                        "linear_array"].length - 1
                                    ) : 0)
                                  )) ? (
                                    contentsAccordingWithChapterId[
                                      contentsAccordingWithChapterId[
                                        "linear_array"
                                      ][
                                        currentState
                                      ]?.path.split('/')[0]
                                    ][
                                      parseInt(contentsAccordingWithChapterId[
                                        "linear_array"
                                      ][
                                        currentState
                                      ]?.path.split('/')[1]) - 1
                                    ]
                                  ) : [])[subItem].data_type.substring(
                                    item.type.length, ((
                                    !contentLoading && (
                                    currentState <= (!contentLoading ? (
                                      contentsAccordingWithChapterId[
                                        "linear_array"].length - 1
                                    ) : 0)
                                  )) ? (
                                    contentsAccordingWithChapterId[
                                      contentsAccordingWithChapterId[
                                        "linear_array"
                                      ][
                                        currentState
                                      ]?.path.split('/')[0]
                                    ][
                                      parseInt(contentsAccordingWithChapterId[
                                        "linear_array"
                                      ][
                                        currentState
                                      ]?.path.split('/')[1]) - 1
                                    ]
                                  ) : [])[subItem].length)}
                                */}
                            </Text>
                          )
                        })}
                      </Text></View>
                    )
                  }
                })}
              </ScrollView>
            </View>
          </View>
          <View style={styles.row3}>
            <TouchableOpacity style={styles.row3touchableOpacity1} onPress={
              () => {if (currentState > 0) {setCurrentState(currentState - 1)}}}
              ><Icon name='arrow-back-outline' size={componentHeight * 0.06
              }color={'hsl(0, 0%, 0%)'}/></TouchableOpacity>
            <TouchableOpacity style={styles.row3touchableOpacity2} onPress={
              () => {if (currentState < (!contentLoading ? (
                contentsAccordingWithChapterId["linear_array"].length - 1) : 0)
                ) {setCurrentState(currentState + 1)} else if (currentState == (
                  !contentLoading ? (contentsAccordingWithChapterId[
                    "linear_array"].length - 1) : 0)) {pullUpBottomSheet(0)}}}>
                      <Icon name='arrow-forward-outline' size={componentHeight
                      * 0.06}color={'hsl(0, 0%, 0%)'}/></TouchableOpacity>
          </View>
        </>
      ) : (null)}
    </View>
  )
}

export {HomeScreenBottomSheetInFrontComponent}