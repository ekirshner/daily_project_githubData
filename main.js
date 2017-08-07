
let ul1 = document.querySelector("#basics");
let ul2 = document.querySelector("#story");
let h1 = document.querySelector("h1");

function myFunc () {
    
    let myInformation = JSON.parse(this.responseText);
    console.log(myInformation);
    ul1.innerHTML = `
    <li><span>Name:</span> ${myInformation.name}</li>
    <li><span>Github URL:</span> ${myInformation.html_url}</li>
    <li><span>Email:</span> ${myInformation.email}</li>
    <li><span>Company:</span> ${myInformation.company}</li>
    <li><span>Website:</span> ${myInformation.url}</li>
    `
    h1.innerHTML = myInformation.name;
    ul2.innerHTML = `
    <p>${myInformation.bio}</p>
    <img src="${myInformation.avatar_url}">`
}

let request = new XMLHttpRequest();
request.open("GET","http://192.168.1.12:8000/octocat");
request.addEventListener("load", myFunc)
request.send();


