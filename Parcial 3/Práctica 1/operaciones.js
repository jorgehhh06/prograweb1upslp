function sumar(){
	var n1=document.getElementById("num1").value;
	var n2=document.getElementById("num2").value;
	var resul=parseInt(n1)+parseInt(n2);
	document.getElementById("r").innerHTML=resul;
}
function restar(){
	var n1=document.getElementById("num1").value;
	var n2=document.getElementById("num2").value;
	var resul=parseInt(n1)-parseInt(n2);
	document.getElementById("r").innerHTML=resul;
}
function multiplicar(){
	var n1=document.getElementById("num1").value;
	var n2=document.getElementById("num2").value;
	var resul=parseInt(n1)*parseInt(n2);
	document.getElementById("r").innerHTML=resul;
}
function dividir(){
	var n1=document.getElementById("num1").value;
	var n2=document.getElementById("num2").value;
	var resul=parseFloat(n1)/parseFloat(n2);
	document.getElementById("r").innerHTML=resul;
}