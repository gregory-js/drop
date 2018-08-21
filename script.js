var arr = [];

arr = [[ 1, 0, 0, 1, 0, 0 ],
  [ 1, 0, 1, 1, 0, 0 ],
  [ 1, 1, 1, 0, 0, 1 ],
  [ 1, 0, 1, 1, 1, 1 ],
  [ 1, 1, 1, 1, 1, 0 ],
  [ 0, 1, 1, 0, 1, 0 ],
  [ 0, 1, 0, 0, 1, 0 ]];


var resultToDelArr = [[ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ]];

var targetRow = 2;
var targetColumn = 2;

var flagResult = 1;


var arrRow = arr[targetRow];

var target = arrRow[targetColumn]; 


function checkRecursiveRowPos(arrRow, indexI, indexJ) {
  
  if (!(indexJ < arrRow.length)) {
    return false;
  }
  
  if (target === arrRow[indexJ + 1]) {
    resultToDelArr[indexI][indexJ + 1] = flagResult; // fill result array

    return checkRecursiveRowPos(arrRow, indexI, indexJ + 1);
  }

  return false;

}


function checkRecursiveRowNeg(arrRow, indexI, indexJ) {
  
  if (indexJ < 0) {
    return false;
  }

  if (target === arrRow[indexJ - 1]) {
    resultToDelArr[indexI][indexJ - 1] = flagResult; // fill result array

    return checkRecursiveRowNeg(arrRow, indexI, indexJ - 1);
  }
  
  return false;

}



function checkRecursiveColumnPos(arr, indexI, indexJ) {
  var arrRow = arr[indexI];

  if (indexI >= arr.length) {
    return false;
  }

  if (target === arr[indexI][indexJ]) {
    resultToDelArr[indexI][indexJ] = flagResult; // fill result array
    checkRecursiveRowPos(arrRow, indexI + 1, indexJ);
    checkRecursiveRowNeg(arrRow, indexI + 1, indexJ);    
    return checkRecursiveColumnPos(arr, indexI + 1, indexJ);
  }
}


function checkRecursiveColumnNeg(arr, indexI, indexJ) {
  
  if (indexI < 0) {
    return false;
  }
  
  var arrRow = arr[indexI - 1];

  if (target === arr[indexI - 1][indexJ]) {
    resultToDelArr[indexI - 1][indexJ] = flagResult; // fill result array
    checkRecursiveRowPos(arrRow, indexI - 1, indexJ);
    checkRecursiveRowNeg(arrRow, indexI - 1, indexJ);    
    return checkRecursiveColumnNeg(arr, indexI - 1, indexJ);
  }
}

resultToDelArr[targetRow][targetColumn] = flagResult;

// check first row
checkRecursiveRowPos(arrRow, targetRow, targetColumn);
checkRecursiveRowNeg(arrRow, targetRow, targetColumn);

// check rows up and down
checkRecursiveColumnPos(arr, targetRow, targetColumn);
checkRecursiveColumnNeg(arr, targetRow, targetColumn);


console.log(arr);
console.log('\n');

console.log("Start point ["+ targetRow + ", " + targetColumn + "] = " + arr[targetRow][targetColumn] + "\n");

console.log('\n');
console.log(resultToDelArr);

