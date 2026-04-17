/**
 * Automation & Tools: Intelligent Revealed Logic
 * Custom triggers for the "Electric Intelligence" Design System
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- CHAOS PHYSICS ENGINE ---
    // Strictly constrained safe zones (avoiding navbar and screen edges)
    const zones = [
        { x: [5, 10], y: [10, 25] },   // Row 1: Left
        { x: [38, 45], y: [5, 25] },   // Row 1: Center
        { x: [72, 80], y: [10, 25] },  // Row 1: Right
        { x: [20, 30], y: [50, 70] },  // Row 2: Left-Center
        { x: [55, 65], y: [50, 70] }   // Row 2: Right-Center
    ];

    class ChaosCard {
        constructor(el, index) {
            this.el = el;
            const zone = zones[index % zones.length];
            
            // Constrained scatter to ensure visibility
            this.baseX = Math.random() * (zone.x[1] - zone.x[0]) + zone.x[0];
            this.baseY = Math.random() * (zone.y[1] - zone.y[0]) + zone.y[0];
            
            // Minimal drift to prevent wandering off-screen (Legibility first)
            this.x = (Math.random() - 0.5) * 20; 
            this.y = (Math.random() - 0.5) * 20;
            this.vx = (Math.random() - 0.5) * 0.08; 
            this.vy = (Math.random() - 0.5) * 0.08; 
            this.rotation = (Math.random() - 0.5) * 5; // Very subtle
            this.rv = (Math.random() - 0.5) * 0.02; 
            
            this.isSettled = false;

            // Apply position relative to full-width chaos-grid
            if (window.innerWidth > 768) {
                this.el.style.left = `${this.baseX}%`;
                this.el.style.top = `${this.baseY}%`;
            }
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

    const cards = Array.from(document.querySelectorAll('.physics-card')).map((el, index) => new ChaosCard(el, index));
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

    // --- ARCHITECTURE KINETIC REVEAL ---
    class ArchitectureAnimator {
        constructor() {
            this.container = document.querySelector('.connectivity-viz');
            if (!this.container) return;

            this.cards = Array.from(this.container.querySelectorAll('.design-card'));
            this.lines = Array.from(this.container.querySelectorAll('.connection-line'));
            this.hasStarted = false;

            this.targets = [
                { x: 15, y: 16.6 }, // Top Left
                { x: 85, y: 16.6 }, // Top Right
                { x: 15, y: 83.3 }, // Bottom Left
                { x: 85, y: 83.3 }  // Bottom Right
            ];

            this.init();
        }

        init() {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && !this.hasStarted) {
                    this.hasStarted = true;
                    setTimeout(() => this.launchSequence(), 600);
                }
            }, { threshold: 0.3 });

            observer.observe(this.container);
        }

        async launchSequence() {
            for (let i = 0; i < this.cards.length; i++) {
                await this.animateCard(i);
                await this.delay(300); // Rhythmic delay between cards
            }
        }

        animateCard(index) {
            return new Promise((resolve) => {
                const card = this.cards[index];
                const line = this.lines[index % this.lines.length];
                const target = this.targets[index];
                
                let progress = 0;
                let velocity = 0;
                const stiffness = 0.05; // Softer spring for expert feel
                const damping = 0.88;

                const step = () => {
                    const force = (1 - progress) * stiffness;
                    velocity += force;
                    velocity *= damping;
                    progress += velocity;

                    // Update Card Position & Scale
                    const currentX = 50 + (target.x - 50) * progress;
                    const currentY = 50 + (target.y - 50) * progress;
                    const currentScale = progress;
                    const currentOpacity = Math.min(progress * 2, 1);

                    card.style.left = `${currentX}%`;
                    card.style.top = `${currentY}%`;
                    card.style.transform = `translate(-50%, -50%) scale(${currentScale})`;
                    card.style.opacity = currentOpacity;

                    // Update SVG Line (Revealing from brain)
                    if (line) {
                        const dashOffset = 1000 - (progress * 1000);
                        line.style.strokeDashoffset = dashOffset;
                        line.style.opacity = currentOpacity;
                    }

                    if (progress < 0.999 || Math.abs(velocity) > 0.001) {
                        requestAnimationFrame(step);
                        if (progress > 0.65) resolve(); // Start next card earlier for a flowing sequence
                    } else {
                        card.classList.add('settled');
                        card.style.left = `${target.x}%`;
                        card.style.top = `${target.y}%`;
                        card.style.transform = `translate(-50%, -50%) scale(1)`;
                        resolve();
                    }
                };

                requestAnimationFrame(step);
            });
        }

        delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    }

    // --- ROI LIVE DATA COUNTERS ---
    class ROICounter {
        constructor() {
            this.monitors = document.querySelectorAll('.stat-monitor');
            if (!this.monitors.length) return;

            this.hasCounted = new Set();
            this.init();
        }

        init() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !this.hasCounted.has(entry.target)) {
                        this.animateMonitor(entry.target);
                        this.hasCounted.add(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            this.monitors.forEach(m => observer.observe(m));
        }

        animateMonitor(el) {
            const target = parseInt(el.getAttribute('data-target'));
            const valueDisplay = el.querySelector('.stat-value');
            const progressFill = el.querySelector('.progress-fill');
            const isUptime = el.querySelector('.monitor-tag').textContent === 'CORE_UPTIME';
            
            let current = 0;
            const duration = 2000; // 2 seconds
            const startTime = performance.now();

            const update = (now) => {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing (OutQuad)
                const easedProgress = 1 - (1 - progress) * (1 - progress);
                current = Math.floor(easedProgress * target);

                if (isUptime) {
                    valueDisplay.textContent = `${current}/7`;
                    if (progressFill) progressFill.style.width = `${(current / 24) * 100}%`;
                } else {
                    valueDisplay.textContent = `${current}%`;
                    if (progressFill) progressFill.style.width = `${current}%`;
                }

                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            };

            requestAnimationFrame(update);
        }
    }

    // Initialize systems
    if (document.querySelector('.connectivity-viz')) {
        new ArchitectureAnimator();
    }
    new ROICounter();
});
