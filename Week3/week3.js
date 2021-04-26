$(document).ready(function() {
    alert("Ready for new page??");

    $("#tree3").draggable();


    $("#text1").hover(function(){
    	$("#text2").show();
    	});

    $("#text2").hover(function(){
            $("#text3").show();
            $("#text3").css("color", "green");

            });

    $("#text3").hover(function(){
                $("#text4").show();
                });
    $("#text4").hover(function(){
             $("#text5").show();
                    });
     $("#text5").hover(function(){
            $("#text7").show();
                               });

    $("#text7").hover(function(){
             $("#text1").hide();
             $("#text2").hide();
             $("#text3").hide();
             $("#text4").hide();
             $("#text5").hide();
             $(this).hide();
             $("#tree3").hide();
             $("#text6").show();
                    });
     $("#text6").click(function(){
           $("#tree3").show();
           $(this).hide();
             });

        })
      