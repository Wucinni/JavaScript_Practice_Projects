const userTabs = [];


function saveLinks() {
    let input = document.getElementById("inputElement");
    let listElement = document.getElementById("linkListElement");

    if (input.value !== "") {
        listElement.innerHTML += "<li><a href='" + input.value + "' target='_blank'>" + input.value + "</a></li>";
        userTabs.push(input.value);
        if (localStorage.getItem("userLinks") !== null) {
            let userLinks = JSON.parse(localStorage.getItem("userLinks"));
            for (let link of userLinks) {
                userTabs.push(link);
            }
        }

        localStorage.setItem("userLinks", JSON.stringify(userTabs));
        input.value = "";
        userTabs.pop();
    }
}

function initializeLinkList() {
    let listElement = document.getElementById("linkListElement");
    let linkList  = ""

    if (localStorage.getItem("userLinks") !== null) {
        let userTabs = JSON.parse(localStorage.getItem("userLinks"));
        for (let link of userTabs) {
            // linkList += "<li><a href='" + link + "' target='_blank'>" + link + "</a></li>";
            linkList += `<li>
                                <a href='${link}' target='_blank'>${link}</a>
                             </li>`;
        }
        listElement.innerHTML = linkList;
    }
}

function deleteLinks() {
    localStorage.removeItem("userLinks");
    document.getElementById("linkListElement").innerHTML = "";
    while (userTabs.length > 0) {
        userTabs.pop();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let saveButton = document.getElementById("inputButton");
    let deleteButton = document.getElementById("deleteButton");

    saveButton.addEventListener("click", saveLinks);
    deleteButton.addEventListener("click", deleteLinks);

    initializeLinkList();
});