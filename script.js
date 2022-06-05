
function setTime(){
    let getTime = new Date();
    let hrs = getTime.getHours();
    let min = getTime.getMinutes();
    let sec = getTime.getSeconds();
    // let session = document.get('session');

    // if(hrs >= 12){
    //     session.innerHTML = 'PM';
    // }else{
    //     session.innerHTML = 'AM';
    // }

    // if(hrs > 12){
    //     hrs = hrs - 12;
    // }

    document.getElementById('hour').innerHTML = hrs;
    document.getElementById('minute').innerHTML = min;
    document.getElementById('second').innerHTML = sec;
    document.getElementsByClassName('check').innerHTML='Berhasil'
}


setInterval(setTime, 10);