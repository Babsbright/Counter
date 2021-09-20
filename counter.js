(function(){
    //SELECTORS
    
    var counter = document.querySelector('#counter');
    var increase = document.querySelector('#increase');
    var decrease = document.querySelector('#decrease');
    var reset = document.querySelector('#reset');
    var count = 0;
    
    //EVENT LISTENERS
    increase.addEventListener('click', function(){
    count++;  //Increment count
    counter.textContent = count; //Insert the value into counter
    color(); // Call the function to change the color
    })
    
    decrease.addEventListener('click', function(){
    count--;  //Decrement count
    counter.textContent = count;
    color();
    
    })
    reset.addEventListener('click', function(){
    count= 0;   //Reset count to zero
    counter.textContent = count;
    color();
    })
    // FUNCTION TO CHANGE COLOR
    function color(){
        //USING TERNARY OPERATOR INSTEAD OF IF-ELSE
        return (count > 0) ? counter.style.color = 'green': (count < 0) ? counter.style.color = 'red' :counter.style.color = 'black';
    
    }
    
    })();