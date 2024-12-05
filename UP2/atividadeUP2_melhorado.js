
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        let scrollAmount = 0;
        setInterval(() => {
            carousel.scrollLeft += 200;
            scrollAmount += 200;
            if (scrollAmount >= carousel.scrollWidth) {
                carousel.scrollLeft = 0;
                scrollAmount = 0;
            }
        }, 3000);
    });

    // Alternar alto contraste
    const toggleContrast = () => {
        document.body.classList.toggle('high-contrast');
    };

    const contrastButton = document.createElement('button');
    contrastButton.textContent = 'Alto Contraste';
    contrastButton.style.position = 'fixed';
    contrastButton.style.bottom = '20px';
    contrastButton.style.right = '20px';
    contrastButton.style.padding = '10px';
    contrastButton.style.zIndex = '1000';
    contrastButton.addEventListener('click', toggleContrast);
    document.body.appendChild(contrastButton);
});

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email && password) {
            alert(`Login realizado com sucesso!\nE-mail: ${email}`);
            const modal = bootstrap.Modal.getInstance(document.getElementById('modalLogin'));
            modal.hide();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
