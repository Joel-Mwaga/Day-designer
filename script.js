function signup() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (username.trim() === "" || email.trim() === "") {
        alert("Please fill in all fields to continue.");
        return;
    }
    
    document.getElementById("signupPage").classList.add("hidden");
    document.getElementById("plannerPage").classList.remove("hidden");
    document.getElementById("userGreeting").innerText = username;
}

function addActivity() {
    let activityInput = document.getElementById("activity").value;
    let timeInput = document.getElementById("time").value;
    
    if (activityInput.trim() === "" || timeInput === "") {
        alert("Oops! Please enter both activity and time.");
        return;
    }

    let ul = document.getElementById("activityList");
    let li = document.createElement("li");
    li.innerHTML = `${timeInput} - ${activityInput} <button onclick="completeActivity(this)">✔</button> <button onclick="removeActivity(this)">❌</button>`;
    ul.appendChild(li);
    
    document.getElementById("activity").value = "";
    document.getElementById("time").value = "";
}

function completeActivity(button) {
    let li = button.parentElement;
    li.classList.toggle("completed");
}

function removeActivity(button) {
    let li = button.parentElement;
    li.remove();
}