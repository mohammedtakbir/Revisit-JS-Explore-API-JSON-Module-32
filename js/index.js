function loadUsers2() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(res => res.json())
        .then(data => displayUsers(data));
}

function displayUsers(users) {
    const userContainer = document.getElementById('user-container');
    for(const user of users){
        const h3 = document.createElement('h3');
        h3.innerText = user.name;
        userContainer.appendChild(h3);
    };
}