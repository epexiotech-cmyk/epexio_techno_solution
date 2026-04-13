/**
 * Footer Loader Script
 * Epexio Techno Solutions
 */

document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.getElementById('footer-placeholder');
    if (!placeholder) return;

    // Determine path (relative to components directory)
    const isInSubdir = window.location.pathname.includes('/solutions/');
    const componentPath = isInSubdir ? '../components/footer.html' : 'components/footer.html';

    fetch(componentPath)
        .then(response => {
            if (!response.ok) throw new Error('Footer component not found');
            return response.text();
        })
        .then(data => {
            placeholder.innerHTML = data;
            if (isInSubdir) adjustFooterLinks(placeholder);
        })
        .catch(err => {
            console.error('Core Logic: Error loading footer:', err);
        });

    /**
     * Adjusts relative links for subdirectory pages
     */
    function adjustFooterLinks(container) {
        const links = container.querySelectorAll('a');
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:')) {
                if (href.startsWith('solutions/')) {
                    // Already in solutions/, so 'solutions/web-dev.html' -> 'web-dev.html'
                    link.setAttribute('href', href.replace('solutions/', ''));
                } else {
                    // Up one level for 'index.html', etc.
                    link.setAttribute('href', '../' + href);
                }
            }
        });

        // Adjust logo image path if needed
        const logoImg = container.querySelector('.footer-logo');
        if (logoImg) {
            const src = logoImg.getAttribute('src');
            if (src && src.startsWith('/')) {
                // Keep absolute paths as-is
            } else if (src) {
                logoImg.setAttribute('src', '../' + src);
            }
        }
    }
});
