function palindroma(palabra){
    var ispalidroma = true;
    var original = palabra.split("");
    console.log(original);
    var invertido = palabra.split("").reverse();
    console.log(invertido);

    for(let i = 0; i< original.length; i++){
        if(invertido[i]!=original[i]){
            console.log("no es palindroma");
            ispalidroma=false;
            break;
        }
    }
    if(ispalidroma == true){
        console.log("es palindroma");
        }
    }
palindroma("hello");