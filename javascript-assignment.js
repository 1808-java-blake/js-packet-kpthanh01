// Javascript Homework
// Due Monday COB
// Put all homework in:
// github classroom created for you
// -----------------------------------------------------------------------------------
// PART I

// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------

// 1. Fibonacci
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.
	function fib(n){
		if(n <= 1){
			return 1;
		}
		return fib(n-1) + fib(n-2);
	}
	// console.log(fib(5));

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
	function bubbleSort(numArr){
		let numArray = numArr;
		for(let i = 0; i < numArray.length - 1; i++){
			for(let j = 0; j < numArray.length - i - 1; j++){
				if(numArray[j] > numArray[j+1]){
					let temp = numArray[j];
					numArray[j] = numArray[j+1];
					numArray[j+1] = temp;
				}
			}
		}
		return numArray;
	}
	let bubbleSortArray = [2,7,3,1,9,2,13];
	// console.log(bubbleSort(bubbleSortArray));

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.
	function reverseStr(str){
		let temp = str.split('').reverse().join('');
		return temp;
	}
	// console.log(reverseStr("A reverse string"));

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
	function factorial(num) {
  		if (num === 0) { 
  			return 1; 
  		}
 	 	return num * factorial(num-1);
	}
	// console.log(factorial(5));

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
	function substring(str, length, offset){
		if(offset > str.length){
			alert('offset is larger than the length of the string!');
			return;
		}
		if(offset + length > str.length){
			alert("offset + length is larger than the length of the string!");
			return;
		}
		let tempStr = '';
		for(let i = offset; i < offset+length; i++){
			tempStr += str[i];
		}
		return tempStr;
	}
	// console.log(substring("Pokemon", 2, 4));

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
	function isEven(num){
		let testEven = Math.floor(num/2);
		if(testEven*2 === num){
			return true;
		}
		return false;
	}
	// console.log(isEven(21));

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
	function isPalindrome(str){
	let cleanStr = str.toLowerCase().replace(/[W_]g/,'');
	let revStr = cleanStr.split('').reverse().join('');
	if(str === revStr){
		return true;
	}
	return false;
	}
	// console.log(isPalindrome("tacocat"));
	// console.log(isPalindrome("NotPalindrome"));

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *
	function printShape(shape, height, character){
		switch (shape.toLowerCase()) {
			case "square":
				for(let i = 0; i < height; i++){
					let square = "";
					for(let j = 0; j < height; j++){
						square += character;
					}
					console.log(square);
				}
				break;
			case "triangle":
				for(let i=0; i <= height; i++){
					let triangle = "";
					for (let j = 0; j < i; j++) {
						triangle += character;
					}
					console.log(triangle);
				}
				break;
			case "diamond":
				let half = Math.floor(height/2);
				for(let i =0; i<height; i++){
					let temp = "";
					for(let j=0; j<height; j++){
						if(i==half|| j==half|| ((i<half)&&(j<half)&&(i+j>=half))|| ((i<half)&&(j>half)&&(j-i<=half))|| ((i>half)&&(j<half)&&(i-j<=half))||
						((i>half)&&(j>half)&&((height-j-1)+(height-i-1)>=half)))
							temp+=""+character;
							temp+=' ';
					}
					console.log(temp);
				}
				break;
			default:
				break;
		}
	}
	// printShape("Square", 6, "*");
	// printShape("triangle", 7, "%");
	// printShape("Diamon", 5, "*");

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
	function traverseObject(obj){
		for(item in obj){
			console.log(`${item}: ${obj[item]}`);
		}
	}
	let object = {
		name: "kevin",
		age: 3
	};
	// console.log(traverseObject(object));

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
	function deleteElement(arr){
		console.log(`Array: ${arr}, Array size: ${arr.length}`);
		delete arr[2];
		console.log(`Array: ${arr}, Array size: ${arr.length}`);
	}
	let deleteArray = [1,2,3,4,5];
	// console.log(deleteElement(deleteArray));

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
	function spliceElement(arr){
		console.log(`Array: ${arr}, Array size: ${arr.length}`);
		let spliced = arr.splice(2,1);
		console.log(`Array: ${arr}, Array size: ${arr.length}`);
	}
	let spliceArray = [1,2,3,4,5];
	// console.log(spliceElement(spliceArray));

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	var john = new Person("John", 30);
	function Person(name, age){
		this.name = name;
		this.age = age;
	}
	let kevin = new Person("kevin", 23)
	// console.log(kevin);

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	var john = getPerson("John", 30);
	function getPerson(n, a){
		return {
			name: n, 
			age: a
		};
	}
	let john = getPerson("John", 30);
	console.log(john);
 
 
 
 
 
// -----------------------------------------------------------------------------------
// PART II

// Part II will focus on Javascript's ability to manipulate the DOM.
// Use the provided index.html
// Put your Javascript in the provided <script> element at the bottom of the page or in a separate .js file next to it.
// Please put the question itself as a comment above each answer.

// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
  
// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
  
// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
  
// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
  
// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).


