/**
 * 
 */

var noOfClicks=0;
function clearScreen(){
	printHistory("");
	printOutput("");
}
function backSpace(){
	var output=reverseNumberFormat(getOutput()).toString();
	if(output){//if output has a value
		output= output.substr(0,output.length-1);
		printOutput(output);
	}
}
function displayResult(){
	var output=getOutput();
	var history=getHistory();
	if(output!="" && history!=""){
		output=reverseNumberFormat(output);
		history=history+output;
		var result=eval(history);
		printOutput(result);
		printHistory(history);
		arrHistory.push(history);
		arrResult.push(output);
	}
}
function insertOperator(operator){
		var output=getOutput();
		var history=getHistory();
		if(output=="" && history!=""){
			if(isNaN(history[history.length-1])){
				history= history.substr(0,history.length-1);
			}
		}
		if(output!="" || history!=""){
			output= output==""?output:reverseNumberFormat(output);
			history=history+output;
			history=history+operator;
			console.log(history);
			printHistory(history);
			printOutput("");				
		}
}
function addDecimal(decimal){
    var output=decimal;
    output=getOutput()+decimal;
    printOutput(reverseNumberFormat(output));
}
function addToDisplay(num){	
			var output=num;
			if(output!=NaN){ //if output is a number
				output=getOutput()+num;
				printOutput(reverseNumberFormat(output));
			}
}
function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}