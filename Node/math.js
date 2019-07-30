const Math = {} //Exports a full object
function add(x1, x2){
    return x1 + x2;
}

function substract(x1, x2){
    return x1 - x2;
}

function multiply(x1, x2){
    return x1 * x2;
}


function divide(x1, x2){
    return (x2 == 0) ? 'No se puede dividir' : x1 / x2;
}
Math.variableAdd = add;//Exports a full object
module.exports = Math;//Exports a full object

exports.variableDivide = divide;//Exports one by one