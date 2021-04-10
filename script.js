var dollarValueText = prompt ("Qual o valor em dollar você quer converter?")
var dollarValueInt = parseFloat (dollarValueText)
/*
parseFloat - converter para numero com decimal 
parseInt - converter para numero inteiro
*/

var realValue = dollarValueInt * 5.50
var realValueFixed = realValue.toFixed(2) 
/*
toFixed define decimal
*/

alert ("O valor em real é: R$ " + realValueFixed)
//Revisão
//var aceita int - float - string
//alert - parseInt - parseFloat
//prompt (digitar informações)
//alert (mostra informações)
//operações de soma e multiplicação