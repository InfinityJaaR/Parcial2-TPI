//verifica que todo los archivos esten cargados 
fetch("/src/nav.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("nav-container").innerHTML = data;

        // Mueve la lógica del evento aquí, después de cargar el menú
        const menuToggle = document.getElementById('menu-toggle');
        const menuTelefono = document.getElementById('mobile-menu');
        const cerrarMenu = document.getElementById('close-menu');
        const menuIcon = document.getElementById('menu-icon');

        // Verifica que los elementos existan antes de agregar el evento
        if (menuToggle) {
            menuToggle.addEventListener('click', () => {
                menuTelefono.classList.toggle('hidden'); // Muestra el menú móvil
                menuIcon.classList.toggle('hidden'); // Ocultar icono de hamburguesa
                cerrarMenu.classList.toggle('hidden'); // Mostrar icono de cerrar
            });
        }

        if (cerrarMenu) {
            cerrarMenu.addEventListener('click', () => {
                menuTelefono.classList.add('hidden'); // Oculta el menú móvil
                menuIcon.classList.remove('hidden'); // Mostrar icono de hamburguesa
                cerrarMenu.classList.add('hidden'); // Ocultar icono de cerrar
            });
        }
    })
    .catch((error) => console.error('Error al cargar el menú:', error));
