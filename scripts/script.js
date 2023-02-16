// contact page
// github link

const github = document.getElementById('github');
const twitter = document.getElementById('twitter');

github.addEventListener('click', ()=>location.href = "https://github.com/nishaYO");
twitter.addEventListener('click', ()=>location.href = "https://twitter.com/Nsinghal1234");

github.addEventListener('mouseenter', ()=>{github.src = "/images/github_icon copy.png"});
github.addEventListener('mouseleave', ()=>{github.src = "/images/github_icon.png"});

twitter.addEventListener('mouseenter', ()=>{twitter.src = "/images/twitter_icon copy.png"});
twitter.addEventListener('mouseleave', ()=>{twitter.src = "/images/twitter_icon.png"});