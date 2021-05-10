// create new Date object to compare with the inputDate
// date month is 0-index
const currentDate = new Date();

const sortMyEntries = (sortProp) => {
    let entries = document.getElementsByClassName("alert");
    entries = Array.prototype.slice.call(entries,0);
    entries.sort(function(a,b){
        return (a[sortProp] > b[sortProp]);
    })
    return entries;
}

// main function for adding tasks
const addTodo = () => {
    // get the task and days input
    // get the container to put todo cards in
    // convert html date to javascript
    const task = document.getElementById("task");
    const todoGrid = document.getElementById("todoGrid");
    const inputDate = new Date(document.getElementById("inputDate").value);

    // create new div element with the task and days values
    let div = document.createElement('div');

    // difference of dates
    const dateDif = Math.ceil((inputDate - currentDate)/1000/60/60/24);

    // change the div class to the correct Bootstrap background
    // if days are less than 1 week (<7), make them yellow
    // if days are < 3, make them red.
    if(inputDate == '') {
        alert('Please enter a date.')
    } else if(dateDif < 1) {
        alert('Please enter a number that is no less than 1.');
    } else if(dateDif < 3) {
        div.className = 'alert alert-danger col-md-auto mx-2';

        // change the inner HTML to replicate the assignment
        // check for empty input
        if(task.value == '') {
            alert("Please enter your task!")
        } else {
            div.innerHTML = `${task.value}<button type="button" class="btn-close close ms-3 me-1 small" aria-label="Close" data-dismiss="modal"></button><br>${dateDif} day(s)`;

            // add the new div to the todoGrid
            
            todoGrid.appendChild(div);
            sortMyEntries("innerHTML");
            
        }
    } else if(dateDif < 7) {
        div.className = 'alert alert-warning col-md-auto mx-2';

        if(task.value == '') {
            alert("Please enter your task!")
        } else {
            div.innerHTML = `${task.value}<button type="button" class="btn-close close ms-3 me-1 small" aria-label="Close" data-dismiss="modal"></button><br>${dateDif} day(s)`;

            
            todoGrid.appendChild(div);
            sortMyEntries("innerHTML");
            
        }
    } else {
        div.className = 'alert alert-secondary col-md-auto mx-2';

        if(task.value == '') {
            alert("Please enter your task!")
        } else {
            div.innerHTML = `${task.value}<button type="button" class="btn-close close ms-3 me-1 small" aria-label="Close" data-dismiss="modal"></button><br>${dateDif} day(s)`;

            
            todoGrid.appendChild(div);
            sortMyEntries("innerHTML");
            
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