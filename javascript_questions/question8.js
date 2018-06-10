var a = (num) => {
    var b =0
    var c = 0
    while (num > 1)
{  
    num = num / 2  
    c = c +1
   if (num == 1)
   {
       b = 1
   } 
}
if (b == 1)
{
console.log("number is power of 2")
console.log("is of power " + (c))
}
else 
console.log("number is not power of 2")
}
a(8)