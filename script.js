var a = 10
console.log("Number : " + a)
if (a > 0) {
    console.log("Positive")
} else if (a < 0) {
    console.log("Negative")
} else {
    console.log("Zero")
}

for (i = 0 ; i < 10 ; i++) {
    console.log(i)  
}

var j = 10

while (j < 20) {
    console.log(j)
    j++
}

var array1 = ['a', 'b', 'c']

array1.forEach(element => console.log(element))

for (i = 0; i < array1.length; i++) {
    console.log(array1[i])
}

for (var ele of array1) {
    console.log(ele)
}

array1.push('d')
console.log(array1)

var pop_ele = array1.pop()
console.log(pop_ele)
console.log(array1) 

// Objects

a = {

    name: 'Robert Downey Jr',
    code_name: 'Ironman',
    age: 37,
    profession: 'Avenger'
}

console.log(a)

a['name'] = 'Tony Stark'

console.log(a)

a['address'] = '890 Fifth Avenue, Manhattan, New York City'

console.log(a)

for (var i in a) {
    console.log(i + ': ' + a[i])
}       