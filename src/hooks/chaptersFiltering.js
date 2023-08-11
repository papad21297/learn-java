function chaptersFiltering(chapterId, lessonsObject, exercisesObject) {
  let resultObject = {};
  let filteredLessonsObject = [];
  for (let i = 0; i < Object.keys(lessonsObject).length; i++) {
    if (Object.keys(lessonsObject)[i].startsWith(chapterId)) {
      filteredLessonsObject.push(Object.keys(lessonsObject)[i])
    }
  }
  let filteredExercisesObject = [];
  for (let i = 0; i < Object.keys(exercisesObject).length; i++) {
    if (Object.keys(exercisesObject)[i].startsWith(chapterId)) {
      filteredExercisesObject.push(Object.keys(exercisesObject)[i])
    }
  }
  let groupedFilteredLessonsObjectWithFilteredExercisesObject = [];
  let linearArray = [];
  for (let i = 0; i < Math.max(
    filteredLessonsObject.length,
    filteredExercisesObject.length
  ); i++) {
    let item = {};
    if (filteredLessonsObject[i]) {
      linearArray.push({
        "coord": `${i},${Object.keys(item).length}`,
        "path": `lessons/${filteredLessonsObject[i].split('_')[1]}`
      });
      item[
        lessonsObject[filteredLessonsObject[i]][0]["data_text"]
      ] = filteredLessonsObject[i];
    }
    if (filteredExercisesObject[i]) {
      linearArray.push({
        "coord": `${i},${Object.keys(item).length}`,
        "path": `exercises/${filteredExercisesObject[i].split('_')[1]}`
      });
      item[
        exercisesObject[filteredExercisesObject[i]][0]["data_text"]
      ] = filteredExercisesObject[i];
    }
    groupedFilteredLessonsObjectWithFilteredExercisesObject.push(
      item
    );
  }
  resultObject = {
    "grouped_filter": groupedFilteredLessonsObjectWithFilteredExercisesObject,
    "linear_array": linearArray,
    "lessons": filteredLessonsObject.map((item) => {
      // return lessonsObject[item].length
      return lessonsObject[item]
    }),
    "exercises": filteredExercisesObject.map((item) => {
      // return exercisesObject[item].length
      return exercisesObject[item]
    })
  }
  return resultObject
}

export {chaptersFiltering}