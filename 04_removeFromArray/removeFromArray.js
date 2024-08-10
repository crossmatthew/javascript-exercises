const removeFromArray = function (array, ...valueToRemove) {
  return array.filter((element) => {
    return !valueToRemove.includes(element);
  });
};

// Do not edit below this line
module.exports = removeFromArray;
