document.addEventListener('DOMContentLoaded', () => {
            // Dropdown Logic
            const dropdowns = document.querySelectorAll('.dropdown-toggle');
            dropdowns.forEach(toggle => {
                toggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    const parentLi = toggle.parentElement;
                    parentLi.classList.toggle('open');
                });
            });

            // Navigation Logic
            const navItems = document.querySelectorAll('.nav-item');
            const sections = document.querySelectorAll('.section-container');

            navItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // 1. Remove active class from all links
                    navItems.forEach(nav => nav.classList.remove('active'));
                    
                    // 2. Add active class to clicked link
                    item.classList.add('active');

                    // 3. Hide all sections
                    sections.forEach(sec => sec.classList.remove('active'));

                    // 4. Show target section
                    const targetId = item.getAttribute('data-target');
                    const targetSection = document.getElementById(targetId);
                    if (targetSection) {
                        targetSection.classList.add('active');
                    }
                });
            });
        });