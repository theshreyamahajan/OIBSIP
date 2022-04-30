const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});

function calculate(event) {
  const clickedButtonValue = event.target.value;
  if (clickedButtonValue === '=') {
  
    if (display.value !== ''){
      display.value = eval(display.value);
    }
  } 
  else if (clickedButtonValue === 'c') {
    display.value = '';
  } 
  else if(clickedButtonValue === 'del'){
    display.value = display.value.substr(0,display.value.length-1);
  }
  else if(clickedButtonValue === 'ac'){
      var conf = confirm("Are you sure, you want to close this tab?");
      if (conf == true) {
        close();
      }
  }
  else{
    display.value += clickedButtonValue;
  }
}