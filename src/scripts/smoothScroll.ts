document.addEventListener('DOMContentLoaded', () => {
    const getNavDrawer = document.getElementById('nav-drawer') as HTMLInputElement;

    // Get all links with the `scroll-link` class
    const links = document.querySelectorAll('.scroll-link');

    // Get the url
    const url = window.location.href;
    // Get the page
    const page = url.substring(url.lastIndexOf('/') + 1);
    // Get the url hash 
    const hash = window.location.hash;

    // If the page and the hash are empty, set the active class to the first link
    if (page === '' && (hash === '' || hash === undefined)) {
        links[0].classList.add('active');
    }

    // If the hash is empty, set the active class to the link where the 'href' attribute is equal to the url
    if (hash === '' || hash === undefined) {
        links.forEach(link => {
            if (link.getAttribute('href') === url) {
                link.classList.add('active');
            }
        });
    } else {
        // If the hash is not empty, set the active class to the link where the 'href' attribute is equal to the url
        links.forEach(link => {
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
            }
        });
    }

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