
    document.addEventListener('DOMContentLoaded', function() {
        // Elementos do megamenu
        const produtosItem = document.getElementById('produtos-item');
        const produtosMegamenu = document.getElementById('produtos-megamenu');
        const fornecedoresItem = document.getElementById('fornecedores-item');
        const fornecedoresMegamenu = document.getElementById('fornecedores-megamenu');
        const transportadoresItem = document.getElementById('transportadores-item');
        const transportadoresMegamenu = document.getElementById('transportes-megamenu');
        
        // Tempo para fechar o megamenu (em milissegundos)
        let closeTimeout;
        const closeDelay = 500;
        
        // Função para abrir um megamenu
        function openMegamenu(megamenu) {
            closeAllMegamenus();
            clearTimeout(closeTimeout);
            megamenu.classList.add('active');
        }
        
        // Fechar todos
        function closeAllMegamenus() {
            const allMegamenus = document.querySelectorAll('.megamenu');
            allMegamenus.forEach(menu => {
                menu.classList.remove('active');
            });
        }
        
        // Fechar com delay
        function scheduleClose() {
            closeTimeout = setTimeout(closeAllMegamenus, closeDelay);
        }
        
        // ============================
        // Produtos
        // ============================
        if (produtosItem && produtosMegamenu) {
            produtosItem.addEventListener('mouseenter', () => openMegamenu(produtosMegamenu));
            produtosItem.addEventListener('mouseleave', scheduleClose);
            produtosMegamenu.addEventListener('mouseenter', () => clearTimeout(closeTimeout));
            produtosMegamenu.addEventListener('mouseleave', scheduleClose);
        }

        // ============================
        // Fornecedores
        // ============================
        if (fornecedoresItem && fornecedoresMegamenu) {
            fornecedoresItem.addEventListener('mouseenter', () => openMegamenu(fornecedoresMegamenu));
            fornecedoresItem.addEventListener('mouseleave', scheduleClose);
            fornecedoresMegamenu.addEventListener('mouseenter', () => clearTimeout(closeTimeout));
            fornecedoresMegamenu.addEventListener('mouseleave', scheduleClose);
        }

        // ============================
        // Transportadores
        // ============================
        if (transportadoresItem && transportadoresMegamenu) {
            transportadoresItem.addEventListener('mouseenter', () => openMegamenu(transportadoresMegamenu));
            transportadoresItem.addEventListener('mouseleave', scheduleClose);
            transportadoresMegamenu.addEventListener('mouseenter', () => clearTimeout(closeTimeout));
            transportadoresMegamenu.addEventListener('mouseleave', scheduleClose);
        }
        
        // ============================
        // Fechar ao clicar fora
        // ============================
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-item') && !e.target.closest('.megamenu')) {
                closeAllMegamenus();
            }
        });
        
        // ============================
        // Busca (extra)
        // ============================
        const searchInput = document.querySelector('.search-input input');
        const searchBox = document.querySelector('.search-box');
        
        if (searchInput && searchBox) {
            searchInput.addEventListener('focus', function() {
                searchBox.style.boxShadow = '0 4px 15px rgba(255, 106, 0, 0.2)';
            });
            
            searchInput.addEventListener('blur', function() {
                searchBox.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
            });
            
            searchInput.addEventListener('keyup', function(e) {
                if (e.key === 'Enter') {
                    alert('Buscando por: ' + this.value);
                    this.value = '';
                }
            });
        }
    });



        // Slider automático
        document.addEventListener('DOMContentLoaded', function() {
            let currentSlide = 0;
            const slides = document.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.dot');
            
            function showSlide(n) {
                slides.forEach(slide => slide.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                
                currentSlide = (n + slides.length) % slides.length;
                
                slides[currentSlide].classList.add('active');
                dots[currentSlide].classList.add('active');
            }
            
            // Auto slide
            setInterval(() => {
                showSlide(currentSlide + 1);
            }, 5000);
            
            // Click on dots
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    showSlide(index);
                });
            });
            
            // Adiciona evento de clique aos botões de compra
            const buyButtons = document.querySelectorAll('.add-to-cart');
            buyButtons.forEach(button => {
                button.addEventListener('click', function() {
                    this.innerHTML = '<i class="fas fa-check"></i>';
                    this.style.background = 'var(--success)';
                    setTimeout(() => {
                        this.innerHTML = '<i class="fas fa-shopping-cart"></i>';
                        this.style.background = '';
                    }, 1500);
                });
            });
            
            // Mobile menu toggle
            const menuToggle = document.querySelector('.mobile-menu-toggle');
            const closeMenu = document.querySelector('.close-menu');
            const navMenu = document.querySelector('.nav-menu');
            
            if (menuToggle && closeMenu && navMenu) {
                menuToggle.addEventListener('click', function() {
                    navMenu.classList.add('active');
                    document.body.style.overflow = 'hidden';
                });
                
                closeMenu.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                });
                
                // Close menu when clicking outside
                document.addEventListener('click', function(event) {
                    if (!event.target.closest('.nav-menu') && !event.target.closest('.mobile-menu-toggle')) {
                        navMenu.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                });
                
                // Prevent closing when clicking inside the menu
                navMenu.addEventListener('click', function(event) {
                    event.stopPropagation();
                });
            }
        });