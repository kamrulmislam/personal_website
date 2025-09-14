// Import each section as a JavaScript module
import header from './sections/header.js';
import hero from './sections/hero.js';
import projects from './sections/projects.js';
import research from './sections/research.js';
import skills from './sections/skills.js';
import contact from './sections/contact.js';

// Wait for the DOM to be fully loaded before rendering
document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app-container');
    if (appContainer) {
        // Render each section by appending its HTML string to the container
        appContainer.innerHTML = `
            ${header}
            ${hero}
            ${research}
            ${contact}
        `;
        // Note: Projects and Skills section is currently commented out
        // ${projects}
        // ${skills}

        // Handle mobile menu logic (copy and paste from old file)
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    } else {
        console.error('Error: app-container element not found.');
    }
});
