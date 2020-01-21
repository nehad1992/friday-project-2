$(document).ready(function() {
    $("#form1").submit(function() {
        var season = $("input:radio[name=season]:checked").val();
        var drink = $("input:radio[name=drink]:checked").val();
        var sports = $("input:radio[name=sports]:checked").val();
        var vacation = $("input:radio[name=vacation]:checked").val();
        var color = $("input:radio[name=color]:checked").val();
        if  (color === "white" && season === "summer" && drink === "coffee" && sports === "swimming" && vacation === "city")  
        {
             
            alert("You should choose java");
        }
        else if ( season === "white" && color === "grey" && drink === "kombucha" && sports === "rugby") 
         {
            alert("You should choose C#");
        }
        else if (season === "spring" && drink === "tea" && sports === "cricket")
        {
            alert("You should choose Python");
        }
        else {
            alert("You should choose Ruby");
        }
        event.preventDefault();

    });
    

    
















    
    
});