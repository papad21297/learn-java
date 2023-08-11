function getSplitArray (previous, current) {
  const splitArray = [];
  let temp = '';

  for (let i = 0; i < current.length; i++) {
    if (previous[i] !== current[i]) {
      if (temp) {
        splitArray.push(temp);
        temp = '';
      }
      splitArray.push(current[i]);
    } else {
      temp += current[i];
    }
  }

  if (temp) {
    splitArray.push(temp);
  }

  return splitArray;
};

export {getSplitArray}