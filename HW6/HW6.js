$(document).ready(function() {
    $("#Terry").draggable();

    $("#firstLine").hover(function(){
    	$("#listBack").show();
        $("#secondLine").show();
        $("#cornerFlick").show();
    	});
    $("#firstLine").click(function(){
            $("#thirdLine").show();
            });
    $("#cornerFlick").click(function(){
            $("#shoppingList").show();
            $(this).hide();
            $("#secondLine").hide();
            $("#listBack").hide();
              });
    $("#shoppingList").hover(function(){
                $("#forthLine").show();
                $("#fifthLine").show();
                $("#thirdLine").hide();

                });
    $("#fifthLine").hover(function(){
                    $("#Terry").show();
                    $("#forgot").show();
                    });

     $("#Terry").hover(function(){
        $(this).hide();
        $("#rain").show();
        $("#final").show();
        $("#shoppingList").hide();
        $("#fifthLine").hide();
        $("#forthLine").hide();
        $("#firstLine").hide();






                        });
    
    
  })