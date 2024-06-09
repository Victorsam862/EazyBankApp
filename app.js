var toggleSwitch = document.getElementById('toggle');
var toggleSwitch2 = document.getElementById('toggles');
var header = document.getElementById('header');
var container = document.getElementById('bod');


toggleSwitch.addEventListener('change', ()=>{
    if(toggleSwitch.checked){
        header.style.background = 'black'
        container.style.color = 'hsl(233, 8%, 62%)'
        container.style.backgroundColor = 'black'
    }
    else{
        container.style.backgroundColor = 'white'
        header.style.background = 'hsl(220, 16%, 96%)'
    }
})

var head = document.getElementById('bod');


toggleSwitch2.addEventListener('change', ()=>{
    if(toggleSwitch2.checked){
        header.style.background = 'black'
        container.style.color = 'hsl(233, 8%, 62%)'
        head.style.backgroundColor = 'black'
    }
    else{
        container.style.backgroundColor = 'white'
        head.style.background = 'hsl(220, 16%, 96%)'
    }
})



document.querySelectorAll('.menu a').forEach(item => {
    item.addEventListener('click', () => {
      document.getElementById('menu-toggle').checked = false;
    });
  });



