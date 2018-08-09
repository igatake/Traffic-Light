//ボタンが連打されることによる挙動の崩れを防ぐための変数を規定
let isBlue = true;
let colors = ['blue', 'yellow', 'red', 'blue'];
let pedColors = ['blue', 'red', 'blue']

$('#btn').on('click', function(){
  if (isBlue === false) {
//もしこれがfalseだった場合すでに信号は変化しているので,
//ボタンを押しても作用しないようにする
    return;
  }
  
  //setTimeoutで変化の順序を設定
  colorChanger(0);
  setTimeout('colorChanger(1)', 3000);
  setTimeout('pedColorChanger(1)', 4000);
  flashingA();
  flashingB();
  setTimeout('colorChanger(2)', 10000);
});

<<<<<<< HEAD
//chg_opcの付け外しによりopactyを
//1<=>0.2に変更することで点灯を表現。
function blueToYellow(){
  $('#blue_light').removeClass('chg_opc');
  $('#yellow_light').addClass('chg_opc');
  isBlue = false;
  console.log('Turn in yellow');
}

function yellowToRed(){
  $('#yellow_light').removeClass('chg_opc');
  $('#red_light').addClass('chg_opc');
  console.log('Turn in red');
}

function redtoBlue(){
  $('#red_light').removeClass('chg_opc');
  $('#blue_light').addClass('chg_opc');
  isBlue = true;
  console.log('Turn in blue');
}

//歩行者信号の色の遷移
function pedRedToBlue(){
  $('#ped_red').removeClass('chg_opc');
  $('#ped_blue').addClass('chg_opc');
}

function pedBlueToRed(){
  $('#ped_blue').removeClass('chg_opc');
  $('#ped_red').addClass('chg_opc');
}

//歩行者信号の点滅
function flashing(){
  setTimeout(pedBlueToRed, 7800);
  setTimeout(pedRedToBlue, 8100);
  setTimeout(pedBlueToRed, 8400);
  setTimeout(pedRedToBlue, 8700);
  setTimeout(pedBlueToRed, 9000);
}

//displayのtextを変更
function chgTextWait(){
  $('#display_text')
  .text('少々お待ちください')
  .css('fontSize', '13px');
}

function chgTextGo(){
  $('#display_text')
  .text('渡れます')
  .css('fontSize', '16px');
}

function chgTextReset(){
  $('#display_text')
  .text('ボタンを押してください')
  .css('fontSize', '11px');
=======
//chg__opcの付け外しによりopactyを1<=>0.2に変更することで点灯を表現。
//n=0で青=>黄, n=1で黄=>赤, n=2で赤=>青
function colorChanger(n){
  let color1 = colors[n];
  let color2 = colors[n + 1];
  $('#' + color1 + '__light').removeClass('chg__opc');
  $('#' + color2 + '__light').addClass('chg__opc');
  if (n == 0){
    isBlue = false;
    $('#display__text')
    .text('少々お待ちください')
    .css('fontSize', '13px');
  } else if (n == 2){
    $('#display__text')
    .text('ボタンを押してください')
    .css('fontSize', '11px');
    isBlue = true;
  }
}

//歩行者信号の色の遷移
//n=0で青=>赤, n=1で赤=>青
function pedColorChanger(n){
  let pedColor1 = pedColors[n];
  let pedColor2 = pedColors[n + 1];
  $('#ped__' + pedColor1).removeClass('chg__opc');
  $('#ped__' + pedColor2).addClass('chg__opc');
  if (n == 1) {
    $('#display__text')
    .text('渡れます')
    .css('fontSize', '16px');
  }
}

//歩行者信号の点滅
function flashingA(){
  for (let i = 0; i < 3; i++){
  setTimeout('pedColorChanger(0)', 7800 + i * 600);
  }
>>>>>>> 3eabfd121e4b2383a1e51d7f3c32135c73555259
}
function flashingB(){
  for (let i = 0; i < 2; i++){
  setTimeout('pedColorChanger(1)', 8100 + i * 600);
  }
}