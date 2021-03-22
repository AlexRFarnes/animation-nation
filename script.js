const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

function toggleNav() {
    // Toggle menu bars opne/close
    menuBars.classList.toggle('change');
    // Slide nav
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')) {
        // Animate in 
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        // Animate in - Nav items
        navItems.forEach((navItem, idx) => {
            navItem.classList.replace(`slide-out-${idx + 1}`,`slide-in-${idx + 1}`)
        })
    } else {
        // Animate out
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // Animate out - Nav items
        navItems.forEach((navItem, idx) => {
            navItem.classList.replace(`slide-in-${idx + 1}`,`slide-out-${idx + 1 }`)
        })
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach(navItem => navItem.addEventListener('click', toggleNav))