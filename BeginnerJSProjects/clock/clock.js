
 function timestart(){
    var clock = document.getElementById('timeShow') ;

    let today = new Date()
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

 m= checkTime(m);
 s= checkTime(s);
clock.innerHTML = h + ':'+ m +':'+ s ;
 setTimeout(timestart , 1000)
}
function checkTime(i){
    if(i<10){
        i = '0' + i;
    }
    return i;
}
