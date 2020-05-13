var buttons = document.getElementsByClassName('button') ;
var display =document.getElementById('answer') ;

var op1 = 0 ;
var op2 = null ;
var op = null ;

for(var i = 0 ; i<buttons.length ; i++){
    buttons[i].addEventListener('click',function(){
    var value = this.getAttribute('data') ;
    
    if(value == 'ac'){
        op1=0; 
        op = null ;
        op2 = null ;
        display.innerText = "" ;
        return ;
    }
    if(value == '+' || value == '-' || value == '*' || value == '/' ){
        op1 = parseFloat(display.textContent) ;
        if(value == '+'){
            op = '+' ;
        }else if(value == '-'){
            op = '-' ;
        }
        else if(value == '*'){
            op = '*' ;
        }
        else{
            op = '/' ;
        }
        display.innerText = "" ;
    }
    else if(value == '='){
        op2 = parseFloat(display.textContent) ;
        display.innerText = eval(op1 + " "+op + " " + op2) ;
    }
    else{
        display.innerText += value ; 
    }

    })
}