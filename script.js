const inputBox = document.getElementById("input-box"); //making id for input-box
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value == ''){ //if input box is empty
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li"); //creating HTML element li
        li.innerHTML = inputBox.value; //this is making whatever we add into the input field appear in the li
        listContainer.appendChild(li); //displaying the li in the list container
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; //adding the cross mark to delete task
        li.appendChild(span); //adding the span to the li
    }
    inputBox.value = ""; //after adding task, input box will be empty again
}

//java for click function

