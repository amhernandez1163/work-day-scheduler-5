var tasks = $("#tasksInput").val();

var addDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(addDate);


var saveTasks = function () {

    if(localStorage.getItem("text") === null){
        localStorage.setItem("text", "tasks");
    }

    var taskText = JSON.parse(localStorage.getItem("text"));
    taskText.push(tasks);

    localStorage.setItem("text", JSON.stringify(tasks));

 saveTasks();
};



$(".saveBtn").click(function() {
    console.log("click registered");
});




