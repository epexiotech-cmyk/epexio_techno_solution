/**
 * Automation & Tools: Intelligent Revealed Logic
 * Custom triggers for the "Electric Intelligence" Design System
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- CHAOS PHYSICS ENGINE ---
    class ChaosCard {
        constructor(el) {
            this.el = el;
            this.x = (Math.random() - 0.5) * 40; // Random initial offset
            this.y = (Math.random() - 0.5) * 40;
            this.vx = (Math.random() - 0.5) * 0.2;
            this.vy = (Math.random() - 0.5) * 0.2;
            this.rotation = (Math.random() - 0.5) * 5;
            this.rv = (Math.random() - 0.5) * 0.1;
            
            this.targetX = 0;
            this.targetY = 0;
            this.isSettled = false;
        }

        update(mouseX, mouseY) {
            if (!this.isSettled) {
                // Drift Physics
                this.x += this.vx;
                this.y += this.vy;
                this.rotation += this.rv;

                // Bounce
                if (Math.abs(this.x) > 50) this.vx *= -1;
                if (Math.abs(this.y) > 50) this.vy *= -1;
            }

            // Mouse Interaction (Push/Tilt)
            const rect = this.el.getBoundingClientRect();
            const cardCenterX = rect.left + rect.width / 2;
            const cardCenterY = rect.top + rect.height / 2;
            const dist = Math.hypot(mouseX - cardCenterX, mouseY - cardCenterY);

            if (dist < 300) {
                const angle = Math.atan2(mouseY - cardCenterY, mouseX - cardCenterX);
                const force = (300 - dist) / 300;
                
                // Tilt effect
                const tiltX = Math.sin(angle) * force * 15;
                const tiltY = -Math.cos(angle) * force * 15;
                
                this.el.style.transform = `
                    translate(${this.x}px, ${this.y}px) 
                    rotateX(${tiltX}deg) 
                    rotateY(${tiltY}deg) 
                    rotateZ(${this.rotation}deg)
                    scale(${1 + force * 0.05})
                `;
            } else {
                this.el.style.transform = `translate(${this.x}px, ${this.y}px) rotateZ(${this.rotation}deg)`;
            }
        }
    }

    const cards = Array.from(document.querySelectorAll('.physics-card')).map(el => new ChaosCard(el));
    let mouseX = 0, mouseY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animatePhysics() {
        cards.forEach(card => card.update(mouseX, mouseY));
        requestAnimationFrame(animatePhysics);
    }

    animatePhysics();

    // Intersection Observer
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Potential to set isSettled = true here if you want them to stop drifting
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));

    // --- LINE DRAW OBSERVER ---
    const lineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const lines = entry.target.querySelectorAll('.connection-line');
                lines.forEach((line, index) => {
                    setTimeout(() => {
                        line.classList.add('active');
                    }, index * 200);
                });
                lineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const vizContainer = document.querySelector('.connectivity-viz');
    if (vizContainer) lineObserver.observe(vizContainer);
});
