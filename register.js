
        // Script para selecionar tipo de conta
        document.querySelectorAll('.role-option').forEach(option => {
            option.addEventListener('click', function() {
                document.querySelectorAll('.role-option').forEach(el => {
                    el.classList.remove('selected');
                });
                this.classList.add('selected');
            });
        });
        
        // Validação de formulário
        const form = document.querySelector('.registration-form');
        const passwordInput = document.querySelector('input[type="password"]');
        const confirmPasswordInput = document.querySelectorAll('input[type="password"]')[1];
        const passwordStrengthFill = document.querySelector('.password-strength-fill');
        const passwordStrengthText = document.querySelector('.password-strength-text');
        
        // Verificar força da senha
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            let strength = 0;
            
            // Verificar comprimento
            if (password.length >= 8) strength += 20;
            
            // Verificar se tem letras minúsculas e maiúsculas
            if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength += 20;
            
            // Verificar se tem números
            if (password.match(/\d/)) strength += 20;
            
            // Verificar se tem caracteres especiais
            if (password.match(/[^a-zA-Z\d]/)) strength += 20;
            
            // Verificar se não é uma senha comum
            const commonPasswords = ['password', '123456', 'qwerty', 'senha'];
            if (!commonPasswords.includes(password.toLowerCase())) strength += 20;
            
            // Atualizar a barra de força
            passwordStrengthFill.style.width = `${strength}%`;
            
            // Atualizar o texto
            if (strength < 40) {
                passwordStrengthFill.style.background = var(--danger);
                passwordStrengthText.textContent = 'Força da senha: fraca';
                passwordStrengthText.style.color = var(--danger);
            } else if (strength < 80) {
                passwordStrengthFill.style.background = var(--warning);
                passwordStrengthText.textContent = 'Força da senha: média';
                passwordStrengthText.style.color = var(--warning);
            } else {
                passwordStrengthFill.style.background = var(--success);
                passwordStrengthText.textContent = 'Força da senha: forte';
                passwordStrengthText.style.color = var(--success);
            }
        });
        
        // Verificar se as senhas coincidem
        confirmPasswordInput.addEventListener('input', function() {
            if (this.value !== passwordInput.value) {
                this.classList.add('input-error');
                this.nextElementSibling.style.display = 'block';
            } else {
                this.classList.remove('input-error');
                this.nextElementSibling.style.display = 'none';
            }
        });
        
        // Validação ao enviar o formulário
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Validar campos obrigatórios
            document.querySelectorAll('input[required]').forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add('input-error');
                    input.nextElementSibling.style.display = 'block';
                    isValid = false;
                } else {
                    input.classList.remove('input-error');
                    input.nextElementSibling.style.display = 'none';
                }
            });
            
            // Validar email
            const emailInput = document.querySelector('input[type="email"]');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailInput.classList.add('input-error');
                emailInput.nextElementSibling.style.display = 'block';
                isValid = false;
            }
            
            // Validar se as senhas coincidem
            if (passwordInput.value !== confirmPasswordInput.value) {
                confirmPasswordInput.classList.add('input-error');
                confirmPasswordInput.nextElementSibling.style.display = 'block';
                isValid = false;
            }
            
            // Se o formulário for válido, prosseguir
            if (isValid) {
                alert('Conta criada com sucesso! Em breve você receberá um email de confirmação.');
                // Aqui você normalmente faria uma requisição para o servidor
                // form.submit();
            }
        });
