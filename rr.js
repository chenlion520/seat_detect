var i = 0;
var max = 54;
// function rr(){
//     var t;
//     if(i < 10){
//         t = '<img src="photo/rr/00'+ i.toString() +'.PNG"/>';
//     }
//     else{
//         t = '<img src="photo/rr/0'+ i.toString() +'.PNG"/>';
//     }
//     console.log(t);
//     document.getElementById("rr").innerHTML = t;
//     i = (i + 1) % max;
// }

window.setInterval(function(){
    var t;
    if(i < 10){
        t = '<img src="photo/rr/00'+ i.toString() +'.PNG"/>';
    }
    else{
        t = '<img src="photo/rr/0'+ i.toString() +'.PNG"/>';
    }
    console.log(t);
    document.getElementById("rr").innerHTML = t;
    i = (i + 1) % max;
}, 100);