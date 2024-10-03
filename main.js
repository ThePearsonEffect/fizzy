/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
//Fizz Buzz
function FizzBuzz(value1, value2){
  let returnValue = "";
  for(let i =1; i<=100;i++){
    if(i%value1==0 && i%value2==0){
        returnValue += 'FizzBuzz ';
    }
    else if (i%value1==0){
      returnValue += 'Fizz ';
    }
    else if (i%value2 == 0){
        returnValue += 'Buzz ';
    }
    else{
        returnVAlue += i + '';
    }
  }
  return returnValue;
}


/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/


if (typeof fizzy === "undefined") {
  fizzy = undefined;
}

module.exports = {
  fizzy,
};
