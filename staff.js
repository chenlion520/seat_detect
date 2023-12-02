var sc ={   
            "LION":{
                    "comm": "組長，猴王，前系壘隊長，新店高中12少，aka馬仔狗。",
                    "no" : "1"
                },
            "YHL":{
                    "comm": "很愛半夜不敲門進立揚的閨房，是不是想罡人家?",
                    "no" : "2"
                },
            "NYW":{
                    "comm": "系籃隊長，請問勇士甚麼時候能拿冠軍戒指?",
                    "no" : "3"
                },
            "MQC":{
                    "comm": "整組最南部的南部人，全聯檢貨大將軍。",
                    "no" : "4"
                },
            "JAL":{
                    "comm": "確診後就什麼事都沒做，整天躺在床上擺爛，跟個爛人一樣",
                    "no" : "5"
                }
        };


function boxOver(obj){
    document.getElementById("tips").innerHTML = sc[obj.id]["comm"];
    document.getElementById("tips").style.display="inline-block";
    var t = (parseInt(sc[obj.id]["no"]) - 1) * 110 + 55 ;
    var tt = t.toString() + "px";
    document.getElementById("tips").style.top = tt;
    document.getElementById("tips").style.left = "53%";
}
function boxOut(){
    document.getElementById("tips").innerHTML = "";
    document.getElementById("tips").style.display="none";
}
  