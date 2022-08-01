var wallTouched = false;
var started = false;
/*$(document).ready(function(){
   /* $("#boundary1").mouseover(function(){
        $(this).css("background-color", "#ff8888");
    })*/
   /* $("div .boundary").mouseover(function(){
        $(".boundary").css("background-color", "#ff8888");
    })

});*/

$(document).ready(function() {
    //$("#pop").hide();
    $("#start").click(function (){ 
        //console.log("started");

        started = true;
        wallTouched = false;
        $(".boundary").removeClass("youlose");
        $("h2").text("Game started!");
        //$("#pop").hide();
    });

    $("#maze").mouseleave(function () { 
        loser();
    });

    $(".boundary").mouseover(function () {
        loser();
    });

    $("#end").mouseover(function () {
        if (started && !wallTouched){
            $("h2").text("You win! :]");
            //$("#pop").show();
            started = false;
        }
    });
});
var loser = function(){
    if (started){
        $(".boundary").addClass("youlose");
        $("h2").text("Sorry, you lost. :[");
       /* $("#pop").attr("src","loser.jfif");
        $("#pop").show();*/
        started = false;
        wallTouched = true;
    }
};