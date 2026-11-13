
/* =========================
   WEBSITE JAVASCRIPT
========================= */

// Website loaded message
console.log("Welcome to My Website!");


// =========================
// 1. WELCOME MESSAGE
// =========================

function showMessage() {
    alert("🎉 Welcome to My Website! Thanks for visiting.");
}


// =========================
// 2. CHANGE BACKGROUND
// =========================

function changeBackground() {

    const colors = [
        "#f4f7fb",
        "#e0f2fe",
        "#fce7f3",
        "#dcfce7",
        "#fef3c7",
        "#ede9fe"
    ];

    const randomIndex = Math.floor(
        Math.random() * colors.length
    );

    document.body.style.backgroundColor =
        colors[randomIndex];

}


// =========================
// 3. SHOW TODAY'S DATE
// =========================

function showDate() {

    const today = new Date();

    const formattedDate = today.toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );

    const dateElement = document.getElementById("date");

    if (dateElement) {
        dateElement.textContent =
            "Today's Date: " + formattedDate;
    }

}


// =========================
// 4. NAVIGATION MESSAGE
// =========================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function() {

        console.log(
            "Navigating to: " + this.textContent
        );

    });

});


// =========================
// 5. PAGE LOADED
// =========================

document.addEventListener("DOMContentLoaded", function() {

    console.log("Website is ready!");

});
