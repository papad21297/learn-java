function homeScreenLearnTabItem2contentStyles(componentHeight, componentWidth) {
  return {
    container: {
      backgroundColor: 'hsl(210, 40%, 20%)',
      height: componentHeight,
      width: componentWidth,
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    row1: {
      backgroundColor: 'hsl(0, 0%, 0%)',
      height: componentHeight * 0.2,
      width: componentWidth,
      paddingTop: componentHeight * 0.04,
      // paddingLeft: componentWidth * 0.03,
      // paddingRight: componentWidth * 0.03
    },
    row1scrollViewThinBorderItem: {
      borderStyle: 'solid',
      borderColor: 'hsl(0, 0%, 100%)',
      borderWidth: 1,
      height: componentHeight * 0.12,
      // width: componentWidth * 0.3,
      borderRadius: 10,
      padding: componentHeight * 0.02,
      marginLeft: componentWidth * 0.01,
      marginRight: componentWidth * 0.01
    },
    row1scrollViewItemThinText: {
      color: 'hsl(0, 0%, 100%)',
      fontSize: componentHeight * 0.05,
      fontFamily: 'Kanit-Light'
    },
    row2: {
      height: componentHeight * 0.8,
      width: componentWidth,
      // paddingLeft: 20,
      alignItems: 'flex-start'
    },
    row2cell: {
      // backgroundColor: 'hsl(0, 0%, 100%)',
      // height: componentHeight * 0.8,
      width: componentWidth,
      paddingLeft: 20,
      alignItems: 'flex-start'
    },
    row2item: {
      backgroundColor: 'hsl(0, 0%, 0%)',
      // height: componentHeight * 0.2,
      width: componentWidth * 0.6,
      borderRadius: 20,
      alignItems: 'flex-start',
      marginTop: 10,
      marginBottom: 10
    },
    row2itemRow1: {
      // height: componentHeight * 0.12,
      width: componentWidth * 0.6,
      borderRadius: 20,
      paddingLeft: 15,
      paddingRight: 15
    },
    row2itemRow2: {
      backgroundColor: 'hsl(0, 0%, 100%)',
      height: 1,
      width: componentWidth * 0.54,
      marginLeft: componentWidth * 0.03
    },
    row2itemRow3: {
      // height: (componentHeight * 0.08) - 2,
      width: componentWidth * 0.5,
      justifyContent: 'flex-start',
      paddingLeft: 20
    },
    row2thinText: {
      color: 'hsl(0, 0%, 100%)',
      fontSize: componentWidth * 0.05,
      fontFamily: 'Kanit-Light'
    },
    row2boldText: {
      color: 'hsl(0, 0%, 100%)',
      fontSize: componentWidth * 0.07,
      fontFamily: 'Sarabun-Bold'
    }
    // container: {
    //   backgroundColor: 'hsl(270, 80%, 60%)',
    //   height: componentHeight - 40,
    //   width: componentWidth - 40,
    //   marginTop: 20,
    //   marginLeft: 20,
    //   borderRadius: 30,
    //   alignItems: 'flex-start',
    //   justifyContent: 'flex-start'
    // },
    // row1: {
    //   backgroundColor: 'hsl(0, 0%, 100%)',
    //   height: componentHeight - 80,
    //   width: componentWidth - 80,
    //   marginTop: 20,
    //   marginLeft: 20,
    //   borderRadius: 20,
    //   alignItems: 'flex-start',
    //   justifyContent: 'flex-start',
    //   padding: 20
    // },
    // row1text: {
    //   fontSize: 16,
    //   fontFamily: 'Kanit-Light'
    // }
  }
}

export {homeScreenLearnTabItem2contentStyles}