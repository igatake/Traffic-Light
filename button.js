//ボタンが連打されることによる挙動の崩れを防ぐための変数を規定
let isBlue = true;
let colors = ['blue', 'yellow', 'red', 'blue'];
let pedColors = ['blue', 'red', 'blue']

$('#btn').on('click', function(){
  if (isBlue === false) {
//もしこれがfalseだった場合,
//すでに信号は変化しているので,
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

//chg__opcの付け外しによりopactyを
//1<=>0.2に変更することで点灯を表現。
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
}

function flashingB(){
  for (let i = 0; i < 2; i++){
  setTimeout('pedColorChanger(1)', 8100 + i * 600);
  }
}
