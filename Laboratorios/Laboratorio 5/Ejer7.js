function fibonacci(numero){
    var int1 = 0;
    var int2 = 1;
    var int3;

    console.log(int1+"");
    console.log(int2+"");

    for(var i=3; i <= numero;i++)
    {
        int3 = int1 + int2;
        int1 = int2;
        int2 = int3;
        console.log(int3+"");
    }
}
fibonacci(prompt("Ejercicio 7: numero"))