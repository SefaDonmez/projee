Power digit sum


function sumOfDigits(n, pow) {
  var digits = [1];
  while (pow--) {
    var cr = 0;
    for (var i = 0; i < digits.length; i++) {
      var num = n * digits[i] + cr;
      digits[i] = num % 10;
      cr = Math.floor(num/10);
    }
    while (cr > 0) {
      digits.push(cr % 10);
      cr = Math.floor(cr/10);
    }
  }
  var sum = 0;
  while (digits.length) {
    sum += digits.shift();
  }
  return sum;
}

console.log( sumOfDigits(2, 1000) );



Double-base palindromes

function isPalindromic(a) {
  var len = a.length;
  if (len === 0 || len === 1) return true;
  if (len === 2) return a[0] === a[1];
  if (a[0] !== a[len-1]) return false;
  return isPalindromic(a.splice(1, len-2));
}

function findPalindromicNumbersSum(max) {
  var sum = 0;
  while (max--) {
    if (!isPalindromic( (max+'').split('') )) continue;
    if (!isPalindromic( max.toString(2).split('') )) continue;
    sum += max;
  }
  return sum;
}

console.log( findPalindromicNumbersSum(1000000) );



Powerful digit sum

var big = require('big.js')
	var _ = require('lodash')
	require('should')
	
	function digitalSum(numberString) {
	  return _.sum(numberString.toString().split('').map(Number))
	}
	digitalSum('5231').should.eql(11)
	
	var upperBound = 101
	var a, b, sum
	var max = {a: 1, b: 1, digitalSum: 1}
	for (a = 1; a < upperBound; a++) {
	  for (b = 1; b < upperBound; b++) {
	    sum = digitalSum(big(a).pow(b).toFixed())
	    if (sum > max.digitalSum) {
	      console.log(a, b, sum) // 99 95 972
	      max = {a: a, b: b, digitalSum: sum}
	    }
	  }
	}


