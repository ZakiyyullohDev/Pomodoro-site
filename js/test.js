const time = document.querySelector('.time')
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
const video = document.querySelector('.video')
const audio = document.querySelector('.audio')

// Get a reference to the button element
const button = document.getElementById("toggleButton");

// Initialize a variable to keep track of the button's state
let isStarted = false;

// Function to update the button's text and state
function toggleButton() {
    if (isStarted) {
        button.textContent = "Boshlash";
    } else {
        button.textContent = "To'xtatish";
    }
    isStarted = !isStarted; // Toggle the state
}

// Attach the click event listener to the button
button.addEventListener("click", toggleButton);

// button.addEventListener("click")

const timer = ()=> {
    for (let i = 0; i < 26; i++) {
        setTimeout(() => {
            time.textContent = '24:00'
        }, 60000);
        console.log(i);
    }
}

button.addEventListener ("click", timer())
