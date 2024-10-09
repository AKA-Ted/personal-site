const filterMenuItems = document.querySelectorAll('.tech-nav-menu li');
const filterItems = document.querySelectorAll('.tech-card');

const filterElements = ( filter ) => {
    filterItems.forEach(item => {

        if (filter === 'all') {
            item.classList.add('show');
        } else if (item.classList.contains(filter)) {
            item.classList.add('show');
        } else {
            item.classList.remove('show');
        }
    });
}

filterMenuItems.forEach(menuItem => {
    menuItem.addEventListener('click', () => {

        filterMenuItems.forEach(item => item.classList.remove('active'));
        menuItem.classList.add('active');

        const filter = menuItem.getAttribute('data-filter');

        filterElements(filter);
    });
});

filterElements('all');


/*
    ENVIO DE CORREO
*/
const contactForm = document.getElementById('contact-form')
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    
    await response.json();
    
})
