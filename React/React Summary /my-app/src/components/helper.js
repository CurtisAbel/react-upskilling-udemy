module.exports.deleteFromList = (list, indexToRemove) => {
    return list.filter((element, index) => index !== indexToRemove)
 }