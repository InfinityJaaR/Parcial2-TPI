const recetas = [
    { 
      nombre: 'Donas de Chocolate', 
      videoUrl: 'https://www.youtube.com/embed/W1EorOMsZ-I?si=W10jLVXSQU1_vbMm', 
      descripcion: 'Deliciosas donas de chocolate esponjosas, fáciles de hacer.' 
    },
    { 
      nombre: 'Galletas de Vainilla', 
      videoUrl: 'https://www.youtube.com/embed/wT0M5H3AT3E?si=ntLwQmt6v_1TQxxi', 
      descripcion: 'Crujientes galletas de vainilla con un toque de canela.' 
    },
    { 
      nombre: 'Pan Francés', 
      videoUrl: 'https://www.youtube.com/embed/GCV2r8sy4Vs?si=eG6-UdGm-HfMUycQ', 
      descripcion: 'Pan francés esponjoso y dulce, acompañado con fruta.' 
    },
    { 
      nombre: 'Cupcakes', 
      videoUrl: 'https://www.youtube.com/embed/MYKnM3eZhfY?si=3RozKXOvcUeIAmcP', 
      descripcion: 'Deliciosos cupcakes rellenos de frambuesa.' 
    },
    { 
      nombre: 'Profiteroles', 
      videoUrl: 'https://www.youtube.com/embed/FoA6CT-b-r4?si=S_CmCQsRGe7Tw4OB', 
      descripcion: 'Prácticos y exquisitos profiteroles, ideales como postre.' 
    },
    { 
      nombre: 'Panqué', 
      videoUrl: 'https://www.youtube.com/embed/Xx9NHepLG_E?si=jwI1ti-tXGNTErSc', 
      descripcion: 'Panqué temático de corazón, perfecto para un ser querido.' 
    }
  ];
  
  // Función para generar la lista de recetas
  function generarRecetas() {
    const recipeList = document.getElementById('recipe-list');
    recetas.forEach(receta => {
      const recipeCard = `
        <div class="bg-white rounded-lg shadow-lg p-4 recipe-card">
          <h2 class="text-xl font-bold mb-2">${receta.nombre}</h2>
          <p class="text-gray-600 mb-4">${receta.descripcion}</p>
          <div class="aspect-w-16 aspect-h-9">
            <iframe class="w-full h-full" src="${receta.videoUrl}" frameborder="0" allowfullscreen></iframe>
          </div>
          <div class="liking flex justify-start mt-4">
            <i class="far fa-thumbs-up like-icon"></i>
            <i class="far fa-thumbs-down dislike-icon"></i>
          </div>
        </div>
      `;
      recipeList.innerHTML += recipeCard;
    });
  }
  
  // Llamar a la función cuando la página cargue
  window.onload = generarRecetas;
