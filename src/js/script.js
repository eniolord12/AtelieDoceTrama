document.addEventListener('DOMContentLoaded', () => {

    // --- BANCO DE DADOS DOS PRODUTOS ---

    // Produtos da Juliana
    const productsJuliana = [
        {
            name: "Jogo americano (Amarelo)",
            price: "R$ 40,00",
            img: "src/img/JulianaDias/Jogo-americano-amarelo-40,00-jogo-com-4.jpeg"
        },
        {
            name: "Jogo americano (Branco)",
            price: "R$ 40,00",
            img: "src/img/JulianaDias/Jogo-americano-branco-40,00-unidade-jogo-com-4.jpeg"
        },
        {
            name: "Jogo americano (Rosa)",
            price: "R$ 40,00",
            img: "src/img/JulianaDias/Jogo-americano-rosa-40,00-unidade-jogo-com-4-unidades.jpeg"
        },
        {
            name: "Painel macramê",
            price: "R$ 214,00",
            img: "src/img/JulianaDias/Painel-macramê-214,00.jpeg"
        },
        {
            name: "Sapatinho em crochê (Verde)",
            price: "R$ 40,00",
            img: "src/img/JulianaDias/Sapatinho-em-crochê-1-40,00.jpeg"
        },
        {
            name: "Sapatinho em crochê (Bege)",
            price: "R$ 40,00",
            img: "src/img/JulianaDias/Sapatinho-em-crochê-2-40,00.jpeg"
        },
        {
            name: "Sapatinho (Melancia) RN",
            price: "R$ 40,00",
            img: "src/img/JulianaDias/Sapatinho-em-crochê-melancia-RN-40,00.jpeg"
        },
        {
            name: "Sapatinho em crochê (Amarelo)",
            price: "R$ 40,00",
            img: "src/img/JulianaDias/Sapatinho_em _croche _amarelo_40,00.jpeg"
        },
        {
            name: "Tênis em crochê RN",
            price: "R$ 40,00",
            img: "src/img/JulianaDias/Tênis_em_croche _RN_40,00.jpeg"
        },
    ];

    // Produtos da Thaina
    const productsThaina = [
        {
            name: "Bailarina",
            price: "R$ 180,00",
            img: "src/img/ThainaFernanda/Bailarina-180,00.jpeg"
        },
        {
            name: "Cavalinho, almofada e botinhas",
            price: "R$ 130,00",
            img: "src/img/ThainaFernanda/Cavalinho+almofada+par-de-botinhas-130,00.jpeg"
        },
        {
            name: "Chaveiro Cerejinhas",
            price: "R$ 15,00",
            img: "src/img/ThainaFernanda/Chaveiro-Cerejinhas-15,00.jpeg"
        },
        {
            name: "Chaveiro Santinhas",
            price: "R$ 30,00",
            img: "src/img/ThainaFernanda/Chaveiro-Santinhas-30,00.jpeg"
        },
        {
            name: "Coelhinha Floki",
            price: "R$ 120,00",
            img: "src/img/ThainaFernanda/Coelhinha-Floki-120,00.jpeg"
        },
        {
            name: "Gandalf",
            price: "R$ 190,00",
            img: "src/img/ThainaFernanda/Gandalf-190,00.jpeg"
        },
        {
            name: "Homer Simpson",
            price: "R$ 90,00",
            img: "src/img/ThainaFernanda/Homer-Simpson-90,00.jpeg"
        },
        {
            name: "Nossa Senhora Aparecida",
            price: "R$ 180,00",
            img: "src/img/ThainaFernanda/Nossa-Senhora-Aparecida-180,00.jpeg"
        },
        {
            name: "O Grinch",
            price: "R$ 100,00",
            img: "src/img/ThainaFernanda/O-Grinch-100,00.jpeg"
        },
        {
            name: "Pantera Cor-de-Rosa",
            price: "R$ 180,00",
            img: "src/img/ThainaFernanda/Pantera-Cor-de-Rosa-180,00.jpeg"
        },
        {
            name: "Raposinha do Cruzeiro",
            price: "R$ 80,00",
            img: "src/img/ThainaFernanda/Raposinha-do-Cruzeiro-80,00.jpeg"
        },
        {
            name: "Sousplat (Unidade)",
            price: "R$ 36,00",
            img: "src/img/ThainaFernanda/Sousplat-36-reais-a-peça-Ou-190,00-o-jogo.jpeg"
        },
        {
            name: "Tapete rosa (70x50cm)",
            price: "R$ 130,00",
            img: "src/img/ThainaFernanda/Tapete-rosa-130,00-70x50cm.jpeg"
        },
    ];

    // --- LÓGICA DE RENDERIZAÇÃO ---
    // (Verifica se os elementos existem antes de adicionar eventos)

    const gallery = document.getElementById('product-gallery');
    const tabJuliana = document.getElementById('tab-juliana');
    const tabThaina = document.getElementById('tab-thaina');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalPrice = document.getElementById('modal-price');

    /**
     * Renderiza os produtos na galeria.
     */
    function renderProducts(artisan) {
        if (!gallery) return; // Se não for a página do catálogo, para aqui.

        gallery.innerHTML = '';
        const products = (artisan === 'juliana') ? productsJuliana : productsThaina;

        products.forEach(product => {
            const card = document.createElement('div');
            card.className = "product-card";

            card.innerHTML = `
                <img src="${product.img}" 
                     alt="${product.name}" 
                     onerror="this.src='https://placehold.co/400x400/f0f0f0/666?text=Imagem+Indisponível';">
                
                <div class="product-card-content">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                </div>
            `;

            // Evento de clique no card
            card.addEventListener('click', () => {
                openModal(product);
            });

            gallery.appendChild(card);
        });
    }

    /**
     * Alterna entre as abas das artesãs.
     */
    function switchTab(artisan) {
        if (!tabJuliana || !tabThaina) return; // Segurança

        if (artisan === 'juliana') {
            tabJuliana.classList.add('tab-active');
            tabThaina.classList.remove('tab-active');
        } else {
            tabThaina.classList.add('tab-active');
            tabJuliana.classList.remove('tab-active');
        }
        renderProducts(artisan);
    }

    /**
     * Abre o modal com os dados de um produto.
     */
    function openModal(product) {
        if (!modalOverlay) return; // Segurança

        modalImage.src = product.img;
        modalImage.alt = product.name;
        modalTitle.textContent = product.name;
        modalPrice.textContent = product.price;
        modalOverlay.classList.add('active');
    }

    /**
     * Fecha o modal.
     */
    function closeModal() {
        if (!modalOverlay) return; // Segurança
        modalOverlay.classList.remove('active');
    }

    // --- INICIALIZAÇÃO (Apenas na página do catálogo) ---

    // Adiciona eventos apenas se os botões existirem
    if (tabJuliana && tabThaina) {
        tabJuliana.addEventListener('click', () => switchTab('juliana'));
        tabThaina.addEventListener('click', () => switchTab('thaina'));

        // Carga inicial
        switchTab('juliana');
    }

    // Adiciona eventos do modal apenas se ele existir
    if (modalOverlay && modalClose) {
        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (event) => {
            if (event.target === modalOverlay) {
                closeModal();
            }
        });
    }

});