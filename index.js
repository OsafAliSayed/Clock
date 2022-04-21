//required variables
let a;
let hours;
let minutes;
let seconds;

//refreshing every second 
setInterval(()=>{
    a = new Date;
    //converting hours to 12 hours format 
    hours = a.getHours();
    if (hours > 12)
        hours -= 12;
    hours = (hours * 30);
    minutes = (a.getMinutes() * 6);
    seconds = (a.getSeconds() * 6);
    
    //updating the styling 
    document.getElementById("hour").style.transform = `rotate(${hours}deg)`;
    document.getElementById("minutes").style.transform = `rotate(${minutes}deg)`;
    document.getElementById("seconds").style.transform = `rotate(${seconds}deg)`;

}, 1000);