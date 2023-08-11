function signInScreenStyles(
  insetsTop, insetsBottom, componentHeight, componentWidth) {
  return {
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: 'hsl(0, 0%, 0%)',
    },
    contentContainer: {
      backgroundColor: 'hsl(0, 0%, 0%)',
      height: componentHeight,
      width: componentWidth,
      marginTop: insetsTop,
      marginBottom: insetsBottom,
      alignItems: 'center'
    },
    row1: {
      height: componentHeight * 0.45,
      width: componentWidth * 0.8,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center'
    },
    row1vector: {
      backgroundColor: 'hsl(0, 0%, 0%)',
      height: componentHeight * 0.25,
      width: componentHeight * 0.39
    },
    row2: {
      height: componentHeight * 0.13,
      width: componentWidth * 0.9,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingBottom: 10
    },
    row2touchableOpacity: {
      backgroundColor: 'hsl(0, 0%, 100%)',
      height: componentHeight * 0.05,
      width: componentWidth * 0.55,
      borderRadius: componentHeight * 0.025,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    row2touchableOpacityCol1: {
      height: componentHeight * 0.03,
      width: componentWidth * 0.13
    },
    row2touchableOpacityCol2: {
      height: componentHeight * 0.05,
      width: componentWidth * 0.42,
      borderRadius: componentHeight * 0.025,
      alignItems: 'flex-start',
      justifyContent: 'center'
    },
    row2touchableOpacityText: {
      fontSize: componentWidth * 0.035
    },
    horizontalLine: {
      backgroundColor: 'hsl(210, 40%, 60%)',
      height: 3,
      width: componentWidth * 0.8
    },
    row3: {
      // backgroundColor: 'hsl(210, 40%, 20%)',
      height: componentHeight * 0.1,
      width: componentWidth * 0.8,
      justifyContent: 'center',
      flexDirection: 'row'
    },
    row3col1: {
      height: componentHeight * 0.1,
      width: componentWidth * 0.08,
      alignItems: 'flex-end',
      paddingTop: componentHeight * 0.01
    },
    row3col2: {
      height: componentHeight * 0.1,
      width: componentWidth * 0.52,
      alignItems: 'center',
      paddingTop: componentHeight * 0.01
    },
    row3col2text: {
      color: 'hsl(0, 0%, 100%)',
      fontSize: 20,
      fontFamily: 'Kanit-Light'
    },
    row4: {
      height: componentHeight * 0.2,
      width: componentWidth
    },
    row5: {
      borderTopWidth: componentHeight * 0.01,
      borderTopStyle: 'solid',
      borderTopColor: 'hsl(210, 40%, 20%)',
      height: componentHeight * 0.12,
      width: componentWidth,
      // padding: 20,
      alignItems: 'flex-start',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingLeft: componentWidth * 0.02,
      paddingRight: componentWidth * 0.02
    },
    row5text: {
      color: 'hsl(0, 0%, 100%)',
      fontSize: componentWidth * 0.04,
      fontFamily: 'Sarabun-Light'
    },
    row5textContainer: {
      height: componentHeight * 0.04,
      width: componentHeight * 0.04,
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
    // row2: {
    //   backgroundColor: 'hsl(0, 0%, 100%)',
    //   height: componentHeight * 0.2,
    //   width: componentWidth * 0.6,
    //   borderRadius: 30,
    //   padding: 20,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   marginTop: 20,
    //   marginLeft: 20
    // }
  }
};

export {signInScreenStyles};