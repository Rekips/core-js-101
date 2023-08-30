/* ********************************************************************************************
 *                                                                                            *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array     *
 *                                                                                            *
 * NOTE : Please do not use loops! All tasks can be implemented using standard Array methods  *
 *                                                                                            *
 ******************************************************************************************** */


/**
 * Returns an index of the specified element in array or -1 if element is not found
 *
 * @param {array} arr
 * @param {any} value
 * @return {number}
 *
 * @example
 *    ['Ace', 10, true], 10    => 1
 *    ['Array', 'Number', 'string'], 'Date'    => -1
 *    [0, 1, 2, 3, 4, 5], 5    => 5
 */
function findElement(arr, value) {
<<<<<<< HEAD
  return arr.indexOf(value);
=======
	return arr.indexOf(value);
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}

/**
 * Generates an array of odd numbers of the specified length
 *
 * @param {number} len
 * @return {array}
 *
 * @example
 *    1 => [ 1 ]
 *    2 => [ 1, 3 ]
 *    5 => [ 1, 3, 5, 7, 9 ]
 */
function generateOdds(len) {
<<<<<<< HEAD
  const res = [];
  for (let i = 0; i < len; i += 1) {
    res.push(i * 2 + 1);
  }
  return res;
=======
	let res = [];
	for (let i = 0; i< len; i++) {
		res.push(i*2+1);
	}
	return res;
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}


/**
 * Returns the doubled array - elements of the specified array
 * are repeated twice using original order
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    ['Ace', 10, true]  => ['Ace', 10, true,   'Ace', 10, true]
 *    [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5,   0, 1, 2, 3, 4, 5]
 *    [] => []
 */
function doubleArray(arr) {
<<<<<<< HEAD
  return arr.concat(arr);
=======
	return arr.concat(arr);
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}


/**
 * Returns an array of positive numbers from the specified array in original order
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
 *    [-1, 2, -5, -4, 0] => [ 2 ]
 *    [] => []
 */
function getArrayOfPositives(arr) {
<<<<<<< HEAD
  const r = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > 0) {
      r.push(arr[i]);
    }
  }
  return r;
=======
	let r = [];
	for (let i of arr) {
		if (i > 0) {
			r.push(i);
		}
	}
	return r;
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}

/**
 * Returns the array with strings only in the specified array (in original order)
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, 1, 'cat', 3, true, 'dog' ] => [ 'cat', 'dog' ]
 *    [ 1, 2, 3, 4, 5 ] => []
 *    [ 'cat, 'dog', 'raccoon' ] => [ 'cat', 'dog', 'raccoon' ]
 */
function getArrayOfStrings(arr) {
<<<<<<< HEAD
  const r = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'string') {
      r.push(arr[i]);
    }
  }
  return r;
=======
	let r = [];
	for (let i of arr) {
		if (typeof i === 'string') {
			r.push(i);
		}
	}
	return r;
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}

/**
 * Removes falsy values from the specified array
 * Falsy values: false, null, 0, "", undefined, and NaN.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#Description)
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, false, 'cat', NaN, true, '' ] => [ 'cat', true ]
 *    [ 1, 2, 3, 4, 5, 'false' ]         => [ 1, 2, 3, 4, 5, 'false' ]
 *    [ false, 0, NaN, '', undefined ]   => [ ]
 */
function removeFalsyValues(arr) {
<<<<<<< HEAD
  const r = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i]) {
      r.push(arr[i]);
    }
  }
  return r;
=======
	let r = [];
	for (let i of arr) {
		if (i) {
			r.push(i);
		}
	}
	return r;
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}

/**
 * Returns the array of uppercase strings from the specified array
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ]
 *    => [ 'PERMANENT-INTERNSHIP', 'GLUTINOUS-SHRIEK', 'MULTIPLICATIVE-ELEVATION' ],
 *    [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]  => [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
 */
function getUpperCaseStrings(arr) {
<<<<<<< HEAD
  const r = [];
  for (let i = 0; i < arr.length; i += 1) {
    r.push(arr[i].toUpperCase());
  }
  return r;
=======
	let r = [];
	for (let i of arr) {
		r.push(i.toUpperCase());
	}
	return r;
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}


/**
 * Returns the array of string lengths from the specified string array.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ '', 'a', 'bc', 'def', 'ghij' ]  => [ 0, 1, 2, 3, 4 ]
 *    [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]
 */
function getStringsLength(arr) {
<<<<<<< HEAD
  const r = [];
  for (let i = 0; i < arr.length; i += 1) {
    r.push(arr[i].length);
  }
  return r;
=======
	let r = [];
	for (let i of arr) {
		r.push(i.length);
	}
	return r;
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}

/**
 * Inserts the item into specified array at specified index
 *
 * @param {array} arr
 * @param {any} item
 * @param {number} index
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2, 1  => [ 1, 2, 3, 4, 5 ]
 *    [ 1, 'b', 'c'], 'x', 0  => [ 'x', 1, 'b', 'c' ]
 */
function insertItem(arr, item, index) {
<<<<<<< HEAD
  arr.splice(index, 0, item);
=======
	arr.splice(index, 0, item);
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}

/**
 * Returns the n first items of the specified array
 *
 * @param {array} arr
 * @param {number} n
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2 => [ 1, 3 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'a', 'b', 'c' ]
 */
function getHead(arr, n) {
<<<<<<< HEAD
  return arr.slice(0, n);
=======
	return arr.slice(n-1);
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}


/**
 * Returns the n last items of the specified array
 *
 * @param {array} arr
 * @param {number} n
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 4, 5 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'b', 'c', 'd' ]
 */
function getTail(arr, n) {
<<<<<<< HEAD
  return arr.slice(-n);
=======
	return arr.slice(-n);
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}


/**
 * Returns CSV representation of two-dimensional numeric array.
 * https://en.wikipedia.org/wiki/Comma-separated_values
 *
 * @param {array} arr
 * @return {string}
 *
 * @example
 *    [
 *       [  0, 1, 2, 3, 4 ],
 *       [ 10,11,12,13,14 ],
 *       [ 20,21,22,23,24 ],
 *       [ 30,31,32,33,34 ]
 *    ]
 *           =>
 *     '0,1,2,3,4\n'
 *    +'10,11,12,13,14\n'
 *    +'20,21,22,23,24\n'
 *    +'30,31,32,33,34'
 */
function toCsvText(arr) {
<<<<<<< HEAD
  let r = '';
  for (let p = 0; p < arr.length; p += 1) {
    for (let n = 0; n < arr[p].length; n += 1) {
      r += arr[p][n];
      r += ',';
    }
    r = r.slice(0, -1);
    r += '\n';
  }
  r = r.slice(0, -1);
  return r;
=======
	let r = '';
	for (let p of arr) {
		for (let n of p) {
			r += n + ',';
		}
		r += '\n';
	}
	r = r.slice(0, -2);
	return r;
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}

/**
 * Transforms the numeric array into the according array of squares:
 *   f(x) = x * x
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 0, 1, 2, 3, 4, 5 ] => [ 0, 1, 4, 9, 16, 25 ]
 *   [ 10, 100, -1 ]      => [ 100, 10000, 1 ]
 */
function toArrayOfSquares(arr) {
<<<<<<< HEAD
  return arr.map((x) => x * x);
=======
	return arr.map((x) => x * x);
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}


/**
 * Transforms the numeric array to the according moving sum array:
 *     f[n] = x[0] + x[1] + x[2] +...+ x[n]
 *  or f[n] = f[n-1] + x[n]
 *
 * @param {array} arr
 * @return {array}
 *
 * Example :
 *   [ 1, 1, 1, 1, 1 ]        => [ 1, 2, 3, 4, 5 ]
 *   [ 10, -10, 10, -10, 10 ] => [ 10, 0, 10, 0, 10 ]
 *   [ 0, 0, 0, 0, 0]         => [ 0, 0, 0, 0, 0]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]
 */
<<<<<<< HEAD

function getMovingSum(arr) {
  let sum = 0;
  return arr.map((x) => {
    sum += x;
    return sum;
  });
=======
 
function getMovingSum(arr) {
	let sum = 0;
	return arr.map((x) => {
		sum += x;
		return sum;
	});
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}

/**
 * Returns every second item from the specified array:
 *
 * @param {array} arr
 * @return {array}
 *
 * Example :
 * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 2, 4, 6, 8, 10 ]
 * [ 'a', 'b', 'c' , null ]  => [ "b", null ]
 * [ "a" ] => []
 */
function getSecondItems(arr) {
<<<<<<< HEAD
  const r = [];
  for (let i = 1; i < arr.length; i += 2) {
    r.push(arr[i]);
  }
  return r;
=======
	let r = [];
	for (let i = 1; i < arr.length; i += 2) {
		r.push(arr[i]);
	}
	return r;
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}


/**
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, three third items etc.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example :
 *  [] => []
 *  [ 1 ] => [ 1 ]
 *  [ 'a', 'b' ] => [ 'a', 'b','b' ]
 *  [ 'a', 'b', 'c', null ] => [ 'a', 'b','b', 'c','c','c',  null,null,null,null ]
 *  [ 1,2,3,4,5 ] => [ 1, 2,2, 3,3,3, 4,4,4,4, 5,5,5,5,5 ]
 */
function propagateItemsByPositionIndex(arr) {
<<<<<<< HEAD
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    for (let p = 0; p < i; p += 1) {
      arr.splice(i, 0, arr[i]);
    }
  }
  return arr;
=======
	for (let i = arr.length - 1; i >= 0; i--) {
		for (let p = 0; p < i; p++) {
			arr.splice(i, 0, arr[i]);
		}
	}
	return arr;
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}

/**
 * Returns the 3 largest numbers from the specified array
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 1, 2 ] => [ 2, 1 ]
 *   [ 1, 2, 3 ] => [ 3, 2, 1 ]
 *   [ 1,2,3,4,5,6,7,8,9,10 ] => [ 10, 9, 8 ]
 *   [ 10, 10, 10, 10 ] => [ 10, 10, 10 ]
 */
function get3TopItems(arr) {
<<<<<<< HEAD
  return arr.sort((a, b) => b - a).slice(0, 3);
=======
	return arr.sort((a, b) => b - a).slice(0,3);
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}

/**
 * Returns the number of positive numbers from specified array
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *   [ ]          => 0
 *   [ -1, 0, 1 ] => 1
 *   [ 1, 2, 3]   => 3
 *   [ null, 1, 'elephant' ] => 1
 *   [ 1, '2' ] => 1
 */
function getPositivesCount(arr) {
<<<<<<< HEAD
  let r = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > 0) r += 1;
  }
  return r;
=======
	let r = 0;
	for (let x of arr) {
		if (x > 0) r++;
	}
	return r;
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}
/**
 * Sorts digit names
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 'nine','one' ]                 => [ 'one', 'nine' ]
 *   [ 'one','two','three' ]          => [ 'one','two', 'three' ]
 *   [ 'nine','eight','nine','eight'] => [ 'eight','eight','nine','nine']
 *   [ 'one','one','one','zero' ]     => [ 'zero','one','one','one' ]
 */
function sortDigitNamesByNumericOrder(arr) {
<<<<<<< HEAD
  const r = [];
  const res = [];
  for (let x = 0; x < arr.length; x += 1) {
    if (arr[x] === 'zero') r.push(0);
    if (arr[x] === 'one') r.push(1);
    if (arr[x] === 'two') r.push(2);
    if (arr[x] === 'three') r.push(3);
    if (arr[x] === 'four') r.push(4);
    if (arr[x] === 'five') r.push(5);
    if (arr[x] === 'six') r.push(6);
    if (arr[x] === 'seven') r.push(7);
    if (arr[x] === 'eight') r.push(8);
    if (arr[x] === 'nine') r.push(9);
  }
  r.sort((a, b) => a - b);
  for (let x = 0; x < r.length; x += 1) {
    if (r[x] === 0) res.push('zero');
    if (r[x] === 1) res.push('one');
    if (r[x] === 2) res.push('two');
    if (r[x] === 3) res.push('three');
    if (r[x] === 4) res.push('four');
    if (r[x] === 5) res.push('five');
    if (r[x] === 6) res.push('six');
    if (r[x] === 7) res.push('seven');
    if (r[x] === 8) res.push('eight');
    if (r[x] === 9) res.push('nine');
  }
  return res;
=======
	let r = [];
	let	res = [];
	for (let x of arr) {
		if (x === 'zero') r.push(0);
		if (x === 'one') r.push(1);
		if (x === 'two') r.push(2);
		if (x === 'three') r.push(3);
		if (x === 'four') r.push(4);
		if (x === 'five') r.push(5);
		if (x === 'six') r.push(6);
		if (x === 'seven') r.push(7);
		if (x === 'eight') r.push(8);
		if (x === 'nine') r.push(9);
	}
	r.sort((a,b)=>a-b);
	for (let x of r) {
		if (x === 0) x = res.push('zero');
		if (x === 1) x = res.push('one');
		if (x === 2) x = res.push('two');
		if (x === 3) x = res.push('three');
		if (x === 4) x = res.push('four');
		if (x === 5) x = res.push('five');
		if (x === 6) x = res.push('six');
		if (x === 7) x = res.push('seven');
		if (x === 8) x = res.push('eight');
		if (x === 9) x = res.push('nine');
	}
	return res;
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}

/**
 * Returns the sum of all items in the specified array of numbers
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *   [] => 0
 *   [ 1, 2, 3 ]           => 6
 *   [ -1, 1, -1, 1 ]      => 0
 *   [ 1, 10, 100, 1000 ]  => 1111
 */
function getItemsSum(arr) {
<<<<<<< HEAD
  let sum = 0;
  for (let x = 0; x < arr.length; x += 1) {
    sum += arr[x];
  }
  return sum;
=======
	let sum = 0;
	arr.map((x) => sum += x);
	return sum;
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}

/**
 * Returns the number of all falsy value in the specified array
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *  [] => 0
 *  [ 1, '', 3 ] => 1
 *  [ -1, 'false', null, 0 ] => 2
 *  [ null, undefined, NaN, false, 0, '' ]  => 6
 */
function getFalsyValuesCount(arr) {
<<<<<<< HEAD
  let sum = 0;
  for (let x = 0; x < arr.length; x += 1) {
    if (!arr[x]) sum += 1;
  }
  return sum;
=======
	let sum = 0;
	arr.map((x) => {
		if (!x) sum +=1;
	});
	return sum;
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}

/**
 * Returns a number of all occurrences of the specified item in an array
 *
 * @param {array} arr
 * @param {any} item
 * @return {number}
 *
 * @example
 *    [ 0, 0, 1, 1, 1, 2 ], 1 => 3
 *    [ 1, 2, 3, 4, 5 ], 0 => 0
 *    [ 'a','b','c','c' ], 'c'=> 2
 *    [ null, undefined, null ], null => 2
 *    [ true, 0, 1, 'true' ], true => 1
 */
function findAllOccurrences(arr, item) {
<<<<<<< HEAD
  let sum = 0;
  for (let x = 0; x < arr.length; x += 1) {
    if (arr[x] === item) sum += 1;
  }
  return sum;
=======
	let sum = 0;
	arr.map((x) => {
		if (x === item) sum +=1;
	});
	return sum;
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}

/**
 * Concatenates all elements from specified array into single string with ',' delimiter
 *
 * @param {array} arr
 * @return {string}
 *
 * @example
 *    [0, false, 'cat', NaN, true, '']  => '0,false,cat,NaN,true,'
 *    [1, 2, 3, 4, 5]                   => '1,2,3,4,5'
 *    ['rock', 'paper', 'scissors']     => 'rock,paper,scissors'
 */
function toStringList(arr) {
<<<<<<< HEAD
  let s = '';
  for (let x = 0; x < arr.length; x += 1) {
    s += arr[x];
    s += ',';
  }
  s = s.slice(0, -1);
  return s;
=======
	let s = '';
	arr.map((x) => {
		s += x+',';
	});
	if (arr[arr.length-1] !== '') {
		s.slice(0,-1);
	}
	return s;
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}

/**
 * Sorts the specified array by country name first and city name
 * (if countries are equal) in ascending order.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 *    ]
 */
<<<<<<< HEAD
function sortCitiesArray(/* arr */) {
  /* return arr.sort(); */
  throw new Error('Not implemented');
=======
function sortCitiesArray(arr) {
	return arr.sort();
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}

/**
 * Creates an identity matrix of the specified size
 *
 * @param {number} n
 * @return {array}
 *
 * @example
 *     1  => [[1]]
 *
 *     2 => [[1,0],
 *           [0,1]]
 *
 *          [[1,0,0,0,0],
 *           [0,1,0,0,0],
 *     5 =>  [0,0,1,0,0],
 *           [0,0,0,1,0],
 *           [0,0,0,0,1]]
 */
function getIdentityMatrix(n) {
<<<<<<< HEAD
  const r = [];
  for (let h = 0; h < n; h += 1) {
    r[h] = [];
    for (let w = 0; w < n; w += 1) {
      r[h][w] = 0;
      if (h === w) r[h][w] = 1;
    }
  }
  return r;
=======
	let r = [];
	for (let h = 0; h < n; h++) {
		r[h] = [];
		for (let w = 0; w < n; w++) {
			r[h][w] = 1;
		}
	}
	return r;
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}


/**
 * Creates an array of integers from the specified start to end (inclusive)
 *
 * @param {number} start
 * @param {number} end
 * @return {array}
 *
 * @example
 *     1, 5  => [ 1, 2, 3, 4, 5 ]
 *    -2, 2  => [ -2, -1, 0, 1, 2 ]
 *     0, 100 => [ 0, 1, 2, ..., 100 ]
 *     3, 3   => [ 3 ]
 */
function getIntervalArray(start, end) {
<<<<<<< HEAD
  const r = [];
  for (let x = start; x <= end; x += 1) {
    r.push(x);
  }
  return r;
=======
	let r = [];
	for (let x = start; x <= end; x++) {
		r.push(x);
	}
	return r;
>>>>>>> bb107b79715fd9299a0143d4042835be121286a5
}

/**
 * Returns array containing only unique values from the specified array.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 1, 2, 3, 3, 2, 1 ] => [ 1, 2, 3 ]
 *   [ 'a', 'a', 'a', 'a' ]  => [ 'a' ]
 *   [ 1, 1, 2, 2, 3, 3, 4, 4] => [ 1, 2, 3, 4]
 */
function distinct(arr) {
  return Array.from(new Set(arr));
}

/**
 * Groups elements of the specified array by key.
 * Returns multimap of keys extracted from array elements via keySelector callback
 * and values extracted via valueSelector callback.
 * See: https://en.wikipedia.org/wiki/Multimap
 *
 * @param {array} array
 * @param {Function} keySelector
 * @param {Function} valueSelector
 * @return {Map}
 *
 * @example
 *   group([
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Russia', city: 'Omsk' },
 *      { country: 'Russia', city: 'Samara' },
 *      { country: 'Belarus', city: 'Grodno' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland', city: 'Lodz' }
 *     ],
 *     item => item.country,
 *     item => item.city
 *   )
 *            =>
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"],
 *    "Poland" => ["Lodz"]
 *   }
 */
function group(array, keySelector, valueSelector) {
  throw new Error('Not implemented');
}


/**
 * Projects each element of the specified array to a sequence
 * and flattens the resulting sequences into one array.
 *
 * @param {array} arr
 * @param {Function} childrenSelector, a transform function to apply to each element
 *                                     that returns an array of children
 * @return {array}
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], (x) => x     =>   [ 1, 2, 3, 4, 5, 6 ]
 *   ['one','two','three'], (x) => x.split('')  =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany(arr, childrenSelector) {
  return arr.reduce(childrenSelector);
}


/**
 * Returns an element from the multidimensional array by the specified indexes.
 *
 * @param {array} arr
 * @param {array} indexes
 * @return {any} element from array
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], [0,0]  => 1        (arr[0][0])
 *   ['one','two','three'], [2]       => 'three'  (arr[2])
 *   [[[ 1, 2, 3]]], [ 0, 0, 1 ]      => 2        (arr[0][0][1])
 */
function getElementByIndexes(arr, indexes) {
  if (indexes.length === 3) {
    return arr[indexes[0]][indexes[1]][indexes[2]];
  }
  if (indexes.length === 2) {
    return arr[indexes[0]][indexes[1]];
  }
  return arr[indexes[0]];
}


/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position.
 *
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   [ 1, 2 ]  => [ 2, 1 ]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8 ]   =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *
 */
function swapHeadAndTail(arr) {
  let half = 0;
  if (arr.length % 2 === 0) {
    half = arr.length / 2;
  } else {
    half = (arr.length - 1) / 2;
  }
  for (let i = 0; i < half; i += 1) {
    arr.push(arr.shift());
  }
  if (arr.length % 2 !== 0) {
    arr.splice(half, 0, arr.shift());
  }
  return arr;
}

module.exports = {
  findElement,
  generateOdds,
  doubleArray,
  getArrayOfPositives,
  getArrayOfStrings,
  removeFalsyValues,
  getUpperCaseStrings,
  getStringsLength,
  insertItem,
  getHead,
  getTail,
  toCsvText,
  toStringList,
  toArrayOfSquares,
  getMovingSum,
  getSecondItems,
  propagateItemsByPositionIndex,
  get3TopItems,
  getPositivesCount,
  sortDigitNamesByNumericOrder,
  getItemsSum,
  getFalsyValuesCount,
  findAllOccurrences,
  sortCitiesArray,
  getIdentityMatrix,
  getIntervalArray,
  distinct,
  group,
  selectMany,
  getElementByIndexes,
  swapHeadAndTail,
};
