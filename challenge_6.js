/*  SumOfASquare(naturalNumbers)
 *
 *  @param naturalNumbers        1...naturalNumbers to square and add
 *  @method sumOfSquares()       returns ths sum of all 'naturalNumbers' squared
 *  @method squareOfTheSums()    returns the square of all 'naturalNumbers'
 */
exports.SumOfASquare = SumOfASquare;

var  SumOfASquare = function(naturalNumbers){
  this.naturalNumbers = naturalNumbers;
};

// do work here

// overwrite the object prototype, or add methods to the prototype
// to satisfy the two method calls, sumOfSquares() and squareOfTheSums()

SumOfASquare.prototype.sumOfSquares = function(){
  var sum = 0;
  for(var i=1; i <= this.naturalNumbers; i++){
    sum += Math.pow(i, 2);
  }
  return sum;
};


SumOfASquare.prototype.squareOfTheSums = function(){
  var sum = 0;
  for(var i=1; i <= this.naturalNumbers; i++){
    sum += i;
  }
  return Math.pow(sum, 2);
};

var test = new SumOfASquare(5);
console.log(test.sumOfSquares());
console.log(test.squareOfTheSums());