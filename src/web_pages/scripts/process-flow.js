/**
 * Process Flow: Physics-Based Interactive Methodology
 * Uses Matter.js for node physics and Canvas for custom visuals
 */

class ProcessFlow {
    constructor() {
        this.container = document.getElementById('how-it-works');
        this.canvas = document.getElementById('process-canvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.engine = Matter.Engine.create();
        this.engine.world.gravity.y = 0;
        
        this.nodes = [];
        this.connections = [];
        this.particles = [];
        this.mouse = { x: -1000, y: -1000 };
        this.hasStarted = false;
        this.colors = ['#8A2BE2', '#4D96FF', '#00FF88', '#FF4D4D', '#FFD93D'];

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        
        this.setupNodes();
        this.setupParticles();
        
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !this.hasStarted) {
                this.hasStarted = true;
                this.animate();
                this.triggerEntrance();
            }
        }, { threshold: 0.2 });

        observer.observe(this.container);
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = this.container.offsetHeight;
    }

    handleMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
    }

    setupNodes() {
        const dataElements = document.querySelectorAll('.process-node');
        const nodeCount = dataElements.length;
        // Use more of the viewport width
        const spacing = Math.min(window.innerWidth, 1800) / (nodeCount + 1);
        const startX = (window.innerWidth - (spacing * (nodeCount - 1))) / 2;

        dataElements.forEach((el, i) => {
            const x = startX + i * spacing;
            const y = this.canvas.height / 2 + (Math.sin(i) * 50); // Slight curve

            const body = Matter.Bodies.circle(x, y + 500, 60, { // Start below for entrance
                frictionAir: 0.1,
                restitution: 0.8,
                density: 0.001,
                label: `node-${i}`
            });

            this.nodes.push({
                body,
                title: el.dataset.title,
                desc: el.dataset.desc,
                icon: el.dataset.icon,
                color: this.colors[i % this.colors.length],
                step: el.dataset.step,
                targetX: x,
                targetY: this.canvas.height / 2,
                hover: 0
            });

            Matter.World.add(this.engine.world, body);
        });

        // Add constraints (springs) between adjacent nodes
        for (let i = 0; i < this.nodes.length - 1; i++) {
            const constraint = Matter.Constraint.create({
                bodyA: this.nodes[i].body,
                bodyB: this.nodes[i+1].body,
                stiffness: 0.01,
                damping: 0.1,
                length: spacing * 1.1 // More breathing room
            });
            Matter.World.add(this.engine.world, constraint);
        }
    }

    setupParticles() {
        for (let i = 0; i < 50; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                alpha: Math.random() * 0.5
            });
        }
    }

    triggerEntrance() {
        this.nodes.forEach((node, i) => {
            setTimeout(() => {
                Matter.Body.applyForce(node.body, node.body.position, {
                    x: 0,
                    y: -0.15
                });
            }, i * 150);
        });
    }

    applyForces() {
        Matter.Engine.update(this.engine);

        this.nodes.forEach((node, i) => {
            // 1. Adaptive Attraction to target position
            // If hovering, we pull less strongly to allow repulsion to win
            const attractionStiffness = node.hover > 0.5 ? 0.00002 : 0.00005;
            const dx = node.targetX - node.body.position.x;
            const dy = node.targetY - node.body.position.y;
            
            Matter.Body.applyForce(node.body, node.body.position, {
                x: dx * attractionStiffness,
                y: dy * attractionStiffness
            });

            // 2. Mouse Interaction & Hover State
            const mdx = node.body.position.x - this.mouse.x;
            const mdy = node.body.position.y - this.mouse.y;
            const dist = Math.hypot(mdx, mdy);
            
            if (dist < 250) {
                // Stronger repulsion when close
                const force = (1 - dist / 250) * 0.0015;
                Matter.Body.applyForce(node.body, node.body.position, {
                    x: (mdx / dist) * force,
                    y: (mdy / dist) * force
                });
                node.hover = Math.min(1, node.hover + 0.1);
            } else {
                node.hover = Math.max(0, node.hover - 0.05);
            }

            // 3. Inter-Node Repulsion (Enhanced on hover)
            this.nodes.forEach((other, j) => {
                if (i === j) return;
                const odx = node.body.position.x - other.body.position.x;
                const ody = node.body.position.y - other.body.position.y;
                const oDist = Math.hypot(odx, ody);
                
                // If either node is hovered, increase repulsion distance and force significantly
                const threshold = (node.hover > 0.1 || other.hover > 0.1) ? 500 : 300;
                if (oDist < threshold) {
                    const oForce = (1 - oDist / threshold) * 0.0008;
                    Matter.Body.applyForce(node.body, node.body.position, {
                        x: (odx / oDist) * oForce,
                        y: (ody / oDist) * oForce
                    });
                }
            });

            // 4. Gentle Float
            const time = performance.now() * 0.002;
            Matter.Body.applyForce(node.body, node.body.position, {
                x: Math.cos(time + node.body.id) * 0.00001,
                y: Math.sin(time + node.body.id) * 0.00001
            });
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.drawBackground();
        this.drawConnections();
        this.nodes.forEach(node => this.drawNode(node));
    }

    drawBackground() {
        this.ctx.fillStyle = 'rgba(138, 43, 226, 0.05)';
        this.particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;
            if (p.y < 0) p.y = this.canvas.height;
            if (p.y > this.canvas.height) p.y = 0;

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }

    drawConnections() {
        this.ctx.lineWidth = 3;
        this.ctx.lineCap = 'round';
        
        // 1. Draw the continuous glowing flow line
        this.ctx.beginPath();
        for (let i = 0; i < this.nodes.length - 1; i++) {
            const n1 = this.nodes[i];
            const n2 = this.nodes[i+1];
            
            const grad = this.ctx.createLinearGradient(
                n1.body.position.x, n1.body.position.y,
                n2.body.position.x, n2.body.position.y
            );
            grad.addColorStop(0, n1.color + '66');
            grad.addColorStop(1, n2.color + '66');
            
            this.ctx.strokeStyle = grad;
            this.ctx.shadowBlur = 15;
            this.ctx.shadowColor = n1.color;
            
            this.ctx.moveTo(n1.body.position.x, n1.body.position.y);
            this.ctx.lineTo(n2.body.position.x, n2.body.position.y);
        }
        this.ctx.stroke();
        this.ctx.shadowBlur = 0;

        // 2. Continuous Data Pulses (Traveling through the whole chain)
        const totalDuration = 4000; // ms for one full trip
        const time = (performance.now() % totalDuration) / totalDuration;
        
        // Number of pulses in the stream
        for (let p = 0; p < 3; p++) {
            const pulseTime = (time + (p * 0.33)) % 1;
            this.drawPulseOnPath(pulseTime);
        }
    }

    drawPulseOnPath(progress) {
        const totalNodes = this.nodes.length;
        const segmentCount = totalNodes - 1;
        const scaledProgress = progress * segmentCount;
        const segmentIndex = Math.floor(scaledProgress);
        const segmentProgress = scaledProgress % 1;

        if (segmentIndex >= 0 && segmentIndex < segmentCount) {
            const n1 = this.nodes[segmentIndex];
            const n2 = this.nodes[segmentIndex + 1];
            
            const px = n1.body.position.x + (n2.body.position.x - n1.body.position.x) * segmentProgress;
            const py = n1.body.position.y + (n2.body.position.y - n1.body.position.y) * segmentProgress;
            
            this.ctx.fillStyle = '#fff';
            this.ctx.shadowBlur = 20;
            this.ctx.shadowColor = n1.color;
            this.ctx.beginPath();
            this.ctx.arc(px, py, 3, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.shadowBlur = 0;
        }
    }

    drawNode(node) {
        const { x, y } = node.body.position;
        // Massive expansion for the 'portal' feel
        const radiusScale = 1 + (node.hover * 1.1); 
        const radius = 65 * radiusScale;

        // Node Glow
        const grad = this.ctx.createRadialGradient(x, y, 0, x, y, radius * 1.5);
        grad.addColorStop(0, node.color + (0.15 + node.hover * 0.35).toFixed(2).replace('0.', ''));
        grad.addColorStop(1, 'transparent');
        
        this.ctx.fillStyle = grad;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius * 1.5, 0, Math.PI * 2);
        this.ctx.fill();

        // Glass Circle (with blur effect)
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
        if (node.hover > 0.5) {
            this.ctx.shadowBlur = 40;
            this.ctx.shadowColor = 'rgba(0,0,0,0.6)';
        }
        this.ctx.fill();
        this.ctx.strokeStyle = node.hover > 0.5 ? node.color : 'rgba(255,255,255,0.2)';
        this.ctx.lineWidth = 1 + node.hover * 3;
        this.ctx.stroke();
        this.ctx.restore();

        // Content Rendering: Vertically and Horizontally Centered
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';

        if (node.hover > 0.1) {
            // --- Hover State: Large centered content ---
            this.ctx.globalAlpha = node.hover;
            
            // 1. Step Number
            this.ctx.font = `700 12px Space Grotesk`;
            this.ctx.fillStyle = node.color;
            this.ctx.fillText(`STEP 0${node.step}`, x, y - 75);

            // 2. Icon 
            this.ctx.fillStyle = '#fff';
            this.ctx.font = `900 48px "Font Awesome 6 Free"`;
            this.ctx.fillText(this.getIconChar(node.icon), x, y - 30);

            // 3. Title 
            this.ctx.font = `700 24px Space Grotesk`;
            this.ctx.fillStyle = '#fff';
            this.ctx.fillText(node.title, x, y + 25);

            // 4. Description
            this.ctx.font = `400 13px Space Grotesk`;
            this.ctx.fillStyle = 'rgba(255,255,255,0.85)';
            this.wrapText(node.desc, x, y + 65, radius * 1.5, 18);
            
            this.ctx.globalAlpha = 1;
        } else {
            // --- Resting State: Minimal Centered Content ---
            // 1. Step Number
            this.ctx.font = `700 9px Space Grotesk`;
            this.ctx.fillStyle = node.color;
            this.ctx.fillText(`STEP 0${node.step}`, x, y - 25);

            // 2. Icon 
            this.ctx.font = `900 28px "Font Awesome 6 Free"`;
            this.ctx.fillText(this.getIconChar(node.icon), x, y);

            // 3. Title 
            this.ctx.font = `700 16px Space Grotesk`;
            this.ctx.fillStyle = '#fff';
            this.ctx.fillText(node.title, x, y + 35);
        }
    }

    getIconChar(iconClass) {
        const mapping = {
            'fa-magnifying-glass-chart': '\uf689',
            'fa-drafting-compass': '\uf568',
            'fa-microchip': '\uf2db',
            'fa-rocket': '\uf135',
            'fa-gauge-high': '\uf624'
        };
        const icon = iconClass.split(' ').find(cls => mapping[cls]);
        return mapping[icon] || '\uf0ad'; // default wrench
    }

    wrapText(text, x, y, maxWidth, lineHeight) {
        const words = text.split(' ');
        let line = '';
        for(let n = 0; n < words.length; n++) {
            let testLine = line + words[n] + ' ';
            let metrics = this.ctx.measureText(testLine);
            let testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                this.ctx.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
            } else {
                line = testLine;
            }
        }
        this.ctx.fillText(line, x, y);
    }

    animate() {
        this.applyForces();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('process-canvas')) {
        new ProcessFlow();
    }
});
