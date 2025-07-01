/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.addEventListener('DOMContentLoaded', () => {
  const bg = document.getElementById('main-bg');
  bg.addEventListener('click', () => {
    bg.classList.add('show-image');
  });
});

// function showAboutMe() {
//   const about = document.getElementById('aboutMe');
//   about.classList.remove('hidden');
//   setTimeout(() => {
//     about.classList.add('show');
//   }, 10); // delay to allow transition
//   document.body.onclick = null; // disable further clicks
// }

// .about-me {
//     /* display: flex; */
//     align-items: center;

//     /* Show after clicking */
//     opacity: 1;
// }

// .about-me.show-image::after {
//     opacity: 0;
// }