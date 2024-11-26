// Seleciona os elementos de áudio
        const correctSound = document.getElementById('correct-sound');
        const wrongSound = document.getElementById('wrong-sound');

        // Adiciona evento de clique a todos os botões com a classe "alternative"
        document.querySelectorAll('.alternative').forEach(button => {
            button.addEventListener('click', () => {
                const isCorrect = button.getAttribute('data-correct') === 'true';
                const feedback = button.closest('.question-container').querySelector('.feedback');
                
                if (isCorrect) {
                    feedback.textContent = 'Correto! Boa resposta!';
                    feedback.style.color = '#b5bf6b';
                    correctSound.play(); // Toca o som de acerto
                } else {
                    feedback.textContent = 'Errado! Tente novamente.';
                    feedback.style.color = '#9e3030';
                    wrongSound.play(); // Toca o som de erro
                }
            });
        });
