var toggleSwitch = document.getElementById('toggle');
var body = document.bod;
var header = document.getElementById('header','head');
var container = document.getElementById('bod');

toggleSwitch.addEventListener('change', ()=>{
    if(toggleSwitch.checked){
        container.style.backgroundColor = 'black'
        header.style.background = 'hsl(220, 16%, 96%)'
        container.style.color = 'hsl(233, 8%, 62%)'
    }
    else{
        container.style.backgroundColor = 'white'
        
    }
})


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


