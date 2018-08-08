//このファイルは動作には関係ないが結構気に入ってるので残しておきます。
let i = 1;
let changeColorLoop = function(){
  changeColor(i++);
}
//setIntervalでループ間の遷移速度を決定
setInterval(changeColorLoop, 1000);

function changeColor(i){
  console.log("changeColor");

// iを3で割った時の余りの数[0, 1, 2]で発色の振り分け
// 余りが0=>青,1=>黄色, 2=>赤
  if (i % 3 == 1) {
    console.log("blue");
    $('#blue').css('opacity',1);
    $('#yellow').css('opacity',0.2);
    $('#red').css('opacity',0.2);
    $('#name').text("あお");
  } else if (i % 3 == 2) {
    console.log("yellow");
    $('#blue').css('opacity',0.2);
    $('#yellow').css('opacity', 1);
    $('#red').css('opacity',0.2);
    $('#name').text("きいろ");
  } else {
    console.log("red");
    $('#blue').css('opacity',0.2);
    $('#yellow').css('opacity',0.2);
    $('#red').css('opacity',1);
    $('#name').text("あか");
  }
}
