
// this function will generate an error
// Reason: 
// ReferenceError: y is not defined
function strictFunction() {
    "use strict"
    y = 20;
}


strictFunction();