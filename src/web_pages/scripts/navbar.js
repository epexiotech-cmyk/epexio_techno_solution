/**
 * Navbar Loader and Interactive Logic
 * Epexio Techno Solutions
 */

document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.getElementById('navbar-placeholder');
    if (!placeholder) return;

    // Determine path to components (relative to current page)
    const isInSubdir = window.location.pathname.includes('/solutions/');
    const componentPath = isInSubdir ? '../components/navbar.html' : 'components/navbar.html';

    fetch(componentPath)
        .then(response => {
            if (!response.ok) throw new Error('Navbar not found');
            return response.text();
        })
        .then(data => {
            placeholder.innerHTML = data;
            if (isInSubdir) adjustLinks();
            initNavbar();
        })
        .catch(err => {
            console.error('Error loading navbar:', err);
        });

    function adjustLinks() {
        const navLinks = placeholder.querySelectorAll('a');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
                if (href.startsWith('solutions/')) {
                    // We are already in solutions/, so 'solutions/web-dev.html' becomes 'web-dev.html'
                    link.setAttribute('href', href.replace('solutions/', ''));
                } else {
                    // Other links like 'index.html' become '../index.html'
                    link.setAttribute('href', '../' + href);
                }
            }
        });
        // Also adjust logo link
        const logo = placeholder.querySelector('.logo');
        if (logo) {
            const logoHref = logo.getAttribute('href');
            if (logoHref && !logoHref.startsWith('http') && !logoHref.startsWith('/')) {
                logo.setAttribute('href', '../' + logoHref);
            }
        }
    }

    function initNavbar() {
        const navbar = document.querySelector('.navbar');
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const links = document.querySelectorAll('.nav-links a');
        
        // Get current filename (e.g., 'about.html')
        let currentPage = window.location.pathname.split('/').pop();
        if (currentPage === '' || currentPage === '/') currentPage = 'index.html';

        // 1. Highlight Active Page
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href && (href === currentPage || href.endsWith('/' + currentPage))) {
                link.classList.add('active');
                
                // If it's a dropdown link, highlight the parent toggle too
                const parentDropdown = link.closest('.dropdown');
                if (parentDropdown) {
                    const toggle = parentDropdown.querySelector('.dropdown-toggle');
                    if (toggle) toggle.classList.add('active');
                }

                // Special styling for active link if not a button
                if (!link.classList.contains('btn-primary')) {
                    link.style.color = 'var(--accent-glow)';
                    link.style.fontWeight = '700';
                }
            }
        });

        // 2. Mobile Menu Toggle
        if (hamburger && navLinks) {
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
            });

            // 2b. Mobile Dropdown Toggle
            const dropdown = document.querySelector('.dropdown');
            const dropdownToggle = document.querySelector('.dropdown-toggle');
            
            if (dropdownToggle && window.innerWidth <= 768) {
                dropdownToggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    dropdown.classList.toggle('open');
                });
            }

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navbar.contains(e.target)) {
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        hamburger.textContent = '☰';
                    }
                    if (dropdown && dropdown.classList.contains('open')) {
                        dropdown.classList.remove('open');
                    }
                }
            });
        }

        // 3. Scroll Animation (Shadow & Color change)
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }
});
