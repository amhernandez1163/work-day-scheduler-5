var taskInput = $("#tasks").text.val();
var saveButton = $("#saveBtn");

var addDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(addDate);


$(function () {
    alert(taskInput);
});

saveButton.click(function() {
    console.log("text was saved");
});

var getTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"))
}

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};


