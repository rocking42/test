// Main JavaScript file

document.addEventListener('DOMContentLoaded', () => {

    // Apply staggered animations to elements
    const animateElements = (selector, delay = 0, increment = 0.1) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.animation = 'none';
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.animation = `fadeIn 0.8s ease-out forwards`;
                el.style.animationDelay = `${delay + (index * increment)}s`;
            }, 50);
        });
    };

    // Animate elements with staggered delay
    animateElements('.project-card', 0.3, 0.2);
    animateElements('nav ul li', 0.1, 0.1);
    
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

    // Toggle mobile navigation menu (for responsive design) - Van Gogh style
    const createMobileMenu = () => {
        const nav = document.querySelector('nav');
        const menuToggle = document.createElement('div');
        menuToggle.className = 'menu-toggle';
        
        // Van Gogh inspired menu icon
        menuToggle.innerHTML = `
            <div class="menu-icon">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        
        // Add additional CSS for Van Gogh style menu
        const menuStyle = document.createElement('style');
        menuStyle.textContent = `
            .menu-toggle {
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                z-index: 100;
            }
            
            .menu-icon {
                width: 30px;
                height: 25px;
                position: relative;
                transform: rotate(0deg);
                transition: .5s ease-in-out;
            }
            
            .menu-icon span {
                display: block;
                position: absolute;
                height: 3px;
                width: 100%;
                background: linear-gradient(90deg, #2e619b, #5b95e6);
                border-radius: 3px;
                opacity: 1;
                left: 0;
                transform: rotate(0deg);
                transition: .25s ease-in-out;
            }
            
            .menu-icon span:nth-child(1) {
                top: 0px;
            }
            
            .menu-icon span:nth-child(2) {
                top: 10px;
                width: 80%;
                background: linear-gradient(90deg, #e09236, #f8df8b);
            }
            
            .menu-icon span:nth-child(3) {
                top: 20px;
            }
            
            nav.menu-open .menu-icon span:nth-child(1) {
                top: 10px;
                transform: rotate(135deg);
            }
            
            nav.menu-open .menu-icon span:nth-child(2) {
                opacity: 0;
                left: -60px;
                width: 100%;
            }
            
            nav.menu-open .menu-icon span:nth-child(3) {
                top: 10px;
                transform: rotate(-135deg);
            }
            
            nav.menu-open ul {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background-color: #fff6e6;
                padding: 20px 0;
                box-shadow: 0 5px 10px rgba(0,0,0,0.1);
                border-bottom: 3px solid #5b95e6;
                z-index: 90;
                animation: fadeIn 0.4s ease-out forwards;
            }
            
            nav.menu-open ul li {
                margin: 12px 20px;
            }
        `;
        document.head.appendChild(menuStyle);
        
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