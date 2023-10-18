

console.log('Namaste Bharat');

let wrapper = document.getElementById('wrapper');
let container = document.getElementById('container');
let headingH1 = document.getElementById('headingH1');
let mode = document.getElementById('mode');
let dark = document.getElementById('dark');
let light = document.getElementById('light');
let searchForm = document.getElementById('searchForm');
let searchGitId = document.getElementById('searchGitId');
let userNotFound = document.getElementById('userNotFound');
let btn = document.getElementById('btn');
let profileContainer = document.getElementById('profileContainer');
let gitPhoto = document.getElementById('gitPhoto');
let candidateName = document.getElementById('candidateName');
let candidateJoin = document.getElementById('candidateJoin');
let username = document.getElementById('username');
let description = document.getElementById('description');
let otherDetails = document.getElementById('otherDetails');
let repo = document.querySelector('.repo');
let followers = document.querySelector('.followers');
let following = document.querySelector('.following');
let repoSpan = document.getElementById('repoSpan');
let followersSpan = document.getElementById('followersSpan');
let followingSpan = document.getElementById('followingSpan');
let userLocation = document.getElementById('location');
let xHref = document.getElementById('xHref');
let locationUser = document.getElementById('locationUser');
let x = document.getElementById('x');
let profileLink = document.getElementById('profileLink');
let company = document.getElementById('company');
let link = document.getElementById('link');
let twitter = document.getElementById('twitter');
let office = document.getElementById('office');
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let url = "https://api.github.com/users/";
let finalData = {};

function darkMode() {
    wrapper.style.backgroundColor = "#141D2F";
    container.style.backgroundColor = "#141D2F";
    headingH1.style.color = "white";
    mode.style.color = "white";
    mode.innerHTML = "LIGHT";
    dark.style.display = "none";
    light.style.display = "block";
    searchForm.style.backgroundColor = "#1D2A47";
    profileContainer.style.backgroundColor = "#1D2A47";
    candidateName.style.color = "white";
    candidateJoin.style.color = "white";
    description.style.color = "white";
    otherDetails.style.backgroundColor = "#141D2F";
    repo.style.color = "white";
    followers.style.color = "white";
    following.style.color = "white";
    repoSpan.style.color = "white";
    followersSpan.style.color = "white";
    followingSpan.style.color = "white";
    if(finalData.location){
        locationUser.style.color = "white";
    }
    if(finalData.blog != "" && finalData.blog != null){
        profileLink.style.color = "white";
        link.style.color = "white";
    }
    if(finalData.twitter_username){
        twitter.style.color = "white";
        x.style.color = "white";
    }
    if(finalData.company){
        office.style.color = "white";
        company.style.color = "white";
    }
}

function lightMode() {
    wrapper.style.backgroundColor = "#f6f8ff";
    container.style.backgroundColor = "#f6f8ff";
    headingH1.style.color = "#4B6A9B";
    mode.style.color = "#2b3442";
    mode.innerHTML = "DARK";
    dark.style.display = "block";
    light.style.display = "none";
    searchForm.style.background = "none";
    profileContainer.style.background = "#fefefe";
    candidateName.style.color = "black";
    candidateJoin.style.color = "#4b6a9b";
    description.style.color = "#4b6a9b";
    otherDetails.style.backgroundColor = "#F5F8FE";
    repo.style.color = "#4b6a9b";
    followers.style.color = "#4b6a9b";
    following.style.color = "#4b6a9b";
    repoSpan.style.color = "black";
    followersSpan.style.color = "black";
    followingSpan.style.color = "black";
    locationUser.style.color = "#8F95A3";
    x.style.color = "#8F95A3";
    profileLink.style.color = '#8F95A3';
    company.style.color = '#8F95A3';
    link.style.color = '#8F95A3';
    twitter.style.color = '#8F95A3';
    office.style.color = '#8F95A3';
}

dark.addEventListener('click', darkMode);

light.addEventListener('click', lightMode);

function fetchResult(event) {
    event.preventDefault();
    let inputValue = searchGitId.value;
    if (inputValue == "") {
        return;
    }
    fetchGithubDetails(url + inputValue);
    searchGitId.value = "";
}

function getDate(params) {
    let date = new Date(params);
    let finalDate = date.toLocaleDateString();
    // let splitedDate = finalData.split('/');
    console.log(finalDate);
    return finalDate;
}

searchForm.addEventListener('submit', fetchResult);
btn.addEventListener('click', fetchResult);

function insertIntoDOM() {
    
    if(finalData.avatar_url){
        gitPhoto.src = finalData.avatar_url;
    }
    else{
        gitPhoto.src = "Not Available";
    }

    if(finalData.name){
        candidateName.innerHTML = finalData.name;
    }
    else{
        candidateName.innerHTML = "Not Available";
    }
    // candidateJoin.innerHTML = getDate(value.created_at);
    
    if(finalData.created_at){
        let date = getDate(valfinalDataue.created_at);
        console.log(date);
        candidateJoin.innerHTML = date;
    }
    else{
        candidateJoin.innerHTML = "Not Available";
    }

    if(finalData.bio){
        description.innerHTML = finalData.bio;
    }
    else{
        description.innerHTML = "Not Available";
    }
    
    if(finalData.public_repos){
        repoSpan.innerHTML = finalData.public_repos;
    }
    else{
        repoSpan.innerHTML = 0;
    }
    
    if(finalData.followers){
        followersSpan.innerHTML = finalData.followers;
    }
    else{
        followersSpan.innerHTML = 0;
    }
    
    if(finalData.following){
        followingSpan.innerHTML = finalData.following;
    }
    else{
        followingSpan.innerHTML = 0;
    }
    
    if(finalData.login){
        username.innerHTML = `@${finalData.login}`;
    }
    else{
        username.innerHTML = "Not Available";
    }
    
    if(finalData.location){
        userLocation.innerHTML = finalData.location;
    }
    else{
        userLocation.innerHTML = "Not Available";
    }
    
    if(finalData.blog){
        link.innerHTML = finalData.blog;
    }
    else{
        link.innerHTML = "Not Available";
    }
    
    if(finalData.twitter_username){
        twitter.innerHTML = finalData.twitter_username;
        xHref.href = `https://twitter.com/${finalData.twitter_username}`;
    }
    else{
        twitter.innerHTML = "Not Available";
    }
    
    if(finalData.company){
        company.innerHTML = finalData.company;
    }
    else{
        company.innerHTML = "Not Available";
    }
}

async function fetchGithubDetails(url) {
    try {
        const data = await fetch(url);
        finalData = await data.json();
        if(finalData.login){
            insertIntoDOM();
        }
        else{
            setTimeout(() => {
                userNotFound.style.display = 'none';
            }, 2000);
            userNotFound.style.display = 'block';
        }
    } catch (error) {
        setTimeout(() => {
            userNotFound.style.display = 'none';
        }, 2000);
        userNotFound.style.display = 'blcok';
    }
}