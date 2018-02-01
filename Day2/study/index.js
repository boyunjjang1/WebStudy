var count = 0;

function foo(name){

    if(name === 1) {
        count ++;
    }

    else if(name === 2){
        count += 10;
    }
   
    else if(name === 3){
        count += 100;
    }

    document.querySelector('.textarea').value = count;

}


