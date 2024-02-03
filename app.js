var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;



var hrs = document.getElementById('txthours');
var minuts = document.getElementById('txtminuts');
var second = document.getElementById('txtsecond');
var msecond = document.getElementById('txtmsecond');
let interVal ;

function startWatch(){
    interVal =  setInterval(() => {
        msec++
        renderTime();
        if(msec == 9)
        {
            msec = 0;
            sec++;
            if(sec == 5)
            {
                sec = 0;
                min++;
            }
            if(min == 5)
            {
                min = 0;
                hour++;
            }
        }
    }, 100);
}

function stopWatch(){
    clearInterval(interVal);
}

function renderTime(){
    hrs.innerHTML = hour;
    minuts.innerHTML = min;
    second.innerHTML = sec;
    msecond.innerHTML = msec;
}


function clearWatch(){
    stopWatch();
    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;
    renderTime();
    
}