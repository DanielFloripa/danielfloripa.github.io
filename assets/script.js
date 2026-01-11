// Wait for document to be ready
document.addEventListener('DOMContentLoaded', function() {
    if (location.protocol == 'https:' && typeof navigator.serviceWorker !== 'undefined') {
        navigator.serviceWorker.register('/sw.js').then(
            (registration) => {
                console.log("Service worker registration succeeded:", registration);
            },
            (error) => {
                console.error(`Service worker registration failed: ${error}`);
            },
        );
    }
    console.log('Document ready!');
    
    // ============================================
    // GSAP ScrollTrigger Animations
    // ============================================
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // Animate floating modals - each modal fades out as next one comes in
        const modals = gsap.utils.toArray('.floating-modal');
        
        modals.forEach((modal, index) => {
            const card = modal.querySelector('.modal-glass-card');
            
            // Entry animation
            gsap.fromTo(card, 
                {
                    opacity: 0,
                    y: 100,
                    scale: 0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: modal,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
            
            // Exit animation - fade and scale back as user scrolls past
            if (index < modals.length - 1) {
                gsap.to(card, {
                    opacity: 0.3,
                    scale: 0.92,
                    y: -30,
                    ease: 'power2.in',
                    scrollTrigger: {
                        trigger: modal,
                        start: 'bottom 40%',
                        end: 'bottom 10%',
                        scrub: 1
                    }
                });
            }
        });
        
        // Animate all elements with gsap-fade-up class
        gsap.utils.toArray('.gsap-fade-up').forEach((element, index) => {
            gsap.fromTo(element, 
                {
                    opacity: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });
        
        console.log('GSAP ScrollTrigger initialized');
    } else {
        console.warn('GSAP or ScrollTrigger not loaded');
    }
    
    // ============================================
    // Swiper Carousel Initialization
    // ============================================
    if (typeof Swiper !== 'undefined') {
        const portfolioSwiper = new Swiper('.portfolio-swiper', {
            // Core settings
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            grabCursor: true,
            
            // Auto-play
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            
            // Pagination dots
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            
            // Keyboard control
            keyboard: {
                enabled: true,
            },
            
            // Effects
            effect: 'slide',
            speed: 600,
            
            // Responsive breakpoints
            breakpoints: {
                768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
            },
        });
        
        console.log('Swiper initialized');
    } else {
        console.warn('Swiper not loaded');
    }
    
    // Initialize particles.js
    if (document.getElementById('particles-js')) {
        particlesJS.load('particles-js', 'assets/particles.json', function() {
            console.log('Particles.js loaded');
        });
    }
    
    // Typewriter effect
    class TxtType {
        constructor(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        }
        
        tick() {
            const i = this.loopNum % this.toRotate.length;
            const fullTxt = this.toRotate[i];
    
            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }
    
            this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    
            let delta = 200 - Math.random() * 100;
    
            if (this.isDeleting) { delta /= 2; }
    
            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }
    
            setTimeout(() => {
                this.tick();
            }, delta);
        }
    }
    
    // Initialize TypeWriter
    const elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
        const toRotate = elements[i].getAttribute('data-type');
        const period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    
    // Remove loading class
    document.documentElement.classList.remove('loading');
    
    // Scroll behavior for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect & Cosmic fade overlay
    const header = document.getElementById('header');
    const scrollFadeOverlay = document.getElementById('scroll-fade-overlay');
    
    if (header || scrollFadeOverlay) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            
            // Header effect
            if (header) {
                if (scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
            
            // Cosmic fade overlay - lightens as user scrolls
            if (scrollFadeOverlay) {
                // Start fading after 50vh, complete by 200vh
                const fadeStart = viewportHeight * 0.5;
                const fadeEnd = viewportHeight * 2;
                const fadeProgress = Math.min(1, Math.max(0, (scrollY - fadeStart) / (fadeEnd - fadeStart)));
                scrollFadeOverlay.style.opacity = fadeProgress * 0.8; // Max 80% opacity
            }
        });
    }
    
    // Form validation and submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            if (!name.value.trim()) {
                isValid = false;
                name.classList.add('is-invalid');
            } else {
                name.classList.remove('is-invalid');
            }
            
            if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) {
                isValid = false;
                email.classList.add('is-invalid');
            } else {
                email.classList.remove('is-invalid');
            }
            
            if (!message.value.trim()) {
                isValid = false;
                message.classList.add('is-invalid');
            } else {
                message.classList.remove('is-invalid');
            }
            
            if (isValid) {
                var status = document.getElementById("my-form-status");
                var data = new FormData(e.target);
                fetch(e.target.action, {
                    method: e.target.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(response => {
                    if (response.ok) {
                        status.innerHTML = "Thanks for your submission!";
                        e.target.reset();
                        setTimeout(() => {
                            window.location.href = 'thanks.html';
                        }, 1500);
                    } else {
                        response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                        } else {
                            status.innerHTML = "Oops! There was a problem submitting your form"
                        }
                        })
                    }
                }).catch(error => {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                });
            }
        });
    }
});