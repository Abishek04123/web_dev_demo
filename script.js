var a = prompt("Enter a number : ")
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

var array1 = [1, 2, 3, 4, 5]
array1.forEach(element => console.log(element))