// =========================================
// CAMPUS CONNECT - EXPERIMENT 3
// DOM MANIPULATION, EVENTS & DYNAMIC CONTENT
// =========================================

console.log("Campus Connect JavaScript loaded!");


// =========================================
// INPUT EVENT
// Displays name in real time
// =========================================

document.addEventListener("input", (event) => {

    if (event.target.id === "studentName") {

        const name = event.target.value.trim();

        const nameOutput =
            document.getElementById("nameOutput");

        if (name === "") {

            nameOutput.textContent =
                "Start typing to see your name here.";

        } else {

            nameOutput.textContent =
                `Hello, ${name}! Welcome to Campus Connect.`;

        }

    }

});


// =========================================
// CLICK EVENTS
// =========================================

document.addEventListener("click", (event) => {


    // -------------------------------
    // WELCOME BUTTON
    // -------------------------------

    if (event.target.id === "welcomeBtn") {

        const welcomeMessage =
            document.getElementById("welcomeMessage");

        welcomeMessage.textContent =
            "Welcome to the Campus Connect Portal!";

        welcomeMessage.classList.toggle(
            "message-highlight"
        );

    }


    // -------------------------------
    // ADD ACTIVITY BUTTON
    // -------------------------------

    if (event.target.id === "addActivityBtn") {

        addActivity();

    }


    // -------------------------------
    // REMOVE ACTIVITY
    // -------------------------------

    if (event.target.classList.contains("remove-btn")) {

        const listItem =
            event.target.parentElement;

        listItem.remove();

    }

});


// =========================================
// KEYBOARD EVENT
// Press ENTER to add activity
// =========================================

document.addEventListener("keydown", (event) => {

    if (
        event.target.id === "activityInput" &&
        event.key === "Enter"
    ) {

        addActivity();

    }

});


// =========================================
// ADD NEW ACTIVITY FUNCTION
// =========================================

function addActivity() {

    const activityInput =
        document.getElementById("activityInput");

    const activityList =
        document.getElementById("activityList");


    const activityName =
        activityInput.value.trim();


    // Don't add empty activity

    if (activityName === "") {

        return;

    }


    // Create new list item

    const listItem =
        document.createElement("li");


    // Create activity text

    const activityText =
        document.createElement("span");

    activityText.textContent =
        activityName;


    // Create remove button

    const removeButton =
        document.createElement("button");

    removeButton.textContent =
        "Remove";

    removeButton.className =
        "remove-btn";


    // Add elements to list item

    listItem.appendChild(activityText);

    listItem.appendChild(removeButton);


    // Add list item to activity list

    activityList.appendChild(listItem);


    // Clear input

    activityInput.value = "";

    activityInput.focus();

}