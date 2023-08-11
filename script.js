document.addEventListener("DOMContentLoaded", function () {
    // Your code here
    randomlyPickADiningPlace();
});

function randomlyPickADiningPlace() {
    console.log("Function executed after DOMContentLoaded");
    const array = [{
        name: "KFC",
        address: "Jurong"
    }, {
        name: "McDonald's",
        address: "TradeHub"
    }, {
        name: "Long John Silver's",
        address: "Hell"
    }

    ]
    // console.log(Math.random())
    const item = array[Math.floor(Math.random() * array.length)];
    const name = document.getElementById("name");
    name.innerText = item.name;
    const address = document.getElementById("address");
    address.innerText = item.address;

}

function renderButtonA() {
    //
}

function renderButtonB() {
    //
}

function toggle() {
    //delete B render A
    //delete A render B
}

function toggleEditableDivV2() {
    const editButton = document.getElementById("editButton");
    const editableDiv = document.getElementById("editableDiv");
    const divState = editableDiv.getAttribute("contentEditable");
    console.log(divState);
    if (!divState) { // '' || false || undefined || null
        console.log(divState);
        editableDiv.setAttribute("contentEditable", true);
    }
    else {
        console.log(divState);
        editableDiv.setAttribute("contentEditable", false);
    }
}

function toggleEditableDiv() {
    const editButton = document.getElementById("submitButton");
    const editableDiv = document.getElementById("name");
    const editableDiv2 = document.getElementById("address");
    const divState = editableDiv.getAttribute("contentEditable");
    const divState2 = editableDiv2.getAttribute("contentEditable");
    if (divState === 'false' && divState2 === 'false') {
        console.log(divState);
        console.log(divState2);
        editableDiv.setAttribute("contentEditable", 'true');
        editableDiv2.setAttribute("contentEditable", 'true');
        clearDivContent("name");
        clearDivContent("address");
    }
    else {
        console.log(divState);
        console.log(divState2);
        editableDiv.setAttribute("contentEditable", 'false');
        editableDiv2.setAttribute("contentEditable", 'false');
    }
}

function clearDivContent(id) {
    document.getElementById(id).innerText = "";
}