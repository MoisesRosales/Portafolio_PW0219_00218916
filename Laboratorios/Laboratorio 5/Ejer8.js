var array=[];
function Binary(number){
    var residuo;
    if(number!=2){
        residuo = number%2;
        number = Math.floor(number/2);
        Binary(number);
        array.push(residuo);
    }
    console.log(array);
}
Binary(10);