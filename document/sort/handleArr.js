function handleArr(arr){            
  for(let i = 0, len = arr.length; i < len; i++) {
    for(let j = i+1, len = arr.length; j < len; j++){
      if (arr[i] == arr[j]) {         
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}