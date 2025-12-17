let color ="blue"
const country ="Canada"
var age = "12"

function whatScopeIsIt(){
    color = "green"
    console.log(color); // green
}

console.log(color); // blue
whatScopeIsIt();
console.log(color); // green
