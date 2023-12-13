// document.addEventListener('DOMContentLoaded', function () {
//     const nameElement = document.querySelector('#name');
//     const usernameElement = document.querySelector('#username');
//     const avatarElement = document.querySelector('#avatar');
//     const reposElement = document.querySelector('#repos');
//     const followersElement = document.querySelector('#followers');
//     const followingElement = document.querySelector('#following');
//     const linkElement = document.querySelector('#link');

//     fetch('https://api.github.com/users/Douglas-Cunha40')
//         .then(function (res) {
//             return res.json();
//         })
//         .then(function(json){
//         nameElement.innerText = json.name;
//         usernameElement.innerText = json.login;
//         avatarElement.src = json.avatar_url;
//         followingElement.innerText = json.following;
//         followersElement.innerText = json.followers;
//         reposElement.innerText = json.public_repos;
//         linkElement.href = json.html_url;
//         })
// })

$(document).ready(function () {
    const nameElement = $('#name');
    const usernameElement = $('#username');
    const avatarElement = $('#avatar');
    const reposElement = $('#repos');
    const followersElement = $('#followers');
    const followingElement = $('#following');
    const linkElement = $('#link');

    $.get('https://api.github.com/users/Douglas-Cunha40', function (data) {
        nameElement.text(data.name);
        usernameElement.text(data.login);
        avatarElement.attr('src', data.avatar_url);
        followingElement.text(data.following);
        followersElement.text(data.followers);
        reposElement.text(data.public_repos);
        linkElement.attr('href', data.html_url);
    });
});