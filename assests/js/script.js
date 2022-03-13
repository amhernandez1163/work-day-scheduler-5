var tasks = $("#tasksInput").val();

var addDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(addDate);



$(document).ready(function() {
    $("#one").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput1").val());
            localStorage.setItem("text", JSON.stringify(getTaskInput));
        
        //var taskText = JSON.parse(localStorage.getItem("text"));
       //taskText.push(tasks);
        
        //localStorage.setItem("text", JSON.stringify(getTaskInput));
    });
});

$(document).ready(function() {
    $("#two").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput2").val());
            localStorage.setItem("text", JSON.stringify(getTaskInput));
        
    });
});

$(document).ready(function() {
    $("#three").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput3").val());
        console.log(getTaskInput);
    });
});

$(document).ready(function() {
    $("#four").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput4").val());
        console.log(getTaskInput);
    });
});

$(document).ready(function() {
    $("#five").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput5").val());
        console.log(getTaskInput);
    });
});

$(document).ready(function() {
    $("#six").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput6").val());
        console.log(getTaskInput);
    });
});

$(document).ready(function() {
    $("#seven").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput7").val());
        console.log(getTaskInput);
    });
});

$(document).ready(function() {
    $("#eight").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput8").val());
        console.log(getTaskInput);
    });
});

$(document).ready(function() {
    $("#nine").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput9").val());
        console.log(getTaskInput);
    });
});

$(document).ready(function() {
    $("#ten").click(function() {
   
        var getTaskInput = $.trim($("#tasksInput10").val());
        console.log(getTaskInput);
    });
});


//$(".saveBtn").click(function() {
  ////  getTaskInput();
//});




//var getTaskInput = function () {
    
  //  var taskInput = document.getElementById("tasksInput").value;

//};

