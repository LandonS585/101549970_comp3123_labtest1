const lowerCaseWords = (mixedArray) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(mixedArray)) {
      reject('Input must be an array')
    } else {
      const onlyStrings = mixedArray.filter((item) => typeof item === 'string')
      const lowerCased = onlyStrings.map((word) => word.toLowerCase())
      resolve(lowerCased)
    }
  })
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

lowerCaseWords(mixedArray)
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.error(error)
  })