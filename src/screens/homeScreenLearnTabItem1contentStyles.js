function homeScreenLearnTabItem1contentStyles(componentHeight, componentWidth) {
  return {
    container: {
      backgroundColor: 'hsl(210, 40%, 10%)',
      height: componentHeight,
      width: componentWidth,
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    row1: {
      height: componentHeight * 0.08,
      width: componentHeight * 0.9,
      marginTop: componentHeight * 0.01,
      marginBottom: componentHeight * 0.01,
      flexDirection: 'row',
      alignItems: 'flex-end'
    },
    row1col1: {
      height: componentHeight * 0.08,
      width: componentHeight * 0.45,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      paddingLeft: componentWidth * 0.05
    },
    row1col1text: {
      color: 'hsl(0, 0%, 100%)',
      fontSize: componentWidth * 0.06,
      fontFamily: 'Kanit-Light'
    },
    row1col2: {
      height: componentHeight * 0.08,
      width: componentHeight * 0.4,
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },
    row1col2text: {
      color: 'hsl(0, 0%, 100%)',
      fontSize: componentWidth * 0.06,
      fontFamily: 'Sarabun-Bold'
    },
    row2: {
      height: componentHeight * 0.1,
      width: componentWidth,
      alignItems: 'center',
      justifyContent: 'center'
    },
    row3: {
      borderBottomColor: 'hsl(0, 0%, 100%)',
      borderBottomStyle: 'solid',
      borderBottomWidth: 2,
      height: componentHeight * 0.02,
      width: componentWidth
    },
    row4: {
      backgroundColor: 'hsl(0, 0%, 0%)',
      height: (componentHeight * 0.76) - 4,
      width: componentWidth
    },
    row4_1: {
      height: componentHeight * 0.1,
      width: componentWidth,
      justifyContent: 'center',
      paddingLeft: componentWidth * 0.02
    },
    row4_1text: {
      color: 'hsl(0, 0%, 100%)',
      fontSize: componentWidth * 0.06,
      fontFamily: 'Kanit-Bold'
    },
    row4_2: {
      height: componentHeight * 0.2,
      width: componentWidth,
      flexDirection: 'row'
    },
    row4_2col1: {
      height: componentHeight * 0.2,
      width: componentWidth * 0.1,
      alignItems: 'flex-end',
      paddingTop: componentWidth * 0.02
    },
    row4_2col2: {
      height: componentHeight * 0.2,
      width: componentWidth * 0.9,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: componentWidth * 0.02
    },
    row4_2col2text: {
      color: 'hsl(0, 0%, 100%)',
      fontSize: componentHeight * 0.04,
      fontFamily: 'Kanit-Light'
    },
    row4_3: {
      // height: componentHeight * 0.22,
      width: componentWidth,
      flexDirection: 'row'
    },
    row4_3col1: {
      height: componentHeight * 0.22,
      width: componentHeight * 0.22,
      padding: componentHeight * 0.01
    },
    row4_3col2: {
      // height: componentHeight * 0.22,
      width: componentWidth - (componentHeight * 0.22),
      padding: componentHeight * 0.01
    },
    row4_3col2text: {
      color: 'hsl(0, 0%, 100%)',
      fontSize: componentWidth * 0.06,
      fontFamily: 'Kanit-Bold'
    },
    row4_3col2item: {
      height: componentWidth * 0.08,
      width: componentWidth - (componentHeight * 0.24),
      flexDirection: 'row'
    },
    row4_3col2itemcol1: {
      height: componentWidth * 0.08,
      width: componentWidth * 0.08,
      alignItems: 'flex-end',
      justifyContent: 'center'
    },
    row4_3col2itemcol1text: {
      color: 'hsl(0, 0%, 100%)',
      fontSize: componentWidth * 0.06,
      fontFamily: 'Kanit-Bold'
    },
    row4_3col2itemcol2: {
      height: componentWidth * 0.08,
      width: (componentWidth * 0.92) - (componentHeight * 0.24),
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingLeft: componentWidth * 0.02
    },
    row4_3col2itemcol2text: {
      color: 'hsl(0, 0%, 100%)',
      fontSize: componentWidth * 0.06,
      fontFamily: 'Kanit-Light'
    },
    row4_4: {
      height: componentHeight * 0.1,
      width: componentWidth,
      justifyContent: 'center',
      paddingLeft: componentWidth * 0.02
    },
    row4_4text: {
      color: 'hsl(0, 0%, 100%)',
      fontSize: componentWidth * 0.06,
      fontFamily: 'Kanit-Bold'
    },
    row4_5: {
      // height: componentHeight * 0.2,
      width: componentWidth,
      flexDirection: 'row'
    },
    row4_5col1: {
      height: componentHeight * 0.2,
      width: componentWidth * 0.1,
      alignItems: 'flex-end',
      paddingTop: componentWidth * 0.02
    },
    row4_5col2: {
      // height: componentHeight * 0.2,
      width: componentWidth * 0.9,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: componentWidth * 0.02
    },
    row4_5col2thinText: {
      color: 'hsl(0, 0%, 100%)',
      fontSize: componentWidth * 0.06,
      fontFamily: 'Kanit-Light'
    },
    row4_5col2boldText: {
      color: 'hsl(0, 0%, 100%)',
      fontSize: componentWidth * 0.06,
      fontFamily: 'Kanit-Bold'
    },
    row5: {
      borderTopColor: 'hsl(0, 0%, 100%)',
      borderTopStyle: 'solid',
      borderTopWidth: 2,
      height: componentHeight * 0.02,
      width: componentWidth
    }
  }
}

export {homeScreenLearnTabItem1contentStyles}