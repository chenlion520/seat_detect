const container = document.querySelector(".seat-container");
const seats = document.querySelectorAll(".seat:not(.occupied");
const num = document.getElementById("num");
const price = document.getElementById("price");
const movieSelect = document.getElementById("restaurant");

// let ticketPrice = +movieSelect.value;
var output = {"study-room":'<div id="tips">這是拿來提示時間的</div> <table><tr><td><div class="row"><div class="seat" id="A0" onmouseover="boxOver(this);" onmouseout="boxOut();"></div><div class="seat" id="A1" onmouseover="boxOver(this);" onmouseout="boxOut();"></div><div class="seat" id="A2" onmouseover="boxOver(this);" onmouseout="boxOut();"></div></div></td></tr><tr><td><div class="table"></div></td></tr><tr><td><div class="row"><div class="seat" id="A3" onmouseover="boxOver(this);" onmouseout="boxOut();"></div><div class="seat" id="A4" onmouseover="boxOver(this);" onmouseout="boxOut();"></div><div class="seat" id="A5" onmouseover="boxOver(this);" onmouseout="boxOut();"></div></div></td></tr><tr><td><div class="row"><div class="seat" id="B0" onmouseover="boxOver(this);" onmouseout="boxOut();"></div><div class="seat" id="B1" onmouseover="boxOver(this);" onmouseout="boxOut();"></div><div class="seat" id="B2" onmouseover="boxOver(this);" onmouseout="boxOut();"></div></div></td></tr><tr><td><div class="table"></div></td></tr><tr><td><div class="row"><div class="seat" id="B3" onmouseover="boxOver(this);" onmouseout="boxOut();"></div><div class="seat" id="B4" onmouseover="boxOver(this);" onmouseout="boxOut();"></div><div class="seat" id="B5" onmouseover="boxOver(this);" onmouseout="boxOut();"></div></div></td></tr><tr><td><div class="row"><div class="seat" id="C0" onmouseover="boxOver(this);" onmouseout="boxOut();"></div><div class="seat" id="C1" onmouseover="boxOver(this);" onmouseout="boxOut();"></div><div class="seat" id="C2" onmouseover="boxOver(this);" onmouseout="boxOut();"></div></div></td></tr><tr><td><div class="table"></div></td></tr><tr><td><div class="row"><div class="seat" id="C3" onmouseover="boxOver(this);" onmouseout="boxOut();"></div><div class="seat" id="C4" onmouseover="boxOver(this);" onmouseout="boxOut();"></div><div class="seat" id="C5" onmouseover="boxOver(this);" onmouseout="boxOut();"></div></div></td></tr></table>',
              "mac":'<div id="tips">這是拿來提示時間的</div> <table><tr><td><div class="row"><div class="seat" id="A0" onmouseover="boxOver(this);" onmouseout="boxOut();"></div><div class="seat" id="A1" onmouseover="boxOver(this);" onmouseout="boxOut();"></div><div class="seat" id="A2" onmouseover="boxOver(this);" onmouseout="boxOut();"></div></div></td></tr><tr><td><div class="table"></div></td></tr><tr><td><div class="row"><div class="seat" id="A3" onmouseover="boxOver(this);" onmouseout="boxOut();"></div><div class="seat" id="A4" onmouseover="boxOver(this);" onmouseout="boxOut();"></div><div class="seat" id="A5" onmouseover="boxOver(this);" onmouseout="boxOut();"></div></div></td></tr><tr><td><div class="row"><div class="seat" id="B0" onmouseover="boxOver(this);" onmouseout="boxOut();"></div><div class="seat" id="B1" onmouseover="boxOver(this);" onmouseout="boxOut();"></div><div class="seat" id="B2" onmouseover="boxOver(this);" onmouseout="boxOut();"></div></div></td></tr><tr><td><div class="table"></div></td></tr><tr><td><div class="row"><div class="seat" id="B3" onmouseover="boxOver(this);" onmouseout="boxOut();"></div><div class="seat" id="B4" onmouseover="boxOver(this);" onmouseout="boxOut();"></div><div class="seat" id="B5" onmouseover="boxOver(this);" onmouseout="boxOut();"></div></div></td></tr></table>'};

var restaurant = "";
var jsonstr = "";
var rest = ["study-room","mac"];
var table = ["A","B","C"];
var group = "";
var str;
var table_num = 0;

if(localStorage.getItem("restaurant") == "study-room")
{ 
  for (let k=0; k<3; k++)
  {
    document.getElementById("table-container").innerHTML = output[restaurant];
    document.getElementById("selected-restaurant").innerHTML ="您選擇的餐廳是: 自習室";
    restaurant = localStorage.getItem("restaurant");
    str = table[k];
    group = restaurant+str+".json";
    $.getJSON(group, function (seatdata) 
    {    
      var arr = seatdata[0].seats;
      var arr2 = seatdata[0].time;
      str=table[k];
      for (var i = 0; i < arr.length - 1; i++) 
      {
        arr[i] = str + arr[i];     
        var tmp = document.getElementById(arr[i]);
        tmp.className = "seat occupied";
      }
      let number = [0, 0, 0, 0, 0, 0];
      for (var i = 0; i < arr.length - 1; i++)
      {
        for (var j = 0; j < 6; j++)
       {
          if (arr[i] == str + j) 
          {
            console.log(arr[i], j);
            number[j] = 1;
          }
        }
      }
      //console.log(number);
      for (var j = 0; j < 6; j++) 
      {
        if (number[j] == 1) 
        {
          if (localStorage.getItem(restaurant + "-" + str + j) == undefined)
            localStorage.setItem(restaurant + "-" + str + j, arr2);
        } else 
        {
          localStorage.removeItem(restaurant + "-" + str + j);
        }
        number[j] = 0;
      }
  
    });

  }
  
}
else if(localStorage.getItem("restaurant") == "mac")
{
  for (let k=0; k<2; k++)
  {
    document.getElementById("table-container").innerHTML = output[restaurant];
    document.getElementById("selected-restaurant").innerHTML ="您選擇的餐廳是: "+restaurant;
    restaurant = localStorage.getItem("restaurant");
    str = table[k];
    group = restaurant+str+".json";
    $.getJSON(group, function (seatdata) 
    { 
      
      var arr = seatdata[0].seats;
      var arr2 = seatdata[0].time;
      str=table[k];
      for (var i = 0; i < arr.length - 1; i++) 
      {
        arr[i] = str + arr[i];     
        var tmp = document.getElementById(arr[i]);
        tmp.className = "seat occupied";
      }
      let number = [0, 0, 0, 0, 0, 0];
      for (var i = 0; i < arr.length - 1; i++)
      {
        for (var j = 0; j < 6; j++)
       {
          if (arr[i] == str + j) 
          {
            console.log(arr[i], j);
            number[j] = 1;
          }
        }
      }
      //console.log(number);
      for (var j = 0; j < 6; j++) 
      {
        if (number[j] == 1) 
        {
          if (localStorage.getItem(restaurant + "-" + str + j) == undefined)
            localStorage.setItem(restaurant + "-" + str + j, arr2);
        } else 
        {
          localStorage.removeItem(restaurant + "-" + str + j);
        }
        number[j] = 0;
      }
  
    });

  }
}


function show(obj) {
  //alert(obj.className);
  if (obj.className == "seat occupied") {
    var seattime = localStorage.getItem(obj.id);
    alert(seattime);
  }
}
//保存selected movie的index,和ticketPrice
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

//更新num
// function updateSelectedCount() {
//   const selectedSeats = document.querySelectorAll(".seat.selected");
//   const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat)); //返回一个新数组index

//   localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

//   const selectedSeatsCount = selectedSeats.length;

//   num.innerText = selectedSeatsCount;
//   price.innerText = selectedSeatsCount * ticketPrice;

//   setMovieData(movieSelect.selectedIndex, movieSelect.value);
// }

//从localStorage获取数据selectedSeats数据，并把被选中的seat加一个selected属性，更新和populate UI
function populateUI() {
  selectedSeats = JSON.parse(localStorage.getItem("selectedSeats")); //JSON.parse() 方法将数据转换为 JavaScript 对象。

  if (selectedSeats != null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }
}

//选择movie事件
// movieSelect.addEventListener("change", (e) => {
//   ticketPrice = +e.target.value;
//   updateSelectedCount();
// });

//点击seat事件
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
function showseat(){
  document.getElementById("table-container").innerHTML = output[restaurant];
}
function select(){
  restaurant = document.getElementById("restaurant").value;
  // console.log(output[restaurant]);
  localStorage.setItem("restaurant",restaurant);
  if(restaurant == "study-room")
    localStorage.setItem(restaurant, "3");
  else
    localStorage.setItem(restaurant, "2");
  //alert(table_num);
  // showseat();
  location.reload();
  // showseat();
}
function boxOver(obj){
  if (obj.className == "seat occupied") {
    var seattime = localStorage.getItem(restaurant+"-"+obj.id);
    document.getElementById("tips").innerHTML = "入座時間" + seattime;
    document.getElementById("tips").style.display="inline-block";
  }
}
function boxOut(){
  document.getElementById("tips").innerHTML = "";
  document.getElementById("tips").style.display="none";
}
