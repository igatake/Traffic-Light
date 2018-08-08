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
//setTimeoutで変化の順序を設定
//赤=>青は8000-3000で５秒間で青に戻る設定
  setTimeout(YellowToRed, 3000);
  setTimeout(RedtoBlue, 8000);
});

//chg__opcの付け外しによりopactyを
//1<=>0.2に変更することで点灯を表現。
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
