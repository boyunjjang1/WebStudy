// var test = [];

// test.push('<button>asd</button>');
// test.push('<button>asd</button>');

// document.querySelector('.pad').innerHTML = test;


var  buttons = document.getElementsByTagName("button");

var temp;
var signcount = 0;
var sign ="";

for(var i=0;i<buttons.length;i++)
{
    var button = buttons[i];
    button.onclick =  function(){
 
        if(this.id === 'clear')
        {
            document.querySelector('.textarea').value = "";
            var signs = document.getElementsByClassName("sign");
            signcount = 0;
            for(var x =0;x < signs.length; x++)
            {
                signs[x].style.backgroundColor = "rgb(248, 213, 219)";
            }
        }
    
        else if(this.className === 'sign')
        {
            if(document.querySelector('.textarea').value !== "")
            {
                this.style.backgroundColor =  "rgb(175, 137, 143)";

                if(signcount === 0)
                {
                    sign = this.id;  
                    signcount = 2;
                    temp = parseFloat(document.querySelector('.textarea').value);
                }
                else if(signcount === 1)
                {
                    if(sign === '+')
                    {
                        document.querySelector('.textarea').value = temp + parseFloat(document.querySelector('.textarea').value);
                        temp = document.querySelector('.textarea').value;

                        signcount = 2;
                      
                    }
                    else if(sign === '-')
                    {
                        
                        document.querySelector('.textarea').value = temp - parseFloat(document.querySelector('.textarea').value);
                        temp = document.querySelector('.textarea').value;
                        signcount = 2;
                    }
                    else if(sign === 'X')
                    {
                        
                        document.querySelector('.textarea').value = temp * parseFloat(document.querySelector('.textarea').value);
                        temp = document.querySelector('.textarea').value; 
                        signcount = 2;
                    }
                    else if(sign === '÷')
                    {
                        
                        document.querySelector('.textarea').value = temp / parseFloat(document.querySelector('.textarea').value);
                        temp = document.querySelector('.textarea').value;
                        signcount = 2;
                        
                    }
                    else if(sign === '%')
                    {
                        
             
                        document.querySelector('.textarea').value = temp % parseFloat(document.querySelector('.textarea').value);
                        temp = document.querySelector('.textarea').value;
                        signcount = 2;
                    }

                }

            }
        }
    
        else if(this.className !== 'sign')
        {

            var signs = document.getElementsByClassName("sign");
                    for(var x =0;x < signs.length; x++)
                    {
                        signs[x].style.backgroundColor = "rgb(248, 213, 219)";
                    }
            
            if(signcount === 2)
            {
                document.querySelector('.textarea').value = "";
                signcount --;
            }


            document.querySelector('.textarea').value += this.id;
            
        }
    
    } 



}

