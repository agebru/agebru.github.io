// * 4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers
function sum(arr){
  var result=0;
  result= arr.reduce(function(a,b){return a+b;},0);
  //arr.reduce((a,b)=>a+b,0);
  return result;

}
/* Testing */
var sumNumber=sum([2,4,5,8]);
console.log(sumNumber); //19



function multiply(arr){
  var result=1;
  result= arr.reduce(function(a,b){return a*b;},1);
  //arr.reduce((a,b)=>a+b,0);
  return result;

}
/* Testing */
var mult=multiply([2,4,5,8]);
console.log(mult);// 320


// * 5 Define a function reverse() that computes the reversal of a string.
function reverse(str){
console.log(str.split(""));
  return str.split("").reduce((rev, char)=> char + rev, ''); 
}

/* Testing */
var reverse=reverse('Hello');
console.log(reverse);// olleH


//7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i. */

function filterLongWords(array,iVal){

 return array.filter(arr=>arr.length > iVal).join(',');

}

/* Testing */
var filterLongerWords=filterLongWords(['Hi','There','Two','four','six','Thirteen'],4);
console.log(filterLongerWords); // There,Thirteen
