function operaciones() {
    var a;
    var b;
    var res;

    alert("Esta opcion le arrojara la suma, resta, multiplicacion y division de dos numeros ingresados.");

    a = parseInt(prompt ("Ingrese el valor del primer numero:"));
    b = parseInt(prompt ("Ingrese el valor del segundo numero:"));

    res = a+b;
    alert("La suma de los valores es: "+res);

    res = 0;
    res = a-b;
    alert("La resta de los valores es: "+res)

    res = 0;
    res = a*b;
    alert("La multiplicacion de los valores es: "+res)

    res = 0;
    res = a/b;
    alert("La division de los valores es: "+res)
}
function mayor(){
    var a;
    var b;

    alert("Esta opcion dira que numero ingresado es el mayor.");

    a = parseInt(prompt ("Ingrese el valor del primer numero: "));
    b = parseInt(prompt ("Ingrese el valor del segundo numero: "));

    if (a>b){
        alert("El numero "+a+" es el mayor.");
    } else {
        alert("El numero "+b+" es el mayor.");
    }
}
function menor(){
    var a;
    var b;
    var c;
    
    alert("Esta opcion dira que numero ingresado es el menor.");

    a = parseInt(prompt ("Ingrese el valor del primer numero: "));
    b = parseInt(prompt ("Ingrese el valor del segundo numero: "));
    c = parseInt(prompt ("Ingrese el valor del tercer numero: "));
    
    if (a<b & a<c){
       alert("El numero "+a+" es el menor.");
    }
    if (b<a & b<c){
        alert("El numero "+b+" es el menor.");
     }
    if (c<a & c<b){
        alert("El numero "+c+" es el menor.");
     }
}
function parImpar(){
    var a;

    alert("Esta opcion dira si el numero ingresado es par o impar.");

    a = parseInt(prompt ("Ingrese un numero: "));

    if (a % 2){
        alert("El numero es impar.");
    }else{
        alert("El numero es par.");
    }
}
function numeroCuadrado(){
    var a;
    var res;

    alert("Esta opcion le dara el valor cuadrado de su numero.");

    a = parseInt(prompt ("Ingrese un numero: "));
    res = a*a;
    alert ("Su numero al cuadrado es: "+res);
}
function areaTriangulo(){
    var a;
    var b;
    var res;

    alert("Esta opcion le dara el area de un triangulo.");

    b = parseFloat(prompt ("Ingrese la base: "));
    a = parseFloat(prompt ("Ingrese la altura: "));
    res = (b*a)/2

    alert("El area del triuangulo es: "+res);
}
function metrosCentimetros(){
    var a;
    
    alert("Esta opcion le convertira los metros en centimetros.");

    a = parseInt(prompt("Ingrese el numero en metros: "));

    alert("El valor en centimetros es: "+(a*100));
}
function anoNacimiento(){
    var a;

    alert("Esta opcion le dira en que año usted nacio.");

    a = parseInt(prompt("Porfavor digite su edad: "));
    a = 2022 - a;
    alert("Usted nacio en el año: "+a);
}
function interesBanco(){
    var a;
    var b;
    var i;

    alert("Esta opcion le dira cuanto interes genera su capital en un banco.");

    a = parseInt(prompt ("Ingrese su capital: "));
    b = parseInt(prompt ("Ingrese el numero de años: "));

    i = ((a/100)*(b*12))*2;

    alert("El valor de los interes generados es de: "+i);

}
function promedioColegio(){

    alert("Esta opcion le dira el promedio de sus notas y si aprobo o no.");

    var a = parseFloat(prompt("Digite la nota N.1: "));
    var b = parseFloat(prompt("Digite la nota N.2: "));;
    var c = parseFloat(prompt("Digite la nota N.3: "));;
    var d = parseFloat(prompt("Digite la nota N.4: "));;
    var e = parseFloat(prompt("Digite la nota N.5: "));;

    var p = (a+b+c+d+e)/5

    if (p<3){
        alert("Usted no aprobo la materia, su promedio es de: "+p);
    }else {
        alert("Usted aprobo la materia, su promedio es de: "+p);
    }


}
function descuentoManzanas(){

    alert("Esta opcion le dira si tiene descuento en la compra y de que valor es.");

    var m = 4500;
    var k = parseInt(prompt("Digite los kilos de manzanas: "));;
    var d;
    
    d = k*m;
    if (k<=2){
        alert("Usted no tiene descuento.");
    }
    if (k>2 & k<=5){
        alert("Usted tiene un descuento de 10% eso equivale a "+(d/100)*10);
    }
    if (k>5 & k<=10){
        alert("Usted tiene un descuento de 15% eso equivale a "+(d/100)*15);
    }
    if (k>10){
        alert("Usted tiene un descuento de 20% eso equivale a "+(d/100)*20);
    }
}
  