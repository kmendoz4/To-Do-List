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
    saveData(); //anytime we add a task it will save the data
}

//java for click function
listContainer.addEventListener("click", function(e){ 
    if(e.target.tagName === "LI"){ //this checks where we clicked to see what to do
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();//if we clicked on the x (span)
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); //whatever is in the listContainer will be stored in the local storage data
}

//need to display data whenever opening the website again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
