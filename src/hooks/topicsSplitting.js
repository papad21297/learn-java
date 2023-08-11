function topicsSplitting(modulesArray, chaptersArray) {
  resultArray = [];
  for (let i = 0; i < modulesArray?.length; i++) {
    let childrenObject = {}
    for (let j = 0; j < chaptersArray?.length; j++) {
      if (chaptersArray[j].id.startsWith(modulesArray[i].id)) {
        childrenObject[j] = chaptersArray[j]
      }
    }
    resultArray.push({
      "id": modulesArray[i].id,
      "name": modulesArray[i].name,
      "children": childrenObject
    });
  }
  return resultArray;
}

export {topicsSplitting}