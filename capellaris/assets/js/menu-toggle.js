document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
});


// Toggle dark mode
const darkModeToggle = document.createElement('button');
darkModeToggle.innerText = '🌙' ;
darkModeToggle.className = 'fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full shadow-lg';
document.body.appendChild(darkModeToggle);
// Add event listener to toggle dark mode
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
});

if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerText = '☀️';
}