function signin() {
    var storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        document.getElementById('userGreeting').innerText = storedUsername;
        document.getElementById('signupPage').classList.add('hidden');
        document.getElementById('plannerPage').classList.remove('hidden');
       }}

function signup() {
    var username = document.getElementById('username').value;
    localStorage.setItem('username', username);
    document.getElementById('userGreeting').innerText = username;
    document.getElementById('signupPage').classList.add('hidden');
    document.getElementById('plannerPage').classList.remove('hidden');}