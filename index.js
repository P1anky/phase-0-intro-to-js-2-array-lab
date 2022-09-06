// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(x){
    cats.push(x)
}
function destructivelyPrependCat(x){
    cats.unshift(x)
}
function destructivelyRemoveLastCat(){
    cats.pop(1)
}
function destructivelyRemoveFirstCat(){
    cats.shift(1)
}
function appendCat(x){
    return[...cats,x]
}
function prependCat(x){
    return[x,...cats]
}
function removeLastCat(){
    return(cats.slice(0,cats.length-1))
}
function removeFirstCat(){
    return(cats.slice(1))
}