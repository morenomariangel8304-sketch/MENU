const menuHCV = [
    {
        categoria: "Entradas",
        items: [
            { nombre: "Ración de Tequeños (8 unid.)", precio: "$10" },
            { nombre: "Carpaccio de Lomito", precio: "$14" },
            { nombre: "Camarones al Ajillo (C/Pan con ajo)", precio: "$15" },
            { nombre: "Tabla de Embutidos (350 gr.)", precio: "$25" },
            { nombre: "Pimientos Padrón", precio: "$10" },
            { nombre: "Alitas BBQ", precio: "$10" },
            { nombre: "Papas Arrugadas (Con mojo Canario)", precio: "$10" },
            { nombre: "Chistorras Salteadas (Con papas)", precio: "$14" },
            { nombre: "Tortilla Española", precio: "$10" },
            { nombre: "Pulpo a la Gallega", precio: "$20" },
            { nombre: "Bruschettas (6 und Serrano/Manchego y Capresa)", precio: "$14" },
            { nombre: "Calamares y Camarones rebosados (con papas)", precio: "$20" },
            { nombre: "Sopa del Día", precio: "$8" },
            { nombre: "Fosforera", precio: "$12" }
        ]
    },
    {
        categoria: "Carnes y Aves",
        items: [
            { nombre: "Punta Nacional Prime (300 gr punta, 2 contornos).", precio: "$20" },
            { nombre: "Parrilla Argentina 2P (Solomo, Pollo, Chuleta fresca, Chorizo, Morcilla, 1 contorno) ", precio: "$25" },
            { nombre: "Parrilla Mixta Salteada (Solomo, Pollo, Chorizo, Queso, Aguacate, Papas)", precio: "$20" },
            { nombre: "Churrasco de Pollo (2 contornos)", precio: "$14" },
            { nombre: "Milanesa Parmesana (2 contornos)", precio: "$14" },
            { nombre: "Pollo a la Plancha (2 contornos)", precio: "$12" },
            { nombre: "Pollo al Champiñón (2 contornos)", precio: "$14" }
        ]
    },
    {
        categoria: "Pescados y Mariscos",
        items: [
            { nombre: "Churrasco de Mero (Al ajillo/Menier/Salsa Marinera, 2 contornos)", precio: "$25" },
            { nombre: "Filet de Róbalo (Al ajillo o Menier, 2 contornos)", precio: "$18" },
            { nombre: "Parrilla Mar y Tierra (2 pers. Camarones, Calamar, Lomito, Pollo, Aguacate, Mejillones, Papas)", precio: "$30" },
            { nombre: "Paella Marinera (2 pers.)", precio: "$40" },
            { nombre: "Paella Valenciana (2 pers.)", precio: "$40" },
            { nombre: "Fideuá (2 pers.)", precio: "$40" },
            { nombre: "Pulpo al Grill (C/papas bravas)", precio: "$18" }
        ]
    },
    {
        categoria: "Pastas y Risottos",
        items: [
            { nombre: "Cartoccio de Lomito", precio: "$20" },
            { nombre: "Cartoccio de Pollo", precio: "$18" },
            { nombre: "Pasta Bologna", precio: "$10" },
            { nombre: "Pasta Carbonara", precio: "$10" },
            { nombre: "Pasta Marinera", precio: "$15" },
            { nombre: "Pasta Filetto Betina", precio: "$12" },
            { nombre: "Risotto Nero (con Calamares y su tinta)", precio: "$15" },
            { nombre: "Risotto de Camarones", precio: "$15" },
            { nombre: "Risotto de Lomito y Champiñones", precio: "$20" },
            { nombre: "Risotto Capressa", precio: "$15" }
        ],
    
    },
    {
        categoria: "Hamburguesas y Paninis",
        items: [
            { nombre: "Hamburguesa Punta Prime (170gr punta, vegetales, cebolla caramelizada, queso, Papas)", precio: "$14" },
            { nombre: "Hamburguesa Pollo crispy (170gr pollo crispy, vegetales, cebolla caramelizada, queso, Papas)", precio: "$12" },
            { nombre: "Hamburguesa Española (170gr punta, Jamon Serrano, Queso manchego, Rugula, Tomate, Papas)", precio: "$15" },
            { nombre: "Hamburguesa Tortuguita (100gr carne, queso, salsas tradicionales, Papas)", precio: "$6" },
            { nombre: "Tenders de Pollo (250gr con Papas)", precio: "$10" },
            { nombre: "Sándwich Mediterráneo (Jamon Serrano, queso manchego, rugula, tomatina, aceite de oliva, Papas)", precio: "$15" },
            { nombre: "Sándwich Philadelfia (100gr punta, queso gouda, chimichurry, pimenton, cebolla, Papas)", precio: "$14" },
            { nombre: "Sandwich Granjero (100gr pollo crispy, vegetales, queso gouda, Papas)", precio: "$12" },
        ]
    },
    {
        categoria: "Pizzas",
        items: [
            { nombre: "Pizza Margarita (Queso Mozzarella, Salsa Napole)", precio: "$10" },
            { nombre: "Pizza Primavera (Queso Mozzarella, Maiz, Jamon, Tocineta, Salsa Napole)", precio: "$15" },
            { nombre: "Pizza Peperoni (Queso Mozzarella, Peperonni, Salsa Napole)", precio: "$15" },
            { nombre: "Pizza Prosciutto Fungi (Queso Mozzarella, Jamon Serrano, Champiñon, Salsa Napole)", precio: "$18" },
            { nombre: "Pizza Vegetariana (Queso Mozzarella, Pimenton, Cebolla, Aceitunas Negras, Champiñones, Maiz, Salsa Napole)", precio: "$15" },
            { nombre: "Pizza Hawaiana (Queso Mozzarella, Piña, Jamon, Maiz, Salsa Napole)", precio: "$12" },
            { nombre: "Pizza Romana (Queso Mozzarella, Anchoas, Salsa Napole)", precio: "$12" },
            { nombre: "Pizza Principal (Queso Mozzarella, Jamon Serrano, Rugula, Salsa Napole)", precio: "$15" },
            { nombre: "Cualquier sabor extra Pizza", precio: "$3" }
        ]
    },
    {
        categoria: "Ensaladas",
        items: [
            { nombre: "César Normal (Lechuga o Berro)", precio: "$8" },
            { nombre: "César con Pollo (Lechuga o Berro)", precio: "$12" },
            { nombre: "Avocado (Berro, palmito, Aguacate, Nueces, Aderezo manzana, Topins de aguacate, tomate cherry)", precio: "$12" },
            { nombre: "Aguacate y Palmito", precio: "$12" },
            { nombre: "Griega (Berro,Tomate cherry, Aceituna Negra, Almendras, cebollas encurtidas, aderezo de yogurt, queso feta, pepino, yerbabuena, chifonada)", precio: "$14" },
            { nombre: "Thai (Zanahoria, Repollo, Pimenton, Pepino, Tomate cherry, Perejil, Almendra, cebollin, cebolla)", precio: "$14" },
            { nombre: "Capressa", precio: "$12" },
            { nombre: "Cobb (Huevo, tocineta, Pollo, Queso gouda, Tomate, Lechuga, Maiz, Aguacate)", precio: "$15" },
            { nombre: "Principal (Rugula, Jamon serrano, Tomate seco, maiz, berenjena, champiñon, aderezo balsamico)", precio: "$15" },

        ]
    },
    {
        categoria: "Cervezas",
        items: [
            { nombre: "Polar", precio: "$1" },
            { nombre: "Polar Light", precio: "$1" },
            { nombre: "Zulia", precio: "$1" },
            { nombre: "Solera Azul", precio: "$1.20" },
            { nombre: "Solera Verde", precio: "$1.20" },
            { nombre: "Cerveza de Lata", precio: "$2.50" }
        ]
    },
    {
        categoria: "Cocteles y Servicios",
        items: [
            { nombre: "Mojito/Margarita/Mai Tai/Caribe Beach/Limoncello Spritz/Sunrise/Michelada/Blue Lagoon", precio: "$5" },
            { nombre: "Tinto de Verano/Cuba Libre/Gran Reserva", precio: "$3" },
            { nombre: "Copa de Vino/ Ron Linaje/Black and White", precio: "$4" },
            { nombre: "Old parr/Buchanans", precio: "$6" },
            { nombre: "Tobo de Cerveza (10 und.)", precio: "$10" },
             { nombre: "Servicio Vino tinto o blanco italiano/Caroreña", precio: "$20" },
            { nombre: "Servicio Ron Gran Reserva/Vodka Gordons", precio: "$28" },
             { nombre: "Servicio Ron Linaje", precio: "$35" },
              { nombre: "Whisky Black and White 8 años", precio: "$40" },
            { nombre: "Servicio Whisky Old Parr/Buchanans 12 años", precio: "$55" },
          
        ]
    }
];

function cargarMenu() {
    const datosGuardados = localStorage.getItem('hcv_menu_vfinal');
    const menuAMostrar = datosGuardados ? JSON.parse(datosGuardados) : menuHCV;
    render(menuAMostrar);
}

function restaurarOriginal() {
    if(confirm("¿Restaurar menú original?")) {
        localStorage.removeItem('hcv_menu_vfinal');
        cargarMenu();
    }
}

function render(data) {
    const container = document.getElementById('menu-container');
    container.innerHTML = "";
    data.forEach(seccion => {
        let html = `<section class="category-section"><h2 class="category-title">${seccion.categoria}</h2>`;
        seccion.items.forEach(item => {
            html += `<div class="menu-item"><span class="item-name">${item.nombre}</span><div class="item-dots"></div><span class="item-price">${item.precio}</span></div>`;
        });
        if(seccion.nota) html += `<div class="contornos-box"><strong>Nota:</strong> ${seccion.nota}</div>`;
        html += `</section>`;
        container.innerHTML += html;
    });
}


document.addEventListener('DOMContentLoaded', cargarMenu);
