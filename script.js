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
   
    function completeActivity(button) {
        const listItem = button.parentElement;
        listItem.style.textDecoration = 'line-through';
        button.disabled = true;
    }

    function removeActivity(button) {
        const listItem = button.parentElement;
        listItem.remove();
    }