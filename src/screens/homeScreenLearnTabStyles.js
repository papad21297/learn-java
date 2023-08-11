function homeScreenLearnTabStyles(
  insetsTop, insetsBottom, componentHeight, componentWidth) {
  return {
    contentContainer: {
      backgroundColor: 'hsl(210, 20%, 20%)',
      height: componentHeight + (insetsTop + insetsBottom),
      width: componentWidth,
      paddingTop: insetsTop
    },
    row1: {
      height: componentHeight * 0.2,
      width: componentWidth,
      flexDirection: 'row'
    },
    row1col1: {
      height: componentHeight * 0.2,
      width: componentWidth * 0.5,
      paddingLeft: componentWidth * 0.02
    },
    row1col1text1: {
      color: 'hsl(0, 0%, 100%)',
      fontFamily: 'Kanit-Bold',
      fontSize: componentWidth * 0.06,
      lineHeight: componentHeight * 0.1
    },
    row1col1text2: {
      color: 'hsl(0, 0%, 100%)',
      fontFamily: 'Sarabun-Bold',
      fontSize: componentWidth * 0.13,
      lineHeight: componentHeight * 0.1
    },
    row1col2: {
      // backgroundColor: 'hsl(195, 30%, 60%)',
      height: componentHeight * 0.2,
      width: componentWidth * 0.5
    },
    row1col2row1: {
      borderStyle: 'solid',
      borderLeftWidth: componentWidth * 0.005,
      borderRightWidth: componentWidth * 0.005,
      borderColor: 'hsl(210, 20%, 60%)',
      height: componentHeight * 0.05,
      width: (componentWidth * 0.5) - (componentHeight * 0.02),
      marginTop: componentHeight * 0.025,
      marginBottom: componentHeight * 0.025,
      marginLeft: componentHeight * 0.01,
      marginRight: componentHeight * 0.01,
      justifyContent: 'center'
    },
    row1col2row1container: {
      backgroundColor: 'hsl(210, 20%, 25%)',
      height: componentHeight * 0.04,
      borderRadius: componentHeight * 0.02,
      marginLeft: componentHeight * 0.01,
      marginRight: componentHeight * 0.01,
      justifyContent: 'center',
      paddingLeft: componentHeight * 0.01,
      paddingRight: componentHeight * 0.01
    },
    row1col2row1text: {
      color: 'hsl(0, 0%, 100%)',
      fontFamily: 'Kanit-Light',
      fontSize: componentWidth * 0.04
    },
    row1col2row2: {
      height: componentHeight * 0.1,
      width: componentWidth * 0.5,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 10
    },
    row1col2row2touchableOpacity: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'hsl(0, 0%, 100%)',
      height: componentHeight * 0.06,
      width: componentWidth * 0.3,
      borderRadius: componentHeight * 0.03,
      alignItems: 'center',
      justifyContent: 'center'
    },
    row1col2row2touchableOpacityText: {
      color: 'hsl(0, 0%, 100%)',
      fontFamily: 'Sarabun-Bold',
      fontSize: componentWidth * 0.04
    },
    row2: {
      height: componentHeight * 0.13,
      width: componentWidth
    },
    row2touchableOpacity: {
      backgroundColor: 'hsl(210, 80%, 60%)',
      height: componentHeight * 0.07,
      width: componentWidth - (componentHeight * 0.06),
      margin: componentHeight * 0.03,
      borderRadius: 15,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    row2touchableOpacityCol1: {
      height: componentHeight * 0.07,
      width: componentHeight * 0.07,
      alignItems: 'center',
      justifyContent: 'center'
    },
    row2touchableOpacityCol2: {
      height: componentHeight * 0.07,
      width: componentWidth * 0.5,
      alignItems: 'center',
      justifyContent: 'center'
    },
    row2touchableOpacityCol2text: {
      color: 'hsl(0, 0%, 100%)',
      fontFamily: 'Sarabun-Bold',
      fontSize: componentWidth * 0.06
    },
    row3: {
      height: componentHeight * 0.07,
      width: componentWidth,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    row3col1: {
      height: componentHeight * 0.07,
      width: componentWidth * 0.5,
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },
    row3col2: {
      height: componentHeight * 0.07,
      width: componentWidth * 0.5,
      alignItems: 'flex-start',
      justifyContent: 'flex-end'
    },
    row4: {
      backgroundColor: 'hsl(210, 70%, 50%)',
      height: 3,
      width: componentWidth
    }
  }
}

export {homeScreenLearnTabStyles}