/* --- VARIABLES & RESET --- */
@import "tailwindcss";
:root {
  --bg-dark: #0b1120; /* Refined Dark Navy */
  --bg-light: #1e293b; /* Lighter Navy */
  --bg-dark: #0b1120;
  --bg-light: #1e293b;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --accent: #06b6d4; /* Cyan */
  --accent-glow: #22d3ee; /* Bright Neon Cyan */
  --accent-pink: #f472b6; /* Light Pink Accent (Light use) */
  --accent: #06b6d4;
  --accent-glow: #22d3ee;
  --accent-pink: #f472b6;
  --border: rgba(255, 255, 255, 0.1);
  --font-main: "Inter", sans-serif;
  --font-heading: "Poppins", sans-serif;
  
  --grad-premium: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0b0f1a 100%);
  --accent-green: #00ff88;
  --accent-cyan: #00d4ff;
}
@import "tailwindcss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  font-family: var(--font-main);
  background-color: var(--bg-dark);
  color: var(--text-main);
  line-height: 1.6;
}
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
}
a {
  text-decoration: none;
  color: inherit;
  transition: 0.3s;
}
ul {
  list-style: none;
}
/* --- UTILITIES --- */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.accent {
  color: var(--accent-pink);
}
.bg-light {
  background-color: var(--bg-light);
}
.bg-premium {
  background: var(--grad-premium);
}
.border-top {
  border-top: 1px solid var(--border);
}
.section-padding {
  padding: 80px 0;
}
.section-header {
  text-align: center;
  margin-bottom: 60px;
}
.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
}
.section-header p {
  color: var(--text-muted);
  margin-top: 10px;
}
/* --- BUTTONS --- */
.btn-primary {
  background-color: var(--accent);
  color: white;
  padding: 10px 25px;
  border-radius: 50px;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(6, 182, 212, 0.3);
}
.btn-primary:hover {
  background-color: #0891b2;
  transform: translateY(-2px);
}
.btn-secondary {
  border: 1px solid var(--border);
  color: var(--text-muted);
  padding: 10px 25px;
  border-radius: 50px;
  font-weight: 600;
}
.btn-secondary:hover {
  border-color: var(--accent);
  color: white;
}
.btn-large {
  padding: 15px 35px;
  font-size: 1.1rem;
}
/* --- NAVIGATION --- */
.navbar {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  background-color: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
  left: 0;
  z-index: 1000;
  background-color: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  transition: all 0.4s ease;
}
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  height: 85px;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  gap: 12px;
}
.logo-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #3b82f6, var(--accent));
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
.logo img {
  height: 50px;
  width: auto;
}
.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  font-weight: 800;
  letter-spacing: -0.5px;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 30px;
  gap: 35px;
}
.nav-links a:not(.btn-primary):hover,
.nav-links a.active:not(.btn-primary) {
  color: var(--accent-glow);
}
.nav-links a {
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  transition: all 0.3s ease;
  color: #e2e8f0;
}
.nav-links a:not(.btn-primary)::after {
  content: "";
  position: absolute;
  bottom: -5px;
  bottom: -6px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--accent-glow);
  background-color: var(--accent);
  transition: width 0.3s ease;
}
.nav-links a.active:not(.btn-primary)::after,
.nav-links a:not(.btn-primary):hover::after {
.nav-links a:hover {
  color: white;
}
.nav-links a:hover::after {
  width: 100%;
}
.hamburger {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
.nav-links a.btn-primary {
  background-color: var(--accent);
  color: white;
  padding: 12px 28px;
  border-radius: 100px;
  box-shadow: 0 4px 20px rgba(6, 182, 212, 0.3);
  font-weight: 600;
}
/* --- DROPDOWN --- */
.nav-links a.btn-primary:hover {
  background-color: var(--accent-glow);
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(6, 182, 212, 0.4);
}
/* DROPDOWN MENU */
.dropdown {
  position: relative;
}
.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}
.dropdown-toggle i {
  font-size: 0.8rem;
  font-size: 0.75rem;
  transition: transform 0.3s ease;
  margin-left: 5px;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  min-width: 320px;
  background: rgba(11, 15, 26, 0.98);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 15px 0;
  margin-top: 20px;
  border-radius: 20px;
  padding: 20px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(15px);
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  z-index: 1000;
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.5),
    0 5px 15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  z-index: 2000;
  margin-top: 20px;
}
.dropdown-menu::before {
  content: "";
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;
  height: 25px;
.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}
.dropdown-menu li {
  width: 100%;
.dropdown:hover .dropdown-toggle i {
  transform: rotate(180deg);
}
.dropdown-menu a {
  display: block;
.dropdown-item {
  padding: 12px 25px;
  font-size: 0.92rem;
  color: #cbd5e1;
  width: 100%;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.dropdown-menu a:hover {
  background: rgba(0, 255, 136, 0.08);
  color: var(--neon-green, #00ff88) !important;
  padding-left: 35px;
.dropdown-item:hover {
  background: rgba(255, 255, 255, 0.05);
}
.dropdown-menu a::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: var(--neon-green, #00ff88);
  transform: scaleY(0);
  transition: transform 0.3s ease;
  transform-origin: bottom;
}
.dropdown-menu a:hover::before {
  transform: scaleY(1);
  transform-origin: top;
}
/* Desktop Hover */
@media (min-width: 769px) {
  .dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  .dropdown:hover .dropdown-toggle i {
    transform: rotate(180deg);
  }
}
/* --- HERO SECTION --- */
.hero {
  position: relative;
  padding: 180px 0 100px 0;
  text-align: center;
  overflow: hidden;
}
.hero h1 {
  font-size: 4rem;
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 20px;
}
.neon-text {
  background: linear-gradient(to right, var(--accent-glow), #3b82f6);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 0 0 30px rgba(34, 211, 238, 0.3);
}
.neon-text-pink {
  background: linear-gradient(to right, var(--accent-pink), #f472b6);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
.hero-sub {
  font-size: 1.25rem;
  color: var(--text-muted);
  max-width: 700px;
  margin: 0 auto 40px auto;
}
.hero-buttons {
.dropdown-item i {
  width: 35px;
  height: 35px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
}
/* Background Blobs */
.background-glow {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.2;
  z-index: -1;
}
.glow-1 {
  background-color: #3b82f6;
  top: -100px;
  left: 20%;
}
.glow-2 {
  background-color: var(--accent);
  top: 50px;
  right: 20%;
}
/* --- PROCESS CARDS --- */
.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}
.card {
  background-color: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 35px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
.card:hover {
  border-color: var(--accent);
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(6, 182, 212, 0.15);
}
.process-card {
  text-align: center;
}
.process-card .icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}
.process-card h3 {
  color: var(--accent-glow);
  margin-bottom: 10px;
}
.process-card p {
  font-size: 0.9rem;
  color: var(--text-muted);
}
/* --- SERVICES GRID --- */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}
/* --- ADVANCED SLIDING SERVICE CARDS --- */
.service-card {
  background-color: var(--bg-light);
  /* Use the variable for the border, defaulting to white if missing */
  border-left: 4px solid var(--card-color, #fff);
  position: relative; /* Essential for positioning the slide */
  overflow: hidden; /* Ensures the slide doesn't spill out */
  padding: 40px 30px;
  transition: transform 0.3s ease;
  z-index: 1; /* Ensures text stays on top */
}
/* The Sliding Background (The Curtain) */
.service-card::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--card-color); /* Uses the color defined in HTML */
  transform: translateX(100%); /* Starts hidden to the right */
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); /* Smooth slide effect */
  z-index: -1; /* Puts it behind the text */
}
/* Hover Action: Move the curtain in */
.service-card:hover::before {
  transform: translateX(0);
}
/* Text & Icon Styling */
.service-content {
  position: relative;
  z-index: 2;
}
.service-card .icon {
  font-size: 3rem;
  margin-bottom: 15px;
  display: block;
}
.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: white;
  transition: color 0.3s;
}
}
/* The Description Text */
.service-card p {
  color: var(--text-muted);
  font-size: 0.95rem;
  opacity: 0; /* Hidden by default */
  transform: translateX(20px); /* Pushed slightly right */
  transition: all 0.4s ease 0.1s; /* 0.1s delay so it waits for background */
  height: 0; /* Collapse height so card is compact initially */
  overflow: hidden;
}
/* Hover State Changes */
.service-card:hover {
  transform: translateY(-5px); /* Little pop up */
}
.service-card:hover p {
  opacity: 1; /* Show text */
  transform: translateX(0); /* Slide text into place */
  height: auto; /* expand height */
  color: white; /* Make text bright white on the colored background */
  margin-top: 10px;
}
/* Ensure title stays white */
.service-card:hover h3 {
  color: white;
}
/* Specific Border Colors */
.border-cyan {
  border-left-color: var(--accent);
}
.border-blue {
  border-left-color: #3b82f6;
}
.border-purple {
  border-left-color: #000080;
}
.border-green {
  border-left-color: #22c55e;
}
.border-yellow {
  border-left-color: #eab308;
}
.border-red {
  border-left-color: #ef4444;
}
.service-card h3 {
  margin-bottom: 10px;
  font-size: 1.25rem;
}
.service-card p {
  color: var(--text-muted);
  font-size: 0.95rem;
}
/* --- LEADERSHIP --- */
.leadership-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 900px;
  margin: 0 auto;
}
.leader-card {
  background-color: var(--bg-dark);
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
.leader-card .avatar {
  width: 100px;
  height: 100px;
  background-color: var(--border);
  border-radius: 50%;
  margin: 0 auto 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
}
.leader-card h3 {
  font-size: 1.5rem;
  margin-bottom: 5px;
}
.leader-card .role {
  display: block;
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
  font-size: 1rem;
}
.leader-title {
  font-style: italic;
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 15px;
}
.leader-desc {
  color: #cbd5e1;
.dropdown-info h4 {
  font-size: 0.95rem;
  color: white;
  margin-bottom: 2px;
}
/* --- FOOTER --- */
footer {
  background-color: #000;
  padding: 60px 0 20px 0;
  border-top: 1px solid var(--border);
}
.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}
.footer-col h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}
.footer-col h4 {
  color: var(--accent);
  margin-bottom: 15px;
}
.footer-col p,
.footer-col a {
.dropdown-info p {
  font-size: 0.8rem;
  color: var(--text-muted);
  display: block;
  margin-bottom: 10px;
  font-size: 0.9rem;
}
.footer-col a:hover {
/* MOBILE NAV */
.hamburger {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
}
.copyright {
  text-align: center;
  border-top: 1px solid var(--border);
  padding-top: 20px;
  color: #64748b;
  font-size: 0.85rem;
}
/* --- RESPONSIVE --- */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
@media (max-width: 991px) {
  .hamburger {
    display: block;
  }
  .hero h1 {
    font-size: 2.5rem;
  }
  .hero-buttons {
  .nav-links {
    position: fixed;
    top: 85px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 85px);
    background-color: var(--bg-dark);
    flex-direction: column;
    padding: 60px 40px;
    transition: 0.5s;
    overflow-y: auto;
  }
  .section-padding {
    padding: 50px 0;
  }
  .nav-links.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: rgba(11, 15, 26, 0.98);
    backdrop-filter: blur(20px);
    padding: 40px 20px;
    border-bottom: 1px solid var(--border);
    gap: 25px;
    animation: slideDown 0.4s ease forwards;
  }
  .nav-links.active .dropdown-menu {
    display: none;
  .dropdown-menu {
    position: static;
    transform: none;
    opacity: 1;
    visibility: visible;
    transform: none;
    background: transparent;
    border: none;
    box-shadow: none;
    padding: 10px 0 0 20px;
    margin-top: 10px;
    width: 100%;
    padding-left: 20px;
    display: none;
  }
  .nav-links.active .dropdown.open .dropdown-menu {
  .dropdown.active .dropdown-menu {
    display: block;
  }
  .nav-links.active .dropdown-toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .nav-links.active .dropdown.open .dropdown-toggle i {
    transform: rotate(180deg);
  }
  .dropdown-menu a {
    padding: 10px 0;
  }
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0);}
  }
}
/* --- CUSTOM SOFTWARE FOR BUSINESS --- */
.custom-software-section {
  padding: 120px 0;
  background: radial-gradient(circle at 100% 100%, #1e1b4b 0%, #020617 100%);
  border-top: 1px solid #1e293b;
/* --- HERO SECTION --- */
.hero {
  min-height: 100vh;
  padding: 160px 0 100px 0;
  position: relative;
  overflow: hidden;
}
.custom-label {
  display: inline-block;
  background: linear-gradient(135deg, #06b6d2, #a855f7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.custom-software-section .subtext {
  color: #94a3b8;
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.1rem;
}
/* Solutions Grid */
.custom-content-wrap {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 50px;
  align-items: center;
  margin-top: 60px;
}
.solutions-stack {
  display: grid;
  gap: 20px;
}
.solution-block {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 25px 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: solutionReveal 0.8s ease-out forwards;
  opacity: 0;
}
@keyframes solutionReveal {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
.hero-content {
  max-width: 800px;
  position: relative;
  z-index: 2;
}
.solution-block:nth-child(1) { animation-delay: 0.1s; }
.solution-block:nth-child(2) { animation-delay: 0.2s; }
.solution-block:nth-child(3) { animation-delay: 0.3s; }
.solution-block:nth-child(4) { animation-delay: 0.4s; }
.solution-block:hover {
  transform: translateX(10px);
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(168, 85, 247, 0.3);
  box-shadow: -10px 0 30px rgba(168, 85, 247, 0.1);
.hero h1 {
  font-size: clamp(3rem, 8vw, 5rem);
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 25px;
}
.solution-icon-wrap {
  width: 50px;
  height: 50px;
  background: rgba(168, 85, 247, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a855f7;
.hero-sub {
  font-size: 1.25rem;
  color: var(--text-muted);
  margin-bottom: 45px;
  max-width: 600px;
}
.solution-info h4 {
  color: white;
  margin-bottom: 5px;
  font-size: 1.1rem;
.hero-btns {
  display: flex;
  gap: 20px;
}
.solution-info p {
  color: #94a3b8;
  font-size: 0.9rem;
  line-height: 1.4;
}
/* Conversion Panel */
.conversion-panel {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(30px);
  border-radius: 32px;
  padding: 50px;
  position: relative;
  border: 1px solid rgba(168, 85, 247, 0.2);
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.5);
  animation: conversionPop 1s cubic-bezier(0.2, 0.8, 0.2, 1);
}
@keyframes conversionPop {
  0% { opacity: 0; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1); }
}
.conversion-panel::before {
  content: "";
/* Background Accents */
.mesh-circle {
  position: absolute;
  inset: -1px;
  background: linear-gradient(135deg, #06b6d2, #a855f7);
  border-radius: 32px;
  z-index: -1;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(100px);
  z-index: 1;
  opacity: 0.3;
}
.conversion-panel h3 {
  font-size: 2rem;
  color: white;
  margin-bottom: 20px;
.circle-1 {
  background: var(--accent);
  top: -100px;
  right: -100px;
  animation: meshMove1 10s infinite alternate;
}
.conversion-panel p {
  color: #cbd5f5;
  margin-bottom: 30px;
  line-height: 1.6;
.circle-2 {
  background: var(--accent-pink);
  bottom: -150px;
  left: -100px;
  animation: meshMove2 12s infinite alternate;
}
.conversion-features {
  list-style: none;
  padding: 0;
  margin-bottom: 40px;
@keyframes meshMove1 {
  0% { transform: translate(0, 0); }
  100% { transform: translate(-100px, 50px); }
}
.conversion-features li {
  color: #f1f5f9;
  font-size: 0.95rem;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 12px;
@keyframes meshMove2 {
  0% { transform: translate(0, 0); }
  100% { transform: translate(100px, -50px); }
}
.conversion-features i { color: #a855f7; }
.btn-consultation {
  background: linear-gradient(135deg, #06b6d2, #a855f7);
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 18px 40px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: all 0.4s;
  box-shadow: 0 10px 30px rgba(168, 85, 247, 0.3);
/* --- UTILITIES --- */
.section-padding {
  padding: 120px 0;
}
.btn-consultation:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(168, 85, 247, 0.5);
  filter: brightness(1.1);
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.consult-meta {
  display: block;
.section-header {
  margin-bottom: 80px;
  text-align: center;
  margin-top: 20px;
  font-size: 0.85rem;
  color: #475569;
}
.trust-accent-note {
  display: block;
  text-align: center;
  margin-top: 60px;
  font-size: 0.8rem;
  color: #475569;
  letter-spacing: 1px;
  text-transform: uppercase;
}
@media (max-width: 992px) {
  .custom-content-wrap { grid-template-columns: 1fr; }
  .conversion-panel { padding: 40px; }
}
@media (max-width: 768px) {
  .custom-software-section { padding: 80px 0; }
  .solution-block { padding: 20px; }
}
/* --- 3D FLIP CARD STYLES --- */
/* 1. The Container */
.flip-card {
  background-color: transparent;
  perspective: 1000px; /* This gives the 3D depth effect */
  height: 300px; /* We need a fixed height for the flip to work nicely */
}
/* 2. The Inner Wrapper (The thing that actually rotates) */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s; /* Smooth animation speed */
  transform-style: preserve-3d;
}
/* 3. The Interaction (Hover triggers rotation) */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
/* 4. Common Styles for Front and Back Faces */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Hides the back of the div */
  backface-visibility: hidden;
  border-radius: 16px;
  padding: 30px 20px; /* Adjusted padding */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centers content vertically */
  align-items: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
/* 5. Front Face Specifics */
.flip-card-front {
  background-color: var(--bg-dark);
  border: 1px solid var(--border);
}
/* 6. Back Face Specifics */
.flip-card-back {
  background-color: var(
    --bg-light
  ); /* Slightly lighter background for contrast */
  border: 1px solid var(--accent); /* Cyan border to show it's active */
  transform: rotateY(180deg); /* Starts flipped around */
}
.flip-card-back h3 {
  color: var(--accent);
.section-header h2 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 15px;
  font-size: 1.2rem;
}
.flip-card-back p {
  font-size: 0.95rem;
  color: #e2e8f0; /* Lighter text for readability */
  line-height: 1.5;
}
.flip-card-front .icon {
  font-size: 4rem; /* This makes them big (approx 64px) */
  margin-bottom: 20px; /* Adds space between icon and text */
  line-height: 1; /* Prevents extra vertical spacing */
}
/* --- INQUIRY FORM STYLES --- */
.form-wrapper {
  max-width: 800px;
  margin: 0 auto;
  background-color: var(--bg-light);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid var(--border);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns */
  gap: 20px;
  margin-bottom: 20px;
}
/* Make it single column on mobile */
@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  .form-wrapper {
    padding: 25px;
  }
}
.form-group {
  display: flex;
  flex-direction: column;
}
.full-width {
  grid-column: 1 / -1; /* Spans across both columns */
}
label {
.section-header p {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 8px;
  font-weight: 600;
}
/* Input Field Styling */
input,
select,
textarea {
  background-color: var(--bg-dark);
  border: 1px solid var(--border);
  color: white;
  padding: 15px;
  border-radius: 8px;
  font-family: var(--font-main);
  font-size: 1rem;
  transition: all 0.3s ease;
  outline: none; /* Remove default browser outline */
}
/* The Neon Glow on Focus */
input:focus,
select:focus,
textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 15px rgba(6, 182, 212, 0.2); /* Cyan Glow */
}
/* Placeholder text color */
::placeholder {
  color: #475569;
}
.form-submit {
  text-align: center;
  margin-top: 30px;
}
.form-submit button {
  width: 100%;
  cursor: pointer;
  border: none;
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.1rem;
}
.form-submit button:hover {
  transform: translateY(-2px);
}
/* --- CUSTOM CHECKBOX GRID --- */
.checkbox-grid {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns */
  gap: 15px;
  margin-top: 5px;
}
@media (max-width: 600px) {
  .checkbox-grid {
    grid-template-columns: 1fr;
  } /* One column on mobile */
}
.checkbox-option {
/* --- STATS BAR --- */
.stats-bar {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  background-color: var(--bg-dark);
  justify-content: space-around;
  padding: 50px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  border-radius: 8px;
  transition: all 0.3s ease;
  border-radius: 30px;
  margin-top: 80px;
}
/* Hover effect for the whole box */
.checkbox-option:hover {
  border-color: var(--text-muted);
}
/* Hide the default browser checkbox */
.checkbox-option input {
  display: none;
}
/* Create the Custom Checkbox Square */
.custom-check {
  width: 20px;
  height: 20px;
  border: 2px solid #475569;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  transition: all 0.2s;
}
/* When Checked: Change Border and Background to Cyan */
.checkbox-option input:checked ~ .custom-check {
  background-color: var(--accent);
  border-color: var(--accent);
  box-shadow: 0 0 10px rgba(6, 182, 212, 0.4); /* Glow effect */
}
/* The Checkmark Icon (CSS Draw) */
.custom-check::after {
  content: "";
  position: absolute;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  opacity: 0; /* Hidden by default */
  transition: opacity 0.2s;
}
/* Show checkmark when checked */
.checkbox-option input:checked ~ .custom-check::after {
  opacity: 1;
}
/* Text Styling */
.label-text {
  color: var(--text-muted);
  font-size: 0.95rem;
}
/* Make text white when selected */
.checkbox-option input:checked ~ .label-text {
  color: white;
  font-weight: 600;
}
/* --- CONTACT INFO & MAP STYLES --- */
.contact-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Split 50/50 */
  gap: 40px;
  align-items: stretch; /* Make both sides equal height */
}
/* Left Side: The Cards */
.contact-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.contact-card {
  background-color: var(--bg-light);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 25px;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease;
}
.contact-card:hover {
  border-color: var(--accent);
  background-color: rgba(15, 23, 42, 0.8);
  transform: translateX(5px); /* Slide slightly right on hover */
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.1);
}
.contact-icon {
  font-size: 2rem;
  background-color: var(--bg-dark);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
}
.contact-text h3 {
  color: white;
  font-size: 1.1rem;
.stat-item h3 {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--accent-glow);
  margin-bottom: 5px;
}
.contact-text p,
.sub-text {
  color: var(--text-muted);
.stat-item p {
  font-size: 0.9rem;
  margin: 0;
}
.contact-link {
  display: block;
  color: var(--accent);
  font-weight: 600;
  text-decoration: none;
  font-size: 1.1rem;
  margin-bottom: 2px;
}
.contact-link:hover {
  color: #fff;
  text-shadow: 0 0 10px var(--accent);
}
/* Right Side: The Map */
.map-container {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border);
  min-height: 300px; /* Ensures it has height on mobile */
  /* Optional: Makes the map look darker to fit your theme */
  filter: grayscale(20%) contrast(1.2);
}
/* Responsive: Stack on mobile */
@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr; /* Stack vertically */
  }
  .map-container {
    height: 300px; /* Fixed height for map on mobile */
  }
}
/* --- LEADER PHOTOS --- */
.leader-photo {
  width: 120px; /* Slightly larger than the emoji circle */
  height: 120px;
  border-radius: 50%; /* Makes it a perfect circle */
  object-fit: cover; /* Prevents the image from looking stretched/squashed */
  border: 3px solid var(--accent); /* Adds a nice Cyan border */
  margin: 0 auto 20px auto; /* Centers it */
  display: block;
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.3); /* Adds the neon glow */
  transition: transform 0.3s ease;
}
.leader-card:hover .leader-photo {
  transform: scale(1.05); /* Slight zoom effect on hover */
  box-shadow: 0 0 30px rgba(6, 182, 212, 0.6);
}
/* --- TOOLS PAGE STYLES --- */
.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}
.tool-card {
  background-color: var(--bg-light);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
}
.tool-card:hover {
  border-color: var(--accent);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
.tool-header {
  padding: 25px;
  background-color: rgba(15, 23, 42, 0.5); /* Slightly darker header */
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 15px;
}
.tool-icon-box {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #3b82f6, var(--accent));
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
}
.tool-title h3 {
  margin: 0;
  font-size: 1.2rem;
  color: white;
}
.version-tag {
  font-size: 0.75rem;
  background: rgba(34, 211, 238, 0.1);
  color: var(--accent);
  padding: 2px 8px;
  border-radius: 12px;
  margin-top: 4px;
  display: inline-block;
  border: 1px solid rgba(34, 211, 238, 0.2);
}
.tool-body {
  padding: 25px;
  flex-grow: 1;
}
.tool-body p {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.feature-list {
  padding: 0;
  list-style: none;
  margin: 0;
}
.feature-list li {
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: #cbd5e1;
  display: flex;
  align-items: center;
}
.feature-list li::before {
  content: "✓";
  color: var(--accent);
  font-weight: bold;
  margin-right: 10px;
}
.tool-footer {
  padding: 25px;
  border-top: 1px solid var(--border);
  text-align: center;
  background-color: rgba(15, 23, 42, 0.3);
}
.btn-full {
  display: block;
  width: 100%;
  text-align: center;
}
.btn-disabled {
  background-color: var(--border);
  color: var(--text-muted);
  cursor: not-allowed;
  box-shadow: none;
}
.btn-disabled:hover {
  background-color: var(--border);
  transform: none;
}
/* --- CONTACT PAGE HERO --- */
.hero-split {
  text-align: left;
  padding: 180px 0 100px 0;
  background: linear-gradient(135deg, #0f172a 0%, #000000 100%);
  position: relative;
  overflow: hidden;
}
.hero-grid {
/* --- INFO CARDS --- */
.info-card-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 60px;
}
.hero-split .hero-sub {
  margin: 0 0 40px 0;
  max-width: 100%;
}
.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero-image img {
  width: 100%;
  height: auto;
  max-width: 550px;
  filter: drop-shadow(0 0 50px rgba(34, 211, 238, 0.2));
  animation: float 6s ease-in-out infinite;
}
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}
@media (max-width: 992px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }
  .hero-split {
    padding-top: 140px;
    padding-bottom: 60px;
  }
  .hero-split .hero-sub {
    margin-left: auto;
    margin-right: auto;
  }
  .hero-image img {
    max-width: 400px;
  }
}
/* --- CONTACT INFO CARDS --- */
.contact-info-section {
  padding: 60px 0 0 0; /* Add padding to space it from hero */
  background-color: var(--bg-dark);
}
.info-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.info-card {
  padding: 50px;
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px 20px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(15px);
  border: 1px solid var(--border);
  border-radius: 32px;
  transition: all 0.4s ease;
}
.info-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 15px 40px rgba(6, 182, 212, 0.2);
  border-color: rgba(6, 182, 212, 0.3);
  transform: translateY(-10px);
  border-color: var(--accent);
  background: rgba(30, 41, 59, 0.6);
}
.info-card i {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--accent);
  background: linear-gradient(135deg, var(--accent-glow), #3b82f6);
  background-clip: text;
  margin-bottom: 30px;
  background: linear-gradient(135deg, var(--accent), var(--accent-pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.3s ease;
  background-clip: text;
  color: transparent;
}
.info-card:hover i {
  transform: scale(1.1);
}
.info-card h3 {
  font-size: 1.25rem;
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: white;
  font-weight: 700;
}
.info-card p, .info-card p a {
.info-card p {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.5;
  text-decoration: none;
  transition: color 0.3s ease;
}
.info-card p a:hover {
  color: var(--accent-glow);
}
/* --- CONTACT SPLIT GRID --- */
.contact-split-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  align-items: start;
}
.contact-form-container {
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}
.form-header {
  margin-bottom: 30px;
}
.form-header h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}
.form-header p {
  color: var(--text-muted);
  font-size: 0.95rem;
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.main-contact-form .form-group {
  margin-bottom: 20px;
}
.main-contact-form label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.main-contact-form input,
.main-contact-form select,
.main-contact-form textarea {
  width: 100%;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid var(--border);
  color: white;
  padding: 12px 16px;
  border-radius: 12px;
  font-family: var(--font-main);
  font-size: 1rem;
  transition: all 0.3s ease;
  outline: none;
  line-height: 1.7;
}

.main-contact-form input:focus,
.main-contact-form select:focus,
.main-contact-form textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 15px rgba(6, 182, 212, 0.2);
  background: rgba(15, 23, 42, 0.8);
}
.main-contact-form select option {
  background: var(--bg-dark);
  color: white;
}
.form-submit {
  margin-top: 10px;
}
.btn-full {
  width: 100%;
  display: block;
  text-align: center;
  border: none;
  cursor: pointer;
}
/* --- MAP EMBED --- */
.map-embed-container {
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--border);
  height: 100%;
  min-height: 450px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}
.map-embed-container:hover {
  border-color: var(--accent);
  box-shadow: 0 15px 40px rgba(6, 182, 212, 0.1);
}
.map-embed-container iframe {
  filter: grayscale(20%) contrast(1.1) invert(0);
}
/* --- RESPONSIVE CONTACT --- */
@media (max-width: 992px) {
  .contact-split-grid {
    grid-template-columns: 1fr;
  }
  
  .map-embed-container {
    min-height: 400px;
  }
}
@media (max-width: 600px) {
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .contact-form-container {
    padding: 25px;
  }
}
/* --- QUICK CTA STRIP --- */
.cta-strip {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 40px 0;
/* --- FOOTER --- */
footer {
  padding: 80px 0 30px 0;
  background: #000;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  position: relative;
  overflow: hidden;
}
.cta-strip::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 70%);
  pointer-events: none;
}
.cta-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  position: relative;
  z-index: 2;
}
.cta-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
}
.cta-title .accent-text {
  color: var(--accent-glow);
}
.cta-actions {
  display: flex;
  gap: 20px;
}
.cta-btn {
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  text-decoration: none;
  font-size: 1rem;
}
.call-btn {
  background: rgba(6, 182, 212, 0.1);
  color: var(--accent-glow);
  border: 1px solid rgba(6, 182, 212, 0.3);
}
.whatsapp-btn {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.3);
}
.email-btn {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  border: 1px solid rgba(59, 130, 246, 0.3);
}
.cta-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}
.call-btn:hover {
  background: var(--accent);
  color: white;
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.4);
}
.whatsapp-btn:hover {
  background: #22c55e;
  color: white;
  box-shadow: 0 0 20px rgba(34, 197, 94, 0.4);
}
.email-btn:hover {
  background: #3b82f6;
  color: white;
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
}
.cta-btn i {
  font-size: 1.2rem;
}
/* --- RESPONSIVE CTA --- */
@media (max-width: 992px) {
  .cta-container {
    flex-direction: column;
    text-align: center;
  }
}
@media (max-width: 650px) {
  .cta-actions {
    flex-direction: column;
    width: 100%;
  }
  
  .cta-btn {
    width: 100%;
    justify-content: center;
  }
}
/* --- FAQ SECTION --- */
.faq-section {
  background-color: var(--bg-dark);
}
.faq-accordion {
  max-width: 900px;
  margin: 0 auto;
}
.faq-item {
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  margin-bottom: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
}
.faq-item:hover {
  border-color: rgba(6, 182, 212, 0.2);
  background: rgba(30, 41, 59, 0.6);
}
.faq-item.active {
  border-color: var(--accent);
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.1);
}
.faq-question {
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}
.faq-question h3 {
  font-size: 1.15rem;
  font-weight: 600;
  color: white;
  margin: 0;
}
.faq-item.active .faq-question h3 {
  color: var(--accent-glow);
}
.faq-question .icon {
  width: 30px;
  height: 30px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-glow);
  transition: all 0.3s ease;
}
.faq-item.active .icon {
  background: var(--accent);
  color: white;
  transform: rotate(180deg);
}
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(15, 23, 42, 0.3);
}
.faq-item.active .faq-answer {
  max-height: 500px; /* Large enough to fit content */
}
.faq-answer p {
  padding: 0 30px 25px 30px;
  color: var(--text-muted);
  line-height: 1.6;
  font-size: 1rem;
  margin: 0;
}
/* Responsive FAQ */
@media (max-width: 768px) {
  .faq-question {
    padding: 20px;
  }
  
  .faq-question h3 {
    font-size: 1.05rem;
  }
}
/* --- PROJECT PORTFOLIO & TABS --- */
.project-tabs-section {
  padding: 80px 0;
  background-color: var(--bg-dark);
}
.tabs-wrapper {
  display: flex;
  justify-content: center;
.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 60px;
}
.tabs-container {
  position: relative;
  display: inline-flex;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 100px;
  padding: 6px;
  gap: 5px;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}
.tab-btn {
  position: relative;
  z-index: 2;
  padding: 14px 35px;
  border: none;
  background: transparent;
  color: var(--text-muted);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 100px;
  transition: color 0.3s ease;
  white-space: nowrap;
  font-family: var(--font-heading);
}
.tab-btn.active {
.footer-col h4 {
  color: white;
}
.tab-indicator {
  position: absolute;
  top: 6px;
  left: 6px;
  height: calc(100% - 12px);
  background: linear-gradient(135deg, var(--accent), #7c3aed);
  border-radius: 100px;
  z-index: 1;
  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 4px 20px rgba(6, 182, 212, 0.4);
}
.tab-pane {
  display: none;
  opacity: 0;
  transform: translateY(20px);
}
.tab-pane.active {
  display: block;
  animation: tabSlideReveal 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}
@keyframes tabSlideReveal {
  to { opacity: 1; transform: translateY(0); }
}
/* Project Cards Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-top: 40px;
}
.project-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
}
.project-card:hover {
  transform: translateY(-10px);
  border-color: rgba(6, 182, 212, 0.3);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 
              0 0 20px rgba(6, 182, 212, 0.1);
}
.project-card::after {
  content: "";
  position: absolute;
  top: -2px; left: -2px; right: -2px; bottom: -2px;
  background: linear-gradient(135deg, transparent, rgba(6, 182, 212, 0.3), transparent, rgba(124, 58, 237, 0.3), transparent);
  z-index: -1;
  border-radius: 26px;
  opacity: 0;
  transition: opacity 0.4s;
  background-size: 200% 200%;
}
.project-card:hover::after {
  opacity: 1;
  animation: borderGlow 3s linear infinite;
}
@keyframes borderGlow {
  0% { background-position: 0% 0%; }
  100% { background-position: 200% 200%; }
}
.project-card-image {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
}
.project-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.project-card:hover .project-card-image img {
  transform: scale(1.1);
}
.status-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 6px 14px;
  border-radius: 100px;
  font-size: 0.75rem;
  font-size: 1.1rem;
  margin-bottom: 25px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 5;
  backdrop-filter: blur(8px);
}


.status-completed {
  background: rgba(34, 197, 94, 0.15);
  color: #4ade80;
  border: 1px solid rgba(74, 222, 128, 0.3);
}
.status-ongoing {
  background: rgba(251, 191, 36, 0.15);
  color: #fbbf24;
  border: 1px solid rgba(251, 191, 36, 0.3);
}
.pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: badgePulse 2s infinite;
}
.status-completed .pulse-dot { background: #4ade80; }
.status-ongoing .pulse-dot { background: #fbbf24; }
@keyframes badgePulse {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(74, 222, 128, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
}
.project-card-body {
  padding: 25px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.project-card-body h3 {
  font-size: 1.5rem;
  font-weight: 700;
.footer-col ul li {
  margin-bottom: 12px;
  color: white;
}
.project-card-body p {
.footer-col ul li a {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 20px;
  line-height: 1.5;
}
/* Home Page Specific: Metrics & Progress */
.card-metrics {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
.footer-col ul li a:hover {
  color: var(--accent);
}
.metric-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.metric-value {
  font-weight: 700;
  color: var(--accent-glow);
  font-size: 0.9rem;
}
.metric-label {
  font-size: 0.7rem;
.contact-link {
  display: block;
  margin-bottom: 15px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.95rem;
}
.progress-container {
  margin-bottom: 20px;
}
.progress-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 8px;
}
.progress-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), #7c3aed);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
}
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 25px;
}
.tech-badge {
  font-size: 0.75rem;
  padding: 5px 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-muted);
  border-radius: 100px;
  font-weight: 500;
}
.card-actions {
  display: flex;
  gap: 12px;
  margin-top: auto;
}
.btn-card {
  flex: 1;
  padding: 12px;
.copyright {
  text-align: center;
  border-radius: 12px;
  color: #475569;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s;
  padding-top: 30px;
  border-top: 1px solid var(--border);
}
.btn-card-outline {
/* --- COMMON FORMS --- */
.form-input {
  width: 100%;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  border-radius: 12px;
  color: white;
  margin-bottom: 20px;
  transition: 0.3s;
}
.btn-card-outline:hover {
.form-input:focus {
  border-color: var(--accent);
  background: rgba(255, 255, 255, 0.05);
  border-color: white;
  outline: none;
}
/* --- PREMIUM CTA SECTION --- */
.cta-section {
  position: relative;
/* --- ABOUT MISSION & VALUES --- */
.about-mission {
  padding: 120px 0;
  background-color: #0d0d0d;
  overflow: hidden;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
/* Mesh Gradient Background */
.cta-bg-mesh {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(124, 58, 237, 0.15) 0%, transparent 50%);
  filter: blur(80px);
  animation: meshMove 15s infinite alternate ease-in-out;
}
@keyframes meshMove {
  0% { transform: scale(1) translate(0, 0); }
  100% { transform: scale(1.2) translate(50px, 30px); }
}
.cta-container {
  position: relative;
  z-index: 10;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}
.cta-content {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 80px 40px;
  border-radius: 40px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  animation: ctaFadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1);
}
@keyframes ctaFadeInUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
.cta-section h2 {
  font-size: clamp(2.5rem, 6vw, 3.8rem);
.mission-text h2 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 25px;
  line-height: 1.1;
  letter-spacing: -1.5px;
  background: linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.5) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
}
.cta-section p {
  font-size: 1.25rem;
.mission-text p {
  color: var(--text-muted);
  margin-bottom: 50px;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}
.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 25px;
  align-items: center;
}
.btn-cta-primary {
  background: linear-gradient(135deg, var(--accent), #7c3aed);
  color: white;
  padding: 20px 50px;
  border-radius: 100px;
  font-weight: 700;
  font-size: 1.15rem;
  box-shadow: 0 10px 40px rgba(6, 182, 212, 0.4);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  z-index: 1;
  line-height: 1.8;
  margin-bottom: 25px;
}
.btn-cta-primary:hover {
  transform: scale(1.05) translateY(-3px);
  box-shadow: 0 20px 50px rgba(6, 182, 212, 0.6);
.about-vision {
  padding: 100px 0;
  background: rgba(30, 41, 59, 0.2);
  border-radius: 48px;
  margin: 60px 0;
}
/* Button Pulse Layer */
.btn-cta-primary::after {
  content: "";
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: inherit;
  border-radius: inherit;
  z-index: -1;
  animation: ctaPulse 2.5s infinite;
  opacity: 0.6;
.vision-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}
@keyframes ctaPulse {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(1.4); opacity: 0; }
.vision-card {
  padding: 50px 30px;
  background: var(--bg-dark);
  border: 1px solid var(--border);
  border-radius: 28px;
  text-align: center;
  transition: 0.4s;
}
.btn-cta-outline {
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: white;
  padding: 20px 50px;
  border-radius: 100px;
  font-weight: 600;
  font-size: 1.15rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}
.vision-card:hover { transform: translateY(-10px); border-color: var(--accent); }
.btn-cta-outline:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: white;
  transform: translateY(-3px);
}
@media (max-width: 768px) {
  .cta-section {
    padding: 80px 0;
  }
  .cta-buttons {
    flex-direction: column;
    width: 100%;
    gap: 15px;
  }
  .btn-cta-primary, .btn-cta-outline {
    width: 100%;
    text-align: center;
    padding: 16px 40px;
  }
  .cta-content {
    padding: 50px 20px;
    border-radius: 30px;
  }
}
/* --- PREMIUM SAAS HERO SECTION --- */
.saas-hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
/* --- TEAM & LEADERSHIP --- */
.team-section { padding: 120px 0; background: #020617; }
.team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; }
.team-card {
  background: rgba(15, 23, 42, 0.4);
  padding: 50px 30px;
  border-radius: 32px;
  border: 1px solid var(--border);
  text-align: center;
  padding: 120px 0 80px 0;
  background: radial-gradient(circle at 50% 50%, #0f172a 0%, #020617 100%);
  overflow: hidden;
  color: white;
}
/* Central Background Glow */
.hero-glow-orb {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%);
.team-img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  filter: blur(100px);
  z-index: 1;
  animation: orbPulse 8s infinite alternate ease-in-out;
  pointer-events: none;
  margin: 0 auto 30px;
  border: 4px solid rgba(255, 255, 255, 0.1);
  object-fit: cover;
}
@keyframes orbPulse {
  0% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1.2); }
}
.saas-hero-content {
  position: relative;
  z-index: 10;
  max-width: 900px;
  padding: 0 20px;
  animation: saasFadeUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
}
@keyframes saasFadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
/* Pill Badge */
.platform-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 100px;
  font-size: 0.85rem;
  color: var(--accent-glow);
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 30px;
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.1);
}
.saas-hero h1 {
  font-size: clamp(2.5rem, 8vw, 4.2rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 25px;
  letter-spacing: -2px;
}
.hero-sub-text {
  font-size: 1.25rem;
  color: #94a3b8;
  max-width: 700px;
  margin: 0 auto 45px auto;
  line-height: 1.6;
}
/* Feature Strip */
.feature-strip {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 60px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
}
.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: #94a3b8;
  opacity: 0.8;
}
.feature-item i {
  color: var(--accent-glow);
  font-size: 1.1rem;
}
/* SaaS Specific Buttons */
.btn-saas {
  display: inline-block;
  padding: 18px 45px;
  border-radius: 100px;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
}
.btn-saas-primary {
  background: linear-gradient(135deg, var(--accent), #3b82f6);
  color: white;
  box-shadow: 0 10px 30px rgba(6, 182, 212, 0.3);
}
.btn-saas-primary:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 15px 40px rgba(6, 182, 212, 0.5);
}
.btn-saas-outline {
  border: 1px solid #334155;
  color: #f8fafc;
}
.btn-saas-outline:hover {
  border-color: var(--accent-glow);
  background: rgba(6, 182, 212, 0.05);
  transform: translateY(-2px);
}
@media (max-width: 768px) {
  .saas-hero {
    min-height: 80vh;
    padding: 100px 0 60px 0;
  }
  .feature-strip {
    flex-direction: column;
    gap: 15px;
    align-items: center;
    max-width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }
  .hero-buttons {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}
/* --- SAAS TRUST STRIP --- */
.trust-strip {
  background-color: #020617;
  padding: 60px 0;
  border-top: 1px solid #1e293b;
  position: relative;
  z-index: 5;
}
.trust-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  align-items: center;
}
.trust-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: trustFadeIn 0.8s ease-out forwards;
  opacity: 0;
}
@keyframes trustFadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.trust-item:nth-child(1) { animation-delay: 0.1s; }
.trust-item:nth-child(2) { animation-delay: 0.2s; }
.trust-item:nth-child(3) { animation-delay: 0.3s; }
.trust-item:nth-child(4) { animation-delay: 0.4s; }
.trust-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.02);
}
.trust-icon-box {
/* --- CONTACT PAGE --- */
.contact-hero { padding: 180px 0 100px 0; text-align: center; }
.contact-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 60px; padding: 80px 0; }
.contact-info-list { list-style: none; }
.contact-info-list li { margin-bottom: 30px; display: flex; align-items: flex-start; gap: 20px; }
.contact-info-list i {
  width: 50px;
  height: 50px;
  min-width: 50px;
  background: rgba(6, 182, 212, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(6, 182, 212, 0.15);
  border-radius: 50%;
  background: rgba(6, 182, 212, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-glow);
  font-size: 1.25rem;
  box-shadow: 0 0 15px rgba(6, 182, 212, 0.1);
  transition: all 0.3s ease;
  color: var(--accent);
  flex-shrink: 0;
}
.trust-item:hover .trust-icon-box {
  background: rgba(6, 182, 212, 0.1);
  box-shadow: 0 0 25px rgba(6, 182, 212, 0.3);
  transform: scale(1.1);
}
.trust-text {
  color: #cbd5f5;
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.4;
}
@media (max-width: 768px) {
  .trust-strip {
    padding: 40px 0;
  }
  .trust-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .trust-item {
    background: rgba(255, 255, 255, 0.02);
  }
}
/* --- PREMIUM TOOLS MARKETPLACE --- */
.tools-section {
  padding: 120px 0;
  background: radial-gradient(circle at 50% 0%, #0f172a 0%, #020617 100%);
  position: relative;
  overflow: hidden;
}
.tools-header {
  text-align: center;
  margin-bottom: 60px;
}
.tools-header .label {
  color: var(--accent-glow);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 15px;
  display: block;
}
.tools-header h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  color: white;
  font-weight: 800;
  margin-bottom: 20px;
}
.tools-header p {
/* --- PORTFOLIO & CASE STUDIES --- */
.portfolio-section { padding: 120px 0; background: #0b1120; }
.portfolio-tabs { display: flex; justify-content: center; gap: 20px; margin-bottom: 60px; }
.tab-btn {
  padding: 12px 30px;
  border-radius: 50px;
  border: 1px solid var(--border);
  background: transparent;
  color: #94a3b8;
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.1rem;
}
/* Filter Tabs */
.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 60px;
  flex-wrap: wrap;
}
.filter-btn {
  padding: 10px 25px;
  border-radius: 100px;
  border: 1px solid #1e293b;
  background: rgba(15, 23, 42, 0.5);
  color: #94a3b8;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  transition: 0.3s;
}
.tab-btn.active { background: var(--accent); color: white; border-color: var(--accent); }
.filter-btn:hover {
  border-color: rgba(6, 182, 212, 0.5);
  color: white;
}
.filter-btn.active {
  background: linear-gradient(135deg, var(--accent), #3b82f6);
  border-color: transparent;
  color: white;
  box-shadow: 0 5px 15px rgba(6, 182, 212, 0.3);
}
/* Premium Tool Card */
.premium-tools-grid {
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 30px;
}
.premium-tool-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
.project-card {
  position: relative;
  height: 450px;
  border-radius: 32px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.premium-tool-card::before {
  content: "";
.project-info {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), transparent);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
  bottom: 0; left: 0; width: 100%;
  padding: 40px;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.95) 20%, transparent);
  transform: translateY(20px);
  transition: 0.4s;
}
.premium-tool-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(6, 182, 212, 0.4);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(6, 182, 212, 0.1);
}
.premium-tool-card:hover::before {
  opacity: 1;
}
.card-top {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}
.tool-icon-circle {
  width: 50px;
  height: 50px;
  background: rgba(6, 182, 212, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--accent-glow);
  box-shadow: 0 0 15px rgba(6, 182, 212, 0.1);
}
.card-top h3 {
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  flex: 1;
}
.tool-badge {
  font-size: 0.7rem;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.badge-free {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.2);
}
.badge-soon {
  background: rgba(245, 158, 11, 0.1);
  color: #f59e0b;
  border: 1px solid rgba(245, 158, 11, 0.2);
}
.use-case {
  font-size: 0.95rem;
  color: white;
  font-weight: 500;
  margin-bottom: 15px;
}
.feature-points {
  list-style: none;
  padding: 0;
  margin: 0 0 25px 0;
}
.feature-points li {
  font-size: 0.85rem;
  color: #94a3b8;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.feature-points li i {
  color: var(--accent-glow);
  font-size: 0.8rem;
}
.tool-footer-meta {
  margin-top: auto;
  padding-top: 20px;
}
.btn-tool-cta {
  width: 100%;
  padding: 14px;
  border-radius: 14px;
  border: none;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
}
.btn-tool-primary {
  background: linear-gradient(135deg, var(--accent), #3b82f6);
  color: white;
}
.btn-tool-primary:hover {
  filter: brightness(1.1);
  box-shadow: 0 5px 15px rgba(6, 182, 212, 0.4);
}
.btn-tool-disabled {
  background: rgba(255, 255, 255, 0.05);
  color: #475569;
  cursor: not-allowed;
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.tool-type {
  display: block;
/* --- SAAS PRODUCT SUITE --- */
.saas-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; }
.saas-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 40px;
  text-align: center;
  font-size: 0.75rem;
  color: #64748b;
  margin-top: 12px;
  font-weight: 500;
  transition: 0.4s;
}
@media (max-width: 768px) {
  .tools-section {
    padding: 80px 0;
  }
  .premium-tools-grid {
    grid-template-columns: 1fr;
  }
}
.saas-card:hover { transform: scale(1.03); border-color: var(--accent-pink); }
.saas-icon { font-size: 2.5rem; margin-bottom: 25px; color: var(--accent-pink); }
/* --- POWERFUL DESKTOP APPLICATIONS --- */
.desktop-apps-section {
  padding: 120px 0;
  background-color: #020617;
  border-top: 1px solid #1e293b;
  position: relative;
  overflow: hidden;
}
.desktop-apps-section .section-header {
  text-align: center;
  margin-bottom: 70px;
}
.desktop-apps-section .label {
  color: var(--accent-glow);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 15px;
  display: block;
}
.desktop-apps-section h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  color: white;
  font-weight: 800;
  margin-bottom: 20px;
}
.desktop-apps-section .subtext {
  color: #94a3b8;
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.1rem;
}
/* Featured Flagship Card */
.featured-app-card {
/* --- PRICING TABLES --- */
.pricing-section { padding: 120px 0; background-color: #020617; }
.pricing-flex {
  display: flex;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 32px;
  margin-bottom: 50px;
  margin-top: 20px;
  overflow: hidden;
  position: relative;
  transition: all 0.5s ease;
  animation: featuredFadeIn 1s cubic-bezier(0.2, 0.8, 0.2, 1);
}
@keyframes featuredFadeIn {
  from { opacity: 0; transform: translateX(-40px); }
  to { opacity: 1; transform: translateX(0); }
}
.featured-app-card:hover {
  transform: scale(1.01);
  border-color: rgba(6, 182, 212, 0.4);
}
.featured-content {
  flex: 1.2;
  padding: 60px;
}
.flagship-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, var(--accent), #3b82f6);
  color: white;
  padding: 6px 14px;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 25px;
}
.featured-content h3 {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 20px;
  font-weight: 800;
}
.featured-content p {
  font-size: 1.2rem;
  color: #94a3b8;
  margin-bottom: 30px;
  line-height: 1.6;
}
.flagship-features {
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}
.flagship-features li {
  font-size: 0.95rem;
  color: #f1f5f9;
  display: flex;
  align-items: center;
  gap: 10px;
}
.flagship-features i {
  color: var(--accent-glow);
}
.featured-actions {
  display: flex;
  gap: 20px;
}
.app-mockup-area {
  flex: 0.8;
  background: radial-gradient(circle at center, rgba(6, 182, 212, 0.15) 0%, transparent 70%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 400px;
}
.mock-app-frame {
  width: 85%;
  height: 75%;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6);
  position: relative;
  overflow: hidden;
  padding: 20px;
}
.app-frame-dots {
  display: flex;
  gap: 8px;
  margin-bottom: 30px;
}
.app-frame-dots span { background: #334155; height: 8px; width: 8px; border-radius: 50%; }
.mock-grid { display: grid; gap: 15px; grid-template-columns: repeat(2, 1fr); }
.mock-box { height: 100px; background: rgba(255, 255, 255, 0.03); border-radius: 10px; border: 1px solid rgba(255, 255, 255, 0.05); position: relative; overflow: hidden; }
.mock-box::after { content: ""; position: absolute; top: 0; left: 0; width: 40%; height: 100%; background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.1), transparent); animation: mockScan 2s infinite; }
@keyframes mockScan {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(300%); }
}
/* Supporting Apps Grid */
.supporting-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  flex-wrap: wrap;
}
.app-card-sm {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 24px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}
.app-card-sm:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(6, 182, 212, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}
.app-type-badge {
  position: absolute;
  top: 40px;
  right: 40px;
  font-size: 0.65rem;
  font-weight: 800;
  color: #3b82f6;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.app-card-sm h4 {
  font-size: 1.4rem;
  color: white;
  margin-bottom: 20px;
  font-weight: 700;
}
.app-card-sm p {
  color: #94a3b8;
  font-size: 0.95rem;
  margin-bottom: 25px;
  line-height: 1.6;
}
.app-feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
}
.app-feature-list li {
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.app-feature-list i { color: var(--accent-glow); }
.app-card-footer {
  margin-top: auto;
  padding-top: 25px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.app-meta {
  font-size: 0.75rem;
  color: #475569;
  font-weight: 500;
}
@media (max-width: 992px) {
  .featured-app-card { flex-direction: column; }
  .featured-content { padding: 40px; }
  .app-mockup-area { min-height: 350px; }
  .flagship-features { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .desktop-apps-section { padding: 80px 0; }
  .featured-actions { flex-direction: column; }
  .featured-content h3 { font-size: 2.2rem; }
  .app-card-sm { padding: 30px; }
}
/* --- SMART WEB SaaS TOOLS --- */
.web-saas-section {
  padding: 120px 0;
  background: radial-gradient(circle at 0% 50%, #0f172a 0%, #020617 100%);
  border-top: 1px solid #1e293b;
  position: relative;
  overflow: hidden;
}
.web-saas-section .section-header {
.pricing-box {
  width: 350px;
  background: rgba(30, 41, 59, 0.4);
  padding: 60px 40px;
  border-radius: 40px;
  border: 1px solid var(--border);
  text-align: center;
  margin-bottom: 70px;
}
.core-business-label {
  display: inline-block;
  background: rgba(6, 182, 212, 0.1);
  color: var(--accent-glow);
  padding: 6px 16px;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 20px;
  border: 1px solid rgba(6, 182, 212, 0.2);
}
.web-saas-section h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  color: white;
  font-weight: 800;
  margin-bottom: 20px;
}
.web-saas-section .subtext {
  color: #94a3b8;
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.1rem;
}
.saas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 35px;
  margin-top: 50px;
}
.saas-product-card {
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
.pricing-box.popular {
  border-color: var(--accent);
  background: rgba(6, 182, 212, 0.05);
  transform: scale(1.05);
  position: relative;
  height: 100%;
}
.saas-product-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: rgba(6, 182, 212, 0.4);
  background: rgba(15, 23, 42, 0.6);
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.5);
}
.card-saas-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}
/* Badge Pulsing */
.badge-web-app {
  background: linear-gradient(135deg, #0ea5e9, #2563eb);
  color: white;
  font-size: 0.65rem;
  font-weight: 800;
  padding: 4px 12px;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
}
.badge-web-app::after {
  content: "";
.pricing-box.popular::before {
  content: "Popular Choice";
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(-100%);
  animation: badgeShine 3s infinite;
}
@keyframes badgeShine {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
  100% { transform: translateX(100%); }
}
.saas-product-card.flagship-web {
  border-color: rgba(6, 182, 212, 0.3);
  box-shadow: 0 0 30px rgba(6, 182, 212, 0.1);
}
.saas-product-card.flagship-web .tool-icon-circle {
  background: rgba(6, 182, 212, 0.2);
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.2);
}
.saas-product-card h3 {
  color: white;
  margin-bottom: 15px;
  font-size: 1.4rem;
  top: 25px; left: 50%;
  transform: translateX(-50%);
  background: var(--accent);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
}
.saas-use-case {
  color: #f1f5f9;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 25px;
}
.saas-features {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
}
.saas-features li {
  color: #94a3b8;
  font-size: 0.9rem;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.saas-features i {
  color: var(--accent-glow);
  font-size: 0.85rem;
}
.saas-footer-note {
  display: block;
  text-align: center;
  font-size: 0.75rem;
  color: #475569;
  margin-top: 15px;
  font-weight: 500;
}
@media (max-width: 768px) {
  .saas-product-card {
    padding: 30px;
  }
}
/* --- MOBILE APPS FOR FIELD TEAMS --- */
.mobile-apps-section {
  padding: 120px 0;
  background-color: #020617;
  border-top: 1px solid #1e293b;
  position: relative;
  overflow: hidden;
}
.mobile-apps-section .section-header {
  text-align: center;
  margin-bottom: 70px;
}
.mobile-label {
  color: #fb7185; /* Light red/pink */
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 15px;
  display: block;
}
.mobile-apps-section h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  color: white;
  font-weight: 800;
  margin-bottom: 20px;
}
.mobile-apps-section .subtext {
  color: #94a3b8;
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.1rem;
}
.mobile-flagship-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #fb7185, #e11d48);
  color: white;
  padding: 6px 14px;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 25px;
}
.btn-mobile-primary {
  background: linear-gradient(135deg, #fb7185, #e11d48);
  color: white;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  border-radius: 14px;
  font-weight: 700;
  transition: all 0.3s;
}
.btn-mobile-primary:hover {
  filter: brightness(1.1);
  box-shadow: 0 10px 25px rgba(225, 29, 72, 0.4);
}
/* Phone Mockup */
.phone-mockup-wrap {
  position: relative;
  width: 280px;
  height: 570px;
  margin: 0 auto;
  animation: floatPhone 6s ease-in-out infinite;
  z-index: 10;
}
@keyframes floatPhone {
  0%, 100% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-20px) rotate(1deg); }
}
.phone-backlight {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 140%;
  height: 140%;
  background: radial-gradient(circle, rgba(251, 113, 133, 0.15) 0%, rgba(6, 182, 212, 0.1) 50%, transparent 70%);
  transform: translate(-50%, -50%);
  filter: blur(40px);
  z-index: 1;
}
.phone-frame {
  position: relative;
  width: 100%;
  height: 100%;
  background: #0f172a;
  border: 12px solid #1e293b;
  border-radius: 44px;
  box-shadow: 0 50px 100px rgba(0, 0, 0, 0.6);
  z-index: 2;
  overflow: hidden;
}
.phone-screen {
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #1e293b 0%, #020617 100%);
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.phone-notch {
  width: 120px;
  height: 25px;
  background: #1e293b;
  border-radius: 0 0 15px 15px;
  margin: -20px auto 30px auto;
}
.phone-content-mock { margin-top: 20px; }
.phone-line-sm { height: 10px; width: 60%; background: rgba(255, 255, 255, 0.05); border-radius: 5px; margin-bottom: 20px; }
.phone-box-mock { height: 120px; background: rgba(251, 113, 133, 0.05); border: 1px solid rgba(251, 113, 133, 0.1); border-radius: 12px; margin-bottom: 20px; }
/* Mobile Suite Cards */
.mobile-product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 35px;
  margin-top: 60px;
}
.mobile-product-card {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 28px;
/* --- SAAS FEATURES & BENEFITS --- */
.saas-features { padding: 80px 0; background: #0b1120; }
.feature-info-card {
  padding: 40px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  border: 1px solid var(--border);
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}
.mobile-product-card:hover {
  transform: translateY(-8px);
  border-color: rgba(251, 113, 133, 0.3);
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}
.app-vertical-tag {
  font-size: 0.65rem;
  font-weight: 800;
  color: #fb7185;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
  display: block;
}
.mobile-product-card h4 {
  font-size: 1.4rem;
  color: white;
  margin-bottom: 15px;
  font-weight: 700;
}
.mobile-product-card p {
  color: #94a3b8;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 25px;
}
@media (max-width: 768px) {
  .mobile-apps-section { padding: 80px 0; }
  .mobile-product-card { padding: 30px; }
}
/* --- SIMPLE & TRANSPARENT PRICING --- */
.pricing-section {
  padding: 120px 0;
  background-color: #020617;
  border-top: 1px solid #1e293b;
  position: relative;
  overflow: hidden;
}
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 35px;
  margin-top: 60px;
  gap: 25px;
  align-items: center;
}
.pricing-card {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 28px;
  padding: 45px 35px;
.feature-info-card i {
  font-size: 2rem;
  color: var(--accent);
  width: 60px;
  height: 60px;
  background: rgba(6, 182, 212, 0.1);
  display: flex;
  flex-direction: column;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  height: 100%;
}
.pricing-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(6, 182, 212, 0.3);
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
}
.pricing-card.highlight {
  border-color: rgba(6, 182, 212, 0.4);
  background: rgba(6, 182, 212, 0.03);
  box-shadow: 0 0 40px rgba(6, 182, 212, 0.1);
  transform: scale(1.05);
}
.pricing-card.highlight:hover {
  transform: translateY(-8px) scale(1.07);
  box-shadow: 0 30px 60px rgba(6, 182, 212, 0.2);
}
.pricing-badge {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 800;
  color: var(--accent-glow);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
}
.pricing-card h3 {
  font-size: 1.8rem;
  color: white;
  margin-bottom: 15px;
  font-weight: 700;
}
.pricing-desc {
  color: #94a3b8;
  font-size: 0.95rem;
  margin-bottom: 30px;
  line-height: 1.6;
}
.pricing-features {
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
}
.pricing-features li {
  color: #cbd5f5;
  font-size: 0.95rem;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.pricing-features i { color: var(--accent-glow); }
.pricing-footer-text {
  margin-top: auto;
  font-size: 0.8rem;
  color: #475569;
  font-weight: 500;
  text-align: center;
  padding-top: 25px;
}
.pricing-trust-note {
  display: block;
  text-align: center;
  margin-top: 60px;
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
}
/* Button Variations for Pricing */
.btn-pricing {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  border-radius: 100px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s;
  border-radius: 12px;
}
.btn-pricing-outline {
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
}
/* --- MOBILE APP SCREENSHOTS --- */
.app-screens-section { padding: 120px 0; background: #020617; overflow: hidden; }
.screen-carousel { display: flex; gap: 40px; padding: 20px; }
.screen-item { width: 280px; flex-shrink: 0; border-radius: 40px; border: 8px solid #1e293b; overflow: hidden; }
.btn-pricing-outline:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: white;
}
@media (max-width: 768px) {
  .pricing-section { padding: 80px 0; }
  .pricing-card { padding: 40px 30px; }
}
/* --- FINAL CONVERSION CTA --- */
.final-cta-section {
  padding: 160px 0;
  background: radial-gradient(circle at 50% 50%, #0f172a 0%, #020617 100%);
  position: relative;
  overflow: hidden;
/* --- INDUSTRIES WE SERVE --- */
.industry-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.industry-box {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.05), transparent);
  padding: 30px;
  border-radius: 16px;
  text-align: center;
  transition: 0.3s;
}
.final-cta-section .container {
  position: relative;
  z-index: 5;
}
.industry-box:hover { background: rgba(6, 182, 212, 0.1); border: 1px solid var(--accent); }
.cta-aura-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 70%);
  transform: translate(-50%, -50%);
  filter: blur(80px);
  z-index: 1;
  animation: auraBreathe 8s ease-in-out infinite;
}
/* --- TRUST & CLIENT LOGOS --- */
.client-section { padding: 60px 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.logo-strip { display: flex; justify-content: space-around; opacity: 0.5; filter: grayscale(1); }
@keyframes auraBreathe {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
}
/* --- DESKTOP APP HIGHLIGHTS --- */
.desktop-apps-section { padding: 120px 0; background-color: #0b1120; }
.desktop-preview-card { position: relative; border-radius: 30px; overflow: hidden; background: #1e293b; }
.final-cta-section h2 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: white;
  font-weight: 800;
  margin-bottom: 25px;
  line-height: 1.1;
/* --- PRODUCT SPECIFIC HEROES --- */
.product-hero {
  padding: 160px 0 80px 0;
  background: radial-gradient(circle at 100% 0%, rgba(244, 114, 182, 0.1), transparent 70%);
}
.final-cta-section .subtext {
  color: #cbd5f5;
  max-width: 650px;
  margin: 0 auto 50px auto;
  font-size: 1.2rem;
  line-height: 1.6;
}
.product-hero h1 { font-size: 4rem; font-weight: 800; margin-bottom: 20px; }
.product-hero .highlight { color: var(--accent-pink); }
.cta-button-group {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-bottom: 40px;
}
/* --- PRODUCT GRID (Products Page) --- */
.product-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
.product-img-card { border-radius: 40px; overflow: hidden; box-shadow: 0 40px 100px rgba(0,0,0,0.5); }
.btn-consultation-xl {
  background: linear-gradient(135deg, #06b6d2, #a855f7);
  color: white;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.2rem;
  padding: 20px 45px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  box-shadow: 0 20px 40px rgba(168, 85, 247, 0.3);
}
/* --- CUSTOM CASE STUDY LAYOUTS --- */
.case-study-hero { height: 70vh; position: relative; display: flex; align-items: center; }
.case-study-content { z-index: 2; color: white; }
.btn-consultation-xl:hover {
  transform: scale(1.05) translateY(-5px);
  box-shadow: 0 30px 60px rgba(168, 85, 247, 0.5);
  filter: brightness(1.1);
}
/* --- GLOBAL SECTION UTILITIES (Advanced) --- */
.bg-darker { background-color: #020617; }
.bg-gradient-soft { background: linear-gradient(135deg, rgba(30,41,59,0.5), transparent); }
.trust-row-saas {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 25px;
}
/* --- ADDITIONAL UI COMPONENTS --- */
.pill-tag { padding: 5px 15px; background: rgba(6, 182, 212, 0.1); color: var(--accent); border-radius: 50px; }
.testimonial-card { padding: 40px; background: #1e293b; border-radius: 20px; border-left: 5px solid var(--accent); }
.trust-item-saas {
  color: #94a3b8;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
/* --- MEDIA QUERIES (Page Specific) --- */
@media (max-width: 1100px) {
  .product-grid { grid-template-columns: 1fr; text-align: center; }
}
.trust-item-saas i {
  color: #06b6d2;
}
.final-micro-copy {
  color: #475569;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.5px;
}
/* Background Visual Accents */
.cta-visual-blur {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  filter: blur(100px);
  z-index: 0;
  opacity: 0.2;
}
.blur-1 { top: -100px; left: -100px; background: #06b6d2; }
.blur-2 { bottom: -100px; right: -100px; background: #a855f7; }
@media (max-width: 768px) {
  .final-cta-section { padding: 100px 0; }
  .cta-button-group { flex-direction: column; align-items: center; gap: 15px; }
  .trust-row-saas { flex-direction: column; align-items: center; gap: 10px; }
  .btn-consultation-xl { width: 100%; justify-content: center; }
  .product-hero h1 { font-size: 3rem; }
  .industry-grid { grid-template-columns: 1fr 1fr; }
}
/* Web Development Page Styles - Ultra Premium SaaS Style */
:root {
  --page-bg: #020617;
  --accent-green: #00ff88;
  --accent-cyan: #00d4ff;
  --text-primary: #f8fafc;
  --text-secondary: rgba(248, 258, 252, 0.7);
  --glass-bg: rgba(255, 255, 255, 0.03);
  --glass-border: rgba(255, 255, 255, 0.1);
  --grad-main: linear-gradient(135deg, var(--accent-green), var(--accent-cyan));
}
body {
  background-color: var(--page-bg);
  color: var(--text-primary);
  overflow-x: hidden;
}
/* --- HERO SECTION --- */
/* --- PREMIUM FLOW SECTIONS (TODAY'S WORK) --- */
.hero-solutions {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 0 80px 0;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.05), transparent 50%);
}
/* Background Gradients */
.hero-bg-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.05), transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.08), transparent 40%);
}
.blur-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  z-index: -1;
  opacity: 0.4;
}
.circle-tr {
  width: 400px;
  height: 400px;
  background: var(--accent-cyan);
  top: -100px;
  right: -100px;
}
.circle-bl {
  width: 500px;
  height: 500px;
  background: var(--accent-green);
  bottom: -150px;
  left: -150px;
}
/* Layout */
.hero-container {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 40px;
}
/* Left Column Content */
.hero-content {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.solution-badge {
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  padding: 8px 16px;
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 100px;
  color: var(--accent-green);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.1);
}
.hero-title {
  font-size: 4rem;
  line-height: 1.1;
  font-weight: 800;
  color: white;
}
.text-gradient {
  background: var(--grad-main);
  background: linear-gradient(135deg, #00ff88, #00d4ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}
.hero-desc {
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 600px;
}
.hero-actions {
/* Process Section */
.process-section { padding: 120px 0; background-color: #0b1120; }
.process-track {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}
.btn-glow {
  justify-content: space-between;
  gap: 30px;
  position: relative;
  padding: 16px 32px;
  background: var(--grad-main);
  color: #020617;
  border-radius: 14px;
  font-weight: 700;
  font-size: 1.05rem;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0, 255, 136, 0.2);
  overflow: hidden;
  border: none;
  cursor: pointer;
  padding: 20px 0;
}
.btn-glow:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 40px rgba(0, 255, 136, 0.4);
.process-track::before {
  content: "";
  position: absolute;
  top: 150px;
  left: 50px;
  right: 50px;
  height: 2px;
  background: linear-gradient(to right, #00ff88, #00d4ff);
  opacity: 0.2;
}
.btn-outline {
  padding: 16px 32px;
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  font-weight: 600;
  font-size: 1.05rem;
  transition: all 0.3s ease;
}
.btn-outline:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.3);
}
.trust-text {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}
/* Right Column Visuals */
.hero-visual {
/* Tech Marquee */
.tech-marquee-wrapper {
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.visual-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to right, transparent 0%, white 15%, white 85%, transparent 100%);
}
.glow-shape {
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, var(--accent-cyan), transparent 70%);
  opacity: 0.15;
  filter: blur(40px);
  animation: pulseRotate 10s infinite alternate ease-in-out;
}
.glass-card {
  position: absolute;
  width: 280px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
  z-index: 2;
  animation: float 6s infinite ease-in-out;
}
.card-1 {
  top: 5%;
  left: 5%;
  animation-delay: 0s;
}
.card-2 {
  bottom: 10%;
  left: 15%;
  animation-delay: -2s;
}
.card-3 {
  top: 20%;
  right: 0%;
  width: 240px;
  animation-delay: -4s;
}
.glass-card h4 {
  color: var(--accent-green);
  font-size: 0.9rem;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.glass-card p {
  font-size: 0.95rem;
  color: white;
  font-weight: 500;
}
.card-icon {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
.tech-track {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  font-size: 1.2rem;
  width: max-content;
  gap: 30px;
  animation: techMarquee 40s linear infinite;
}
/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-30px) rotate(2deg); }
@keyframes techMarquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes pulseRotate {
  0% { transform: scale(1) rotate(0deg); opacity: 0.15; }
  100% { transform: scale(1.3) rotate(360deg); opacity: 0.25; }
}
/* Responsive */
@media (max-width: 1100px) {
  .hero-title { font-size: 3.2rem; }
  .hero-container { gap: 40px; }
}
@media (max-width: 900px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    padding-top: 80px;
  }
  
  .hero-content {
    align-items: center;
  }
  
  .hero-desc {
    margin: 0 auto;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .hero-visual {
    height: 450px;
    margin-top: 40px;
  }
  
  .glass-card {
    width: 220px;
  }
  
  .card-1 { left: 5%; top: 5%; }
  .card-2 { right: 5%; bottom: 10%; }
  .card-3 { top: 35%; right: 10%; width: 180px; }
}
@media (max-width: 600px) {
  .hero-title { font-size: 2.5rem; }
  .hero-desc { font-size: 1.1rem; }
  .btn-glow, .btn-outline { padding: 14px 24px; font-size: 0.95rem; }
  .hero-actions { flex-direction: column; width: 100%; max-width: 300px; margin: 0 auto; }
}
/* --- WHAT WE OFFER SECTION --- */
.offer-section {
  padding: 100px 0;
  background-color: #0f172a;
  position: relative;
  z-index: 1;
}
.offer-header {
  text-align: center;
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
.offer-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 15px;
}
.offer-header p {
  color: #94a3b8;
  font-size: 1.1rem;
}
.offer-grid {
/* Portfolio Case Study (Premium) */
.featured-case-study {
  max-width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}
.offer-card {
  background: rgba(15, 23, 42, 0.5);
  grid-template-columns: 1.2fr 1.5fr;
  gap: 60px;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 40px 30px;
  transition: all 0.3s ease;
  cursor: default;
  opacity: 0;
  transform: translateY(20px);
  animation: offerFadeUp 0.6s ease forwards;
  border-radius: 40px;
  padding: 80px;
}
.offer-card:hover {
  transform: translateY(-5px);
  border-color: rgba(0, 212, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 212, 255, 0.05);
}
.offer-card .icon-wrap {
  width: 60px;
  height: 60px;
  background: rgba(0, 212, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  font-size: 1.5rem;
  color: #00d4ff;
  transition: all 0.3s ease;
}
.offer-card:hover .icon-wrap {
  background: #00d4ff;
  color: #020617;
}
.offer-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 15px;
}
.offer-card p {
  color: #94a3b8;
  line-height: 1.6;
  font-size: 0.95rem;
}
/* Staggered Animation Delays */
.offer-card:nth-child(1) { animation-delay: 0.1s; }
.offer-card:nth-child(2) { animation-delay: 0.2s; }
.offer-card:nth-child(3) { animation-delay: 0.3s; }
.offer-card:nth-child(4) { animation-delay: 0.4s; }
@keyframes offerFadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* Responsive Grid */
/* --- FINAL GLOBAL MEDIA QUERIES --- */
@media (max-width: 1200px) {
  .offer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
  .container { max-width: 1100px; }
  .featured-case-study { grid-template-columns: 1fr; padding: 40px; width: 95%; }
}
@media (max-width: 600px) {
  .offer-section { padding: 60px 0; }
  .offer-grid {
    grid-template-columns: 1fr;
  }
  .offer-header h2 { font-size: 2rem; }
  .offer-card { padding: 30px 20px; }
@media (max-width: 768px) {
  .nav-container { height: 75px; }
  .hero h1 { font-size: 2.8rem; }
  .section-padding { padding: 60px 0; }
}
/* --- RECONSTRUCTION END --- */
/* ... Fragment 1 Restoration Complete ... */
