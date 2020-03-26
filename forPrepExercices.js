// Basic Requirments
// 0.Try to write all of the exercises using both the for loop and while loop.

// 1.Write a function sum that computes the sum of the numbers in an array.
function sum(array){
	var total = 0
	for (var i=0 ; i < array.length ; i++){
		total = total + array[i]
	}
	return total ;
}


function sum(array){
	var total =0 
	var i = 0 
	while (i<array.length) {
		total = total + array[i] 
		i++
	}
	return total;
}
// 2.Write a function max that accepts an array of numbers and returns the largest number in the array.


/* for loop */ 
function max(array){
	var total = 0 
	for ( var i=0 ; i <=array.length  ; i++){
		if (array[i]> total){
			total = array[i]
		}
	}
	return total ;	
}

/*while loop */

function max(array){
	var total =0 
	var i=0 
	while(i<=array.length){
		if (array[i]>total){
			total = array[i]
			i++
		}
	}
	return total;
}
// 3.Try the following at a console:

//  'the quick brown fox jumped over the lazy dog'.split(' ');
//  'Hello, world!'.split('')
//  '1,2,3,4,5,6'.split(',')
// What is returned by split (You can read more about it here (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) and how does it work?
//  Use split to write a function longestWord that takes a string as an argument and returns the longest word.



function longestWords(str){
    var  arr = str.split(' ')
    var total= arr[0]
	for (var i = 0 ; i < arr.length ; i++){
		if(arr[i].length >= total.length){
			total = arr[i]
		}
	}
     return total
}
function longestWords(str){
    var  arr = str.split(' ')
    var total= arr[0]
    var i = 0
	while(i < arr.length){
		if(arr[i].length >= total.length){
			total = arr[i]
			i++
		}
	}
     return total
}


// 4.Write a function remove that accepts an array and an element, and returns an array with all ocurrences of element removed.
//  remove([1, 3, 6, 2, 3], 3); // => [1, 6, 2]
 
 function remove(array, element) {
 	var arr;
 	for (var i=0 ; i<array.length ; i++){
 		if(array[i] === element){
 			arr = array.splice(i,1)
 			
 		}
 	}
 	return array 
 } 
 /*sooo i did it inn another way and im not sure iff it is right 
  function remove(array, element) {
 	var arr=[]
 	for (var i=0 ; i<=array.length ; i++){
 		if(array[i] === element){
 			array.splice(i,1)
 			arr.push(array)
 		}
 	}
 	return arr
 } */ 

function remove(array, element) {
 	var arr;
 	var i = 0
 	while ( i<array.length){
 		if(array[i] === element){
 			arr = array.splice(i,1)
 			i++
 		}
 	}
 	return array 
 } 







// 5.Write a function evens that accepts an array as an argument, and returns an array consisting of all of the even numbers in that array.

function evens(array){
	var arr=[]
	for (var i = 0 ; i<array.length ; i++){
		if(array[i] % 2 === 0){
			arr.push(array[i])
		}
	}
	return arr
}


function evens(array){
	var arr=[]
	var i = 0
	while ( i<array.length ){
		if(array[i] % 2 === 0){
			arr.push(array[i])
			i++
		}
	}
	return arr
}

// More Practice
// 1.Write a function called average that takes an array of numbers as a parameter and returns the average of those numbers.
function average(array){
	var total = 0 
	var result = 0
	for (var i = 0 ; i < array.length ; i++){
	   result = result + array[i] 
        total = result / array.length
		}
		return total 
}

function average(array){
	var total = 0 
	var result = 0
	var i =0
	 while(i < array.length){
	    result = result + array[i] 
         total = result / array.length
         i++
	 }
 return total 
}


// 2. Write a function called min that finds the smallest number in an array of numbers.
function min(array){
	var total = array.length 
	for ( var i=0 ; i <=array.length  ; i++){
		if (array[i]< total){
			total = array[i]
		}
	}
	return total ;
}

	function min(array){
	var total = array.length 
	var i = array.length
	while( i <=array.length ){
		if (array[i]< total){
			total = array[i]
			i++
		}
	}
	return total ;
}



// 3.Write a function shortestWord that works like longestWord, but returns the shortest word instead.

function shortestWords(str){
    var  arr = str.split(' ')
    var total= arr[0]
	for (var i = 0 ; i < arr.length ; i++){
		if(arr[i].length <= total.length){
			total = arr[i]
		}
	}
     return total
}

function shortestWords(str){
    var  arr = str.split(' ')
    var total= arr[0]
    var i = 0
	while( i < arr.length ){
		if(arr[i].length <= total.length){
			total = arr[i]
			i++
		}
	}
     return total
}



// 4.Write a function countChar that takes two arguments: any string, and a character (string of one letter), and returns the number of times that the character occurs in the string.
function countChar(str,character){
	var j = 0
	for (var i =0 ; i<str.length ; i++){
		if(str[i]=== character){
			j++
		}
	}
	return j
}
function countChar(str,character){
	var j = 0
	var i =0
	while( i<str.length ){
		if(str[i]=== character){
			j++
			i++
		}
	}
	return j
}


// 5.Write a function evenLengthWords that takes an array of strings as an argument, and returns an array of just the words that have an even length.
/* sooooo i first understood that i should return the words that have the same length not the words that their length is pair so here it is haha */
function evenLengthWords(array){
var arr=[]
var total =array.length
for (var i = 0 ; i<array.length ; i++){
	if(array[i].length === total){
		arr.push(array[i])
	}
}
return arr 
}

/* and theeeeeeeen i realized what the question really wanted me to do so i did it xD */ 

function evenLengthWords(array){
	var arr= [];
	for (var i=0; i < array.length; i++){
		if (array[i].length % 2 === 0){
			arr.push(array[i]);
		}
	}
	return arr;
}

function evenLengthWords(array){
	var arr= [];
	var i = 0
	while(i < array.length){
		if (array[i].length % 2 === 0){
			arr.push(array[i]);
			i++
		}
	}
	return arr;
}
/* alsoooo i figured in the beginning that instead of working with an arra i worked with n lol i wasnt focusing so yeah i fixed it */


// Advanced
// 1.Read about the join method on MDN and use it to implement a function that accepts a string as an argument and returns that string reversed

// 2.Write a function keep that 'keeps' certain elements in an array. The function will need to take two arguments, an array, and something else -- the second argument will be what is used to determine which elements to keep.

// You should be able to use this function to write evens, evenLengthWords, a hypothetical odds function, or oddLengthWords without changing the keep function.
