var minutes=0;
var seconds=0;
var miliseconds=0;
var minutesHeadings=document.getElementById("minutes");
var secondsHeadings=document.getElementById("seconds");
var milisecondsHeadings=document.getElementById("miliseconds");
var intervals;
function timer(){
    miliseconds++
    milisecondsHeadings.innerHTML = miliseconds;
    if(miliseconds>=100){
        seconds++
        secondsHeadings.innerHTML = seconds
        miliseconds=0;

    }else if(seconds >=60){
        minutes++
        
        minutesHeadings.innerHTML = minutes
        seconds=0
    }
}
function start(){
intervals = setInterval(timer,10)
}
function pause(){
    clearInterval(intervals)
}
function reset(){
 minutes=0;
 seconds=0;
 miliseconds=0;
 minutesHeadings.innerHTML = minutes;
 secondsHeadings.innerHTML = seconds;
 milisecondsHeadings.innerHTML = miliseconds;
 stop()
}