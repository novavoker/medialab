var inputPassword5  = document.getElementById('inputPassword5');
var string = inputPassword5.value;
var h1 = document.getElementById('h1')
var inp1 = document.getElementById('inp1')
var btn2 = document.getElementById('btn2')



if(inp1.value.length < 13){
    btn2.setAttribute("disabled",null);
}

if(inp1.value.length ==1){
    inp2.onfocus
}
function chan1(){
    if(inp1.value.length == 1 && inp2.value.length == 1 && inp3.value.length == 1 && inp4.value.length == 1){
        btn2.removeAttribute("disabled")
        btn2.classList.add("active")
    }
}


function tek (){
    if(inp1.value == "1" && inp2.value == "1" && inp3.value == "1" && inp4.value == "1")
    {
        window.open('../html/index3.html');
    }
    else{
        h1.innertext = "Cod xato!"
        h1.style.color = "red";
        h1.style.fontsize = "10pt"
    }
}



function changed(){
    if(string.length == 13)
    {
        btn1.classlist.add("active")
    }
}

function chan(){
    var icon = document.getElementById('icon');
    var inp111 = document.getElementById('inp111')
    if(icon.classList[1] == "fa-pen")
    {
        icon.classList.remove("fa-pen");
        icon.classList.add("fa-check");
        inp111.removeAttribute("readonly");
    }
    else if(icon.classList[1] == "fa-check"){
        icon.classList.remove("fa-check");
        icon.classList.add("fa-pen");
        inp111.setAttribute("readonly",null)
    }
    console.log("fasdfdgadf")
    
}

function uploadd(){
}


function addtocard(){
    var imgurl = document.getElementById('imgurl')
    var h1 = document.getElementById('h111')
    var p1 = document.getElementById('p333')

    
    localStorage.setItem('imgurl', imgurl.getAttribute('src'))
    localStorage.setItem('p1', p1.innerText)
    localStorage.setItem('h1', h1.innerText)
}

