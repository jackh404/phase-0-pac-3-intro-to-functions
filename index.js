// Follow along with the examples here
/*okay*/
function doNothing(){}
function sayHello(){
    console.log("Hello!");
}
function sayHelloTo(name){
    console.log(`Hello, ${name}!`);
}
function doSomething(thing){
    console.log(thing);
}
function add(x,y){
    return x + y;
}
function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
  }
function quadForm(a,b,c){
    zeroPlus = (-b + Math.sqrt(b**2 - 4*a*c))/(2*a);
    zeroMinus = (-b - Math.sqrt(b**2 - 4*a*c))/(2*a);
    return `Your Zeroes are ${zeroPlus} and ${zeroMinus}`;
}

doSomething("ANYTHING!");
sayHelloTo("R2-D2"); // "Hello, R2-D2!"
console.log(quadForm(1,1,-7));