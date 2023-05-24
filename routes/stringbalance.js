var express = require('express');
var router = express.Router();

/*
Get String isBalance return true or false
*/
router.get('/balance/:value', function (req, res, next) {
    const stringVal = req.params.value;
    console.log("Elemento recibido es: " + stringVal);
    //res.render(isBalanced(stringVal));
    const esValido = isBalanced(stringVal);
    res.json({ esValido });
});

function isBalanced(input) {

    let brackets = "[]{}()<>"
    let stack = []

    for (let bracket of input) {
        let bracketsIndex = brackets.indexOf(bracket)

        if (bracketsIndex % 2 === 0) {
            stack.push(bracketsIndex + 1)
        } else {
            if (stack.pop() !== bracketsIndex) {
                return false;
            }
        }
    }
    return stack.length === 0
}

let isBalancedText = (input) => {

    let brackets = "[]{}()<>";
    let stack = [];

    for (let bracket of input) {
        let bracketsIndex = brackets.indexOf(bracket)
        console.log('The current element is ${bracket}, which has an index in input of ${input.indexOf(bracket)}, and matches the bracket with index ${bracketsIndex} in brackets')

        if (bracketsIndex % 2 === 0) {
            stack.push(bracketsIndex + 1)
            console.log('this is an opening bracket. The address of its matching closing bracket in brackets is ${bracketsIndex + 1}. Adding that index to the stack makes the stack ${stack}')
        } else {
            console.log('this is a closing bracket, so ${stack.pop()} is being popped off the stack')
            if (stack.pop() !== bracketsIndex) {
                return false;
            }
        }
    }
    return stack.length === 0
}

module.exports = router;