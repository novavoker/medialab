var img10  = document.getElementById('img10');
var div1 = document.getElementById('div1')
function fun1(){

    img10.setAttribute("src","../img/ylvTnklGMzoRAYDRH1jsUAf4N49nfW0axiBLbwSh.webp")
    div1.style.border = "2px solid #efae0c";
}
function fun11 (){
    div1.style.border = "none"
    img10.setAttribute("src","../img/dfbadfgaf.webp")
}   

function slidecard(){
    var div1 = document.getElementById('div1');
    var imgModal = document.getElementById('imgModal');
    var pModal = document.getElementById('pModal');
    var h1Modal = document.getElementById('h1Modal');

    imgModal.setAttribute('src', localStorage.getItem("imgUrl"));
    pModal.innerText =   localStorage.getItem("p1")
    h1Modal.innerText =  localStorage.getItem("h1")

    div1.style.width = "33%";
    div1.style.height = "100vh";
    div1.style.backgroundColor = "gold";
    div1.style.float = "right";
  }
