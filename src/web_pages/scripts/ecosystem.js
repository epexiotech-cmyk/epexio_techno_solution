/**
 * What We Automate: Rotating Dial Phone Interactive Ecosystem
 * Concept: Classic Rotating Dial Phone (Scroll Triggered)
 */

class AutomationEcosystem {
    constructor() {
        this.canvas = document.getElementById('ecosystem-canvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');

        this.engine = Matter.Engine.create();
        this.engine.world.gravity.y = 0;

        this.nodes = [];
        this.core = null;
        this.activeIndex = -1;
        this.hasStarted = false;

        // Dial properties
        this.rotationAngle = 0;
        this.targetRotation = 0;
        this.orbitRadius = 320;
        this.isAnimatingPanel = false;

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('scroll', () => this.handleScroll(), { passive: true });

        this.setupCore();
        this.setupNodes();

        // Initial state: Node 1 is focus
        this.handleScroll();

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !this.hasStarted) {
                this.hasStarted = true;
                this.animate();
            }
        }, { threshold: 0.1 });

        observer.observe(document.getElementById('what-we-automate'));
    }

    handleScroll() {
        const section = document.getElementById('what-we-automate');
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = section.offsetHeight;

        // Progress is 0 when the section top is at 0 (starts sticking)
        // and 1 when the section bottom is at windowHeight (ends sticking)
        // Sticky depth = sectionHeight - windowHeight
        let progress = -rect.top / (sectionHeight - windowHeight);
        progress = Math.max(0, Math.min(1, progress));

        // Map progress to 9 discrete steps (0 to 8)
        const totalNodes = this.nodes.length;
        const rawIndex = Math.floor(progress * totalNodes);
        const index = Math.max(0, Math.min(totalNodes - 1, rawIndex));

        // Dial Rotation: Each node takes 2PI / totalNodes
        // We rotate the dial so that the active node is at the "Focus" position (3 o'clock = 0 rad)
        // targetRotation = -(index * (2PI / totalNodes))
        this.targetRotation = -(index * (Math.PI * 2 / totalNodes));

        if (index !== this.activeIndex) {
            this.activeIndex = index;
            this.updatePanel(this.nodes[index]);
        }
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.updateCorePosition();
    }

    updateCorePosition() {
        if (this.core) {
            const containerWidth = Math.min(window.innerWidth, 1600);
            const offset = (window.innerWidth - containerWidth) / 2;
            const firstColWidth = containerWidth - 420 - 120;
            const centerX = offset + (firstColWidth / 2) - 60; // Sync with CSS shift
            Matter.Body.setPosition(this.core, { x: centerX, y: this.canvas.height / 2 });
        }
    }

    setupCore() {
        const containerWidth = Math.min(window.innerWidth, 1600);
        const offset = (window.innerWidth - containerWidth) / 2;
        const firstColWidth = containerWidth - 420 - 120;
        const centerX = offset + (firstColWidth / 2) - 60; // Sync with CSS shift

        this.core = Matter.Bodies.circle(centerX, this.canvas.height / 2, 80, {
            isStatic: true,
            label: 'core'
        });
        Matter.World.add(this.engine.world, this.core);
    }

    setupNodes() {
        const dataElements = document.querySelectorAll('.node-data');
        dataElements.forEach((el, i) => {
            const id = el.dataset.id;
            const title = el.dataset.title;
            const desc = el.dataset.desc;
            const icon = el.dataset.icon;
            const color = el.dataset.color;

            // Initial positions distributed in a circle
            const baseAngle = (i / dataElements.length) * Math.PI * 2;
            const x = this.core.position.x + Math.cos(baseAngle) * this.orbitRadius;
            const y = this.core.position.y + Math.sin(baseAngle) * this.orbitRadius;

            const body = Matter.Bodies.circle(x, y, 45, {
                frictionAir: 0.1,
                restitution: 0.5,
                density: 0.001,
                label: 'node'
            });

            this.nodes.push({
                body,
                id,
                title,
                desc,
                icon,
                color,
                baseAngle, // Fixed offset in the dial
                pulse: 1,
                targetScale: 1
            });

            Matter.World.add(this.engine.world, body);
        });
    }

    updatePanel(node) {
        const panel = document.getElementById('ecosystem-panel');
        if (!panel || this.isAnimatingPanel) return;

        const titleEl = document.getElementById('panel-title');
        const descEl = document.getElementById('panel-desc');
        const iconEl = document.getElementById('panel-icon');

        // Only update if it's a new node
        if (titleEl.textContent === node.title) return;

        this.isAnimatingPanel = true;

        // --- Physics "Sling" Animation ---
        // 1. Calculate distance to core for the pivot
        const rect = panel.getBoundingClientRect();
        const coreX = this.core.position.x;
        const panelX = rect.left + rect.width / 2;
        const pivotDist = panelX - coreX;

        // Set the pivot point to the core's center
        panel.style.transformOrigin = `-${pivotDist}px 50%`;

        // 2. Sling Out: Rotate along the same arc as the balls
        const exitRotation = -25; // degrees
        panel.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        panel.style.transform = `rotate(${exitRotation}deg) scale(0.9)`;
        panel.style.opacity = '0';

        setTimeout(() => {
            // Update Content
            titleEl.textContent = node.title;
            descEl.textContent = node.desc;
            iconEl.innerHTML = `<i class="${node.icon}"></i>`;
            iconEl.style.color = node.color;
            iconEl.style.filter = `drop-shadow(0 0 15px ${node.color}88)`;

            const bars = document.querySelectorAll('.bar-fill');
            if (bars.length >= 2) {
                bars[0].style.width = `${85 + Math.random() * 15}%`;
                bars[1].style.width = `${90 + Math.random() * 10}%`;
            }

            // 3. Sling In: Come from the opposite direction of the arc
            panel.style.transition = 'none';
            panel.style.transform = `rotate(${Math.abs(exitRotation)}deg) scale(0.9)`;

            // Force reflow
            panel.offsetHeight;

            panel.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            panel.style.transform = 'rotate(0deg) scale(1)';
            panel.style.opacity = '1';

            setTimeout(() => {
                this.isAnimatingPanel = false;
            }, 600);
        }, 500);
    }

    applyPhysics() {
        Matter.Engine.update(this.engine);

        // Smooth rotation interpolation (The "Heaviness" of the dial)
        this.rotationAngle += (this.targetRotation - this.rotationAngle) * 0.08;

        this.nodes.forEach((node, i) => {
            // Target position: Dial Rotation + Node's Base Angle
            // We want Node 1 (index 0) to be at angle 0 when index is 0.
            const targetAngle = node.baseAngle + this.rotationAngle;

            const tx = this.core.position.x + Math.cos(targetAngle) * this.orbitRadius;
            const ty = this.core.position.y + Math.sin(targetAngle) * this.orbitRadius;

            // Physics attraction to target slot
            const dx = tx - node.body.position.x;
            const dy = ty - node.body.position.y;

            Matter.Body.applyForce(node.body, node.body.position, {
                x: dx * 0.0008,
                y: dy * 0.0008
            });

            // Friction/Damping
            Matter.Body.setVelocity(node.body, {
                x: node.body.velocity.x * 0.92,
                y: node.body.velocity.y * 0.92
            });
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawConnections();
        this.drawCore();
        this.nodes.forEach((node, i) => this.drawNode(node, i === this.activeIndex));
    }

    drawCore() {
        const { x, y } = this.core.position;
        const time = performance.now() * 0.001;

        const grad = this.ctx.createRadialGradient(x, y, 40, x, y, 120);
        grad.addColorStop(0, 'rgba(138, 43, 226, 0.3)');
        grad.addColorStop(1, 'transparent');

        this.ctx.fillStyle = grad;
        this.ctx.beginPath();
        this.ctx.arc(x, y, 120, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.arc(x, y, 60 + Math.sin(time * 2) * 5, 0, Math.PI * 2);
        this.ctx.fillStyle = '#050507';
        this.ctx.strokeStyle = '#8A2BE2';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        this.ctx.font = '700 10px Space Grotesk';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('CORE SYSTEM', x, y);
    }

    drawNode(node, isActive) {
        const { x, y } = node.body.position;

        node.targetScale = isActive ? 1.4 : 1;
        node.pulse = node.pulse * 0.85 + node.targetScale * 0.15;

        const radius = 45 * node.pulse;

        // Glow
        if (isActive) {
            this.ctx.shadowBlur = 40;
            this.ctx.shadowColor = node.color;
        }

        // Sphere
        const grad = this.ctx.createRadialGradient(x - radius / 3, y - radius / 3, 5, x, y, radius);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
        grad.addColorStop(0.5, 'rgba(10, 10, 15, 0.8)');
        grad.addColorStop(1, node.color + '44');

        this.ctx.fillStyle = grad;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.strokeStyle = isActive ? node.color : 'rgba(255, 255, 255, 0.1)';
        this.ctx.lineWidth = isActive ? 3 : 1;
        this.ctx.stroke();

        this.ctx.shadowBlur = 0;

        // Glassmorphism Number
        const numCircleRadius = radius * 0.45;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(x, y, numCircleRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        this.ctx.fill();
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        this.ctx.lineWidth = 1.5;
        this.ctx.stroke();
        this.ctx.restore();

        this.ctx.fillStyle = 'white';
        this.ctx.font = `bold ${numCircleRadius * 1.2}px Space Grotesk`;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(node.id, x, y - (numCircleRadius * 0.15));

        if (isActive) {
            this.ctx.fillStyle = 'white';
            this.ctx.font = '600 14px Space Grotesk';
            this.ctx.fillText(node.title.split(' ')[0], x, y + radius + 25);
        }
    }

    drawConnections() {
        this.ctx.beginPath();
        this.ctx.lineWidth = 1;
        this.nodes.forEach((nodeA) => {
            const dCore = Math.hypot(nodeA.body.position.x - this.core.position.x, nodeA.body.position.y - this.core.position.y);
            if (dCore < 450) {
                const opacity = Math.max(0, 1 - dCore / 450) * 0.15;
                this.ctx.strokeStyle = `rgba(138, 43, 226, ${opacity})`;
                this.ctx.moveTo(nodeA.body.position.x, nodeA.body.position.y);
                this.ctx.lineTo(this.core.position.x, this.core.position.y);
            }
        });
        this.ctx.stroke();
    }

    animate() {
        this.applyPhysics();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('ecosystem-canvas')) {
        new AutomationEcosystem();
    }
});
