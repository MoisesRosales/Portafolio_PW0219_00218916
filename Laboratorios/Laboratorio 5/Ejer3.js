function ocurrencias(array,numero){
    var oc = 0;
    for(let i=0; i<array.length;i++){
        if(array[i]==numero){
            oc = oc+1;
        }
    }
    console.log(array);
    console.log("la cantidad de ocurrencias de "+numero+" es de: "+oc)
}
ocurrencias([1,1,2,3,4,5,6,6,7],1);