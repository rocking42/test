// Main JavaScript file

// Page loading animation - Van Gogh inspired
document.body.classList.add('loading');

// Create loading overlay
const loadingOverlay = document.createElement('div');
loadingOverlay.className = 'loading-overlay';
loadingOverlay.innerHTML = `
    <div class="loading-animation">
        <div class="swirl swirl-1"></div>
        <div class="swirl swirl-2"></div>
        <div class="swirl swirl-3"></div>
        <div class="swirl swirl-4"></div>
        <div class="loading-text">Loading Masterpiece...</div>
    </div>
`;
document.body.appendChild(loadingOverlay);

// Adding CSS for the loading animation
const styleElement = document.createElement('style');
styleElement.textContent = `
    .loading {
        overflow: hidden;
    }
    
    .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #f2f0e6;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        transition: opacity 0.5s, visibility 0.5s;
    }
    
    .loading-animation {
        position: relative;
        width: 200px;
        height: 200px;
    }
    
    .swirl {
        position: absolute;
        border-radius: 50%;
        border: 4px solid transparent;
        border-top-color: #5b95e6; /* Van Gogh blue */
        animation: rotate 2s linear infinite;
    }
    
    .swirl-1 {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-color: #2e619b; /* Dark blue */
    }
    
    .swirl-2 {
        top: 15px;
        left: 15px;
        width: 170px;
        height: 170px;
        border-top-color: #5b95e6; /* Blue */
        animation-delay: -0.2s;
    }
    
    .swirl-3 {
        top: 30px;
        left: 30px;
        width: 140px;
        height: 140px;
        border-top-color: #e09236; /* Orange */
        animation-delay: -0.4s;
    }
    
    .swirl-4 {
        top: 45px;
        left: 45px;
        width: 110px;
        height: 110px;
        border-top-color: #f8df8b; /* Yellow */
        animation-delay: -0.6s;
    }
    
    .loading-text {
        position: absolute;
        bottom: -40px;
        left: 0;
        right: 0;
        text-align: center;
        font-family: 'Playfair Display', serif;
        color: #2e619b;
        font-size: 18px;
        letter-spacing: 1px;
    }
    
    @keyframes rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(styleElement);

document.addEventListener('DOMContentLoaded', () => {
    // Remove loading overlay with delay for effect
    setTimeout(() => {
        const overlay = document.querySelector('.loading-overlay');
        if (overlay) {
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
            document.body.classList.remove('loading');
            
            // Remove overlay after transition
            setTimeout(() => {
                overlay.remove();
            }, 500);
        }
    }, 1500);

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