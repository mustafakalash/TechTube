numVids = 1;

document.getElementById("addVideo").addEventListener("click", function() {
    numVids++;

    mainElement = document.getElementById("videos");

    a = document.createElement("a");
    a.classList.add("video");
    a.setAttribute("id", "vid" + numVids);
    a.setAttribute("href", "#vid" + numVids);
    mainElement.insertBefore(a, mainElement.lastElementChild);

    img = document.createElement("img");
    img.setAttribute("src", "images/placeholder.jpg")
    a.appendChild(img);
    
    innerDiv = document.createElement("div");
    innerDiv.classList.add("data");
    a.appendChild(innerDiv);

    p = document.createElement("p");
    p.textContent = "A new video";
    innerDiv.appendChild(p);

    dl = document.createElement("dl");
    innerDiv.appendChild(dl);

    dt = document.createElement("dt");
    dt.textContent = "Published";
    dl.appendChild(dt);

    dd = document.createElement("dd");
    dd.textContent = "Month day, year";
    dl.appendChild(dd);

    dt = document.createElement("dt");
    dt.textContent = "Length";
    dl.appendChild(dt);

    dd = document.createElement("dd");
    dd.textContent = "XX:XX";
    dl.appendChild(dd);

    dt = document.createElement("dt");
    dt.textContent = "Description";
    dl.appendChild(dt);

    dd = document.createElement("dd");
    dd.textContent = "A new video about robotics";
    dl.appendChild(dd);

    dt = document.createElement("dt");
    dt.textContent = "Tags";
    dl.appendChild(dt);

    dd = document.createElement("dd");
    dd.textContent = "blah, bleh, bloh, bluh";
    dl.appendChild(dd);

    div = document.createElement("div");
    div.classList.add("popup");
    mainElement.insertBefore(div, mainElement.lastElementChild);

    innerDiv = document.createElement("div");
    innerDiv.classList.add("player");
    div.appendChild(innerDiv);

    h1 = document.createElement("h1");
    h1.textContent = "A new video";
    innerDiv.appendChild(h1);

    a = document.createElement("a");
    a.setAttribute("href", "#");
    a.textContent = "Close";
    innerDiv.appendChild(a);
});