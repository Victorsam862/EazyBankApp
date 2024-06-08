var toggleSwitch = document.getElementById('toggle');
// var body = document.body;
var header = document.getElementById('head');
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

var toggleSwitch = document.getElementById('toggle');
var head = document.getElementById('head')
var container = document.getElementById('bod')






    document.querySelectorAll('.menu a').forEach(item => {
    item.addEventListener('click', () => {
      document.getElementById('menu-toggle').checked = false;
    });
  });



