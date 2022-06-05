
function setTime(){
    let getTime = new Date();
    let hrs = getTime.getHours();
    let min = getTime.getMinutes();
    let sec = getTime.getSeconds();

    document.getElementById('hour').innerHTML = hrs;
    document.getElementById('minute').innerHTML = min;
    document.getElementById('second').innerHTML = sec;
}


setInterval(setTime, 10);