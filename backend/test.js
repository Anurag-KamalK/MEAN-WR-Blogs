

function xyz(n, arr){
    let arr1=[];
    if(n >= arr.length){
        return arr1;
    }
    else if(n<=0){
        return arr1 = arr;
    }
    else{
        for(let i=1; i<=arr.length; i++){
            if(arr[i]>n){
                arr1.push(arr[i])  
            }
        }
        return arr1;
    }
}

let arr2=[2,3,5,1,6,4]
let n1 = 4;
abc=xyz(n1,arr2);
console.log(abc);
