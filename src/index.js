
exports.min = function min (array) {

  if (typeof array == 'undefined' ||array.length === 0) {
    return 0;
  };

  const minArray = array.sort((a,b) => a - b);
  
  return minArray[0];
};

exports.max = function max (array) {

  if (typeof array == 'undefined' || array.length === 0) {
    return 0;
  };

  const maxArray = array.sort ((a,b) => b - a);
  return maxArray[0];
}

exports.avg = function avg (array) {

  if (typeof array == 'undefined' ||array.length === 0) {
    return 0;
  };
 const result = array.reduce((sum,current) => sum + current, 0);
  return result / array.length;
}
