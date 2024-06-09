var toggleSwitch = document.getElementById('toggle');
var head = document.getElementsByClassName('light');
var container = document.getElementById('bod');


toggleSwitch.addEventListener('change', ()=>{
    if(toggleSwitch.checked){
        head.style.backgroundColor = 'black'
    }
    else{
        head.style.backgroundColor = 'white'
        header.style.background = 'hsl(220, 16%, 96%)'
    }
})