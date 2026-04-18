/**
 * Use Cases: Real Physics Playground
 * Powered by Three.js
 */

class PhysicsPlayground {
    constructor() {
        this.container = document.querySelector('.physics-sticky-container');
        this.canvas = document.getElementById('physics-canvas');
        if (!this.container || !this.canvas) return;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
            antialias: true
        });

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        this.clock = new THREE.Clock();
        this.mouse = new THREE.Vector2(0, 0);
        this.targetMouse = new THREE.Vector2(0, 0);

        // State management
        this.currentCase = 0;
        this.scrollProgress = 0;
        this.cases = document.querySelectorAll('.physics-case-item');

        // Physics objects
        this.particles = null;
        this.particleCount = 2500;
        this.particleData = [];

        this.init();
    }

    init() {
        this.setupLights();
        this.setupParticles();
        this.setupEvents();
        this.animate();
    }

    setupLights() {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        this.scene.add(ambientLight);

        this.pointLight = new THREE.PointLight(0x9D4EDD, 2, 50);
        this.pointLight.position.set(0, 0, 10);
        this.scene.add(this.pointLight);
    }

    setupParticles() {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(this.particleCount * 3);
        const colors = new Float32Array(this.particleCount * 3);
        const sizes = new Float32Array(this.particleCount);

        const colorPalette = [
            new THREE.Color(0x00ffff), // Cyan
            new THREE.Color(0x9D4EDD), // Violet
            new THREE.Color(0xff0044), // Neon Red
            new THREE.Color(0x0077ff), // Electric Blue
            new THREE.Color(0x00ff88), // Spring Green
            new THREE.Color(0xffaa00)  // Amber
        ];

        for (let i = 0; i < this.particleCount; i++) {
            // Initial random scatter
            const x = (Math.random() - 0.5) * 60;
            const y = (Math.random() - 0.5) * 40;
            const z = (Math.random() - 0.5) * 10;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            const color = colorPalette[i % colorPalette.length];
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;

            sizes[i] = Math.random() * 2 + 1;

            this.particleData.push({
                velocity: new THREE.Vector3(0, 0, 0),
                acceleration: new THREE.Vector3(0, 0, 0),
                basePos: new THREE.Vector3(x, y, z),
                orbit: Math.random() * Math.PI * 2,
                orbitSpeed: 0.01 + Math.random() * 0.02,
                orbitRadius: 5 + Math.random() * 10
            });
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.PointsMaterial({
            size: 0.12,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true
        });

        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
        this.camera.position.z = 20;
    }

    setupEvents() {
        window.addEventListener('mousemove', (e) => {
            this.targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            this.targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        });

        window.addEventListener('scroll', () => {
            this.handleScroll();
        });

        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    handleScroll() {
        const section = document.getElementById('use-cases-physics');
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;

        // Progress from 0 to 1 through the 700vh section
        let progress = -rect.top / (sectionHeight - windowHeight);
        progress = Math.max(0, Math.min(1, progress));
        this.scrollProgress = progress;

        const totalCases = this.cases.length;
        const caseIndex = Math.min(Math.floor(progress * totalCases), totalCases - 1);

        if (caseIndex !== this.currentCase) {
            this.cases.forEach(c => c.classList.remove('active'));
            this.cases[caseIndex].classList.add('active');
            this.currentCase = caseIndex;
        }
    }

    updatePhysics() {
        const time = this.clock.getElapsedTime();
        const positions = this.particles.geometry.attributes.position.array;
        
        // Smooth mouse follow
        this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.1;
        this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.1;

        this.pointLight.position.x = this.mouse.x * 20;
        this.pointLight.position.y = this.mouse.y * 10;

        // Pre-calculate grid dimensions for case 5
        const aspect = window.innerWidth / window.innerHeight;
        const gridCols = Math.floor(Math.sqrt(this.particleCount * aspect * 1.5));
        const gridRows = Math.floor(this.particleCount / gridCols);
        const spacingX = (aspect * 45) / gridCols;
        const spacingY = 32 / gridRows;

        for (let i = 0; i < this.particleCount; i++) {
            const i3 = i * 3;
            const p = this.particleData[i];
            const currentPos = new THREE.Vector3(positions[i3], positions[i3 + 1], positions[i3 + 2]);
            
            let target = new THREE.Vector3();
            let force = new THREE.Vector3();

            // Switch between simulation environments based on scrollProgress
            if (this.currentCase === 0) {
                // Gravity System
                target.set(0, 0, 0);
                const dir = target.clone().sub(currentPos);
                const dist = dir.length();
                if (dist > 0.1) {
                    force.add(dir.normalize().multiplyScalar(0.05 / dist));
                }
                const mouseDist = currentPos.distanceTo(new THREE.Vector3(this.mouse.x * 20, this.mouse.y * 10, 0));
                if (mouseDist < 5) {
                    force.add(currentPos.clone().sub(new THREE.Vector3(this.mouse.x * 20, this.mouse.y * 10, 0)).normalize().multiplyScalar(0.1));
                }
            } 
            else if (this.currentCase === 1) {
                // Magnetic Attraction
                const mousePos = new THREE.Vector3(this.mouse.x * 20, this.mouse.y * 10, 0);
                const dir = mousePos.clone().sub(currentPos);
                const dist = dir.length();
                const strength = 0.2 * (1 / (dist + 1));
                force.add(dir.normalize().multiplyScalar(strength));
            }
            else if (this.currentCase === 2) {
                // Fluid Dynamics
                const flowX = Math.sin(time + currentPos.y * 0.5) * 2;
                target.set(currentPos.x + flowX, currentPos.y - 1, currentPos.z);
                if (target.y < -15) target.y = 15;
                force.add(target.sub(currentPos).multiplyScalar(0.02));
                
                const mousePos = new THREE.Vector3(this.mouse.x * 20, this.mouse.y * 10, 0);
                const dist = currentPos.distanceTo(mousePos);
                if (dist < 3) {
                    force.add(currentPos.clone().sub(mousePos).normalize().multiplyScalar(0.5));
                }
            }
            else if (this.currentCase === 3) {
                // Orbital System
                p.orbit += p.orbitSpeed;
                target.x = Math.cos(p.orbit) * p.orbitRadius;
                target.y = Math.sin(p.orbit) * p.orbitRadius * 0.5;
                target.z = Math.sin(p.orbit) * 2;
                force.add(target.sub(currentPos).multiplyScalar(0.05));
            }
            else if (this.currentCase === 4) {
                // Collision Avoidance
                force.add(new THREE.Vector3((Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.01, 0));
                const mousePos = new THREE.Vector3(this.mouse.x * 20, this.mouse.y * 10, 0);
                const dist = currentPos.distanceTo(mousePos);
                if (dist < 4) {
                    force.add(currentPos.clone().sub(mousePos).normalize().multiplyScalar(0.8));
                }
            }
            else {
                // Signal Network (Field Operations) - FULL VIEWPORT FILL
                const col = i % gridCols;
                const row = Math.floor(i / gridCols);
                
                const gridX = (col - gridCols / 2) * spacingX;
                const gridY = (row - gridRows / 2) * spacingY;
                
                target.set(gridX, gridY, 0);
                
                // Pulse waves from mouse
                const mousePos = new THREE.Vector3(this.mouse.x * 20, this.mouse.y * 10, 0);
                const distToMouse = currentPos.distanceTo(mousePos);
                const wave = Math.sin(distToMouse * 0.4 - time * 6) * 1.8;
                target.z = wave;
                
                force.add(target.sub(currentPos).multiplyScalar(0.12));
            }

            // Apply forces
            p.velocity.add(force);
            p.velocity.multiplyScalar(0.92); 
            currentPos.add(p.velocity);

            positions[i3] = currentPos.x;
            positions[i3 + 1] = currentPos.y;
            positions[i3 + 2] = currentPos.z;
        }

        this.particles.geometry.attributes.position.needsUpdate = true;
    }

    animate() {
        this.updatePhysics();
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(() => this.animate());
    }
}

// Magnetic Button Effect
class MagneticButton {
    constructor(el) {
        this.el = el;
        this.init();
    }

    init() {
        this.el.addEventListener('mousemove', (e) => {
            const rect = this.el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.el.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
        });

        this.el.addEventListener('mouseleave', () => {
            this.el.style.transform = `translate(0px, 0px)`;
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('physics-canvas')) {
        new PhysicsPlayground();
    }
    
    document.querySelectorAll('.btn-primary-purple, .btn-secondary-outline, .btn-magnetic').forEach(btn => {
        new MagneticButton(btn);
    });
});
