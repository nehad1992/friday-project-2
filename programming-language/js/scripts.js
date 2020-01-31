$(document).ready(function() {
    $("#form1").submit(function(event) {
        event.preventDefault();
        var season = $("input:radio[name=season]:checked").val();
        var drink = $("input:radio[name=drink]:checked").val();
        var sports = $("input:radio[name=sports]:checked").val();
        var vacation = $("input:radio[name=vacation]:checked").val();
        var color = $("input:radio[name=color]:checked").val();
        if  (color === "white" && season === "summer" && drink === "coffee" && sports === "swimming" && vacation === "city")  
        {
             
            var language = "You should choose Java.";
            $("#lang").text(language);
        }
        else if ( season === "white" && color === "grey" && drink === "kombucha" && sports === "rugby" && vacation === "beaches") 
         {
            var language = "You should choose C#.";
             $("#lang").text(language);
        }
        else if (season === "spring" && drink === "tea" && sports === "cricket" && color === "black" && vacation === "mountains")
        {
            var language = "You should choose Python.";
            $("#lang").text(language);
        }
        else {
            var language = "You should choose Ruby." ;
            $("#lang").text(language);
        }
        $("#result").show();
        });  
});
