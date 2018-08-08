let isBlue = true;

$('#btn').on('click', function(){
  if (isBlue === false) {
    return;
  }
  blueToYellow();
  setTimeout(YellowToRed, 3000);
  setTimeout(RedtoBlue, 8000);
});

function blueToYellow(){
  $('#blue').removeClass('chg__opc');
  $('#yellow').addClass('chg__opc');
  isBlue = false;
  console.log('Turn in yellow');
}

function YellowToRed(){
  $('#yellow').removeClass('chg__opc');
  $('#red').addClass('chg__opc');
  console.log('Turn in red');
}

function RedtoBlue(){
  $('#red').removeClass('chg__opc');
  $('#blue').addClass('chg__opc');
  isBlue = true;
  console.log('Turn in blue');
}
