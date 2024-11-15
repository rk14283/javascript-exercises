const removeFromArray = function(inputArray, ...toRemove) {
    const removeArray = Array.from(toRemove)
    
    const outputArray = inputArray.filter(element => !removeArray.includes(element)); // Remove elements in removeArray
return outputArray

};
console.log(removeFromArray([1, 2, 3, 4], 3, 2))
// Do not edit below this line
module.exports = removeFromArray;
