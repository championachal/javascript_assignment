function ass(num1, num2)
{
    var a= Math.abs(num1);
    var b= Math.abs(num2);
    if (b==0)
    {
        return a;
    }
    while(a!=0)
    {
        if(a < b )
        b= b-a;
        else
        a = a-b;      
    }
    return b;
}
console.log(ass( 16,20))
