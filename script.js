var stopWatch=(function(){
    
    let tens=0;
    let seconds=0;
    let minutes=0;
    const minutespan=document.getElementById('minutes');
    const secondspan=document.getElementById('seconds');
    const tenspan=document.getElementById('tens');
    const buttonStart=document.getElementById('button-start');
    const buttonStop=document.getElementById('button-stop');
    const buttonReset=document.getElementById('button-reset');
    let interval;

    // on click of start button this function will execute.
    function startTimer(){
        tens++;
        if(tens<=9){
            tenspan.innerHTML='0'+tens;
        }
        else if(tens<=99){
            tenspan.innerHTML=tens;
        }
        else{
            tens=0;
            tenspan.innerHTML='0'+tens;
            seconds++;
            if(seconds<=9){
                secondspan.innerHTML='0'+seconds;
            }
            else if(seconds<=59){
                secondspan.innerHTML=seconds;
            }
            else{
                seconds=0;
                secondspan.innerHTML='0'+seconds;
                minutes++;
                if(minutes<=9){
                    minutespan.innerHTML='0'+minutes;
                }
                else if(minutes<=59){
                    minutespan.innerHTML=minutes;
                }
                else{
                    minutes=0;
                    minutespan.innerHTML='0'+minutes;
                }
            }

        }
    }
    
    function initialize(){
        buttonStart.onclick=function(){
            clearInterval(interval);  // Necessary to clear first, otherwise on clicking start more than once timer will never stop. 
            interval=setInterval(startTimer,10);
        }
        buttonStop.onclick=function(){
            clearInterval(interval);
        }
        buttonReset.onclick=function(){
            clearInterval(interval);
            tens=0;
            seconds=0;
            minutes=0;
            tenspan.innerHTML='0'+0;
            secondspan.innerHTML='0'+0;
            minutespan.innerHTML='0'+0;
        }
    }
    return{
        initialize     // Revealing Module Pattern.
    }
})();          // An IIFE function.