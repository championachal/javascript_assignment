var fruits = [ "Banana" , "Orange" , "Apple" , "Mango" ]
fruits.unshift('grapes')
console.log(fruits)


fruits.pop('mango')
console.log(fruits)


console.log(Array.isArray(fruits))


fruits.splice(2,1,'jackfruit')
console.log(fruits)


fruits[1] = 'papaya'
console.log(fruits)


console.log(fruits.toString())