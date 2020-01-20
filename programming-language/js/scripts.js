$(document).ready(function() {
    $("#form1").submit(function() {
        // var age = $("input#formInfo2-input").val();
        // if  (age > "20") {
        //     alert("You should choose Ruby");
        // }  
        // else  
        // {
        //     alert("You should wait");
        // } 
        
        var color = $("input:radio[name=color]:checked").val();
        if  (color === "white")  {
             
            alert("You should choose java");
        }
        else  {
            alert("You should choose C#");
        }
        
        event.preventDefault();

    });
    

    
















    
    
});