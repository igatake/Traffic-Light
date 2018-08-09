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

//chg_opcの付け外しによりopactyを1<=>0.2に変更することで点灯を表現。
//n=0で青=>黄, n=1で黄=>赤, n=2で赤=>青
function colorChanger(n){
  let color1 = colors[n];
  let color2 = colors[n + 1];
  $('#' + color1 + '_light').removeClass('chg_opc');
  $('#' + color2 + '_light').addClass('chg_opc');
  if (n == 0){
    isBlue = false;
    $('#display_text')
    .text('少々お待ちください')
    .css('fontSize', '13px');
  } else if (n == 2){
    $('#display_text')
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
  $('#ped_' + pedColor1).removeClass('chg_opc');
  $('#ped_' + pedColor2).addClass('chg_opc');
  if (n == 1) {
    $('#display_text')
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
