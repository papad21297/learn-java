function homeScreenLearnTabMinimumComponentStyles(componentHeight,
componentWidth, insetsTop, insetsBottom) {
  return {
    container: {
      backgroundColor: 'hsl(0, 0%, 0%)',
      height: componentHeight + (insetsTop + insetsBottom),
      width: componentWidth,
      paddingTop: insetsTop,
      paddingBottom: insetsBottom,
      alignItems: 'flex-start',
      justifyContent: 'flex-end'
    },
    row1: {
      backgroundColor: 'hsl(270, 80%, 40%)',
      height: 180,
      width: 180,
      marginTop: insetsTop + 20,
      marginBottom: insetsBottom + 20,
      marginLeft: 20,
      borderRadius: 10,
      padding: 10
    },
    row1text: {
      color: 'hsl(0, 0%, 100%)',
      fontSize: 24,
      fontFamily: 'Kanit-Bold'
    }
  }
}

export {homeScreenLearnTabMinimumComponentStyles}