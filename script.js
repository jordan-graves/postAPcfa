// Grab all sections and nav items
const sections = document.querySelectorAll('.full-screen');
const navItems = document.querySelectorAll('.nav-item');

// Configure the observer
const options = {
    threshold: 0.6 // 60% of the section must be visible to trigger
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove active class from all links
            navItems.forEach(item => item.classList.remove('active'));
            
            // Add active class to the link matching the current section ID
            const activeId = entry.target.getAttribute('id');
            const activeLink = document.querySelector(`[data-section="${activeId}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
}, options);

// Tell the observer to watch each section
sections.forEach(section => {
    observer.observe(section);
});