var array=[];
function Binary(number){
    var residuo;
    if(number>=2){
        residuo = number%2;
        number = Math.floor(number/2);
        Binary(number);
        array.push(residuo);
    }
    else{
        array.push(1);
    }
    console.log(array);
}
Binary(10);