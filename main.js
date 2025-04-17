document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Close mobile menu when clicking a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            navbar.classList.add('py-2');
            navbar.classList.remove('py-3');
            navbar.classList.add('backdrop-blur-lg');
            navbar.classList.add('bg-opacity-90');
        } else {
            navbar.classList.add('py-3');
            navbar.classList.remove('py-2');
            navbar.classList.remove('backdrop-blur-lg');
            navbar.classList.add('bg-opacity-80');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Form Validation
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset previous errors
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(errorMsg => {
                errorMsg.classList.add('hidden');
            });
            
            // Validate form
            let isValid = true;
            
            // Name validation
            const nameInput = document.getElementById('name');
            if (!nameInput.value.trim()) {
                document.querySelector('[for="name"] + input + .error-message').classList.remove('hidden');
                isValid = false;
            }
            
            // Email validation
            const emailInput = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                document.querySelector('[for="email"] + input + .error-message').classList.remove('hidden');
                isValid = false;
            }
            
            // Subject validation
            const subjectInput = document.getElementById('subject');
            if (!subjectInput.value.trim()) {
                document.querySelector('[for="subject"] + input + .error-message').classList.remove('hidden');
                isValid = false;
            }
            
            // Message validation
            const messageInput = document.getElementById('message');
            if (!messageInput.value.trim()) {
                document.querySelector('[for="message"] + textarea + .error-message').classList.remove('hidden');
                isValid = false;
            }
            
            // If form is valid, show success message
            if (isValid) {
                // Show success message
                const formSuccess = document.getElementById('form-success');
                formSuccess.classList.remove('hidden');
                
                // Success animation
                formSuccess.classList.add('animate-pulse');
                
                // Reset form
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.classList.add('hidden');
                    formSuccess.classList.remove('animate-pulse');
                }, 5000);
            }
        });
    }
    
    // Add scroll-to-top button
    const body = document.querySelector('body');
    const scrollTopButton = document.createElement('div');
    scrollTopButton.classList.add('scroll-top');
    scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    body.appendChild(scrollTopButton);
    
    // Show/hide scroll-to-top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    });
    
    // Scroll to top when button is clicked
    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Use GSAP for smoother scrolling if available
                if (typeof gsap !== 'undefined' && typeof ScrollToPlugin !== 'undefined') {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: {
                            y: targetElement,
                            offsetY: 80
                        },
                        ease: 'power3.out'
                    });
                } else {
                    // Fallback to native smooth scrolling
                    const navbarHeight = navbar.offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add active class to navigation links based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-indigo-600');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-indigo-600');
            }
        });
    });
    
    // Add animation to elements when they come into view
    const animateElements = document.querySelectorAll('.project-card, .section-title, form, .skill-bar');
    
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}); 