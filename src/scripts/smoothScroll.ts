document.addEventListener('DOMContentLoaded', () => {
    const getNavDrawer = document.getElementById('nav-drawer') as HTMLInputElement;

    // Get all links with the `scrollLink` class
    const links = document.querySelectorAll('.scrollLink');

    // Add the smooth scrolling effect to all links
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href')!.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 75;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            // Set active class to the clicked link
            links.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
            // Close the nav drawer
            getNavDrawer.checked = false;
        });
    });
});