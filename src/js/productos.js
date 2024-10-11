const productos = [
  { nombre: 'Bocadillos', precio: 10.00, imagen: '../src/img/queiques/bocadillos.png', descripcion: 'Deliciosos bocadillos variados.' },
  { nombre: 'Cheesecake', precio: 20.00, imagen: '../src/img/queiques/chesecake.png', descripcion: 'Suave y cremoso cheesecake.' },
  { nombre: 'Pan Dulce', precio: 30.00, imagen: '../src/img/queiques/pan-dulce.png', descripcion: 'Tradicional pan dulce esponjoso.' },
  { nombre: 'Pastel Capuccino', precio: 40.00, imagen: '../src/img/queiques/pastel-capucino.png', descripcion: 'Exquisito pastel con sabor a capuccino.' },
  { nombre: 'Pastel de Chocolate', precio: 50.00, imagen: '../src/img/queiques/pastel-chocolate.png', descripcion: 'Irresistible pastel de chocolate.' },
  { nombre: 'Pastel Personalizado', precio: 60.00, imagen: '../src/img/queiques/personalizado.png', descripcion: 'Personaliza tu pastel a tu gusto.' },
  { nombre: 'Torta', precio: 60.00, imagen: '../src/img/queiques/torta.png', descripcion: 'Clásica torta para toda ocasión.' }
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
