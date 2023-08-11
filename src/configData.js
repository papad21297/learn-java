const useFontObject = {
  'SOV_MonospaceHinted': require(
    '../assets/static/typefaces/sov_monospace/SOV_monospace-hinted.ttf'
  ),
  'Kanit-Regular': require(
    '../assets/static/typefaces/kanit/Kanit-Regular.ttf'
  ),
  'Kanit-Italic': require(
    '../assets/static/typefaces/kanit/Kanit-Italic.ttf'
  ),
  'Kanit-Bold': require(
    '../assets/static/typefaces/kanit/Kanit-Bold.ttf'
  ),
  'Kanit-BoldItalic': require(
    '../assets/static/typefaces/kanit/Kanit-BoldItalic.ttf'
  ),
  'Kanit-Light': require(
    '../assets/static/typefaces/kanit/Kanit-Light.ttf'
  ),
  'Kanit-LightItalic': require(
    '../assets/static/typefaces/kanit/Kanit-LightItalic.ttf'
  ),
  'Sarabun-Regular': require(
    '../assets/static/typefaces/sarabun/Sarabun-Regular.ttf'
  ),
  'Sarabun-Italic': require(
    '../assets/static/typefaces/sarabun/Sarabun-Italic.ttf'
  ),
  'Sarabun-Bold': require(
    '../assets/static/typefaces/sarabun/Sarabun-Bold.ttf'
  ),
  'Sarabun-BoldItalic': require(
    '../assets/static/typefaces/sarabun/Sarabun-BoldItalic.ttf'
  ),
  'Sarabun-Light': require(
    '../assets/static/typefaces/sarabun/Sarabun-Light.ttf'
  ),
  'Sarabun-LightItalic': require(
    '../assets/static/typefaces/sarabun/Sarabun-LightItalic.ttf'
  )
};

const firebaseConfig = {
  apiKey: "AIzaSyBeZYYbrTk4JyXZywc49nUKh-BuXNsz_vs",
  authDomain: "anything-6fefc.firebaseapp.com",
  databaseURL: "https://anything-6fefc-default-rtdb.firebaseio.com",
  projectId: "anything-6fefc", storageBucket: "anything-6fefc.appspot.com",
  messagingSenderId: "825086084612",
  appId: "1:825086084612:web:feacc2fd134a71dc001751",
  measurementId: "G-VY8BQ9DMGN"
};
const customizedNavigationStyling = (groupCoord, coord, componentHeight, componentWidth) => {
  return {
    backgroundColor: (
      (groupCoord >= coord)
      ? 'hsl(0, 0%, 100%)'
      : 'hsl(0, 0%, 40%)'
    ),
    height: (
      (groupCoord == coord)
      ? componentHeight * 0.06
      : componentHeight * 0.04
    ),
    width: (
      (groupCoord == coord)
      ? componentHeight * 0.12
      : componentHeight * 0.04
    ),
    marginTop: (
      (groupCoord == coord)
      ? componentHeight * 0.03
      : componentHeight * 0.04
    ),
    marginBottom: (
      (groupCoord == coord)
      ? componentHeight * 0.03
      : componentHeight * 0.04
    )
  }
};
const removeDuplicateAdjacentElements = (arr) =>  {
  const findPrefix = (fullString) => {
    if (fullString?.startsWith('title')) {
      return fullString.substring(0, 5);
    } else if (fullString?.startsWith('normal')) {
      return fullString.substring(0, 6);
    } else if (fullString?.startsWith('extra')) {
      return fullString.substring(0, 5);
    } else if (fullString?.startsWith('vectorImageContent')) {
      return fullString.substring(0, 18);
    } else if (fullString?.startsWith('javaSampleCode')) {
      return fullString.substring(0, 14);
    } else if (fullString?.startsWith('javaProblemCode')) {
      return fullString.substring(0, 15);
    } else if (fullString?.startsWith('choiceOneCorrectAnswer')) {
      return fullString.substring(0, 22);
    } else if (fullString?.startsWith('incompleteCode')) {
      return fullString.substring(0, 14);
    } else if (fullString?.startsWith('portionsCompletion')) {
      return fullString.substring(0, 18);
    } else if (fullString?.startsWith('unorderedCodeSplittedOrderedForm')) {
      return fullString.substring(0, 32);
    } else if (fullString?.startsWith('header')) {
      return fullString.substring(0, 6);
    } else if (fullString?.startsWith('body')) {
      return fullString.substring(0, 4);
    } else if (fullString?.startsWith('javaCode')) {
      return fullString.substring(0, 8);
    } else {
      return fullString
    }
  }
  const result = [];
  let childArr = [];
  let id = 0;
  for (let i = 0; i < arr.length; i++) {
    childArr.push(i);
    let currentItem = findPrefix(arr[i]);
    let nextItem = findPrefix(arr[i + 1]);
    if (currentItem !== nextItem) {
      result.push({
        "id": id,
        "type": currentItem,
        "children": childArr
      });
      id += 1;
      childArr = [];
    }
  }
  return result;
}

export {useFontObject, firebaseConfig, customizedNavigationStyling,
removeDuplicateAdjacentElements}