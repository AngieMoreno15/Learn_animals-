document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        Swal.fire({
            icon: 'error',
            title: 'Acción no permitida',
            text: 'Desarrolladores no permitidos!',
            confirmButtonText: 'Entendido'
        });
        event.preventDefault();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const animals = document.querySelectorAll('.animal');
    const habitats = document.querySelectorAll('.habitat');
    const checkButton = document.getElementById('checkButton');

    // Guarda las posiciones originales de los animales
    const originalPositions = {};

    animals.forEach(animal => {
        // Guarda la posición original
        originalPositions[animal.id] = animal.parentNode;

        animal.addEventListener('dragstart', () => {
            animal.classList.add('dragging');
            updateButtonState();
        });

        animal.addEventListener('dragend', () => {
            animal.classList.remove('dragging');
            updateButtonState();
        });
    });

    habitats.forEach(habitat => {
        habitat.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        habitat.addEventListener('drop', (e) => {
            e.preventDefault();
            const draggingAnimal = document.querySelector('.dragging');
            if (draggingAnimal) {
                habitat.appendChild(draggingAnimal);
                draggingAnimal.classList.remove('dragging');
                updateButtonState();
            }
        });
    });

    checkButton.addEventListener('click', () => {
        const allAnimalsInHabitats = Array.from(animals).every(animal => {
            return Array.from(habitats).some(habitat => habitat.contains(animal));
        });

        if (!allAnimalsInHabitats) {
            Swal.fire({
                title: 'Attention!',
                text: 'You must drag all the animals into a habitat.',
                icon: 'warning',
                confirmButtonText: 'Accept'
            });
            return;
        }
        
        let correct = true;

        // Verifica cada hábitat
        habitats.forEach(habitat => {
            const habitatType = habitat.dataset.habitat;
            const allowedAnimals = habitatType === 'selva'
                ? ['panda', 'lion', 'elephant', 'monkey', 'toucan', 'zebra', 'snake', 'hippo', 'bat', 'flamingo', 'giraffe', 'crocodile']
                : ['horse', 'canary', 'pig', 'chicken', 'cat', 'duck', 'dog', 'rooster', 'chick', 'sheep', 'cow', 'rabbit'];

            habitat.querySelectorAll('.animal').forEach(animal => {
                if (!allowedAnimals.includes(animal.dataset.animal)) {
                    correct = false;
                    // Mueve el animal de vuelta a su posición original
                    const originalPosition = originalPositions[animal.id];
                    if (originalPosition) {
                        originalPosition.appendChild(animal);
                    }
                }
            });
        });

        if (correct) {
            Swal.fire({
                title: 'Congratulations!',
                text: 'You have placed all the animals in their correct habitat.',
                icon: 'success',
                confirmButtonText: 'Accept',
                showDenyButton: true,
                denyButtonText: 'Restart Game',
                denyButtonColor: '#3085d6', // Color del botón de reinicio (opcional)
            }).then((result) => {
                if (result.isConfirmed) {
                    // Acción para el botón "Aceptar"
                    // Simplemente cerramos la alerta
                } else if (result.isDenied) {
                    // Acción para el botón "Reiniciar Juego"
                    resetGame();
                }
            });
        } else {
            Swal.fire({
                title: 'Mistake',
                text: 'Some animals are in the wrong habitat. Please try again.',
                icon: 'error',
                confirmButtonText: 'Accept'
            });
        }
    });

    function updateButtonState() {
        // Verifica si todos los animales están dentro de un hábitat
        const allAnimalsInHabitats = Array.from(animals).every(animal => {
            return habitats.some(habitat => habitat.contains(animal));
        });

        checkButton.disabled = !allAnimalsInHabitats;
    }

    function resetGame() {
        // Mueve todos los animales de vuelta a sus posiciones originales
        animals.forEach(animal => {
            const originalPosition = originalPositions[animal.id];
            if (originalPosition) {
                // Si el animal está en un hábitat, primero lo eliminamos de ahí
                if (animal.parentNode !== originalPosition) {
                    animal.parentNode.removeChild(animal);
                }
                // Luego lo movemos de vuelta a la posición original
                originalPosition.appendChild(animal);
            }
        });
    
        // Actualiza el estado del botón de verificación
        updateButtonState();
    }

    // Inicializa el estado del botón
    updateButtonState();
});
