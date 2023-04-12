// initialize count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect  the new count

// grab the id elements and store them in variables
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let countDown = document.getElementById("count-el")

let count = 0;

function increment() {
    
    //set countEl innerText to count
    count += 1
    countEl.textContent = count
};


// Create a function, save(), which logs out the count when its called

// 1. Grab the save-el paragraph and store it in a variable called saveEl
function save() {
        // 2. Creat a variable that contains both the count and the dash separator, i.e. "12 - "
        // 3. Render the variable in the saveEl using the .innerText
        // NB: Make sure to not delete the existing content of the paragraph
    let previous = " " + count + " - "
    saveEl.textContent += previous
    console.log(previous)
    countEl.textContent = 0
    count = 0
}

function decrement() {
    if (count == 0) {
        count = 0
    }
    else{
        count -= 1
        countDown.textContent = count
    }
}
