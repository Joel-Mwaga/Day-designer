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
    document.getElementById('plannerPage').classList.remove('hidden');
}
document.querySelectorAll('.tick').forEach(button => {
    button.addEventListener('click', function() {
        this.parentElement.classList.toggle('crossed');
    });
});

document.querySelectorAll('.remove').forEach(button => {
    button.addEventListener('click', function() {
        this.parentElement.remove();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    signin();
    const activities = document.querySelectorAll('.activity');

    activities.forEach(activity => {
        activity.addEventListener('click', function() {
            alert(`Activity ${this.innerText} clicked!`);
        });
    });
});