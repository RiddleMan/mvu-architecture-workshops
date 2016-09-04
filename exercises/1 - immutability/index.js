/**
* Example object
* {
*  color: 'blue'
* }
*/
function changeColorToRed(wardrobe) {
}

/**
* Example object
* {
*  summary: 10
* }
*/
function addOneToSummary(order) {
}

/**
* Example object
* {
*  customer: 'Will Smith',
*  seller: {
*   name: 'John',
*   surname: 'Smith',
*   id: 10
*  },
*  summary: 10
* }
*/
function add10toSummaryLeaveOtherFields(order) {
}




/**
* Example object
* {
*  customer: 'Will Smith',
*  seller: {
*   name: 'John',
*   surname: 'Smith',
*   id: 10
*  },
*  summary: 10
* }
*/
function changeSellerSurnameToHodor(order) {
}



/*************************************************
---~~~~===['A', 'R', 'R', 'A', 'Y', 'S']===~~~~---
*************************************************/

/**
* Example array
* [
*   'blue',
*   'pink'
* ]
*/
function changeEveryColorToRed(colors) {
}

/**
* Example array
* [
*   { color: 'blue' },
*   { color: 'pink' }
* ]
*/
function changeEveryColorToRedInObject(colors) {
}


/**
* Example array
* [
*   { color: 'blue' },
*   { color: 'pink' }
* ]
*/
function changePinkOnesToRed(colors) {
}



/**
* Example array
* [{
*  customer: 'Will Smith',
*  seller: {
*   name: 'John',
*   id: 10
*  },
*  summary: 10
* },{
*  customer: 'Spongebob',
*  seller: {
*   name: 'Patrick'
*   id: 10
*  },
*  summary: 10
* }]
*/
function add10toSummaryForWillSmithsOrders(orders) {
}


/**
* Example array
* [
*   { color: 'blue' },
*   { color: 'pink' }
* ]
*/
function removePinkElementsFromArray(colors) {
}


/**
* Example array
* [
*   { color: 'blue' },
*   { color: 'pink' }
* ]
*/
function addNewColorAtTheEndOfArray(colors, color) {
}

module.exports = {
  changeColorToRed: changeColorToRed,
  addOneToSummary: addOneToSummary,
  add10toSummaryLeaveOtherFields: add10toSummaryLeaveOtherFields,
  changeSellerSurnameToHodor: changeSellerSurnameToHodor,
  changeEveryColorToRed: changeEveryColorToRed,
  changeEveryColorToRedInObject: changeEveryColorToRedInObject,
  changePinkOnesToRed: changePinkOnesToRed,
  add10toSummaryForWillSmithsOrders: add10toSummaryForWillSmithsOrders,
  removePinkElementsFromArray: removePinkElementsFromArray,
  addNewColorAtTheEndOfArray: addNewColorAtTheEndOfArray,
};
