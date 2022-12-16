function repeatStringNumTimes (str, num) {
  // write your code here
  let repeated = "";
  if (num < 0)
  {
    return repeated;
  }

  for (let i = 0; i < num; i++)
  {
    repeated += str;
  }
  return repeated;
}

module.exports = repeatStringNumTimes
