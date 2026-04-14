/**
 * Epexio Process Physics Engine
 * Handles self-organizing nodes with spring physics.
 */

class ProcessNode {
    constructor(id, label, x, y) {
        this.id = id;
        this.label = label;
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.radius = 6;
        this.targetX = x;
        this.targetY = y;
        this.friction = 0.95;
        this.stiffness = 0.05;
        this.damping = 0.1;
        this.isOrganized = false;
    }

    update(mode, width, height) {
        if (mode === 'drift') {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off walls
            if (this.x < 50 || this.x > width - 50) this.vx *= -1;
            if (this.y < 50 || this.y > height - 50) this.vy *= -1;
            
            // Limit speed
            this.vx = Math.max(-1, Math.min(1, this.vx));
            this.vy = Math.max(-1, Math.min(1, this.vy));
        } else {
            // Spring Physics towards target
            let dx = this.targetX - this.x;
            let dy = this.targetY - this.y;
            
            let ax = dx * this.stiffness;
            let ay = dy * this.stiffness;

            this.vx += ax;
            this.vy += ay;
            
            this.vx *= this.damping;
            this.vy *= this.damping;

            this.x += this.vx;
            this.y += this.vy;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ff2e63';
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#ff2e63';
        ctx.fill();
        ctx.closePath();
        
        ctx.shadowBlur = 0; // Reset for other drawings
    }
}

const ProcessAnimation = {
    canvas: null,
    ctx: null,
    nodes: [],
    mode: 'drift', // 'drift' or 'organize'
    labels: [],
    steps: ["Idea", "Design", "Development", "Integration", "Testing", "Launch"],
    
    init() {
        this.canvas = document.getElementById('processCanvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.labels = document.querySelectorAll('.process-label');
        
        this.resize();
        this.createNodes();
        
        window.addEventListener('resize', () => this.resize());
        
        // Trigger Observer
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                console.log("Process Section Intersected - Organizing nodes...");
                this.mode = 'organize';
                this.showLabels();
            }
        }, { threshold: 0.2 });
        
        observer.observe(document.getElementById('process-section'));
        
        this.animate();
    },

    resize() {
        const container = this.canvas.parentElement;
        this.canvas.width = container.clientWidth;
        this.canvas.height = container.clientHeight;
        
        if (this.mode === 'organize') {
            this.updateTargetPositions();
        }
    },

    createNodes() {
        const w = this.canvas.width;
        const h = this.canvas.height;
        
        for (let i = 0; i < this.steps.length; i++) {
            const x = Math.random() * w;
            const y = Math.random() * h;
            this.nodes.push(new ProcessNode(i, this.steps[i], x, y));
        }
        this.updateTargetPositions();
    },

    updateTargetPositions() {
        const w = this.canvas.width;
        const h = this.canvas.height;
        const padding = 220;
        
        // Calculate points along a curved path
        this.nodes.forEach((node, i) => {
            const t = i / (this.nodes.length - 1);
            node.targetX = padding + (w - padding * 2) * t;
            node.targetY = h / 2.5 + Math.sin(t * Math.PI) * (h / 4.5);
        });
    },

    showLabels() {
        this.labels.forEach((label, i) => {
            setTimeout(() => {
                label.classList.add('visible');
            }, i * 200 + 800); // Staggered fade in after organization starts
        });
    },

    updateLabels() {
        this.nodes.forEach((node, i) => {
            const label = this.labels[i];
            if (label) {
                label.style.left = `${node.x}px`;
                label.style.top = `${node.y}px`;
                
                // Show subtext just before settling
                const dx = node.x - node.targetX;
                const dy = node.y - node.targetY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 40 && this.mode === 'organize') {
                    label.classList.add('reveal-subtext');
                }
            }
        });
    },

    drawConnections() {
        if (this.mode !== 'organize') return;
        
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'rgba(255, 46, 99, 0.2)';
        this.ctx.lineWidth = 1;
        this.ctx.setLineDash([5, 5]);
        
        for (let i = 0; i < this.nodes.length - 1; i++) {
            const nodeA = this.nodes[i];
            const nodeB = this.nodes[i + 1];
            
            // Only draw if nodes are close-ish to target (smoothly appearing)
            const dist = Math.hypot(nodeA.x - nodeA.targetX, nodeA.y - nodeA.targetY);
            if (dist < 100) {
                this.ctx.moveTo(nodeA.x, nodeA.y);
                this.ctx.lineTo(nodeB.x, nodeB.y);
            }
        }
        this.ctx.stroke();
        this.ctx.setLineDash([]);
    },

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.drawConnections();
        
        this.nodes.forEach(node => {
            node.update(this.mode, this.canvas.width, this.canvas.height);
            node.draw(this.ctx);
        });
        
        this.updateLabels();
        
        requestAnimationFrame(() => this.animate());
    }
};

document.addEventListener('DOMContentLoaded', () => {
    ProcessAnimation.init();
});
