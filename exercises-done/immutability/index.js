/**
* Example object
* {
*  color: 'blue'
* }
*/
function changeColorToRed(wardrobe) {
  return Object.assign({}, wardrobe, {
    color: 'red'
  });
}

/**
* Example object
* {
*  summary: 10
* }
*/
function addOneToSummary(order) {
  return Object.assign({}, order, {
    summary: order.summary + 1
  });
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
  return Object.assign({}, order, {
    summary: order.summary + 10
  });
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
  return Object.assign({}, order, {
    seller: Object.assign({}, order.seller, {
      surname: 'Hodor'
    })
  });
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
  return colors.map(function() {
    return 'red';
  });
}

/**
* Example array
* [
*   { color: 'blue' },
*   { color: 'pink' }
* ]
*/
function changeEveryColorToRedInObject(colors) {
  return colors.map(function(color) {
    return Object.assign({}, color, {
      color: 'red'
    });
  });
}


/**
* Example array
* [
*   { color: 'blue' },
*   { color: 'pink' }
* ]
*/
function changePinkOnesToRed(colors) {
  return colors.map(function(color) {
    if(color.color !== 'pink')
      return color;

    return Object.assign({}, color, {
      color: 'red'
    });
  });
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
  return orders.map(function(order) {
    if(order.customer !== 'Will Smith')
      return order;

    return Object.assign({}, order, {
      summary: order.summary + 10
    });
  });
}


/**
* Example array
* [
*   { color: 'blue' },
*   { color: 'pink' }
* ]
*/
function removePinkElementsFromArray(colors) {
  return colors.filter(function(color) {
    return color.color !== 'pink';
  });
}


/**
* Example array
* [
*   { color: 'blue' },
*   { color: 'pink' }
* ]
*/
function addNewColorAtTheEndOfArray(colors, color) {
  return colors.concat([color]);
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
