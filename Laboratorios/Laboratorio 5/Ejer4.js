function Guess(number){
    var array=[];
    var flag = false;
    for(let i =0;i<20;i++){
        var int = parseInt((Math.random() * 10), 10)
        array.push(int);
    }
    for(let i =0;i<20;i++){
        if(number==array[i]){
            flag = true;
            break;
        }
        else{
            flag = false;
        }
    }
    if(flag==true){
        console.log("IZI WIN")
    }
    else{
        console.log("FAILURE")
    }
}
Guess(prompt("ejercicio 4: adivinanza"));