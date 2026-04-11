/**
 * Portfolio Tab Switcher Logic
 * Handles sliding indicator and content visibility for project sections
 */
document.addEventListener('DOMContentLoaded', () => {
  const tabContainers = document.querySelectorAll('.tabs-container');

  tabContainers.forEach(container => {
    const tabs = container.querySelectorAll('.tab-btn');
    const indicator = container.querySelector('.tab-indicator');
    const wrapper = container.closest('.project-tabs-section') || container.closest('section');
    const panes = wrapper.querySelectorAll('.tab-pane');

    function updateIndicator(activeTab) {
      if (!indicator) return;
      indicator.style.width = `${activeTab.offsetWidth}px`;
      indicator.style.left = `${activeTab.offsetLeft}px`;
    }

    // Initialize indicator position
    const initialActive = container.querySelector('.tab-btn.active');
    if (initialActive) {
      // Small delay to ensure styles are calculated
      setTimeout(() => updateIndicator(initialActive), 100);
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active from all tabs in this container
        tabs.forEach(t => t.classList.remove('active'));
        // Hide all panes in the related wrapper
        panes.forEach(p => p.classList.remove('active'));

        // Add active to current
        tab.classList.add('active');
        const target = tab.getAttribute('data-target');
        const targetPane = document.getElementById(target);
        if (targetPane) targetPane.classList.add('active');

        // Move indicator
        updateIndicator(tab);
      });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
      const activeTab = container.querySelector('.tab-btn.active');
      if (activeTab) updateIndicator(activeTab);
    });
  });
});
