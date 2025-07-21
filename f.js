const kebabMenu = document.getElementById('kebab-menu');
const navList = document.getElementById('nav-list');
const navLinks = navList.querySelectorAll('a');
const screens = document.querySelectorAll('main .screen');

kebabMenu.addEventListener('click', () => {
  navList.classList.toggle('open');
});

// Function to switch screens
function switchScreen(screenId) {
  screens.forEach(screen => {
    screen.classList.toggle('active', screen.id === screenId);
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.screen === screenId);
  });

  // For small screens, close menu after selection
  if (navList.classList.contains('open')) {
    navList.classList.remove('open');
  }
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const screen = link.dataset.screen;
    switchScreen(screen);
  });
});

// Optional: default to 'received' screen on page load
switchScreen('items');

const dropdownLinks = document.querySelectorAll('.dropdown-content a');
const selectedItem = document.getElementById('selected-item');

dropdownLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const value = link.getAttribute('data-value');
    selectedItem.textContent = `You selected: ${value.charAt(0).toUpperCase() + value.slice(1)}`;
    
    // If you'd like to do more (like update screen or content), add logic here
    
    // Close dropdown manually (optional)
    // you can also add a click outside listener to close dropdown — for now CSS handles hover show/hide
  });
});

