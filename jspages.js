
//== 1 ==
function max( x ,y){
	var largest;
	if(x>y){
		largest=x;
	}
	else if(x<y){
		largest=y;
	}
	return largest;
}
//Testing:

console.log(max(3,1));
//output: 3


//=== 2 ==
function maxOfThree(x,y,z){
	var largeOfThree;	
	if(x>y)	{
		largeOfThree=x;
	}else{
		largeOfThree=y;
	}
	if(z>largeOfThree){
		largeOfThree=z;
	}
	return largeOfThree;		
	
}
// Testing:
console.log(maxOfThree([6,3,1));
//output: 6



//== 3 ==
function isVowel(ch){
	var checkVowel=false;
	if(ch=='a' || ch=='A' || ch=='e'
	|| ch=='E' || ch=='i' || ch=='I' || ch=='o' || ch=='O' || ch=='u' || ch=='U'){
		checkVowel=true; 
	}
	return checkVowel;
}
// Testing:
console.log(isVowel('A'));
//output: true


// == 4 ==
function sum(arr){
	let sum=0;
	for(let i=0;i<arr.length;i++){
	sum+=arr[i]	;
	}
	return sum;
	
}
// Testing:
console.log(sum[1,2,3,4]);
//output: 10


// == 5 ==
function multiply(arr){
	let mult=1;
	for(let i=0;i<arr.length;i++){
		mult=mult*arr[i];
	}
	return mult;
}
// Testing:
console.log(multiply[1,2,3,4]);
//output: 24


//=== 6 ==
function reverse(str){
	let reversed="";
	for(let i=str.length-1;i>=0;i--){
		reversed=reversed+str.charAt(i);
	}
	return reversed;	
}
// Testing:
console.log(reverse("Hello"));
//output: "olleH



//=== 7 ==
function findLongestWord(array){
	var longest=array[0].length;
	for(let i=1;i<array.length;i++)
		{
		if(array[i].length>longest){
			longest=array[i].length;
		}
				
	}
	return longest;
}
// Testing:
console.log(findLongestWord(["ab"cde",""efghi"]));
//output: "efghi"


// === 8 ===
function filterLongWords(array,iVal){
	let longArrays=[];
	for(let i=0;i<array.length;i++){
		if(array[i].length>iVal){
			longArrays.push(array[i]);
		}
		
	}
	return longArrays;
}
// Testing:
 console.log(filterLongWords(["ab","cd","abcd"],3));
 // output: ["abcd"]
 
// === 9.a ===
function multiplyByTen(array){
	const a=array.map(function(elem){
		return elem*10;
	});
}
// Testing: 
console.log( multiplyByTen([1,2,3,4]));
//output: [10,20,30,40]


//=== 9.b ===

function getAllElementEqual2Three(array){
	const ThreesArray=[];
	array.forEach(function(elem){
		if(elem==3){
			ThreesArray.push(elem);
		}
	});
	console.log(ThreesArray);
	
}
// Testing: 
console.log(getAllElementEqual2Three([2,3,2,3]));
//output: [3,3]


//=== 9.c ====
function getProductOfAllElements(array){
	const product=array.reduce(getProduct,1);
	return product;
	
}

function getProduct(val1,val2){
	return val1*val2;
}
// Testing:
 console.log(getProductOfAllElements[1,2,3,4]);
// output: 24


// All the functions are in this single JS file
// Thanks
