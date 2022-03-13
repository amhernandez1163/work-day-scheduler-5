var tasks = {};

var addDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(addDate);


var saveBtn = function () {
    $(".saveBtn").on("click", function() {
        console.log("this click was saved.")
    }); 
};

    

var displayTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"))
}

var saveTasks = function() {
    localStorage.setItem("tasks", );
    console.log("this does something");
  };


