// Add this JavaScript to make the timeline animate when scrolled into view
document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.container');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });
    
    containers.forEach(container => {
        observer.observe(container);
    });
});

// Add to your existing Intersection Observer code
const hrElements = document.querySelectorAll('hr');
const hrObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-hr');
        }
    });
}, { threshold: 0.1 });

hrElements.forEach(hr => {
    hrObserver.observe(hr);
});