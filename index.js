import "./Classes/Game.js"

const heartCursor = document.querySelector(".heartCursor");

document.addEventListener("mousemove", (e) => {
    let leftPosition = e.pageX;
    let topPosition = e.pageY; 

    heartCursor.style.left = leftPosition + "px";
    heartCursor.style.top = topPosition + "px";
})