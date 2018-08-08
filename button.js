//ボタンが連打されることによる挙動の崩れを防ぐための変数を規定
let isBlue = true;

$('#btn').on('click', function(){
  if (isBlue === false) {
//もしこれがfalseだった場合,
//すでに信号は変化しているので,
//ボタンを押しても作用しないようにする
    return;
  }

  blueToYellow();
  chgTextWait();
//setTimeoutで変化の順序を設定
//赤=>青は10000-3000で7秒間で青に戻る設定
  setTimeout(yellowToRed, 3000);
  setTimeout(pedRedToBlue, 4000);
  setTimeout(chgTextGo, 4000);
  flashing();
  setTimeout(redtoBlue, 10000);
  setTimeout(chgTextReset, 10000);
});

//chg__opcの付け外しによりopactyを
//1<=>0.2に変更することで点灯を表現。
function blueToYellow(){
  $('#blue__light').removeClass('chg__opc');
  $('#yellow__light').addClass('chg__opc');
  isBlue = false;
  console.log('Turn in yellow');
}

function yellowToRed(){
  $('#yellow__light').removeClass('chg__opc');
  $('#red__light').addClass('chg__opc');
  console.log('Turn in red');
}

function redtoBlue(){
  $('#red__light').removeClass('chg__opc');
  $('#blue__light').addClass('chg__opc');
  isBlue = true;
  console.log('Turn in blue');
}

//歩行者信号の色の遷移
function pedRedToBlue(){
  $('#ped__red').removeClass('chg__opc');
  $('#ped_blue').addClass('chg__opc');
}

function pedBlueToRed(){
  $('#ped_blue').removeClass('chg__opc');
  $('#ped__red').addClass('chg__opc');
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
  $('#display__text')
  .text('少々お待ちください')
  .css('fontSize', '13px');
}

function chgTextGo(){
  $('#display__text')
  .text('渡れます')
  .css('fontSize', '16px');
}

function chgTextReset(){
  $('#display__text')
  .text('ボタンを押してください')
  .css('fontSize', '11px');
}
