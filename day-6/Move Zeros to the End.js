function move_to_zero_end(arr){
  let NonZeroIndex=0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]!==0){
            [arr[NonZeroIndex],arr[i]]=[arr[i],arr[NonZeroIndex]];
            NonZeroIndex++;
        }
        
    }
    return arr;
}
var arr=[3,2,0,5,0,1,0];
console.log(move_to_zero_end(arr));
