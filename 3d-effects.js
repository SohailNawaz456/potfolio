document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mousedown', function() {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    });
    
    document.addEventListener('mouseup', function() {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
    
    // Hide default cursor
    document.documentElement.style.cursor = 'none';
    
    // Three.js Background
    const canvas = document.getElementById('background-canvas');
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 1500;
    
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 20;
        colors[i] = Math.random();
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        sizeAttenuation: true,
        vertexColors: true,
        transparent: true,
        opacity: 0.5
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Resize handler
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    
    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;
    
    window.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });
    
    // Animation
    const clock = new THREE.Clock();
    
    const animate = () => {
        const elapsedTime = clock.getElapsedTime();
        
        // Rotate particles
        particles.rotation.x = elapsedTime * 0.05;
        particles.rotation.y = elapsedTime * 0.03;
        
        // Move particles based on mouse position
        particles.rotation.x += mouseY * 0.01;
        particles.rotation.y += mouseX * 0.01;
        
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };
    
    animate();
    
    // Initialize Tilt.js for 3D cards
    const tiltElements = document.querySelectorAll('.js-tilt');
    if (tiltElements.length > 0) {
        VanillaTilt.init(tiltElements, {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.3,
            gyroscope: true
        });
    }
    
    // GSAP animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    gsap.from('.hero-text', {
        duration: 1.5,
        opacity: 0,
        y: 50,
        ease: 'power3.out'
    });
    
    gsap.from('.rotating-text', {
        duration: 1.5,
        opacity: 0,
        y: 50,
        ease: 'power3.out',
        delay: 0.3
    });
    
    gsap.from('#hero-3d-element', {
        duration: 2,
        opacity: 0,
        scale: 0.8,
        ease: 'power3.out',
        delay: 0.5
    });
    
    // Skill bars animation
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        const percentage = item.getAttribute('data-percentage');
        const bar = item.querySelector('.skill-bar-fill');
        
        gsap.from(bar, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            width: 0,
            duration: 1.5,
            ease: 'power3.out'
        });
    });
    
    // Section titles animation
    const sectionTitles = document.querySelectorAll('.section-title');
    
    sectionTitles.forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out'
        });
    });
    
    // Project cards animation
    const projectCards = document.querySelectorAll('.project-card-3d');
    
    projectCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 100,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power3.out'
        });
    });
    
    // Glass panels animation
    const glassPanels = document.querySelectorAll('.glass-panel');
    
    glassPanels.forEach((panel, index) => {
        gsap.from(panel, {
            scrollTrigger: {
                trigger: panel,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power3.out'
        });
    });
    
    // Contact form animation
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach((group, index) => {
        gsap.from(group, {
            scrollTrigger: {
                trigger: group,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.5,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });
    
    // SKILL STATION IMPLEMENTATION
    const skillOrbsContainer = document.getElementById('skill-orbs');
    
    if (skillOrbsContainer) {
        // Define skills data
        const skillsData = [
            {
                name: 'HTML5',
                icon: 'fab fa-html5',
                color: 'from-red-500 to-orange-500',
                description: 'Expert in HTML5 with strong knowledge of semantic markup, accessibility best practices, and modern web standards.',
                tags: ['Semantic HTML', 'Accessibility', 'Forms', 'SVG', 'Canvas']
            },
            {
                name: 'CSS3',
                icon: 'fab fa-css3-alt',
                color: 'from-blue-500 to-indigo-500',
                description: 'Advanced CSS3 skills including animations, flexbox, grid, and responsive design principles for pixel-perfect implementations.',
                tags: ['Animations', 'Flexbox', 'Grid', 'SASS/SCSS', 'Media Queries']
            },
            {
                name: 'JavaScript',
                icon: 'fab fa-js',
                color: 'from-yellow-400 to-yellow-600',
                description: 'Strong JavaScript expertise with deep understanding of ES6+, DOM manipulation, and asynchronous programming.',
                tags: ['ES6+', 'Promises', 'DOM API', 'Web APIs', 'TypeScript']
            },
            {
                name: 'React',
                icon: 'fab fa-react',
                color: 'from-cyan-400 to-sky-500',
                description: 'React developer with experience building complex single-page applications, custom hooks, and state management solutions.',
                tags: ['Hooks', 'Context API', 'Redux', 'Next.js', 'React Router']
            },
            {
                name: 'Three.js',
                icon: 'fas fa-cube',
                color: 'from-green-400 to-emerald-600',
                description: 'Experienced in building immersive 3D web experiences using Three.js with WebGL for interactive visualizations and animations.',
                tags: ['WebGL', '3D Modeling', 'Shaders', 'Animations', 'Physics']
            },
            {
                name: 'Node.js',
                icon: 'fab fa-node-js',
                color: 'from-green-500 to-lime-600',
                description: 'Backend development with Node.js including RESTful APIs, authentication systems, and database integration.',
                tags: ['Express', 'REST APIs', 'Authentication', 'MongoDB', 'Socket.io']
            },
            {
                name: 'Git',
                icon: 'fab fa-git-alt',
                color: 'from-orange-500 to-red-600',
                description: 'Experienced with Git version control, collaborative workflows, branching strategies and CI/CD pipelines.',
                tags: ['Version Control', 'GitHub', 'GitLab', 'Branching', 'CI/CD']
            },
            {
                name: 'UI/UX',
                icon: 'fas fa-pencil-ruler',
                color: 'from-purple-500 to-fuchsia-600',
                description: 'Design-focused developer with an eye for user experience, interaction design and creating elegant user interfaces.',
                tags: ['Figma', 'User Testing', 'Prototyping', 'Design Systems', 'Wireframing']
            },
            {
                name: 'Tailwind',
                icon: 'fas fa-wind',
                color: 'from-sky-400 to-cyan-600',
                description: 'Efficient development using Tailwind CSS utility-first approach for rapid prototyping and consistent UI components.',
                tags: ['Utility-first CSS', 'Responsive Design', 'Dark Mode', 'Custom Themes', 'Plugins']
            },
            {
                name: 'Vue.js',
                icon: 'fab fa-vuejs',
                color: 'from-emerald-400 to-green-600',
                description: 'Experience with Vue.js framework for building progressive web applications with reactive components.',
                tags: ['Vue 3', 'Composition API', 'Vuex', 'Vue Router', 'Nuxt.js']
            }
        ];
        
        // Create and position skill orbs
        function createSkillOrbs() {
            // Clear previous orbs
            skillOrbsContainer.innerHTML = '';
            
            const containerWidth = skillOrbsContainer.offsetWidth;
            const containerHeight = skillOrbsContainer.offsetHeight;
            
            skillsData.forEach((skill, index) => {
                const orb = document.createElement('div');
                orb.className = `skill-orb bg-gradient-to-br ${skill.color}`;
                orb.innerHTML = `<i class="${skill.icon}"></i>`;
                orb.setAttribute('data-skill-index', index);
                
                // Randomize position
                const x = Math.random() * (containerWidth - 100); // 80px orb width + some margin
                const y = Math.random() * (containerHeight - 100); // 80px orb height + some margin
                const z = Math.random() * 100; // Random depth for 3D effect
                
                orb.style.left = `${x}px`;
                orb.style.top = `${y}px`;
                orb.style.transform = `translateZ(${z}px)`;
                
                // Add animation
                const animationDuration = 10 + Math.random() * 20;
                const animationDelay = Math.random() * 5;
                orb.style.animation = `floatOrbDynamic ${animationDuration}s ease-in-out ${animationDelay}s infinite alternate`;
                
                skillOrbsContainer.appendChild(orb);
                
                // Add click event listener
                orb.addEventListener('click', () => {
                    selectSkill(index);
                });
            });
            
            // Add floating animation keyframes
            if (!document.getElementById('orb-animations')) {
                const style = document.createElement('style');
                style.id = 'orb-animations';
                style.textContent = `
                    @keyframes floatOrbDynamic {
                        0% {
                            transform: translate(0, 0) translateZ(0) rotate(0);
                        }
                        100% {
                            transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px) translateZ(${Math.random() * 50}px) rotate(${Math.random() * 20 - 10}deg);
                        }
                    }
                `;
                document.head.appendChild(style);
            }
        }
        
        // Show skill details when clicking on an orb
        function selectSkill(index) {
            const skill = skillsData[index];
            const defaultContent = document.querySelector('.skill-content-default');
            const dynamicContent = document.getElementById('skill-content-dynamic');
            const titleElement = document.getElementById('selected-skill-title');
            const iconElement = document.getElementById('selected-skill-icon');
            const descriptionElement = document.getElementById('selected-skill-description');
            const tagsElement = document.getElementById('selected-skill-tags');
            
            // Update content
            titleElement.textContent = skill.name;
            iconElement.className = skill.icon;
            descriptionElement.textContent = skill.description;
            
            // Update tags
            tagsElement.innerHTML = '';
            skill.tags.forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.className = 'skill-tag';
                tagElement.textContent = tag;
                tagsElement.appendChild(tagElement);
            });
            
            // Hide default content and show dynamic content
            defaultContent.classList.add('hidden');
            dynamicContent.classList.remove('hidden');
            
            // Highlight selected orb
            const orbs = document.querySelectorAll('.skill-orb');
            orbs.forEach(orb => {
                orb.classList.remove('selected');
            });
            
            const selectedOrb = document.querySelector(`.skill-orb[data-skill-index="${index}"]`);
            if (selectedOrb) {
                selectedOrb.classList.add('selected');
            }
        }
        
        // Back button functionality
        const backButton = document.getElementById('back-to-skills');
        if (backButton) {
            backButton.addEventListener('click', () => {
                document.querySelector('.skill-content-default').classList.remove('hidden');
                document.getElementById('skill-content-dynamic').classList.add('hidden');
                
                // Remove highlight from selected orb
                const orbs = document.querySelectorAll('.skill-orb');
                orbs.forEach(orb => {
                    orb.classList.remove('selected');
                });
            });
        }
        
        // Create skill orbs when the section is in view
        ScrollTrigger.create({
            trigger: "#skill-station",
            start: "top bottom-=100",
            onEnter: () => {
                createSkillOrbs();
            },
            once: true
        });
        
        // Reposition orbs on window resize
        window.addEventListener('resize', () => {
            if (isElementInViewport(skillOrbsContainer)) {
                createSkillOrbs();
            }
        });
        
        // Helper function to check if element is in viewport
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom >= 0
            );
        }
    }
}); 