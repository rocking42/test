// Form handling script

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('form[name="contact"]');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Form validation is handled by HTML5 form validation
            // This is just for any additional handling or feedback

            // Show a loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // The actual form submission is handled by Netlify
            // This is just to provide user feedback
            setTimeout(() => {
                // If you want to add custom success handling, you can add it here
                // For now, we let Netlify handle the form submission naturally
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
});