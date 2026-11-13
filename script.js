
// Welcome Message
function showMessage() {
    alert("Welcome to My Website! 🎉");
}

// Change Website Background
function changeBackground() {
    const colors = ["#f0f4ff", "#e0f7fa", "#fff3e0", "#f3e5f5"];

    const randomColor = colors[
        Math.floor(Math.random() * colors.length)
    ];

    document.body.style.backgroundColor = randomColor;
}

// Display Current Date
function showDate() {
    const today = new Date();

    document.getElementById("date").innerHTML =
        "Today's Date: " + today.toDateString();
}

// Welcome Console Message
console.log("Website loaded successfully!");
