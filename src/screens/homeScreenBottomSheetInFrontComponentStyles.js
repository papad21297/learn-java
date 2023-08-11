function homeScreenBottomSheetInFrontComponentStyles (
  componentHeight, componentWidth, keyObjectLength
) {
  return {
    container: {
      backgroundColor: 'hsl(225, 20%, 40%)',
      height: componentHeight,
      width: componentWidth
    },
    row1: {
      backgroundColor: 'hsl(0, 0%, 0%)',
      height: componentHeight * 0.12,
      width: componentWidth,
      alignItems: 'center'
    },
    row1scrollViewItem: {
      backgroundColor: 'hsl(0, 0%, 100%)',
      height: componentHeight * 0.04,
      width: componentHeight * 0.04,
      borderRadius: componentHeight * 0.03,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: componentHeight * 0.04,
      marginLeft: (((componentWidth - (
        componentHeight * 0.08
      )) / keyObjectLength) - componentHeight * 0.04) / 2,
      marginRight: (((componentWidth - (
        componentHeight * 0.08
      )) / keyObjectLength) - componentHeight * 0.04) / 2,
      flexDirection: 'row'
    },
    row1scrollViewItemText: {
      color: 'hsl(0, 0%, 0%)',
      fontSize: componentHeight * 0.02,
      fontFamily: 'Kanit-Light'
    },
    row2: {
      backgroundColor: 'hsl(0, 0%, 40%)',
      height: componentHeight * 0.78,
      width: componentWidth,
      paddingTop: componentHeight * 0.02,
    },
    row2text: {
      color: 'hsl(0, 0%, 100%)',
      fontSize: 20,
      fontFamily: 'Kanit-Light'
    },
    row2existingPanel: {
      backgroundColor: 'hsl(0, 0%, 0%)',
      height: componentHeight * 0.74,
      width: componentWidth - (componentHeight * 0.04),
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginLeft: (componentHeight * 0.02),
      marginBottom: componentHeight * 0.02,
      paddingTop: componentHeight * 0.02,
      borderRadius: 10
    },
    row2existingPanelItemContainer: {
      backgroundColor: 'hsl(240, 40%, 40%)',
      width: componentWidth - (componentHeight * 0.08),
      marginBottom: componentHeight * 0.02,
      marginLeft: componentHeight * 0.02,
      borderRadius: 10,
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: 10,
    },
    row2existingPanelItemMemberContainer:{
      backgroundColor: 'hsl(0, 0%, 100%)',
      width: componentWidth - (componentHeight * 0.12),
      marginTop: componentHeight * 0.02,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },
    row2existingPanelItemMemberContainerText: {
      color: 'hsl(0, 0%, 0%)',
      fontSize: 24,
      fontFamily: 'KanitThin'
    },
    row3: {
      backgroundColor: 'hsl(0, 0%, 0%)',
      height: componentHeight * 0.1,
      width: componentWidth,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    row3touchableOpacity1: {
      backgroundColor: 'hsl(0, 0%, 100%)',
      height: componentHeight * 0.06,
      width: componentWidth * 0.3,
      borderRadius: 10,
      marginLeft: componentWidth * 0.05,
      marginRight: componentWidth * 0.15,
      alignItems: 'center',
      justifyContent: 'center'
    },
    row3touchableOpacity2: {
      backgroundColor: 'hsl(0, 0%, 100%)',
      height: componentHeight * 0.06,
      width: componentWidth * 0.3,
      borderRadius: 10,
      marginLeft: componentWidth * 0.15,
      marginRight: componentWidth * 0.05,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
}

export {homeScreenBottomSheetInFrontComponentStyles}