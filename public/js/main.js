// Main JavaScript file

document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling for navigation links
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Only apply smooth scroll for links to sections on the same page
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Toggle mobile navigation menu (for responsive design)
    const createMobileMenu = () => {
        const nav = document.querySelector('nav');
        const menuToggle = document.createElement('div');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '<span></span><span></span><span></span>';
        
        nav.appendChild(menuToggle);
        
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('menu-open');
        });
    };
    
    // Only create mobile menu for smaller screens
    if (window.innerWidth < 768) {
        createMobileMenu();
    }
    
    // Add window resize event to handle mobile menu
    window.addEventListener('resize', () => {
        if (window.innerWidth < 768 && !document.querySelector('.menu-toggle')) {
            createMobileMenu();
        } else if (window.innerWidth >= 768 && document.querySelector('.menu-toggle')) {
            document.querySelector('.menu-toggle').remove();
            document.querySelector('nav').classList.remove('menu-open');
        }
    });
});