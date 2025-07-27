// Elite Consulting Solutions - Enhanced SPA with Service Detail Pages

// Service data from the application
const servicesData = {
  "it-consulting": {
    id: "it-consulting",
    name: "IT Consulting",
    icon: "💻",
    shortDescription: "Digital transformation and technology solutions from zero to hero",
    fullDescription: "Transform your business with cutting-edge technology solutions. We help traditional businesses go digital and offline companies establish strong online presence with comprehensive IT consulting services.",
    keyServices: [
      "Digital Transformation Strategy",
      "Website Development & E-commerce Solutions", 
      "Business Process Automation",
      "Legacy System Modernization",
      "Technology Infrastructure Setup",
      "Software Development & Custom Applications",
      "Digital Marketing & SEO Optimization",
      "Mobile App Development"
    ],
    benefits: [
      "Enhanced online visibility and digital presence",
      "Streamlined business operations",
      "Competitive advantage in digital markets",
      "Improved customer engagement",
      "Scalable technology infrastructure"
    ]
  },
  "cybersecurity-consulting": {
    id: "cybersecurity-consulting",
    name: "Cybersecurity Consulting",
    icon: "🔒",
    shortDescription: "Comprehensive security solutions to protect your digital assets",
    fullDescription: "Protect your business from cyber threats with our comprehensive security consulting services covering all aspects of cybersecurity from risk assessment to incident response.",
    keyServices: [
      "Security Risk Assessment & Auditing",
      "Network Security Implementation", 
      "Data Protection & Privacy Compliance",
      "Incident Response & Recovery Planning",
      "Employee Security Training Programs",
      "Vulnerability Testing & Penetration Testing",
      "Compliance Management (ISO 27001, GDPR)",
      "Security Policy Development"
    ],
    benefits: [
      "Enhanced data protection and privacy",
      "Regulatory compliance assurance",
      "Reduced security risks and vulnerabilities",
      "Improved business continuity",
      "Employee security awareness"
    ]
  },
  "cloud-consulting": {
    id: "cloud-consulting",
    name: "Cloud Consulting",
    icon: "☁️",
    shortDescription: "Seamless migration from on-premise to cloud infrastructure",
    fullDescription: "Modernize your IT infrastructure with our cloud consulting expertise. We help businesses migrate from on-premise systems to scalable cloud solutions with optimized performance and cost savings.",
    keyServices: [
      "Cloud Migration Strategy & Planning",
      "AWS/Azure/Google Cloud Implementation",
      "On-premise to Cloud Transformation", 
      "Cloud Security & Governance",
      "Cost Optimization & Management",
      "Disaster Recovery & Backup Solutions",
      "Cloud Infrastructure Management",
      "DevOps & CI/CD Pipeline Setup"
    ],
    benefits: [
      "Reduced IT infrastructure costs",
      "Enhanced scalability and flexibility",
      "Improved business agility",
      "Better disaster recovery capabilities",
      "Access to latest cloud technologies"
    ]
  },
  "financial-consulting": {
    id: "financial-consulting",
    name: "Financial Consulting",
    icon: "💰",
    shortDescription: "Complete financial services from company registration to taxation",
    fullDescription: "Our team of qualified Chartered Accountants (CA) and Company Secretaries (CS) provide comprehensive financial consulting services from company incorporation to complex financial planning.",
    keyServices: [
      "Company Registration & Incorporation",
      "Taxation Advisory & Planning",
      "Auditing Services & Compliance",
      "Financial Planning & Analysis",
      "Investment Advisory", 
      "Risk Management",
      "Regulatory Compliance",
      "Corporate Restructuring"
    ],
    team: "Qualified Chartered Accountants (CA) and Company Secretaries (CS)",
    benefits: [
      "Regulatory compliance and legal protection",
      "Optimized tax strategies and savings",
      "Enhanced financial transparency",
      "Professional financial guidance",
      "Risk mitigation and management"
    ]
  },
  "operations-consulting": {
    id: "operations-consulting",
    name: "Operations Consulting",
    icon: "⚙️",
    shortDescription: "Process optimization and operational efficiency improvements",
    fullDescription: "Our dedicated operations team helps businesses streamline processes, reduce costs, and improve overall operational efficiency through proven methodologies and best practices.",
    keyServices: [
      "Process Optimization & Reengineering",
      "Supply Chain Management",
      "Quality Management Systems",
      "Lean Six Sigma Implementation",
      "Performance Management",
      "Workflow Automation", 
      "Vendor Management",
      "Cost Reduction Strategies"
    ],
    benefits: [
      "Increased operational efficiency",
      "Significant cost reduction",
      "Enhanced quality and productivity",
      "Streamlined business processes",
      "Improved supplier relationships"
    ]
  },
  "human-resources-consulting": {
    id: "human-resources-consulting",
    name: "Human Resources Consulting",
    icon: "👥",
    shortDescription: "End-to-end HR services from talent acquisition to management",
    fullDescription: "Our MBA professionals specialized in HR provide comprehensive human resource solutions from employee acquisition to performance management, helping build strong organizational culture.",
    keyServices: [
      "Talent Acquisition & Recruitment",
      "HR Policy Development", 
      "Performance Management Systems",
      "Employee Training & Development",
      "Compensation & Benefits Design",
      "Organizational Development",
      "Employee Relations Management",
      "HR Technology Implementation"
    ],
    team: "MBA professionals specialized in HR management",
    benefits: [
      "Enhanced talent acquisition and retention",
      "Improved employee engagement",
      "Optimized HR processes and policies",
      "Better organizational culture",
      "Compliance with labor regulations"
    ]
  },
  "strategy-management-consulting": {
    id: "strategy-management-consulting",
    name: "Strategy & Management Consulting",
    icon: "📈",
    shortDescription: "Strategic business planning and management consulting",
    fullDescription: "Develop winning business strategies and improve management effectiveness with our strategic consulting expertise, helping organizations achieve sustainable growth and competitive advantage.",
    keyServices: [
      "Business Strategy Development",
      "Market Analysis & Research",
      "Competitive Intelligence", 
      "Organizational Change Management",
      "Leadership Development",
      "Merger & Acquisition Support",
      "Business Model Innovation",
      "Growth Strategy Planning"
    ],
    benefits: [
      "Clear strategic direction and vision",
      "Enhanced market positioning",
      "Improved decision-making capabilities",
      "Sustainable competitive advantage",
      "Effective leadership development"
    ]
  },
  "construction-sustainability-consulting": {
    id: "construction-sustainability-consulting",
    name: "Construction & Sustainability Consulting",
    icon: "🏗️",
    shortDescription: "Green building solutions and sustainable construction planning",
    fullDescription: "Our team of IIT graduates and professional engineers provide expert construction and sustainability consulting services, focusing on green building practices and environmental responsibility.",
    keyServices: [
      "Green Building Design & Certification",
      "Sustainable Construction Planning",
      "Energy Efficiency Optimization",
      "Environmental Impact Assessment",
      "LEED Certification Support",
      "Renewable Energy Solutions", 
      "Waste Management Systems",
      "Smart Building Technology Integration"
    ],
    team: "IIT graduates and professional engineers with construction expertise",
    benefits: [
      "Reduced environmental impact",
      "Energy efficiency and cost savings",
      "Green building certifications",
      "Sustainable construction practices",
      "Long-term operational savings"
    ]
  },
  "public-relations-management": {
    id: "public-relations-management",
    name: "Public Relations Management",
    icon: "📢",
    shortDescription: "Brand management and public relations services",
    fullDescription: "Build and maintain your brand reputation with our comprehensive public relations and brand management services, ensuring effective communication with all stakeholders.",
    keyServices: [
      "Brand Strategy & Positioning",
      "Media Relations & Communications",
      "Crisis Management & Response",
      "Content Marketing & Social Media",
      "Reputation Management",
      "Event Planning & Management", 
      "Stakeholder Engagement",
      "Internal Communications"
    ],
    benefits: [
      "Enhanced brand reputation and visibility",
      "Improved stakeholder relationships",
      "Effective crisis management",
      "Strong media presence",
      "Consistent brand messaging"
    ]
  }
};

// Application state
let currentPage = 'home';
let currentService = null;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initServiceNavigation();
    initContactForm();
    initScrollAnimations();
    initMobileMenu();
    
    // Handle initial URL
    handleInitialRoute();
    
    console.log('Elite Consulting Solutions SPA initialized successfully');
});

// Initialize navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.nav-logo h2');
    
    // Logo click - go to home
    if (logo) {
        logo.addEventListener('click', () => {
            navigateToPage('home');
        });
    }
    
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            const targetId = this.getAttribute('href');
            
            if (page) {
                navigateToPage(page);
            } else if (targetId && targetId.startsWith('#')) {
                // Always navigate to home first, then scroll to section
                if (currentPage !== 'home') {
                    navigateToPage('home', () => {
                        setTimeout(() => scrollToSection(targetId), 300);
                    });
                } else {
                    scrollToSection(targetId);
                }
            }
            
            closeMobileMenu();
        });
    });
    
    // Navbar background on scroll
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(19, 52, 59, 0.98)';
            } else {
                navbar.style.background = 'rgba(19, 52, 59, 0.95)';
            }
        });
    }
    
    // Active nav link highlighting on scroll (only when on home page)
    const throttledScrollHandler = throttle(function() {
        if (currentPage === 'home') {
            updateActiveNavOnScroll();
        }
    }, 100);
    window.addEventListener('scroll', throttledScrollHandler);
}

// Update active nav link based on scroll position
function updateActiveNavOnScroll() {
    if (currentPage !== 'home') return;
    
    let current = '';
    const sections = document.querySelectorAll('#home-page section[id]');
    const scrollPosition = window.scrollY + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    if (current) {
        updateActiveNavLink(`#${current}`);
    }
}

// Initialize service navigation
function initServiceNavigation() {
    // Service card clicks
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        const serviceBtn = card.querySelector('.service-btn');
        const serviceId = card.getAttribute('data-service');
        
        if (serviceBtn && serviceId) {
            serviceBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                showServiceDetail(serviceId);
            });
        }
        
        // Also make the entire card clickable
        card.addEventListener('click', () => {
            if (serviceId) {
                showServiceDetail(serviceId);
            }
        });
    });
    
    // Back to services button
    const backToServicesBtn = document.getElementById('back-to-services');
    if (backToServicesBtn) {
        backToServicesBtn.addEventListener('click', () => {
            navigateToPage('home', () => {
                setTimeout(() => scrollToSection('#services'), 300);
            });
        });
    }
    
    // Breadcrumb navigation
    const breadcrumbLinks = document.querySelectorAll('.breadcrumb-link');
    breadcrumbLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            const href = this.getAttribute('href');
            
            if (page === 'home') {
                if (href && href.startsWith('#')) {
                    navigateToPage('home', () => {
                        setTimeout(() => scrollToSection(href), 300);
                    });
                } else {
                    navigateToPage('home');
                }
            }
        });
    });
    
    // Footer service links
    const footerServiceLinks = document.querySelectorAll('footer a[data-service]');
    footerServiceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceId = this.getAttribute('data-service');
            if (serviceId) {
                showServiceDetail(serviceId);
            }
        });
    });
}

// Navigate to page
function navigateToPage(page, callback) {
    const homePage = document.getElementById('home-page');
    const serviceDetailPage = document.getElementById('service-detail-page');
    
    // Hide current page
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });
    
    // Show target page
    if (page === 'home') {
        homePage.classList.add('active');
        currentPage = 'home';
        
        // Clear active nav links initially
        updateActiveNavLink('');
        
        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Update URL
        updateURL('/');
    } else if (page === 'service-detail') {
        serviceDetailPage.classList.add('active');
        currentPage = 'service-detail';
        updateActiveNavLink('');
        
        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Execute callback if provided
    if (callback) {
        setTimeout(callback, 100);
    }
}

// Show service detail
function showServiceDetail(serviceId) {
    const service = servicesData[serviceId];
    if (!service) {
        console.error('Service not found:', serviceId);
        return;
    }
    
    currentService = serviceId;
    renderServiceDetail(service);
    navigateToPage('service-detail');
    
    // Update URL without page reload
    updateURL(`/services/${serviceId}`);
}

// Render service detail page
function renderServiceDetail(service) {
    const serviceDetailContent = document.getElementById('service-detail-content');
    const currentServiceName = document.getElementById('current-service-name');
    
    if (currentServiceName) {
        currentServiceName.textContent = service.name;
    }
    
    const template = `
        <div class="service-header">
            <div class="service-header-icon">${service.icon}</div>
            <h1>${service.name}</h1>
            <p>${service.fullDescription}</p>
        </div>
        
        <div class="service-details-grid">
            <div class="service-main-content">
                <h2>Our ${service.name} Services</h2>
                <p>We provide comprehensive ${service.name.toLowerCase()} solutions tailored to your business needs. Our expert team ensures quality delivery and ongoing support for all projects.</p>
                
                <div class="service-features">
                    <h3>Key Service Areas</h3>
                    <ul class="features-list">
                        ${service.keyServices.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="service-sidebar">
                <div class="service-info-card">
                    <h3>Service Overview</h3>
                    <p><strong>Service Type:</strong> ${service.name}</p>
                    <p><strong>Delivery Model:</strong> On-site & Remote</p>
                    <p><strong>Project Duration:</strong> 2-12 months</p>
                    <p><strong>Support:</strong> 24/7 ongoing support</p>
                    
                    ${service.benefits ? `
                    <div class="service-benefits">
                        <h4>Key Benefits</h4>
                        <ul>
                            ${service.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                        </ul>
                    </div>
                    ` : ''}
                    
                    ${service.team ? `
                    <div class="service-team-info">
                        <h4>Expert Team</h4>
                        <p>${service.team}</p>
                    </div>
                    ` : ''}
                </div>
                
                <div class="service-info-card">
                    <h3>Why Choose Us?</h3>
                    <p>Our experienced professionals deliver high-quality solutions with proven methodologies and industry best practices.</p>
                    <p><strong>✓</strong> Experienced professionals</p>
                    <p><strong>✓</strong> Proven track record</p>
                    <p><strong>✓</strong> Industry certifications</p>
                    <p><strong>✓</strong> Ongoing support</p>
                </div>
            </div>
        </div>
    `;
    
    if (serviceDetailContent) {
        serviceDetailContent.innerHTML = template;
        
        // Add animations to new content
        const animatedElements = serviceDetailContent.querySelectorAll('.service-header, .service-main-content, .service-info-card');
        animatedElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.6s ease-out';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }
}

// Handle initial route
function handleInitialRoute() {
    const path = window.location.pathname;
    const hash = window.location.hash;
    
    if (path.startsWith('/services/')) {
        const serviceId = path.split('/services/')[1];
        if (servicesData[serviceId]) {
            showServiceDetail(serviceId);
            return;
        }
    }
    
    // Default to home page
    navigateToPage('home');
    
    // Handle hash navigation after a delay
    if (hash) {
        setTimeout(() => scrollToSection(hash), 500);
    }
}

// Update URL
function updateURL(path) {
    if (window.history && window.history.pushState) {
        window.history.pushState({ path }, '', path);
    }
}

// Handle browser back/forward
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.path) {
        handleInitialRoute();
    } else {
        navigateToPage('home');
    }
});

// Scroll to section
function scrollToSection(targetId) {
    if (currentPage !== 'home') {
        navigateToPage('home', () => {
            setTimeout(() => scrollToSection(targetId), 300);
        });
        return;
    }
    
    const target = document.querySelector(targetId);
    if (target) {
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        const offsetTop = target.offsetTop - navbarHeight;
        
        window.scrollTo({
            top: Math.max(0, offsetTop),
            behavior: 'smooth'
        });
        
        updateActiveNavLink(targetId);
    }
}

// Update active navigation link
function updateActiveNavLink(targetId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }
}

function closeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this);
        });
        
        // Real-time validation
        const formInputs = contactForm.querySelectorAll('input, textarea, select');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
}

function handleFormSubmission(form) {
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Validate all fields
    const isValid = validateForm(form);
    
    if (!isValid) {
        showNotification('Please fill in all required fields correctly.', 'error');
        return;
    }
    
    // Show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        const formDataObj = Object.fromEntries(formData);
        
        // Show success message with form details
        const serviceSelected = formDataObj.service ? servicesData[formDataObj.service]?.name || 'General Inquiry' : 'General Inquiry';
        const successMessage = `Thank you ${formDataObj.name}! Your inquiry about "${serviceSelected}" has been received. We will contact you at ${formDataObj.email} within 24 hours.`;
        
        showNotification(successMessage, 'success');
        
        // Reset form
        form.reset();
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Log form data for demonstration
        console.log('Contact form submitted:', formDataObj);
        
        // Show implementation instructions
        console.log(`
=== CONTACT FORM IMPLEMENTATION GUIDE ===

Your contact form is working! Here's how to implement the backend:

1. FORM DATA RECEIVED:
   - Name: ${formDataObj.name}
   - Email: ${formDataObj.email}
   - Phone: ${formDataObj.phone || 'Not provided'}
   - Service Interest: ${serviceSelected}
   - Message: ${formDataObj.message || 'No message'}

2. BACKEND IMPLEMENTATION OPTIONS:

   A) PHP + MySQL:
   - Create a PHP endpoint to receive POST data
   - Store in MySQL database
   - Send email notifications using PHPMailer
   
   B) Node.js + Express:
   - Create Express route to handle form submissions
   - Use nodemailer for email notifications
   - Store in MongoDB or PostgreSQL
   
   C) Python + Flask/Django:
   - Create route to handle form data
   - Use Flask-Mail or Django email backend
   - Store in database of choice

3. EMAIL SETUP:
   - Configure SMTP settings for sending notifications
   - Send confirmation email to customer
   - Send notification email to your team

4. DATABASE SCHEMA:
   CREATE TABLE contact_submissions (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     email VARCHAR(255) NOT NULL,
     phone VARCHAR(50),
     service_interest VARCHAR(100),
     message TEXT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

5. SECURITY CONSIDERATIONS:
   - Validate and sanitize all input data
   - Implement rate limiting to prevent spam
   - Use HTTPS for form submissions
   - Add CAPTCHA for additional protection

The form is fully functional on the frontend and ready for backend integration!
        `);
    }, 2000);
}

function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    let isValid = true;
    let errorMessage = '';
    
    // Remove existing error
    clearFieldError(field);
    
    // Check if required field is empty
    if (field.hasAttribute('required') && !value) {
        errorMessage = 'This field is required';
        isValid = false;
    }
    // Email validation
    else if (fieldType === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            errorMessage = 'Please enter a valid email address';
            isValid = false;
        }
    }
    // Phone validation (basic)
    else if (fieldType === 'tel' && value) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value) || value.length < 10) {
            errorMessage = 'Please enter a valid phone number';
            isValid = false;
        }
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error message
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = 'var(--color-error)';
    errorElement.style.fontSize = 'var(--font-size-sm)';
    errorElement.style.marginTop = 'var(--space-4)';
    
    field.parentNode.appendChild(errorElement);
}

function clearFieldError(field) {
    field.classList.remove('error');
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    // Styling
    notification.style.position = 'fixed';
    notification.style.top = '100px';
    notification.style.right = '20px';
    notification.style.padding = 'var(--space-16) var(--space-20)';
    notification.style.borderRadius = 'var(--radius-base)';
    notification.style.zIndex = '10000';
    notification.style.maxWidth = '400px';
    notification.style.fontWeight = 'var(--font-weight-medium)';
    notification.style.boxShadow = 'var(--shadow-lg)';
    notification.style.transform = 'translateX(100%)';
    notification.style.transition = 'transform var(--duration-normal) var(--ease-standard)';
    notification.style.lineHeight = 'var(--line-height-normal)';
    
    // Type-specific styling
    if (type === 'success') {
        notification.style.background = 'rgba(var(--color-success-rgb), 0.1)';
        notification.style.color = 'var(--color-success)';
        notification.style.border = '1px solid rgba(var(--color-success-rgb), 0.2)';
    } else if (type === 'error') {
        notification.style.background = 'rgba(var(--color-error-rgb), 0.1)';
        notification.style.color = 'var(--color-error)';
        notification.style.border = '1px solid rgba(var(--color-error-rgb), 0.2)';
    } else {
        notification.style.background = 'var(--color-surface)';
        notification.style.color = 'var(--color-text)';
        notification.style.border = '1px solid var(--color-border)';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 8 seconds for success messages, 5 seconds for others
    const timeout = type === 'success' ? 8000 : 5000;
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, timeout);
}

// Scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.service-card, .credential-card, .stat-item');
    
    // Add animation class to elements
    animatedElements.forEach(element => {
        element.classList.add('animate-on-scroll');
    });
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Enhanced service card interactions
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) { // Only on desktop
                this.style.transform = 'translateY(-8px) scale(1.02)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Handle all CTA button clicks
document.addEventListener('click', function(e) {
    const target = e.target.closest('a[href^="#"], button[data-page]');
    if (target) {
        const href = target.getAttribute('href');
        const page = target.getAttribute('data-page');
        
        if (href && href.startsWith('#')) {
            e.preventDefault();
            
            if (currentPage !== 'home') {
                navigateToPage('home', () => {
                    setTimeout(() => scrollToSection(href), 300);
                });
            } else {
                scrollToSection(href);
            }
        } else if (page) {
            e.preventDefault();
            navigateToPage(page);
        }
    }
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMobileMenu();
        // Close any open notifications
        const notifications = document.querySelectorAll('.notification');
        notifications.forEach(notification => notification.remove());
    }
});

// Performance optimization
function throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
        const currentTime = Date.now();
        
        if (currentTime - lastExecTime > delay) {
            func.apply(this, args);
            lastExecTime = currentTime;
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastExecTime = Date.now();
            }, delay - (currentTime - lastExecTime));
        }
    };
}

// Add loading states and smooth transitions
document.addEventListener('DOMContentLoaded', function() {
    // Ensure smooth scrolling is enabled
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Initialize page transitions
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.add('page-transition');
    });
    
    // Activate home page
    setTimeout(() => {
        const homePage = document.getElementById('home-page');
        if (homePage) {
            homePage.classList.add('active');
        }
    }, 100);
});