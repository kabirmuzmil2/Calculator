let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
         //screenValue += buttonText;
         //screen.value = screenValue;
     console.log(buttonText);
        //screenValue= buttonText;
   if(buttonText == 'C'){
    screenValue = '';
    screen.value = screenValue;
   }
   else if(buttonText == '='){
     screen.value = eval(screenValue);
   }
   else{
    screenValue += buttonText;
    screen.value = screenValue;
   }
    
    })
}