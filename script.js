let display = document.querySelector(".display");
let btns = document.querySelectorAll(".input-field");
let realtime = document.querySelector(".realtime")


// Function to display the clicked button value
const displayValue = (event) => {
    
    if (event.target.value==="="){
        if(display.value === ""){
            display.value = 0

        } else {
        display.value = eval(display.value)

        }
    } else if (event.target.value === "AC") {
        display.value = ""
        realtime.innerHTML = 0
    } else if (event.target.value === "DE"){
        display.value = display.value.slice(0, -1);
        if(display.value === ""){
        realtime.innerHTML = 0
        }
    } else if (event.target.value === "X"){
        display.value += "*"
    }
      else {
        display.value += event.target.value
        realtime.innerHTML =  eval(display.value)

    }
    
    // // decrease font size 
    if (display.value.length > 12 ) {
        display.classList.add("display-fontsize")
    } else {
        display.classList.remove("display-fontsize")
        
    }
    // Add and remove btn class css
    event.target.classList.add("btn-clicked")
    setTimeout(()=>{
    event.target.classList.remove("btn-clicked")

    },200)
};

// Add event listener to each button
btns.forEach((btn) => {
  btn.addEventListener("click", displayValue);
});
