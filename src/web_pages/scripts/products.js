document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const toolCards = document.querySelectorAll('.premium-tool-card');

  // --- 1. Tool Filtering Logic ---
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Manage Active State
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      toolCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          // Small delay for re-animation effect
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px) scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // --- 2. Staggered Entrance Animation (Observer) ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const toolObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add a deliberate stagger delay based on index
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
        toolObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  toolCards.forEach(card => {
    // Initial invisible state
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
    toolObserver.observe(card);
  });
});

// Helper for visible class (standard CSS injection fallback)
const style = document.createElement('style');
style.textContent = `
  .premium-tool-card.visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);
