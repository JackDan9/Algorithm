function BubbleSort(arr) {
    let i, j, temp;
    let flag = true;
    for (i=0; i < arr.length - 1 && flag; i++) {
        flag = false;
        for(j=arr.length - 1; j > i; j--) {
            if(arr[j] < arr[j-1]) {
                temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
                flag = true;
            }
        }
    }
    return arr;
}

var arr=[10, 7, 9, 11, 22, 33, 4, 2, 0, 1000];
BubbleSort(arr);
console.log(arr);