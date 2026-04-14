// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let arr1 = "";
  let arr2 = "";
  for (let index = 0; index < array1.length; index++) {
    arr1 = arr1 + String(array1[index])
  }

  for (let index = 0; index < array2.length; index++) {
    arr2 = arr2 + String(array2[index])
  }
  
  return Number(arr1) + Number(arr2)
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let origin = String(value)
  let reverse = ""
  for (let index = origin.length - 1; index >= 0; index--) {
    reverse += origin[index]
  }
  return origin === reverse
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === "" || input === null || input === undefined) {
    return "Required field"
  }

  let num = Number(input)
  if(isNaN(num) || num === 0){
    return "Must be a number besides 0"
  }

  return ""
}
