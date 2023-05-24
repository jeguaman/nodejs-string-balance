var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Agrupadores Balanceados' });
});


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


module.exports = router;
