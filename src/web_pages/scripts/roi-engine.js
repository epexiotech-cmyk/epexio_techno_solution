/**
 * ROI COMPARISON SYSTEM
 * With vs Without Automation Physics Toggle
 */

class ROIEngine {
    constructor() {
        this.container = document.querySelector('.roi-sticky-container');
        this.canvas = document.getElementById('roi-engine-canvas');
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
        
        // State Management
        this.currentMode = 'MANUAL'; // 'MANUAL' or 'AUTOMATED'
        this.isTransitioning = false;
        
        this.init();
    }

    init() {
        this.setupLights();
        this.setupParticleSystem();
        this.setupEvents();
        this.animate();
    }

    setupLights() {
        const ambient = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambient);
        
        this.glowLight = new THREE.PointLight(0xff4d4d, 2, 50);
        this.glowLight.position.set(0, -1.5, 10);
        this.scene.add(this.glowLight);
    }

    setupParticleSystem() {
        this.snippetCount = 400; // More for 4 lines
        this.snippets = [];
        this.snippetGroup = new THREE.Group();
        this.scene.add(this.snippetGroup);
        
        this.targetLines = [
            "EPEXIO AUTOMATION DRIVES SCALABLE GROWTH",
            "UNMATCHED EFFICIENCY FOR MODERN ENTERPRISE",
            "REAL-TIME INTELLIGENCE AT YOUR FINGERTIPS",
            "RECLAIMING TIME AND MAXIMIZING YOUR PROFIT"
        ];
        
        this.chaosStrings = ["0x4F", "ERR_404", "NULL", "FAIL", "RETRY", "0000", "XXXX", "WAIT", "LOST"];
        
        const canvasTemplate = document.createElement('canvas');
        canvasTemplate.width = 128;
        canvasTemplate.height = 32;

        for (let i = 0; i < this.snippetCount; i++) {
            const canvas = canvasTemplate.cloneNode(true);
            const ctx = canvas.getContext('2d');
            const tex = new THREE.CanvasTexture(canvas);
            const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0 });
            const sprite = new THREE.Sprite(mat);
            
            sprite.scale.set(3, 0.75, 1);
            sprite.position.set((Math.random() - 0.5) * 80, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10);
            
            this.snippets.push({
                sprite,
                tex,
                ctx,
                canvas,
                velocity: new THREE.Vector3((Math.random() - 0.5) * 0.2, (Math.random() - 0.5) * 0.2, (Math.random() - 0.5) * 0.1),
                currentText: '',
                noiseOffset: Math.random() * 100,
                lineIndex: -1,
                charIndex: -1
            });
            this.snippetGroup.add(sprite);
        }

        // Map snippets to lines
        let totalCharIndex = 0;
        this.targetLines.forEach((line, lIdx) => {
            for (let cIdx = 0; cIdx < line.length; cIdx++) {
                if (totalCharIndex < this.snippetCount) {
                    this.snippets[totalCharIndex].lineIndex = lIdx;
                    this.snippets[totalCharIndex].charIndex = cIdx;
                    totalCharIndex++;
                }
            }
        });

        this.camera.position.z = 30;
    }

    setupEvents() {
        const toggle = document.getElementById('roi-state-toggle');
        const slider = document.querySelector('.switch-slider');
        
        if (toggle) {
            toggle.addEventListener('click', () => this.toggleMode());
            
            // Magnetic Motivation Effect (Interactive Scale)
            toggle.addEventListener('mousemove', (e) => {
                if (this.currentMode === 'MANUAL') {
                    slider.style.filter = 'brightness(1.3)';
                    slider.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.4)';
                }
            });
            
            toggle.addEventListener('mouseleave', () => {
                slider.style.transform = '';
            });
        }

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        });

        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Initialize UI
        this.updateContent();
    }

    async toggleMode() {
        if (this.isTransitioning) return;
        this.isTransitioning = true;
        
        const oldMode = this.currentMode;
        const targetMode = oldMode === 'MANUAL' ? 'AUTOMATED' : 'MANUAL';
        
        // 1. Start Transition
        this.transitionProgress = 0;
        this.currentMode = 'TRANSITIONING';
        
        // Update UI Content (Gradually)
        this.updateContent(targetMode);
        
        // 1s Transition
        const duration = 1000;
        const start = performance.now();
        
        const animate = (time) => {
            const elapsed = time - start;
            this.transitionProgress = Math.min(1, elapsed / duration);
            
            if (this.transitionProgress < 1) {
                requestAnimationFrame(animate);
            } else {
                this.currentMode = targetMode;
                this.isTransitioning = false;
            }
        };
        requestAnimationFrame(animate);
    }

    animateValue(id, start, end, suffix, duration = 1000) {
        const obj = document.getElementById(id);
        if (!obj) return;
        const valEl = obj.querySelector('.m-val');
        
        const startTime = performance.now();
        
        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease Out Expo
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            const current = Math.floor(ease * (end - start) + start);
            valEl.textContent = (current >= 0 && id === 'metric-time' ? '+' : '') + current + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }

    updateContent(targetMode) {
        const isAuto = targetMode === 'AUTOMATED';
        const section = document.getElementById('roi-engine');
        if (!section) return;

        // Update State Classes
        section.classList.remove('state-manual', 'state-automated');
        section.classList.add(isAuto ? 'state-automated' : 'state-manual');

        // Update Toggle Labels
        const labelManual = document.querySelector('.t-label.manual');
        const labelAuto = document.querySelector('.t-label.automated');
        if (labelManual && labelAuto) {
            labelManual.classList.toggle('active', !isAuto);
            labelAuto.classList.toggle('active', isAuto);
        }

        const cta = document.getElementById('roi-dynamic-cta');
        const triggerText = document.getElementById('dynamic-trigger-text');
        
        // Gradual Numbers
        if (isAuto) {
            this.animateValue('metric-time', 0, 240, ' hrs');
            this.animateValue('metric-cost', 0, 40, '%');
            this.animateValue('metric-efficiency', 0, 140, '%');
            // Error is special (non-numeric string sometimes)
            document.getElementById('metric-error').querySelector('.m-val').textContent = "LOW (5%)";
        } else {
            this.animateValue('metric-time', 240, 0, ' hrs');
            this.animateValue('metric-cost', 40, 0, '%');
            this.animateValue('metric-efficiency', 140, 0, '%');
            document.getElementById('metric-error').querySelector('.m-val').textContent = "HIGH (30%)";
        }

        // Text & CTA
        triggerText.textContent = isAuto ? "Optimized workflows. Real-time systems. Zero friction." : "Manual processes. Delays. Human errors.";
        cta.textContent = isAuto ? "Build My Automation System" : "Stop Losing Time & Money";
        
        // Update Light Color
        this.glowLight.color.setHex(isAuto ? 0x00ff88 : 0xff4d4d);
        
        // Flicker handling
        document.querySelectorAll('.m-val').forEach(el => {
            if (isAuto) el.classList.remove('flicker');
            else el.classList.add('flicker');
        });
    }

    animate() {
        const time = this.clock.getElapsedTime();
        const isAuto = this.currentMode === 'AUTOMATED';
        const isTransition = this.currentMode === 'TRANSITIONING';
        
        this.snippets.forEach((snippet, i) => {
            const { sprite, velocity, noiseOffset, lineIndex, charIndex } = snippet;
            
            if (this.currentMode === 'MANUAL') {
                // CHAOS PHYSICS
                sprite.position.add(velocity);
                sprite.position.y += Math.sin(time + noiseOffset) * 0.05;
                
                if (Math.abs(sprite.position.x) > 40) velocity.x *= -1;
                if (Math.abs(sprite.position.y) > 10) velocity.y *= -1;

                if (Math.random() > 0.98) {
                    const char = this.chaosStrings[Math.floor(Math.random() * this.chaosStrings.length)];
                    this.drawText(snippet, char, '#ff4d4d');
                    sprite.material.opacity = 0.5;
                }
            } 
            else if (isAuto || isTransition) {
                const p = isTransition ? this.transitionProgress : 1;
                
                if (lineIndex >= 0) {
                    const char = this.targetLines[lineIndex][charIndex];
                    
                    // HORIZONTAL SCROLL LOGIC
                    const scrollSpeed = -4; // units per second (Negative for Right-to-Left)
                    const range = 60; // total horizontal span
                    const charSpacing = 1.1;
                    
                    // Base position + scroll
                    let tx = (charIndex * charSpacing) + (time * scrollSpeed);
                    // Modulo loop for infinite scroll
                    tx = ((tx + range) % (range * 2)) - range;
                    
                    const ty = (lineIndex - 1.5) * -3.5; // Spread 4 lines vertically
                    
                    // Lerp to target
                    sprite.position.x += (tx - sprite.position.x) * 0.1 * p;
                    sprite.position.y += (ty - sprite.position.y) * 0.1 * p;
                    sprite.position.z += (0 - sprite.position.z) * 0.1 * p;

                    if (snippet.currentText !== char) {
                        this.drawText(snippet, char, '#00ff88');
                        snippet.currentText = char;
                    }
                    sprite.material.opacity = 0.2 + p * 0.7;
                } else {
                    sprite.material.opacity *= 0.9;
                }
            }
        });

        this.scene.rotation.y += (this.mouse.x * 0.05 - this.scene.rotation.y) * 0.05;
        this.scene.rotation.x += (-this.mouse.y * 0.05 - this.scene.rotation.x) * 0.05;

        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(() => this.animate());
    }

    drawText(snippet, text, color) {
        const { ctx, canvas, tex } = snippet;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = color;
        ctx.font = 'bold 24px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, canvas.width / 2, canvas.height / 2);
        tex.needsUpdate = true;
    }
}

/**
 * UPDATED MODAL LOGIC (Maintaining functionality but tying to comparison)
 */
class ROIModal {
    constructor() {
        this.modal = document.getElementById('roi-modal');
        this.triggers = document.querySelectorAll('.calculate-roi-trigger');
        if (!this.modal) return;

        this.closeBtn = this.modal.querySelector('.modal-close');
        
        // Inputs
        this.inHours = document.getElementById('input-hours');
        this.inRate = document.getElementById('input-rate');
        this.inError = document.getElementById('input-error');
        
        // Value Displays
        this.dispHours = document.getElementById('val-hours');
        this.dispRate = document.getElementById('val-rate');
        this.dispError = document.getElementById('val-error');
        
        // Result Displays
        this.resTime = document.getElementById('res-time');
        this.resSavings = document.getElementById('res-savings');
        this.resRecovery = document.getElementById('res-recovery');
        
        this.init();
    }

    init() {
        this.triggers.forEach(btn => btn.addEventListener('click', () => this.open()));
        this.closeBtn.addEventListener('click', () => this.close());
        
        // Listen to all inputs
        [this.inHours, this.inRate, this.inError].forEach(input => {
            if (input) {
                input.addEventListener('input', () => this.calculate());
            }
        });
        
        // Initial calc
        this.calculate();
    }

    open() { this.modal.classList.add('active'); }
    close() { this.modal.classList.remove('active'); }

    calculate() {
        if (!this.inHours || !this.inRate || !this.inError) return;

        const hours = parseInt(this.inHours.value);
        const rate = parseInt(this.inRate.value);
        const error = parseInt(this.inError.value);
        
        // Update labels
        this.dispHours.textContent = `${hours} hrs`;
        this.dispRate.textContent = `₹${rate}`;
        this.dispError.textContent = `${error}%`;
        
        // ROI Logic
        // 1. Time: 70% of manual hours saved through automation
        const annualHoursSaved = Math.round(hours * 12 * 0.7);
        
        // 2. Direct Money: hours saved * rate
        const laborSavings = annualHoursSaved * rate;
        
        // 3. Error Cost: 80% reduction of error-related loss
        const annualOperationalCost = hours * 12 * rate;
        const errorLoss = annualOperationalCost * (error / 100);
        const errorSavings = Math.round(errorLoss * 0.8);
        
        const totalAnnualSavings = laborSavings + errorSavings;
        
        // 4. Recovery: Higher volume = faster recovery
        const baseRecovery = 90; // days
        const recoveryDays = Math.max(12, Math.round(baseRecovery - (hours / 10)));
        
        // Update Dashboard
        if (this.resTime) this.resTime.textContent = `${annualHoursSaved.toLocaleString()} Hrs`;
        if (this.resSavings) this.resSavings.textContent = `₹${totalAnnualSavings.toLocaleString()}`;
        if (this.resRecovery) this.resRecovery.textContent = `${recoveryDays} Days`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ROIEngine();
    new ROIModal();
});
