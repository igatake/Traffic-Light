let i = 1
let changeColorLoop = function(){
  changeColor(i++);
}
setInterval(changeColorLoop, 1000);

function changeColor(i){
  console.log("changeColor");

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
