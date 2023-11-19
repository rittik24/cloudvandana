// ..JavaScript..//

//A. Take a sentence as an input and reverse every word in that sentence. 
// a. Example - This is a sunny day > shiT si a ynnus yad. 

function printCharReverse(N,str) {
    let bag=""
for(let i=N-1;i>=0;i--){
    bag=bag+str[i]
}
console.log(bag)
}



//...Perform sorting of an array in descending order...//

function solve(N,arr){
    for(i=0;i<N;i++){
        for(j=0;j<N-i-1;j++){
            if(arr[j]>arr[j+1])
            swap(arr,j,j+1);
        }
    }
    console.log(arr.join(" "));
}

function swap(arr,i,j){
  var temp =arr[i];
  arr[i] = arr[j];
  arr[j]= temp;
}