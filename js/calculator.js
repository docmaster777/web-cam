$(document).ready(function() {
	$(function(){
	
	var in1 = $("input.in1").val();
    var in2 = $("input.in2").val();
    var in3 = $("input.in3").val();
    var sum = in1*in2*in3

  $('.sum').text(sum);
  
  $("#price").click(function(){

    var sum=1; // начальное значение можно указать любое

    $('#price :checked').each(function(){

    sum = sum*parseFloat($(this).val());

    });

     sum=Math.ceil(sum);

    $('.sum').text(sum);	

  });
});
});
