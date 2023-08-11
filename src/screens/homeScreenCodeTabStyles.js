function homeScreenCodeTabStyles(componentHeight,
  componentWidth, insetsTop, insetsBottom) {
    return {
      container: {
        backgroundColor: 'hsl(240, 20%, 40%)',
        height: componentHeight + (insetsTop + insetsBottom),
        width: componentWidth,
        paddingTop: insetsTop,
        paddingBottom: insetsBottom,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
      },
      rowTab: {
        backgroundColor: 'hsl(210, 20%, 40%)',
        height: componentHeight * 0.15 - 40,
        width: componentWidth - 40,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        flexDirection: 'row'
      },
      rowTabText: {
        color: 'hsl(0, 0%, 0%)',
        fontSize: componentHeight * 0.05,
        fontFamily: 'Kanit-Bold'
      },
      rowTabCol1: {
        backgroundColor: 'hsl(210, 60%, 60%)',
        height: componentHeight * 0.12 - 40,
        width: componentWidth * 0.4 - 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: componentWidth * 0.1,
        borderRadius: componentHeight * 0.06 - 20
      },
      rowTabCol2: {
        backgroundColor: 'hsl(210, 60%, 60%)',
        height: componentHeight * 0.12 - 40,
        width: componentWidth * 0.4 - 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: componentWidth * 0.1,
        borderRadius: componentHeight * 0.06 - 20
      },
      row1: {
        backgroundColor: 'hsl(0, 0%, 10%)',
        height: (componentHeight * 0.25) - 40,
        width: componentWidth - 40,
        marginTop: 20,
        marginLeft: 20,
        flexDirection: 'column'
        // borderRadius: 20,
        // paddingLeft: 20
      },
      row2: {
        backgroundColor: 'hsl(0, 0%, 10%)',
        borderStyle: 'solid',
        borderColor: 'hsl(0, 0%, 100%)',
        borderWidth: 3,
        height: (componentHeight * 0.25) - 40,
        width: componentWidth - 40,
        marginTop: 20,
        marginLeft: 20,
        // borderRadius: 20,
        paddingLeft: 20
      },
      row3: {
        backgroundColor: 'hsl(0, 0%, 20%)',
        height: componentHeight * 0.15 - 40,
        width: componentWidth - 40,
        marginTop: 20,
        marginLeft: 20,
        padding: 10,
        flexDirection: 'row',
        marginBottom: componentHeight * 0.3
      },
      row3col1: {
        backgroundColor: 'hsl(0, 0%, 100%)',
        height: componentHeight * 0.15 - 60,
        width: componentWidth * 0.3 - 50,
        marginRight: componentWidth * 0.2 + 20,
        borderRadius: componentHeight * 0.075 - 30,
        alignItems: 'center',
        justifyContent: 'center'
      },
      row3col2: {
        backgroundColor: 'hsl(210, 40%, 50%)',
        height: componentHeight * 0.15 - 60,
        width: componentWidth * 0.3 - 50,
        marginLeft: componentWidth * 0.2 + 20,
        borderRadius: componentHeight * 0.075 - 30,
        alignItems: 'center',
        justifyContent: 'center'
      },
      row3col2text: {
        fontFamily: 'Kanit-Bold',
        fontSize: componentHeight * 0.03,
        color: 'hsl(0, 0%, 100%)'
      },
      row4: {
        backgroundColor: 'hsl(0, 0%, 20%)',
        height: componentHeight * 0.85 - 40,
        width: componentWidth - 40,
        margin: 20,
        padding: 10
      },
      row4titleText: {
        fontSize: componentHeight * 0.04,
        fontFamily: 'Kanit-Bold',
        color: 'hsl(0, 0%, 100%)'
      },
      row4_1: {
        backgroundColor: 'hsl(0, 0%, 0%)',
        height: componentHeight * 0.75 - 40,
        width: componentWidth - 60,
        padding: 10,
        flexDirection: 'row'
      },
      row4text: {
        fontSize: componentHeight * 0.03,
        fontFamily: 'SOV_MonospaceHinted',
        color: 'hsl(0, 0%, 100%)'
      }
    }
  }

export {homeScreenCodeTabStyles}