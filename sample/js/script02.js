$(function(){
  
  
  $("#button01").on("click",function(){
    $("#content").text("お腹すいた眠い寝たいご飯食べたいお金欲しい眠い眠い寝たいとんかつたべたいねむいTwitterしたい旅行いきたい北海道行きたい日本回りたい山陰本線乗りたい銀河乗りたい");
  })

  $("#button02").on("click",function(){
    $("#content").html("<h2>htmlタグも使えるよ</h2>");
  })

  $("#button03").on("click",function(){
    $("#content").append("<p>追加</p>");
  })

  //ここからjavascriptの話

  let txt1 = "おれおおれおおおれれれれおれおれおれおれおれおおおれれれれおおおおおれれれおれおれおれおれおれおれおれおれおれおろえれおろれおれおろれ";
  let txt2 = "さらにここになにか文章がある。この文章はtxt2という変数で定義されている";
  let txt3 = "3番だよ ねむねむにゃんこだねぇ";
  let num1 = 100;
  let num2 = 50;

  $("#button04").on("click",function(){
    $("#content").text(txt1+txt2+txt3);
  })

  $("#button05").on("click",function(){
    $("#content").text(num1 + num2 * num2);
  })
  

});