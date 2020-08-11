var buttons = document.getElementsByClassName("button");
var display = document.getElementById("screen"); 

var operand1 = null; 
var operand2 = null; 
var operator = null; 
var result;
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value'); 
        if(value == 'AC'){
            display.innerText = ''; 
            operand1 = null; 
            operand2 = null;
            operator = null; 
        }else if(value == '+/-'){
                display.innerText = 0 - parseFloat(display.textContent);
        }else if(value == '%'){
            operand1 = parseFloat(display.textContent); 
            result = operand1/100; 
            display.innerText = result;
        }
        else if(value == '+' || value == '-' || value == '*' || value == '/'){
            operator = value; 
            operand1 = parseFloat(display.textContent); 
            display.innerText = ''; 
        }else if(value == '='){
            operand2 = parseFloat(display.textContent);
            result = eval(operand1 + " " + operator + " " +operand2);
            display.innerText = result; 
        }else{
            display.innerText += value;  
        }

    });
}








