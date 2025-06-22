const userTabs = [];


function saveLinks() {
    let input = document.getElementById("inputElement");
    let listElement = document.getElementById("linkListElement");

    if (input.value !== "") {
        listElement.innerHTML += "<li><a href='" + input.value + "' target='_blank'>" + input.value + "</a></li>";
        userTabs.push(input.value);
        if (localStorage.getItem("userLinks")) {
            let userLinks = JSON.parse(localStorage.getItem("userLinks"));
            for (let link of userLinks) {
                userTabs.push(link);
            }
        }

        localStorage.setItem("userLinks", JSON.stringify(userTabs));
        input.value = "";
        while (userTabs.length > 0) {
            userTabs.pop();
        }
    }
}

function initializeLinkList() {
    let listElement = document.getElementById("linkListElement");
    let linkList  = ""

    if (localStorage.getItem("userLinks")) {
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

function saveTab() {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        if (tabs[0].url !== "chrome://newtab/") {
            let input = document.getElementById("inputElement");
            input.value = tabs[0].url;
            saveLinks();
        }
    })
}

document.addEventListener("DOMContentLoaded", function() {
    let saveButton = document.getElementById("inputButton");
    let deleteButton = document.getElementById("deleteButton");
    let saveTabButton = document.getElementById("saveTabButton");

    saveButton.addEventListener("click", saveLinks);
    deleteButton.addEventListener("click", deleteLinks);
    saveTabButton.addEventListener("click", saveTab);

    initializeLinkList();
});