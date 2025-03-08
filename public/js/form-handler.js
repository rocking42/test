// Form handling script - Van Gogh inspired

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('form[name="contact"]');
    
    if (contactForm) {
        // Add Van Gogh styling to form elements
        const formStyle = document.createElement('style');
        formStyle.textContent = `
            .form-group input:focus,
            .form-group textarea:focus {
                outline: none;
                border-color: #2e619b;
                box-shadow: 0 0 0 3px rgba(91, 149, 230, 0.3);
                background-color: #fff;
            }
            
            .form-group input,
            .form-group textarea {
                background-color: #fff6e6;
                transition: all 0.3s ease;
                border: 2px solid #ddd;
            }
            
            @keyframes brush-stroke {
                0% { background-position: 0% 50%; }
                100% { background-position: 100% 50%; }
            }
            
            .form-success {
                position: relative;
                padding: 20px;
                background-color: #fff6e6;
                border-radius: 10px;
                margin-top: 20px;
                border: 2px solid #2e619b;
                overflow: hidden;
                animation: fadeIn 0.6s ease-out forwards;
                text-align: center;
            }
            
            .form-success::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 5px;
                background: linear-gradient(90deg, 
                    #e09236, #f8df8b, #5b95e6, #2e619b, 
                    #eec75c, #8bb0e8, #e09236);
                background-size: 1000% 100%;
                animation: brush-stroke 8s linear infinite;
            }
            
            .sending-animation {
                display: inline-block;
                position: relative;
                width: 24px;
                height: 24px;
                margin-left: 8px;
                vertical-align: middle;
            }
            
            .sending-animation::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                border: 3px solid transparent;
                border-top-color: #fff;
                border-bottom-color: #fff;
                animation: rotate 1.5s linear infinite;
            }
        `;
        document.head.appendChild(formStyle);
        
        // Add focus/blur effects to form fields
        const formFields = contactForm.querySelectorAll('input, textarea');
        formFields.forEach(field => {
            field.addEventListener('focus', () => {
                field.parentElement.classList.add('field-focus');
            });
            
            field.addEventListener('blur', () => {
                field.parentElement.classList.remove('field-focus');
            });
        });
        
        contactForm.addEventListener('submit', (e) => {
            // Form validation is handled by HTML5 form validation
            // This is just for any additional handling or feedback

            // Show a loading state with Van Gogh style
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            // Create sending animation element
            const sendingAnimation = document.createElement('span');
            sendingAnimation.className = 'sending-animation';
            
            submitButton.textContent = 'Painting Your Message';
            submitButton.appendChild(sendingAnimation);
            submitButton.disabled = true;
            submitButton.style.opacity = '0.8';
            
            // The actual form submission is handled by Netlify
            // This is just to provide user feedback
            setTimeout(() => {
                // Create success message with Van Gogh style
                const successMessage = document.createElement('div');
                successMessage.className = 'form-success';
                successMessage.innerHTML = 'Your message has been sent with artistic flair!';
                
                // Replace form with success message
                contactForm.style.opacity = '0';
                contactForm.style.height = '0';
                contactForm.style.overflow = 'hidden';
                contactForm.style.transition = 'all 0.4s ease';
                
                contactForm.parentElement.appendChild(successMessage);
                
                // If you want to reset the form after a delay
                setTimeout(() => {
                    contactForm.reset();
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    submitButton.style.opacity = '1';
                    
                    // Remove success message and restore form after 5 seconds
                    setTimeout(() => {
                        if (successMessage.parentElement) {
                            successMessage.style.opacity = '0';
                            successMessage.style.transition = 'opacity 0.4s ease';
                            
                            setTimeout(() => {
                                successMessage.remove();
                                contactForm.style.opacity = '1';
                                contactForm.style.height = 'auto';
                            }, 400);
                        }
                    }, 5000);
                }, 2000);
            }, 2000);
        });
    }
});