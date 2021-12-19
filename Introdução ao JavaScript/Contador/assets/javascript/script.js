let currentNumber = 0;

document.getElementById('increment').addEventListener('click', () => {
  currentNumber = currentNumber + 1;

  if(currentNumber > 10) {
    window.alert('Limite superior atingido!');
    currentNumber = 0;
  }
  if(currentNumber >= -4 || currentNumber <= 4) {
    document.getElementById('currentNumber').style.color = 'white';
  }
  if(currentNumber > 4) {
    document.getElementById('currentNumber').style.color = 'blue';
  }
  document.getElementById('currentNumber').innerHTML = currentNumber;
});

document.getElementById('decrement').addEventListener('click', () => {
  currentNumber = currentNumber - 1;

  if(currentNumber < -10) {
    window.alert('Limite inferior atingido!');
    currentNumber = 0;
  }
  if(currentNumber >= -4 || currentNumber <= 4) {
    document.getElementById('currentNumber').style.color = 'white';
  }
  if(currentNumber < -4) {
    document.getElementById('currentNumber').style.color = 'red';
  }
  document.getElementById('currentNumber').innerHTML = currentNumber;
});