function DataType(array){
    for(let i=0;i<array.length;i++){
        console.log(array[i],typeof(array[i]));
    }
}
DataType([1,"a",1.333,[1,2,3],true]);