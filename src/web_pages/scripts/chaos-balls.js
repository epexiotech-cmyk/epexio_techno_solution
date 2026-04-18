/**
 * Chaos Balls: Interactive Physics Ecosystem (Original Version)
 * Engine: Matter.js
 * Visuals: HTML5 Canvas + Custom Glow Shaders (Simulated)
 */

class AutomationEcosystem {
    constructor() {
        this.canvas = document.getElementById('ecosystem-canvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        
        this.engine = Matter.Engine.create();
        this.engine.world.gravity.y = 0; // Zero Gravity
        
        this.nodes = [];
        this.core = null;
        this.mouseX = 0;
        this.mouseY = 0;
        this.activeNode = null;
        this.hasStarted = false;

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        window.addEventListener('click', () => this.handleMouseClick());

        this.setupCore();
        this.setupNodes();
        
        // Start simulation on intersection
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !this.hasStarted) {
                this.hasStarted = true;
                this.animate();
            }
        }, { threshold: 0.1 });

        observer.observe(document.getElementById('what-we-automate'));
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        if (this.core) {
            const containerWidth = Math.min(window.innerWidth, 1600);
            const offset = (window.innerWidth - containerWidth) / 2;
            const firstColWidth = containerWidth - 420 - 120; // 420 is right col, 120 is gap
            const centerX = offset + (firstColWidth / 2);
            Matter.Body.setPosition(this.core, { x: centerX, y: this.canvas.height / 2 });
        }
    }

    setupCore() {
        const containerWidth = Math.min(window.innerWidth, 1600);
        const offset = (window.innerWidth - containerWidth) / 2;
        const firstColWidth = containerWidth - 420 - 120;
        const centerX = offset + (firstColWidth / 2);

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

            // Random position around core
            const containerWidth = Math.min(window.innerWidth, 1600);
            const offset = (window.innerWidth - containerWidth) / 2;
            const firstColWidth = containerWidth - 420 - 120;
            const centerX = offset + (firstColWidth / 2);

            const angle = (i / dataElements.length) * Math.PI * 2;
            const dist = 250 + Math.random() * 100;
            const x = centerX + Math.cos(angle) * dist;
            const y = (this.canvas.height / 2) + Math.sin(angle) * dist;

            const body = Matter.Bodies.circle(x, y, 45, {
                frictionAir: 0.05,
                restitution: 0.8,
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
                pulse: 0,
                isHovered: false,
                targetScale: 1
            });

            Matter.World.add(this.engine.world, body);
        });
    }

    handleMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        this.mouseX = e.clientX - rect.left;
        this.mouseY = e.clientY - rect.top;

        // Check hover
        let foundHover = false;
        this.nodes.forEach(node => {
            const d = Math.hypot(this.mouseX - node.body.position.x, this.mouseY - node.body.position.y);
            if (d < 50) {
                if (!node.isHovered) this.onNodeHover(node);
                node.isHovered = true;
                foundHover = true;
            } else {
                node.isHovered = false;
            }
        });

        if (!foundHover && this.activeNode && !this.isClicking) {
            // Keep active node highlighted
        }
    }

    onNodeHover(node) {
        this.updatePanel(node);
    }

    handleMouseClick() {
        this.nodes.forEach(node => {
            const d = Math.hypot(this.mouseX - node.body.position.x, this.mouseY - node.body.position.y);
            if (d < 50) {
                this.activateNode(node);
            }
        });
    }

    activateNode(node) {
        this.activeNode = node;
        document.getElementById('ecosystem-panel').classList.add('active');
        this.updatePanel(node);
    }

    updatePanel(node) {
        const panel = document.getElementById('ecosystem-panel');
        const titleEl = document.getElementById('panel-title');
        const descEl = document.getElementById('panel-desc');
        const iconEl = document.getElementById('panel-icon');
        
        panel.classList.add('active');
        titleEl.textContent = node.title;
        descEl.textContent = node.desc;
        
        // Handle Icon (FontAwesome)
        iconEl.innerHTML = `<i class="${node.icon}"></i>`;
        iconEl.style.color = node.color;
        iconEl.style.filter = `drop-shadow(0 0 15px ${node.color}88)`;
        
        // Randomize stats for visual flair
        const bars = document.querySelectorAll('.bar-fill');
        bars[0].style.width = `${85 + Math.random() * 15}%`;
        bars[1].style.width = `${90 + Math.random() * 10}%`;
    }

    applyPhysics() {
        Matter.Engine.update(this.engine);

        this.nodes.forEach(node => {
            // 1. Magnetic Pull to Core
            const dx = this.core.position.x - node.body.position.x;
            const dy = this.core.position.y - node.body.position.y;
            const dist = Math.hypot(dx, dy);
            
            // Optimal Orbit Distance
            const orbitDist = 300;
            const forceMag = (dist - orbitDist) * 0.000005;
            
            Matter.Body.applyForce(node.body, node.body.position, {
                x: dx * forceMag,
                y: dy * forceMag
            });

            // 2. Magnetic Attraction to Mouse
            const mdx = this.mouseX - node.body.position.x;
            const mdy = this.mouseY - node.body.position.y;
            const mdist = Math.hypot(mdx, mdy);
            
            if (mdist < 400) {
                const mForce = (400 - mdist) * 0.000002;
                Matter.Body.applyForce(node.body, node.body.position, {
                    x: mdx * mForce,
                    y: mdy * mForce
                });
            }

            // 3. Soft Orbit Rotation
            const angle = Math.atan2(dy, dx) + 0.01;
            const targetX = this.core.position.x - Math.cos(angle) * dist;
            const targetY = this.core.position.y - Math.sin(angle) * dist;
            
            Matter.Body.applyForce(node.body, node.body.position, {
                x: (targetX - node.body.position.x) * 0.00001,
                y: (targetY - node.body.position.y) * 0.00001
            });
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw Connections First (Neural Web)
        this.drawConnections();

        // Draw Core
        this.drawCore();

        // Draw Nodes
        this.nodes.forEach(node => this.drawNode(node));
    }

    drawCore() {
        const { x, y } = this.core.position;
        const time = performance.now() * 0.001;
        
        // Outer Glow
        const grad = this.ctx.createRadialGradient(x, y, 40, x, y, 120);
        grad.addColorStop(0, 'rgba(138, 43, 226, 0.3)');
        grad.addColorStop(1, 'transparent');
        
        this.ctx.fillStyle = grad;
        this.ctx.beginPath();
        this.ctx.arc(x, y, 120, 0, Math.PI * 2);
        this.ctx.fill();

        // Inner Orb
        this.ctx.beginPath();
        this.ctx.arc(x, y, 60 + Math.sin(time * 2) * 5, 0, Math.PI * 2);
        this.ctx.fillStyle = '#050507';
        this.ctx.strokeStyle = '#8A2BE2';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        
        // Core Label
        this.ctx.fillStyle = 'white';
        this.ctx.font = '700 12px Space Grotesk';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('CORE SYSTEM', x, y + 5);
    }

    drawNode(node) {
        const { x, y } = node.body.position;
        const isHovered = node.isHovered || (this.activeNode === node);
        
        // Smooth scaling
        node.targetScale = isHovered ? 1.3 : 1;
        node.pulse = node.pulse * 0.8 + node.targetScale * 0.2;

        const radius = 45 * node.pulse;

        // Glow
        this.ctx.shadowBlur = isHovered ? 30 : 15;
        this.ctx.shadowColor = node.color;

        // Sphere
        const grad = this.ctx.createRadialGradient(x - radius/3, y - radius/3, 5, x, y, radius);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
        grad.addColorStop(0.5, 'rgba(10, 10, 15, 0.8)');
        grad.addColorStop(1, node.color + '44');

        this.ctx.fillStyle = grad;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.fill();

        // Border
        this.ctx.strokeStyle = isHovered ? node.color : 'rgba(255, 255, 255, 0.1)';
        this.ctx.lineWidth = isHovered ? 2 : 1;
        this.ctx.stroke();

        this.ctx.shadowBlur = 0;

        // --- Glassmorphism Pool Ball Number Style ---
        const numCircleRadius = radius * 0.45;
        
        // Glass Background (Semi-transparent)
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(x, y, numCircleRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        this.ctx.fill();
        
        // Glass Rim Glow
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        this.ctx.lineWidth = 1.5;
        this.ctx.stroke();

        // Inner Specular Highlight for Glass Feel
        const glassGrad = this.ctx.createRadialGradient(x - numCircleRadius/2, y - numCircleRadius/2, 2, x, y, numCircleRadius);
        glassGrad.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
        glassGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        this.ctx.fillStyle = glassGrad;
        this.ctx.beginPath();
        this.ctx.arc(x, y, numCircleRadius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();

        // Vibrant White Number (Offset slightly upward for 3D perspective)
        this.ctx.fillStyle = 'white';
        this.ctx.shadowBlur = 10;
        this.ctx.shadowColor = 'white';
        this.ctx.font = `bold ${numCircleRadius * 1.2}px Space Grotesk`;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(node.id, x, y - (numCircleRadius * 0.15));
        this.ctx.shadowBlur = 0;

        // Label (Only if hovered/active)
        if (isHovered) {
            this.ctx.fillStyle = 'white';
            this.ctx.font = '600 14px Space Grotesk';
            this.ctx.fillText(node.title.split(' ')[0], x, y + radius + 25);
        }
    }

    drawConnections() {
        this.ctx.beginPath();
        this.ctx.lineWidth = 1;
        
        this.nodes.forEach((nodeA, i) => {
            // Connect to Core
            const dCore = Math.hypot(nodeA.body.position.x - this.core.position.x, nodeA.body.position.y - this.core.position.y);
            if (dCore < 450) {
                const opacity = Math.max(0, 1 - dCore / 450) * 0.2;
                this.ctx.strokeStyle = `rgba(138, 43, 226, ${opacity})`;
                this.ctx.moveTo(nodeA.body.position.x, nodeA.body.position.y);
                this.ctx.lineTo(this.core.position.x, this.core.position.y);
            }

            // Connect to nearby nodes
            for (let j = i + 1; j < this.nodes.length; j++) {
                const nodeB = this.nodes[j];
                const d = Math.hypot(nodeA.body.position.x - nodeB.body.position.x, nodeA.body.position.y - nodeB.body.position.y);
                
                if (d < 250) {
                    const opacity = (1 - d / 250) * 0.15;
                    this.ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                    this.ctx.moveTo(nodeA.body.position.x, nodeA.body.position.y);
                    this.ctx.lineTo(nodeB.body.position.x, nodeB.body.position.y);
                }
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
