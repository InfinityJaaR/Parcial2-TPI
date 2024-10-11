const productos = [
    { nombre: 'Producto 1', precio: 10.00, imagen: '../src/img/favicon.png', descripcion: 'Descripción del producto 1' },
    { nombre: 'Producto 2', precio: 20.00, imagen: '../src/img/obj1.jpg', descripcion: 'Descripción del producto 2' },
    { nombre: 'Producto 3', precio: 30.00, imagen: '../src/img/obj2.jpg', descripcion: 'Descripción del producto 3' },
    { nombre: 'Producto 4', precio: 40.00, imagen: '../src/img/favicon.png', descripcion: 'Descripción del producto 4' },
    { nombre: 'Producto 5', precio: 50.00, imagen: '../src/img/obj1.jpg', descripcion: 'Descripción del producto 5' },
    { nombre: 'Producto 6', precio: 60.00, imagen: '../src/img/obj+1.jpg', descripcion: 'Descripción del producto 6' }
  ];

  // Función para generar la lista de productos
  function generarProductos() {
    const productList = document.getElementById('product-list');
    productos.forEach(producto => {
      const productCard = `
        <div class="border p-4 rounded shadow-lg bg-white">
          <img src="${producto.imagen}" alt="${producto.nombre}" class="mb-4 w-full h-48 object-cover">
          <h3 class="text-xl font-bold">${producto.nombre}</h3>
          <p class="text-gray-600 mb-2">${producto.descripcion}</p>
          <p class="text-gray-800 font-semibold">$${producto.precio.toFixed(2)}</p>
        </div>
      `;
      productList.innerHTML += productCard;
    });
  }

  // Llamar a la función cuando la página cargue
  window.onload = generarProductos;