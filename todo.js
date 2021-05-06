// main function for adding tasks
const addTodo = () => {

    // get the task and days input
    // get the container to put todo cards in
    let task = document.getElementById("task");
    let days = Number(document.getElementById("days").value);
    const todoGrid = document.getElementById("todoGrid");

    // create new div element with the task and days values
    let div = document.createElement('div');

    // change the div class to the correct Bootstrap background
    // if days are less than 1 week (<7), make them yellow
    // if days are < 3, make them red.
    if(days == '' || days == NaN) {
        alert('Please enter a number.')
    } else if(days < 1) {
        alert('Please enter a number that is no less than 1.');
    } else if(days < 3) {
        div.className = 'alert alert-danger col-md-auto mx-2';

        // change the inner HTML to replicate the assignment
        // check for empty input
        if(task.value == '') {
            alert("Please enter your task!")
        } else {
            div.innerHTML = `${task.value}<button type="button" class="btn-close close ms-3 me-1 small" aria-label="Close" data-dismiss="modal"></button><br>${days} day(s)`;

            // add the new div to the todoGrid
            todoGrid.appendChild(div);
        }
    } else if(days < 7) {
        div.className = 'alert alert-warning col-md-auto mx-2';

        if(task.value == '') {
            alert("Please enter your task!")
        } else {
            div.innerHTML = `${task.value}<button type="button" class="btn-close close ms-3 me-1 small" aria-label="Close" data-dismiss="modal"></button><br>${days} day(s)`;

            todoGrid.appendChild(div);
        }
    } else {
        div.className = 'alert alert-secondary col-md-auto mx-2';

        if(task.value == '') {
            alert("Please enter your task!")
        } else {
            div.innerHTML = `${task.value}<button type="button" class="btn-close close ms-3 me-1 small" aria-label="Close" data-dismiss="modal"></button><br>${days} day(s)`;

            todoGrid.appendChild(div);
        }
    }

    // clicking on close button removes the task
    let close = document.getElementsByClassName("close");
    for(let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let element = this.parentElement;
            element.style.display = "none";
        }
    }
}