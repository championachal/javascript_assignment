var a = ()  => 
{
    var array= [1,2,3,4,5,6]
var length=array[0]
for(i=0; i<array.length ; i++)
{
    if(length<array[i])
    {

        length=array[i]
    }

}
console.log(length)
}

a()