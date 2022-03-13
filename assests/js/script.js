// setting date using the currentDay id selector 
var addDate = moment().format('MMMM Do YYYY,');
$("#currentDay").text(addDate);


// beginning of save button funcationality per time block 8 AM - 5 PM
$(document).ready(function() {
    $("#one").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput1").val());
        localStorage.setItem("8AM", (getTaskInput));
    });
});

$(document).ready(function() {
    $("#two").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput2").val());
            localStorage.setItem("9AM", (getTaskInput));
        
    });
});

$(document).ready(function() {
    $("#three").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput3").val());
        localStorage.setItem("10AM", (getTaskInput));
    });
});

$(document).ready(function() {
    $("#four").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput4").val());
        localStorage.setItem("11AM", (getTaskInput));
    });
});

$(document).ready(function() {
    $("#five").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput5").val());
        localStorage.setItem("12PM", (getTaskInput));
    });
});

$(document).ready(function() {
    $("#six").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput6").val());
        localStorage.setItem("1PM", (getTaskInput));
    });
});

$(document).ready(function() {
    $("#seven").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput7").val());
        localStorage.setItem("2PM", (getTaskInput));
    });
});

$(document).ready(function() {
    $("#eight").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput8").val());
        localStorage.setItem("3PM", (getTaskInput));

    });
});

$(document).ready(function() {
    $("#nine").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput9").val());
        localStorage.setItem("4PM",(getTaskInput));
    });
});

$(document).ready(function() {
    $("#ten").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput10").val());
        localStorage.setItem("5PM", (getTaskInput));
    });
});

// End of time black save button functionality // 