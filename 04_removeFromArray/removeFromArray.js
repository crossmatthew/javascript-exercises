const removeFromArray = function (array, ...valueToRemove) {
  const filteredArray = array.filter((element) => {
    return !valueToRemove.includes(element);
  });
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
