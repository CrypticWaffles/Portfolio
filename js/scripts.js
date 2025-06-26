// Custom Tailwind CSS Configuration for colors
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'primary-bg': '#0F172A',
                        'primary-text': '#E2E8F0',
                        'accent-purple': '#A78BFA',
                        'secondary-accent-cyan': '#22D3EE',
                        'secondary-accent-green': '#4ADE80',
                    },
                    fontFamily: {
                        inter: ['Inter', 'sans-serif'],
                        mono: ['Roboto Mono', 'monospace'],
                    },
                    animation: {
                        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                        'pulse-short': 'pulse 1.5s infinite alternate',
                    }
                },
            },
            plugins: [],
        }

        // JavaScript for mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
            // Close mobile menu when a link is clicked
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });
        }

        // JavaScript for diploma and resume toggles
        function setupDataViewerToggle(buttonId, viewerId) {
            const button = document.getElementById(buttonId);
            const viewer = document.getElementById(viewerId);

            if (button && viewer) {
                button.addEventListener('click', () => {
                    viewer.classList.toggle('hidden');
                    if (!viewer.classList.contains('hidden')) {
                        viewer.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                });
            }
        }

        setupDataViewerToggle('toggle-diploma', 'diploma-viewer');
        setupDataViewerToggle('toggle-resume', 'resume-viewer');

        // Loading screen functionality
        window.addEventListener('load', () => {
            const loadingOverlay = document.getElementById('loading-overlay');
            const mainContent = document.getElementById('main-content');

            setTimeout(() => {
                loadingOverlay.style.opacity = '0';
                loadingOverlay.addEventListener('transitionend', () => {
                    loadingOverlay.remove();
                    mainContent.classList.remove('hidden');
                    mainContent.classList.add('opacity-100');
                }, { once: true });
            }, 2000); // Display loading screen for 2 seconds
        });