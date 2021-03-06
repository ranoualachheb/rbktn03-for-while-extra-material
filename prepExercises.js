// Exercises
// Basic Requirments
// 1.Summation to n: Let's implement the function sum that takes a single parameter n, and computes the sum of all integers up to n starting from 0, e.g.:
 function sum(n) { 
 	var result=0
for (var i = 0 ; i<=n; i++){
  result = result + i
}
return result;
}

//  sum(3); // => 6 
//  sum(4); // => 10 
//  sum(5); // => 15



// 2.Factorial of n: The factorial of n is the product of all the integers preceding n, starting with 1, e.g.:
 function factorial(n) { 
 	var result = 1
 	for (var i = 1; i<=n ; i++){
        result = result * i
 	}
 	return result;
 }

//  } 
//  factorial(3); // => 6 
//  factorial(4); // => 24 
//  factorial(5); // => 120




// 3.Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string s should be repeated, e.g.
 // var string      then as long as i don't pass the count, and if count isnt equal to 0 the variable string will receive the previous value and the new str then i++ to repeat the process until it reaches the count . 
 function repeatString(str, count) { 
 	var i = 0 
 	var string =''
 	while(i < count){
       if(count===0){
 	      return '';
 	    } else {
 		  string = string + str
 		  i++
 		}
 	}
   return string;
}

//  repeatString('dog', 0); // => '' 
//  repeatString('dog', 1); // => 'dog' 
//  repeatString('dog', 2); // => 'dogdog' 
//  repeatString('dog', 3); // => 'dogdogdog'
// Your task is to implement the repeatString function using a while loop.




// More Practice
// 1.Go back through any of the exercises done in the introduction to repetition and refactor them to use the while loop.
function range(n1,n2){
	var i = n1
	var string =''
	while(i<n2){ 
		if(n1===n2){
			return n1
		} else {
			string = string + i + ','
			i++
		}
	}
	return string.slice(string.length-1);
}

// 2.Fencepost Loop: Use a while loop to build a single string with the numbers 1 through n, separated by commas. Have it return the new string. How can we make sure not to have a comma after the last number?
//  function counting(n) { 
//        // TODO: your code here 
//  } 
//  counting(5); // => '1, 2, 3, 4, 5' 
//  counting(1); // => '1' 
//  counting(3); // => '1, 2, 3'
function counting(n){
	var total = ''
	var i=1 
	while(i<n){
		if (n===1){
			return 1 
		} else {
			total = total + i + ','
            i++
		}
	}
	return total.slice(0,total.length-1);  
}



// 3.Meet & Greet: n numbers are coming to a party for numbers. Introduce them each to all the guests as they arrive. You should end up with output looking something like this one for n = 5:
//  welcome 1 
//  welcome 2, meet 1 
//  welcome 3, meet 1 and 2 
//  welcome 4, meet 1, 2 and 3 
//  welcome 5, meet 1, 2, 3 and 4
// HINT: search for which symbol that creates a line break in a string.




// 4.Reverse String: Write a function that takes a string as an input and returns the reverse of that string.
 function reverseString(str) { 
 	var string = ''
 	var i=str.length-1
 	while(i>=0){
 	 string = string + str[i]
 	 i--
 	}
 	return string;
 }	
  
 
//  reverseString('hello'); // => 'olleh' 
//  reverseString('1#*$'); // => '$*#1'
// Do this using a while loop.



// 5.Write a javascript program to print all Prime numbers from 1 to n.

/*function Js(n){
	var total = ''
   for (var i=2 ; i<n ; i++){
      if(n % i !==0){
        total = total + i + ',' 
        i++
      }
    }
    return total.slice(total.length-1) ;
}*/
function isPrime(n){
	var i= 2;
	if (n<2){
		return "choose again";
	}
	while (i < n){
		if (n%i === 0){
			return false;
		} 
		i++
      
}return true; 
 }
  function prime(n){
	var i=2;
	var result= '';
	while (i<= n){
		if (isPrime(i)){
			result= result+ i+',';
		}
		i++;
	}	
	return result.slice(0,result.length-1);
}  

    
 	


// 6.Write a JavaScript for loop that will iterate from 0 to n. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// Sample Output : 
//  '0 is even' 
//  '1 is odd' 
//  '2 is even'

/*function js(n){
	var result= ''
	var total = ''
	var i = 0 
	while(i<n){
		if(i%2===0){
		total = total + i + 'is even';
	} else {
		result = total + \n\\i + "is odd"
	} 
}
return result ;
}*/
function check(n){
   
	for (var i=0; i<= n; i++){
		if (i%2 === 0){
			alert(i + ' is even');
	} else {
		alert( i +' is odd');
	}
	
}
}

// 7.Write a javascript program to enter any number and print all factors of the number.
 function js(n){
	var total= ''
	for (var i=0; i<=n ; i++){
		if(n % i  === 0){
			total = total + i +','
		}
	}
	return total.slice(0,total.length-1);
}




// Advanced
// 1. Write a javascript function to find the sum of first and last digit of any number, without convert it to string
//  firstAndLast(456) ==> 4 + 6 = 11 
//  firstAndLast(123) ==> 1 + 3 = 4 
//  firstAndLast(197) ==> 1 + 7 = 8




// 2.Write a javascript program to draw the stars
//      * 
//     *** 
//    ***** 
//   ******* 
//  ********* 
//   ******* 
//    ***** 
//     *** 
//      *



// 3. Write a program that reads a character for playing the game of Rock-Paper-Scissors. If the character entered by the user is not one of 'P', 'R' or 'S', the program keeps on prompting the user to enter a new character.