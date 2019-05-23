document.getElementById("addVideo").addEventListener("click", function() {
    mainElement = document.getElementById("videos");

    div = document.createElement("div");
    div.classList.add("video");

    img = document.createElement("img");
    img.setAttribute("src", "images/placeholder.jpg")
    
    span = document.createElement("span");
    span.textContent = "A new video";
    
    div.appendChild(img);
    div.appendChild(span);
    mainElement.insertBefore(div, mainElement.lastElementChild);
});