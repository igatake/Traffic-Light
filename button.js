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
//赤=>青は8000-3000で５秒間で青に戻る設定
  setTimeout(yellowToRed, 3000);
  setTimeout(pedRedToBlue, 4000);
  setTimeout(chgTextGo, 4000);
  flashing();
  setTimeout(redtoBlue, 10000);
  setTimeout(chgTextReset, 10000);
});

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
}
