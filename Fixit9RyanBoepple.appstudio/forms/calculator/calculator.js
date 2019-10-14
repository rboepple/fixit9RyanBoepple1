btnMultiply.onclick=function(){
  let num3=Number(inptNum1.value)
  let num4=Number(inptNum2.value)
  lblCalc.value=`The product of you numbers is ${num4 * num3}.`
}



btnReload.onclick=function(){
  location.reload()
}

btnAdd.onclick=function(){
  let num5=Number(inptNum1.value)
  let num6=Number(inptNum2.value)
  lblCalc.value=`The sum of you numbers is ${num5 + num6}.`
}
