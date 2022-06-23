var opr = prompt (" what Operator do you want to perform e.g '+' '-' '/' '*' ")
var num1 = parseInt(prompt("Input your first number: "))
var num2 =parseInt(prompt("Input your second number: "))
if(opr == "+" )
{
    alert( num1 + num2)  
}  else if(opr == "-")
{
    alert(num1 - num2 )
} else if(opr == "*")
{
    alert(num1 * num2  )
} else if(opr == "/")
{
    alert(num1 / num2  )
}