function loadPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(res => res.json())
        .then(data => displayPosts(data))
}
function displayPosts(posts) {
    const container = document.getElementById('post-container');
    for (const post of posts) {
        const { body, id, title } = post;
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <title>Title: ${title}</title>
        <p>Post: ${body}</p>
        <p>
         <small>User: ${id}</small>
        </p>
        `;
        container.appendChild(div)
    }
}
loadPosts();