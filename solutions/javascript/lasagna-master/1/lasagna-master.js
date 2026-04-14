/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time) {
  if (time === undefined) {
    return "You forgot to set the timer."
  }else if (time === 0) {
    return "Lasagna is done."
  }else{
    return "Not done, please wait."
  }
}

export function preparationTime(layers, time = 2) {
  return layers.length * time
}

export function quantities(layers) {
  let 
    noodles = 0,
    sauce = 0
  for (let index = 0; index < layers.length; index++) {
    if (layers[index] === "noodles") {
      noodles = noodles + 50
    }else if(layers[index] === "sauce"){
      sauce += 0.2
    }
  }
  return {
    noodles: noodles,
    sauce: sauce,
  }
}

export function addSecretIngredient(friendList, myList) {
  myList.push(friendList[friendList.length - 1])
  console.log(myList)
}

export function scaleRecipe(recipe, portion = 2) {
  let scaled = {}
  let faktor = portion / 2
  for(let key in recipe){
    scaled[key] = recipe[key] * faktor
  }
  return scaled
}