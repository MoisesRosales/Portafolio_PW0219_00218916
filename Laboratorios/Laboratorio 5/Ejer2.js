function Ejer2(array){
    var a=0;    
    for(let i=0; i<array.length;i++){
        a=a+array[i];
    }
    console.log("suma = "+a);
    console.log("el promedio es de = "+ a/array.length);
}
Ejer2([1,2,3,4,5,6,7,8,9,10]);