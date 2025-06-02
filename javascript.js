document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('show');
        });
    });
    
    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efeito de scroll no header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Configuração do WhatsApp
    const whatsappLink = document.getElementById('whatsappLink');
    const whatsappNumber = '5534991251899';
    whatsappLink.href = `https://wa.me/${whatsappNumber}`;
    
    // ÚNICO handler para o formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter valores do formulário
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const energyBill = document.getElementById('energy-bill').value;
            const roofType = document.getElementById('roof-type').value;
            const address = document.getElementById('address').value;
            const city = document.getElementById('city').value;
            const message = document.getElementById('message').value;
            
            // Validar telefone (mínimo 10 dígitos com DDD)
            if (phone.replace(/\D/g, '').length < 10) {
                alert('Por favor, insira um número de telefone válido com DDD');
                return;
            }
            
            // Validar campos obrigatórios
            if (energyBill === "" || roofType === "" || address === "" || city === "") {
                alert('Por favor, preencha todos os campos obrigatórios');
                return;
            }
            
            // Criar mensagem para WhatsApp
            const whatsappMessage = `Olá Equilíbrio Solar! Meu nome é ${name}.%0A%0A` +
                                    `*Conta de Energia:* ${energyBill}%0A` +
                                    `*Tipo de Telhado:* ${roofType}%0A` +
                                    `*Endereço:* ${address}, ${city}%0A` +
                                    `*Telefone:* ${phone}%0A` +
                                    (email ? `*E-mail:* ${email}%0A` : '') +
                                    (message ? `*Mensagem:* ${message}` : '');
            
            // Redirecionar para WhatsApp com a mensagem
            window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
            
            // Limpar formulário (opcional)
            // contactForm.reset();
        });
    }
    
    // Animação ao rolar a página
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .benefit-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Configuração inicial para elementos animados
    const animatedElements = document.querySelectorAll('.service-card, .benefit-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    // Disparar uma vez ao carregar a página
    animateOnScroll();
});