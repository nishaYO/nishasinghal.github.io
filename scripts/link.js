// WORK PAGE

// links of the source codes of the projects
// const project1 = document.getElementById('project1');
// const project2 = document.getElementById('project2');
// const project3 = document.getElementById('project3');

// project1.addEventListener('click', ()=>location.href = "https://github.com/nishaYO/Random-Jokes-Web-Page");
// project2.addEventListener('click', ()=>location.href = "https://github.com/nishaYO/lantern-balloon-CSS-animation");
// project3.addEventListener('click', ()=>location.href = "https://scratch.mit.edu/projects/783214661/");



// CONTACT PAGE

// github and twitter link

// creating variables
const github = document.getElementById('github');
const twitter = document.getElementById('twitter');

// open link when clicked
github.addEventListener('click', ()=>location.href = "https://github.com/nishaYO");
twitter.addEventListener('click', ()=>location.href = "https://twitter.com/Nsinghal1234");

// color change when hovered
github.addEventListener('mouseenter', ()=>{github.src = "https://nishayo.github.io/nishasinghal.github.io/images/icons/github_icon copy.png"});
github.addEventListener('mouseleave', ()=>{github.src = "https://nishayo.github.io/nishasinghal.github.io/images/icons/github_icon.png"});

// color change back to black when hoverout
twitter.addEventListener('mouseenter', ()=>{twitter.src = "https://nishayo.github.io/nishasinghal.github.io/images/icons/twitter_icon copy.png"});
twitter.addEventListener('mouseleave', ()=>{twitter.src = "https://nishayo.github.io/nishasinghal.github.io/images/icons/twitter_icon.png"});