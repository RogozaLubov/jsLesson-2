let  a = parseFloat (prompt("Enter number a"));
let b = parseFloat (prompt("Enter number b"));
let c = parseFloat (prompt("Enter number c"));
let d = parseFloat(Math.pow(b, 2) - 4*a*c);

if ( d<0 ){
    d *= -1;
}




let x1 = (((-b)+Math.sqrt(d))/(2*a)).toFixed(2);
let x2 = (((-b)-Math.sqrt(d))/(2*a)).toFixed(2);

alert ("Result "+x1+" and "+x2 );