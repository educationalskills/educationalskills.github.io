$(document).ready(function(){
  var de = 0;
  var pr = 0;
  var co = 0;
  function finishTest(des, pro, cop){
    if (des > cop & des > pro){
      $("#designer").show();
      $(".description").show();
      $("#designerText").show();
    }
    if (pro > des & pro > pro){
      $("#programmer").show();
      $(".description").show();
      $("#programmerText").show();
    }
    if (cop > des & cop > pro){
      $("#copywriter").show();
      $(".description").show();
      $("#copywriterText").show();
    }
    if(cop == des || cop == pro || des == pro){
      $("#copywriter").show();
      $(".description").show();
      $("#copywriterText").show();
    }
  }
  $("#startTest").click(function(){
    $("#intro").hide();
    $(".description").hide();
    $("#designerText").hide();
    $("#programmerText").hide();
    $("#copywriterText").hide();
    $("#question1").show();
  });
  $("#skipTest").click(function(){
    $(".description").show();
    $("#designerText").show();
    $("#programmerText").show();
    $("#copywriterText").show();
  });
  //first question
  $("#answer1").click(function(){
    co++;
    $("#question1").hide();
    $("#question2").show();
  });
  $("#answer1_1").click(function(){
    de++;
    $("#question1").hide();
    $("#question2").show();
  });
  $("#answer1_2").click(function(){
    pr++;
    $("#question1").hide();
    $("#question2").show();
  });
  //second question
  $("#answer2").click(function(){
    co++;
    $("#question2").hide();
    $("#question3").show();
  });
  $("#answer2_1").click(function(){
    pr++;
    $("#question2").hide();
    $("#question3").show();
  });
  $("#answer2_2").click(function(){
    de++;
    $("#question2").hide();
    $("#question3").show();
  });
  //third question
  $("#answer3").click(function(){
    de++;
    $("#question3").hide();
    $("#question4").show();
  });
  $("#answer3_1").click(function(){
    pr++;
    $("#question3").hide();
    $("#question4").show();
  });
  $("#answer3_2").click(function(){
    co++;
    $("#question3").hide();
    $("#question4").show();
  });
  //fourth question
  $("#answer4").click(function(){
    pr++;
    $("#question4").hide();
    $("#question5").show();
  });
  $("#answer4_1").click(function(){
    de++;
    $("#question4").hide();
    $("#question5").show();
  });
  $("#answer4_2").click(function(){
    co++;
    $("#question4").hide();
    $("#question5").show();
  });
  $("#answer5").click(function(){
    pr++;
    $("#question5").hide();
    finishTest(de, pr, co);
  });
  $("#answer5_1").click(function(){
    de++;
    $("#question5").hide();
    finishTest(de, pr, co);
  });
  $("#answer5_2").click(function(){
    co++;
    $("#question5").hide();
    finishTest(de, pr, co);
  });
});
