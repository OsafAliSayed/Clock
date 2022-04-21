//basic variables 
let a;
let time;

console.log(new Date());

//refreshing every second
setInterval(() => {
    //getting the date and time 
    a = new Date();

    //formatting and getting time
    time = a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds();
    
    //updating time 
    document.getElementById('time').innerHTML = time;    
}, 1000);

