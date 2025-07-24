  
        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Slider functionality
        let currentSlideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            slides[index].classList.add('active');
            dots[index].classList.add('active');
        }

        function changeSlide(direction) {
            currentSlideIndex += direction;

            if (currentSlideIndex >= slides.length) {
                currentSlideIndex = 0;
            } else if (currentSlideIndex < 0) {
                currentSlideIndex = slides.length - 1;
            }

            showSlide(currentSlideIndex);
        }

        function currentSlide(index) {
            currentSlideIndex = index - 1;
            showSlide(currentSlideIndex);
        }

        // Auto slide
        setInterval(() => {
            changeSlide(1);
        }, 5000);

        // Newsletter subscription
        function subscribeNewsletter() {
            const email = document.getElementById('newsletter-email').value;
            if (email && email.includes('@')) {
                alert('Thank you for subscribing to EduFun newsletter!');
                document.getElementById('newsletter-email').value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll effect to navbar
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                navbar.style.backdropFilter = 'none';
            }
        });

        // Add animation on scroll for feature items
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe feature items for animation
        document.addEventListener('DOMContentLoaded', () => {
            const featureItems = document.querySelectorAll('.feature-item');
            const categoryCards = document.querySelectorAll('.category-card');
            const testimonialCards = document.querySelectorAll('.testimonial-card');

            [...featureItems, ...categoryCards, ...testimonialCards].forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(30px)';
                item.style.transition = 'all 0.6s ease';
                observer.observe(item);
            });
        });

        // Add click tracking for analytics (placeholder)
        function trackClick(elementName) {
            console.log(`User clicked: ${elementName}`);
            // In a real application, this would send data to analytics service
        }

        // Add click tracking to CTA buttons
        document.querySelectorAll('.cta-button').forEach(button => {
            button.addEventListener('click', () => {
                trackClick('Start Learning Button');
            });
        });

        // Add click tracking to category cards
        document.querySelectorAll('.category-card').forEach((card, index) => {
            card.addEventListener('click', () => {
                trackClick(`Category Card ${index + 1}`);
            });
        });
