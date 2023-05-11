let state = 1;
let position = 0;

$(document).ready(function() {
    
    $("#downloadCV")
    .on("mouseover", function() {

        if(position === 0) {
            if(state === 1) {
                position = 300;
                state = -1
            } else if(state === -1) {
                position = -300;
                state = 1
            }
        } else {
            position = 0;
        }

        $(this).css("transform" , "translate(" + position + "px)");

    });

});