
var a =  (num) =>
{
var b = num.toString().split('.')

var c = b[0];
var d = b[1].substring(0,3);
console.log(c+'.'+d)
}




var e= (de) => {
    console.log(parseFloat(de.toFixed(3))) 
} 

e(12.565744)
a(12.565744)