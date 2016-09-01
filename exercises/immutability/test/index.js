var expect = require('chai').expect;
var exercise = require('../index');

var changeColorToRed = exercise.changeColorToRed;
var addOneToSummary = exercise.addOneToSummary;
var add10toSummaryLeaveOtherFields = exercise.add10toSummaryLeaveOtherFields;
var changeSellerSurnameToHodor = exercise.changeSellerSurnameToHodor;
var changeEveryColorToRed = exercise.changeEveryColorToRed;
var changeEveryColorToRedInObject = exercise.changeEveryColorToRedInObject;
var changePinkOnesToRed = exercise.changePinkOnesToRed;
var add10toSummaryForWillSmithsOrders = exercise.add10toSummaryForWillSmithsOrders;
var removePinkElementsFromArray = exercise.removePinkElementsFromArray;
var addNewColorAtTheEndOfArray = exercise.addNewColorAtTheEndOfArray;

describe('excercise-immutability', function() {
  describe('changeColorToRed()', function() {
    it('should change color to red and change reference', function() {
      var wardrobe = {
        color: 'blue'
      };
      var res = changeColorToRed(wardrobe);

      expect(res).to.be.deep.equal({
        color: 'red'
      });
      expect(res).to.be.not.equal(wardrobe);
    });
  });

  describe('addOneToSummary()', function() {
    it('should change summary by adding 10 and change reference', function() {
      var order = {
        summary: 20
      };
      var res = addOneToSummary(order);

      expect(res).to.be.deep.equal({
        summary: 21
      });
      expect(res).to.be.not.equal(order);
    });
  });

  describe('add10toSummaryLeaveOtherFields()', function() {
    it('should change summary by adding 10 and change reference', function() {
      var order = {
        test: 'test',
        summary: 20
      };
      var res = add10toSummaryLeaveOtherFields(order);

      expect(res).to.be.deep.equal({
        test: 'test',
        summary: 30
      });
      expect(res).to.be.not.equal(order);
    });
  });

  describe('changeSellerSurnameToHodor()', function() {
    it('should change seller\'s surname to Hodor and change reference of main object and sellers one', function() {
      var order = {
        seller: {
          surname: 'test'
        },
        summary: 20
      };
      var res = changeSellerSurnameToHodor(order);

      expect(res).to.be.deep.equal({
        seller: {
          surname: 'Hodor'
        },
        summary: 20
      });
      expect(res).to.be.not.equal(order);
      expect(res.seller).to.be.not.equal(order.seller);
    });
  });

  describe('changeEveryColorToRed()', function() {
    it('should change all color strings to `red` and change reference of array', function() {
      var colors = [
        'blue',
        'pinky'
      ];
      var res = changeEveryColorToRed(colors);

      expect(res).to.be.deep.equal([
        'red',
        'red'
      ]);
      expect(res).to.be.not.equal(colors);
    });
  });

  describe('changeEveryColorToRedInObject()', function() {
    it('should change all color properties to `red` and change reference of array and objects', function() {
      var colors = [
        { color: 'blue' },
        { color: 'pinky' },
        { color: 'pinky' },
        { color: 'pinky' }
      ];

      var res = changeEveryColorToRedInObject(colors);

      expect(res).to.be.deep.equal([
        { color: 'red' },
        { color: 'red' },
        { color: 'red' },
        { color: 'red' }
      ]);
      expect(res).to.be.not.equal(colors);
      expect(res[0]).to.be.not.equal(colors[0]);
      expect(res[1]).to.be.not.equal(colors[1]);
      expect(res[2]).to.be.not.equal(colors[2]);
      expect(res[3]).to.be.not.equal(colors[3]);
    });
  });

  describe('changePinkOnesToRed()', function() {
    it('should change pink ones color properties to `red` and change reference of array and objects', function() {
      var colors = [
        { color: 'blue' },
        { color: 'pink' },
        { color: 'pink' },
        { color: 'pink' }
      ];

      var res = changePinkOnesToRed(colors);

      expect(res).to.be.deep.equal([
        { color: 'blue' },
        { color: 'red' },
        { color: 'red' },
        { color: 'red' }
      ]);
      expect(res).to.be.not.equal(colors);

      expect(res[0]).to.be.equal(colors[0]); //This one is different ( ͡° ͜ʖ ͡°)

      expect(res[1]).to.be.not.equal(colors[1]);
      expect(res[2]).to.be.not.equal(colors[2]);
      expect(res[3]).to.be.not.equal(colors[3]);
    });
  });

  describe('add10toSummaryForWillSmithsOrders()', function() {
    it('should change all Will Smith\'s order and change reference of array and objects', function() {
      var orders = [
        { customer: 'Will Smith', summary: 10 },
        { test: 'test' },
        { test: 'test' }
      ];

      var res = add10toSummaryForWillSmithsOrders(orders);

      expect(res).to.be.deep.equal([
        { customer: 'Will Smith', summary: 20 },
        { test: 'test' },
        { test: 'test' }
      ]);
      expect(res).to.be.not.equal(orders);

      expect(res[0]).to.be.not.equal(orders[0]); //This one is different ( ͡° ͜ʖ ͡°)

      expect(res[1]).to.be.equal(orders[1]);
      expect(res[2]).to.be.equal(orders[2]);
    });
  });

  describe('removePinkElementsFromArray()', function() {
    it('should change array and remove pink colors from it', function() {
      var colors = [
        { color: 'blue' },
        { color: 'pink' },
        { color: 'pink' },
        { color: 'pink' }
      ];

      var res = removePinkElementsFromArray(colors);

      expect(res).to.be.deep.equal([
        { color: 'blue' }
      ]);
      expect(res).to.be.not.equal(colors);

      expect(res[0]).to.be.equal(colors[0]);
    });
  });

  describe('addNewColorAtTheEndOfArray()', function() {
    it('should add new element in the of array', function() {
      var colors = [
        { color: 'blue' }
      ];
      var newColor = {
        test: 'foo'
      };

      var res = addNewColorAtTheEndOfArray(colors, newColor);

      expect(res).to.be.deep.equal([
        { color: 'blue' },
        { test: 'foo' }
      ]);
      expect(res).to.be.not.equal(colors);

      expect(res[0]).to.be.equal(colors[0]);
      expect(res[1]).to.be.equal(newColor);
    });
  });
});
