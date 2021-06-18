var important = false;
var tasks = [];
// inv homework: variable scope on JS

function toggleImportant() {
    if (!important) {
        important = true;
        $("#iImportant").removeClass("far").addClass("fas");
    }else{
        important=false;
        $("#iImportant").removeClass("fas").addClass("far");
    }
}

function saveTask(){
    //read values from controls
    let title=$("#txtTitle").val();
    let textDescription=$("#txtDescription").val();
    let category=$("#selCategory").val();
    let location=$("#txtLocation").val();
    let dueDate=$("#selDueDate").val();
    let color=$("#selColor").val();
    var newTask = new Task(title,textDescription,category,location,dueDate,color);
    tasks.push(newTask);
    console.log(newTask);
    console.log(tasks.length);
    //create object
    //console log the object --- HW is up to here
    //send obj. to backend server
    //display task
}

function init() {
    console.log("my task manager");
    //load data
    //hook events
    $("#iImportant").click(toggleImportant);
    $("#btnSave").click(saveTask);
}


window.onload = init;