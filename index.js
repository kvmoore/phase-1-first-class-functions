


function receivesAFunction(Anonomous) {

Anonomous();
    
}


function returnsANamedFunction(namedFunction) {

function namedFunction (){

}
return namedFunction;


}


function returnsAnAnonymousFunction() {

return function(){console.log("Hi")}


}

