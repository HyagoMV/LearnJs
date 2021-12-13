function foo() {
    console.log(2) // Slow ...
    console.log(3) // Dependente
}

console.log(1) // Independe 
console.log(4) // Independe 
foo();