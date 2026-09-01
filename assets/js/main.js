document.addEventListener('DOMContentLoaded', function() {
    // Dynamic year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Mobile menu toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        const mobileLinks = menu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.classList.add('shadow-sm');
            } else {
                navbar.classList.remove('shadow-sm');
            }
        });
    }

    // GTM click tracking for all elements with data-gtm-event
    document.querySelectorAll('[data-gtm-event]').forEach(el => {
        el.addEventListener('click', () => {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': el.dataset.gtmEvent,
                'gtm_category': el.dataset.gtmCategory,
                'gtm_action': el.dataset.gtmAction,
                'gtm_label': el.dataset.gtmLabel
            });
        });
    });

    // Meta Pixel - Dispara evento Lead nos cliques de CTA
    document.querySelectorAll('[data-gtm-event="Cliquewpp"]').forEach(el => {
        el.addEventListener('click', () => {
            if (typeof fbq === 'function') {
                fbq('track', 'Lead', {
                    content_name: el.dataset.gtmLabel || 'cta_click'
                });
            }
        });
    });

});
