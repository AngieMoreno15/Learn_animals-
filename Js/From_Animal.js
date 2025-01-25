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

        animal.addEventListener('click', () => {
            // Mostrar los hábitats para seleccionar
            habitats.forEach(habitat => {
                habitat.classList.remove('selected');  // Quitar la clase 'selected' de los hábitats previamente seleccionados
            });

            animal.classList.add('selected');  // Marcar el animal como seleccionado
        });
    });

    habitats.forEach(habitat => {
        habitat.addEventListener('click', (e) => {
            // Si no hay animal seleccionado, no hacemos nada
            const selectedAnimal = document.querySelector('.animal.selected');
            if (!selectedAnimal) return;

            // Si el hábitat es el correcto para el animal seleccionado, lo colocamos ahí
            const habitatType = habitat.dataset.habitat;
            const animalType = selectedAnimal.dataset.animal;
            const allowedAnimals = habitatType === 'selva'
                ? ['panda', 'lion', 'elephant', 'monkey', 'toucan', 'zebra', 'snake', 'hippo', 'bat', 'flamingo', 'giraffe', 'crocodile']
                : ['horse', 'canary', 'pig', 'chicken', 'cat', 'duck', 'dog', 'rooster', 'chick', 'sheep', 'cow', 'rabbit'];

            if (allowedAnimals.includes(animalType)) {
                habitat.appendChild(selectedAnimal);  // Colocamos el animal en el hábitat
            } else {
                Swal.fire({
                    title: 'Error',
                    text: 'This animal does not belong in this habitat.',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                });
            }

            selectedAnimal.classList.remove('selected');  // Desmarcar el animal
            updateButtonState();
        });
    });

    checkButton.addEventListener('click', () => {
        const allAnimalsInHabitats = Array.from(animals).every(animal => {
            return Array.from(habitats).some(habitat => habitat.contains(animal));
        });

        if (!allAnimalsInHabitats) {
            Swal.fire({
                title: 'Attention!',
                text: 'You must place all the animals in a habitat.',
                icon: 'warning',
                confirmButtonText: 'Accept'
            });
            return;
        }

        let correct = true;

        habitats.forEach(habitat => {
            const habitatType = habitat.dataset.habitat;
            const allowedAnimals = habitatType === 'selva'
                ? ['panda', 'lion', 'elephant', 'monkey', 'toucan', 'zebra', 'snake', 'hippo', 'bat', 'flamingo', 'giraffe', 'crocodile']
                : ['horse', 'canary', 'pig', 'chicken', 'cat', 'duck', 'dog', 'rooster', 'chick', 'sheep', 'cow', 'rabbit'];

            habitat.querySelectorAll('.animal').forEach(animal => {
                if (!allowedAnimals.includes(animal.dataset.animal)) {
                    correct = false;
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
                denyButtonColor: '#3085d6',
            }).then((result) => {
                if (result.isConfirmed) {
                    // Acción para el botón "Aceptar"
                } else if (result.isDenied) {
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
        const allAnimalsInHabitats = Array.from(animals).every(animal => {
            return habitats.some(habitat => habitat.contains(animal));
        });

        checkButton.disabled = !allAnimalsInHabitats;
    }

    function resetGame() {
        animals.forEach(animal => {
            const originalPosition = originalPositions[animal.id];
            if (originalPosition) {
                if (animal.parentNode !== originalPosition) {
                    animal.parentNode.removeChild(animal);
                }
                originalPosition.appendChild(animal);
            }
        });
    
        updateButtonState();
    }

    updateButtonState();
});
