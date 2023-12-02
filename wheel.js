function shuffle(array){
    var currentIndex = array.length,randomIndex;
    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex --;
        [array[currentIndex],array[randomIndex]] = [array[currentIndex],array[currentIndex],];

    }
    return array;
}
var myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
  // 禁用按鈕
  myButton.disabled = true;

  // 假設有一些需要花費時間的工作，例如呼叫API或執行複雜的計算
  setTimeout(function() {
    // 在這裡處理結果的顯示

    // 啟用按鈕
    myButton.disabled = false;
  }, 6000); // 假設需要2秒才能顯示結果
});
function spin(){
    wheel.play();
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelecedItem = "";
    let A = shuffle([1890,2250,2610]);
    let B = shuffle([1850,2210,2570]);
    let C = shuffle([1770,2130,2490]);
    let D = shuffle([1810,2170,2530]);
    let E = shuffle([1750,2110,2470]);
    let F = shuffle([1630,1990,2350]);
    let G = shuffle([1570,1930,2290]);
    //console.log(A,B, C, D, E, F, G);
    let result = shuffle([A[0],B[0],C[0],D[0],E[0],F[0],G[0]]);
    if(A.includes(result[0])) SelecedItem = "一餐";
    if(B.includes(result[0])) SelecedItem = "工餐";
    if(C.includes(result[0])) SelecedItem = "麥當勞";
    if(D.includes(result[0])) SelecedItem = "小時光";
    if(E.includes(result[0])) SelecedItem = "大業";
    if(F.includes(result[0])) SelecedItem = "自助餐";
    if(G.includes(result[0])) SelecedItem = "二餐";
    box.style.setProperty("transition","all ease 5s");
    box.style.transform = "rotate(" + result[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function(){
        element.classList.add("animate");
    },5000);
    setTimeout(function(){
        Swal.fire({
            title: '你真棒',
            html: '給我吃' + SelecedItem ,
            imageUrl:'./assets/logo.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',

        })
    },5500);
    setTimeout(function(){
        box.style.setProperty("transition","initial");
        box.style.transform = "rotate(90deg)"
    },6000);
}