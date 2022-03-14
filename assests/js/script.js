// setting date using the currentDay id selector 
var addDate = moment().format('MMMM Do YYYY');
$("#currentDay").text(addDate);


// beginning of save button funcationality per time block 8 AM - 5 PM
$(document).ready(function() {
    $("#one").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput1").val());
        localStorage.setItem("8AM", (getTaskInput));
        $("#tasksInput1.description").val(localStorage.getItem("8AM"));
    });
});

$(document).ready(function() {
    $("#two").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput2").val());
        localStorage.setItem("9AM", (getTaskInput));
        $("#tasksInput2").val(localStorage.getItem("9AM"));
        
    });
});

$(document).ready(function() {
    $("#three").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput3").val());
        localStorage.setItem("10AM", (getTaskInput));
        $("#tasksInput3").val(localStorage.getItem("10AM"));
    });
});

$(document).ready(function() {
    $("#four").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput4").val());
        localStorage.setItem("11AM", (getTaskInput));
        $("#tasksInput4").val(localStorage.getItem("11AM"));
    });
});

$(document).ready(function() {
    $("#five").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput5").val());
        localStorage.setItem("12PM", (getTaskInput));
        $("#tasksInput5").val(localStorage.getItem("12PM"));
    });
});

$(document).ready(function() {
    $("#six").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput6").val());
        localStorage.setItem("1PM", (getTaskInput));
        $("#tasksInput6").val(localStorage.getItem("1PM"));
    });
});

$(document).ready(function() {
    $("#seven").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput7").val());
        localStorage.setItem("2PM", (getTaskInput));
        $("#tasksInput7").val(localStorage.getItem("2PM"));
    });
});

$(document).ready(function() {
    $("#eight").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput8").val());
        localStorage.setItem("3PM", (getTaskInput));
        $("#tasksInput8").val(localStorage.getItem("3PM"));

    });
});

$(document).ready(function() {
    $("#nine").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput9").val());
        localStorage.setItem("4PM",(getTaskInput));
        $("#tasksInput9").val(localStorage.getItem("4PM"));
    });
});

$(document).ready(function() {
    $("#ten").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput10").val());
        localStorage.setItem("5PM", (getTaskInput));
        $("#tasksInput10").val(localStorage.getItem("5PM"));
    });
});

// End of time black save button functionality // 