var DailyTasks = [
    {
        id: "0",
        hour: "09",
        time: "09",
        AM_PM: "am",
        reminder: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        AM_PM: "am",
        reminder: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        AM_PM: "am",
        reminder: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        AM_PM: "pm",
        reminder: ""
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        AM_PM: "pm",
        reminder: ""
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        AM_PM: "pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        AM_PM: "pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        AM_PM: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        AM_PM: "pm",
        reminder: ""
    },
    
];

//the header date
var todayDate = function(){
    var today = $(".today-date");
    today.text(moment().format('MMMM Do YYYY'))
}

todayDate();


//save tasks 
var saveTasks = function(){
    localStorage.setItem("DailyTasks", JSON.stringify(DailyTasks));
}

var loadTasks = function() {
    DailyTasks = JSON.parse(localStorage.getItem("DailyTasks"));

}

var tbody = $("<tbody>")
.addClass("table-body");
DailyTasks.forEach(function(hour){

    $(".table").append(tbody);

    var taskRow = $("<tr>");
    tbody.append(taskRow);

    var hourField = $("<th>")
    .attr({
        "class": " col-1 time" 
    })
    .text(`${hour.hour}${hour.AM_PM}`);

    var textInputArea = $("<td>")
    .attr({
        "class": "col-10 task-info"
    })
    var taskField = $("<textarea>")
    .attr({
        "class": "taskInput",
        "placeholder": "Enter task here!",
        "id": hour.id
    })
    textInputArea.append(taskField)
    
    var btnsection = $("<td>")
    .attr({
        "class": "col-1 btn-section"
    })
    var btnText = "Save";
    var SaveBtn = $("<button>")
    .attr({
        "class": "save-btn btn"
    })
    SaveBtn.append(btnText);
    btnsection.append(SaveBtn);
    taskRow.append(hourField, textInputArea, btnsection);


    //Timer(textInputArea);
    if(hour.time < moment().format("HH")){
        taskField.attr({
            "class": "expired"
        }),
        taskRow.attr({
            "class": "expired"
        })
    
    }
    else if(hour.time === moment().format("HH")){
        taskField.attr({
            "class": "current"
        }),
        taskRow.attr({
            "class": "current"
        })
    }
    else{
        taskField.attr({
            "class": "future"
        }),
        taskRow.attr({
            "class": "future"
        })
    }
    $(".save-btn").on("click", function(event){
        event.preventDefault();
        var index =taskField.attr("id");
        DailyTasks[index].reminder = taskField.val();
        console.log(index);
        displayTasks();
        saveTasks();
    })
});

loadTasks();

