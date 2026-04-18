/**
 * System Core Reveal: The Engine Behind The System
 * Powered by Three.js
 */

class SystemCore {
    constructor() {
        this.container = document.querySelector('.core-sticky-container');
        this.canvas = document.getElementById('core-canvas');
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
        this.raycaster = new THREE.Raycaster();
        
        // Data
        this.modules = [];
        this.connections = [];
        this.currentHover = null;
        
        this.techData = [
            {
                id: 0,
                name: "Frontend Systems",
                layer: "INTERFACE LAYER",
                tech: "React / Flutter / Next.js",
                desc: "The digital skin that users interact with. Optimized for speed and responsiveness.",
                color: 0x00D2FF // Electric Blue
            },
            {
                id: 1,
                name: "Backend Engine",
                layer: "PROCESSING CORE",
                tech: "Node.js / Python / Go",
                desc: "Where the heavy logic executes. Scalable microservices handling millions of operations.",
                color: 0x9D4EDD // Violet
            },
            {
                id: 2,
                name: "Database System",
                layer: "MEMORY GRID",
                tech: "SQL / Firebase / Redis",
                desc: "Structured data storage with sub-millisecond retrieval speeds.",
                color: 0x00FF88 // Neon Green
            },
            {
                id: 3,
                name: "Automation Layer",
                layer: "WORKFLOW ENGINE",
                tech: "Custom APIs / Integromat",
                desc: "The glue connecting all systems. Orchestrating complex business workflows.",
                color: 0xFFD93D // Amber
            },
            {
                id: 4,
                name: "Cloud & Deployment",
                layer: "STABILITY SHIELD",
                tech: "AWS / GCP / Docker",
                desc: "Always running, always secure. Fault-tolerant infrastructure that scales with you.",
                color: 0xFF4D4D // Neon Red
            },
            {
                id: 5,
                name: "Integrations",
                layer: "EXTERNAL FORCES",
                tech: "WhatsApp API / Stripe",
                desc: "Seamless connectivity with the world's most powerful third-party tools.",
                color: 0x4D96FF // Soft Blue
            }
        ];

        this.init();
    }

    init() {
        this.setupLights();
        this.createCore();
        this.createModules();
        this.setupEvents();
        this.animate();
    }

    setupLights() {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        this.scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0x9D4EDD, 2, 50);
        pointLight.position.set(5, 5, 5);
        this.scene.add(pointLight);
        
        // Dynamic Glow
        this.mainGlow = new THREE.PointLight(0x9D4EDD, 3, 20);
        this.scene.add(this.mainGlow);
    }

    createCore() {
        // Main Core Sphere
        const coreGeo = new THREE.IcosahedronGeometry(2, 4);
        const coreMat = new THREE.MeshPhongMaterial({
            color: 0x111111,
            emissive: 0x5A189A,
            emissiveIntensity: 0.5,
            wireframe: true,
            transparent: true,
            opacity: 0.8
        });
        
        this.core = new THREE.Mesh(coreGeo, coreMat);
        this.scene.add(this.core);

        // Inner Solid Core
        const innerGeo = new THREE.SphereGeometry(1.5, 32, 32);
        const innerMat = new THREE.MeshBasicMaterial({
            color: 0x9D4EDD,
            transparent: true,
            opacity: 0.2
        });
        this.innerCore = new THREE.Mesh(innerGeo, innerMat);
        this.scene.add(this.innerCore);

        // Glow Layer
        const spriteMat = new THREE.SpriteMaterial({
            map: this.generateGlowTexture(),
            color: 0x9D4EDD,
            transparent: true,
            blending: THREE.AdditiveBlending
        });
        this.coreGlow = new THREE.Sprite(spriteMat);
        this.coreGlow.scale.set(8, 8, 1);
        this.scene.add(this.coreGlow);
    }

    generateGlowTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.2, 'rgba(157,78,221,0.8)');
        gradient.addColorStop(0.5, 'rgba(90,24,154,0.3)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
        const texture = new THREE.CanvasTexture(canvas);
        return texture;
    }

    createModules() {
        const radius = 8;
        this.techData.forEach((data, i) => {
            const angle = (i / this.techData.length) * Math.PI * 2;
            
            // Module Geometry (Diamond shape)
            const moduleGeo = new THREE.OctahedronGeometry(0.8, 0);
            const moduleMat = new THREE.MeshPhongMaterial({
                color: 0x222222,
                emissive: data.color,
                emissiveIntensity: 0.5,
                shininess: 100
            });
            
            const moduleMesh = new THREE.Mesh(moduleGeo, moduleMat);
            
            const group = new THREE.Group();
            group.add(moduleMesh);
            
            // Initial position
            group.position.set(
                Math.cos(angle) * radius,
                Math.sin(angle) * radius * 0.5,
                Math.sin(angle) * 2
            );
            
            group.userData = { 
                ...data, 
                angle, 
                radius,
                baseY: group.position.y
            };
            
            this.modules.push(group);
            this.scene.add(group);
            
            // Connection to Core
            const lineGeo = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(0, 0, 0),
                group.position
            ]);
            const lineMat = new THREE.LineBasicMaterial({
                color: data.color,
                transparent: true,
                opacity: 0.2
            });
            const line = new THREE.Line(lineGeo, lineMat);
            this.connections.push(line);
            this.scene.add(line);
        });
    }

    setupEvents() {
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        });

        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
        
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
    }

    showModuleDetails(data) {
        const panel = document.getElementById('module-details');
        if (!panel) return;
        
        panel.querySelector('.layer-name').textContent = data.layer;
        panel.querySelector('.module-name').textContent = data.name;
        panel.querySelector('.module-desc').textContent = data.desc;
        
        const tags = panel.querySelector('.tech-tags');
        tags.innerHTML = data.tech.split(' / ').map(t => `<span>${t}</span>`).join('');
        
        panel.classList.add('active');
    }

    handleScroll() {
        const section = document.getElementById('system-core-section');
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const progress = -rect.top / (section.offsetHeight - window.innerHeight);
        this.scrollRotation = progress * Math.PI * 2;
    }

    updatePhysics() {
        const time = this.clock.getElapsedTime();
        
        // Heartbeat
        const pulseCycle = Math.sin(time * 3);
        const pulse = pulseCycle * 0.1 + 1;
        this.core.scale.set(pulse, pulse, pulse);
        this.innerCore.scale.set(pulse, pulse, pulse);
        this.mainGlow.intensity = 2 + pulseCycle * 1;

        // Sync CTA button pulse with heartbeat
        const cta = document.querySelector('.btn-core-cta');
        if (cta) {
            if (pulseCycle > 0.8) cta.classList.add('pulsing');
            else if (pulseCycle < -0.8) cta.classList.remove('pulsing');
        }

        let closestModule = null;
        let maxZ = -Infinity;
        
        // Modules Orbit
        this.modules.forEach((module, i) => {
            const data = module.userData;
            const floatSpeed = 1.2;
            
            // Rotation based on scroll + auto
            const currentAngle = data.angle + (this.scrollRotation || 0) + time * 0.2;
            
            const targetX = Math.cos(currentAngle) * data.radius;
            const targetZ = Math.sin(currentAngle) * data.radius;
            const targetY = data.baseY + Math.sin(time * floatSpeed + i) * 1;
            
            const targetPos = new THREE.Vector3(targetX, targetY, targetZ);
            module.position.lerp(targetPos, 0.08);

            // Track which module is closest to camera (highest Z)
            if (module.position.z > maxZ) {
                maxZ = module.position.z;
                closestModule = module;
            }
        });

        // Set the active module based on position (closest to user)
        if (closestModule && this.activeModule !== closestModule) {
            this.activeModule = closestModule;
            this.showModuleDetails(closestModule.userData);
        }

        // Apply visual highlights to the active module
        this.modules.forEach((module, i) => {
            const isActive = this.activeModule === module;
            const mesh = module.children[0];
            
            if (isActive) {
                mesh.rotation.y += 0.05;
                mesh.scale.lerp(new THREE.Vector3(1.8, 1.8, 1.8), 0.1);
                this.connections[i].material.opacity = 0.8;
                this.connections[i].material.color.setHex(0xffffff);
            } else {
                mesh.rotation.y += 0.01;
                mesh.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
                this.connections[i].material.opacity = 0.15;
                this.connections[i].material.color.setHex(module.userData.color);
            }
        });
        
        // Scene rotation (subtle mouse tilt)
        this.scene.rotation.y += (this.mouse.x * 0.1 - this.scene.rotation.y) * 0.05;
        this.scene.rotation.x += (-this.mouse.y * 0.1 - this.scene.rotation.x) * 0.05;
    }

    animate() {
        this.updatePhysics();
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(() => this.animate());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('core-canvas')) {
        new SystemCore();
    }
});
