function passwordGenerator() {
 var valueOfQuestion = document.getElementById("website_name_input").value;
if (valueOfQuestion.length >= 15){
var valueAA = valueOfQuestion.substring(4, 7, 10)
var returnA = ( 84 + 'Z' + 'x' + valueAA + '/' + 1 + valueAA + 'XYZ')
document.getElementById("website_question").innerHTML = returnA;
}
else if (valueOfQuestion.length >= 14){
var valueBB = valueOfQuestion.substring(10,11,12,13,14)
var returnB = ('//_' + valueBB + '&' + 7 + 'X' + 3 + 'z' + valueBB + 'Y')
document.getElementById("website_question").innerHTML = returnB;
}
else if (valueOfQuestion.length >= 13){
var valueCC = valueOfQuestion.substring(2,3,6,7,11,13)
var returnC = ('xZ' + 9 + '#' + valueCC + valueCC + '#' + 9 + 'Zx')
document.getElementById("website_question").innerHTML = returnC;
}
else if (valueOfQuestion.length >= 12){
var valueDD = valueOfQuestion.substring(1,2,10,11,12)
var returnD = ('**^' + valueDD + 'Z' + valueDD + 'X' + 321 + valueDD)
document.getElementById("website_question").innerHTML = returnD;
}
else if (valueOfQuestion.length >= 11){
var valueEE = valueOfQuestion.substring(5, 7, 9, 10, 11)
var returnE = (9 + 'xxZ'+ valueEE + 'Zy'+ valueEE + '#' + 3 + '#' + valueEE)
document.getElementById("website_question").innerHTML = returnE;
}
else if (valueOfQuestion.length >= 10){
var valueFF = valueOfQuestion.substring(1, 3, 5, 6, 7,)
var returnF = (valueFF + 843 + 'X' + '%' + valueFF + 'yZ')
document.getElementById("website_question").innerHTML = returnF;
}
else if (valueOfQuestion.length >= 9){
var valueGG = valueOfQuestion.substring(2, 3, 5, 7, 9)
var returnG = ( 1 + valueGG + 2 + valueGG + '*' + 73 + 'ZZX' + '<' + 8)
document.getElementById("website_question").innerHTML = returnG;
}
else if (valueOfQuestion.length >= 8){
var valueHH = valueOfQuestion.substring(3, 6, 8)
var returnH = ( '&' + 'XZZ' + '@' + 4 + valueHH + valueHH + 5 + '#')
document.getElementById("website_question").innerHTML = returnH;
}
else if (valueOfQuestion.length >= 7){
var valueII = valueOfQuestion.substring(3, 6, 1)
var returnI = ( 61 + valueII + ':' + 'XyZ' + '!' + 22)
document.getElementById("website_question").innerHTML = returnI;
}
else if (valueOfQuestion.length >= 6){
var valueJJ = valueOfQuestion.substring(2, 5)
var returnJ = ( valueJJ + ':' + valueJJ + 'XYZ' + 57 + valueJJ)
document.getElementById("website_question").innerHTML = returnJ;
}
else if (valueOfQuestion.length >= 5){
var valueKK = valueOfQuestion.substring(1, 2)
var returnK = ( 92 + 'ZyX' + valueKK + 72 + '>' + valueKK + '<')
document.getElementById("website_question").innerHTML = returnK;
}
else if (valueOfQuestion.length >= 4){
var valueLL = valueOfQuestion.substring(1, 3)
var returnL = ( 'ZYX' + '$' + valueLL + valueLL + 43 + 34 + valueLL)
document.getElementById("website_question").innerHTML = returnL;
}
else if (valueOfQuestion.length <= 3){
var valueMM = valueOfQuestion.substring(2, 3)
var returnM = ('$'+ 82 + '^&#' + valueMM + '<>' + 'ZZZ' + valueMM )
document.getElementById("website_question").innerHTML = returnM;
}
}
