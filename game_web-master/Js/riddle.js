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

// Función para barajar un array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Lista de preguntas
const questions = [
    {
        question: " I live in the sea.\n I'm very intelligent and fast.\nI like jump and play. \nWho am i?",
        correct: "dolphin",
        options: [
            { src: '../Assets/Animales/Delfin.jpeg', name: 'dolphin' },
            { src: '../Assets/Animales/Orca.jpeg', name: 'orca' },
            { src: '../Assets/Animales/Tiburon.jpeg', name: 'shark' },
            { src: '../Assets/Animales/Rana.jpg', name: 'rana' }
        ]
    },
    {
        question: " I have eight arms and I'm quite smart. \nI live in the ocean's depths. \n I can go anywhere. \nWho am I?",
        correct: "octopus",
        options: [
            { src: '../Assets/Animales/Pescado.jpeg', name: 'fish' },
            { src: '../Assets/Animales/Pulpo.jpg', name: 'octopus' },
            { src: '../Assets/Animales/OstraMarina.jpeg', name: 'oyster' },
            { src: '../Assets/Animales/Hipopotamo.jpeg', name: 'hippo' }
        ]
    },
    {
        question: "In the water, I can move with silence. \nI have sharp teeth. \nI'm a big reptile. \nWho am I?",
        correct: "crocodile",
        options: [
            { src: '../Assets/Animales/Cocodrilo.jpeg', name: 'crocodile' },
            { src: '../Assets/Animales/Zorro.jpg', name: 'fox' },
            { src: '../Assets/Animales/EstrellaMar.jpeg', name: 'starfish' },
            { src: '../Assets/Animales/Serpiente.jpg', name: 'snake' }
        ]
    }, 
    {
        question: " I bark and play. \n I have 4 legs and a tail. \nI'm man's best friend. \nWho am I?",
        correct: "dog",
        options: [
            { src: '../Assets/Animales/Perro.jpeg', name: 'dog' },
            { src: '../Assets/Animales/Zorro.jpg', name: 'fox' },
            { src: '../Assets/Animales/Leon.jpeg', name: 'lion' },
            { src: '../Assets/Animales/Murcielago.jpeg', name: 'bat' }
        ]
    }, 
    {
        question: " I’m soft and agile. \nI catch mouse. \nI love to sleep over the armchair and i'm know for have 7 lives. \nWho am I?",
        correct: "cat",
        options: [
            { src: '../Assets/Animales/Gato.jpeg', name: 'cat' },
            { src: '../Assets/Animales/Raton.jpeg', name: 'mouse' },
            { src: '../Assets/Animales/Tucan.jpeg', name: 'toucan' },
            { src: '../Assets/Animales/Oveja.jpeg', name: 'oveja' }
        ]
    }, 
    {
        question: " I’m the king of the jungle. \nI'm strong and bold. \nmy roar is loud. \nI'm impressive. \nWho am I?",
        correct: "lion",
        options: [
            { src: '../Assets/Animales/Leon.jpeg', name: 'lion' },
            { src: '../Assets/Animales/Gallo.png', name: 'rooster' },
            { src: '../Assets/Animales/Rinoceronte.jpeg', name: 'rhinoceros' },
            { src: '../Assets/Animales/Mono.jpeg', name: 'monkey' }
        ]
    }, 
    {
        question: " I gallop fast and have great strong.\nI'm an animal farm and i'm pretty. \nWho am I?",
        correct: "horse",
        options: [
            { src: '../Assets/Animales/Caballo.jpg', name: 'horse' },
            { src: '../Assets/Animales/Pato.jpeg', name: 'duck' },
            { src: '../Assets/Animales/Foca.jpeg', name: 'seal' },
            { src: '../Assets/Animales/Elefante.jpeg', name: 'elephant' }
        ]
    }, 
    {
        question: " I like climb and jump between trees. \nmy color is brown and i have a long tail. \nWho is i?",
        correct: "monkey",
        options: [
            { src: '../Assets/Animales/Mono.jpeg', name: 'monkey' },
            { src: '../Assets/Animales/Pelicano.jpeg', name: 'pelican' },
            { src: '../Assets/Animales/OsoPanda.jpg', name: 'panda bear' },
            { src: '../Assets/Animales/Jirafa.jpg', name: 'giraffe' }
        ]
    }, 
    {
        question: " I give milk and i like eat grass. \nyou will see me in the farm and i have black and white spots. \nWho is i?",
        correct: "cow",
        options: [
            { src: '../Assets/Animales/Vaca.png', name: 'cow' },
            { src: '../Assets/Animales/Canario.jpeg', name: 'canary' },
            { src: '../Assets/Animales/Pollito.jpeg', name: 'stork' },
            { src: '../Assets/Animales/Nutria.jpeg', name: 'otter' }
        ]
    }, 
    {
        question: " I'm biggest with trunk and ears. \nI live in the jungle and the savannah. \nI have an amazing strong. \nWho is i?",
        correct: "elephant",
        options: [
            { src: '../Assets/Animales/Elefante.jpeg', name: 'elephant' },
            { src: '../Assets/Animales/Mariquita.jpeg', name: 'ladybug' },
            { src: '../Assets/Animales/Loro.jpeg', name: 'parrot' },
            { src: '../Assets/Animales/Conejo.jpeg', name: 'rabbit' }
        ]
    }, 
    {
        question: " I buzz around and make some honey. \nI work in a hive and fly between the flowers. \nWho is i?",
        correct: "bee",
        options: [
            { src: '../Assets/Animales/Abeja.jpg', name: 'bee' },
            { src: '../Assets/Animales/Mariquita.jpeg', name: 'ladybug' },
            { src: '../Assets/Animales/Pavo.jpeg', name: 'turkey' },
            { src: '../Assets/Animales/Mosca.jpeg', name: 'fly' }
        ]
    }, 
    {
        question: " i fly High in the sky. \nI have beak With sharp eyes. \nI spot from a great place. \nMy wings are wide and my talons are strong. \nWho is i?",
        correct: "eagle",
        options: [
            { src: '../Assets/Animales/Aguila.jpg', name: 'eagle' },
            { src: '../Assets/Animales/Lechuza.jpeg', name: 'own' },
            { src: '../Assets/Animales/Pelicano.jpeg', name: 'pelican' },
            { src: '../Assets/Animales/Guacamaya.jpeg', name: 'macaw' }
        ]
    }

];

let currentLevel = 0;

// Barajar las preguntas al inicio del juego
shuffle(questions);

function loadQuestion() {
    // Oculta el contenido de la pregunta y las opciones si el botón de reintento está visible
    if (document.getElementById('retry').style.display === 'block') {
        document.getElementById('question').style.display = 'none';
        document.getElementById('options').style.display = 'none';
        return;
    }

    if (currentLevel >= questions.length) {
        Swal.fire({
            title: 'Congratulations!',
            text: 'You have completed the game.',
            icon: 'success',
            confirmButtonText: 'Brilliant!'
        }).then(() => {
            // Muestra el botón de reintento
            document.getElementById('retry').style.display = 'block';
            // Oculta la pregunta y las opciones
            document.getElementById('question').style.display = 'none';
            document.getElementById('options').style.display = 'none';
        });
        document.getElementById('options').innerHTML = '';
        return;
    }

    // Muestra la pregunta y las opciones
    document.getElementById('question').style.display = 'block';
    document.getElementById('options').style.display = 'block';

    // Limpia el estado de respuesta de la pregunta anterior
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.remove('correct', 'incorrect');
    });

    const question = questions[currentLevel];
    document.getElementById('level').innerText = `Level ${currentLevel + 1}`;
    document.getElementById('question').innerText = question.question;

    // Barajar las opciones antes de mostrarlas
    shuffle(question.options);
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option';
        button.innerHTML = `<img src="${option.src}" alt="${option.name}">`;
        button.onclick = () => handleOptionClick(option.name, question.correct);
        optionsContainer.appendChild(button);
    });
}

function handleOptionClick(selected, correct) {
    const options = document.querySelectorAll('.option');
    let correctAnswered = false;

    options.forEach(option => {
        const img = option.querySelector('img');
        if (img.alt === selected) {
            if (selected === correct) {
                correctAnswered = true;
                Swal.fire({
                    title: 'Correct!',
                    text: 'Well done!',
                    icon: 'success',
                    confirmButtonText: 'Next Level'
                }).then(() => {
                    currentLevel++;
                    loadQuestion();
                });
            } else {
                Swal.fire({
                    title: 'Incorrect',
                    text: 'Try again.',
                    icon: 'error',
                    confirmButtonText: 'Retry'
                }).then(() => {
                    loadQuestion();
                });
            }
        }
    });
}

// Función para reiniciar el juego
function restartGame() {
    currentLevel = 0;
    shuffle(questions);
    document.getElementById('retry').style.display = 'none';
    document.getElementById('question').style.display = 'block';
    document.getElementById('options').style.display = 'block';
    loadQuestion();
}

// Configurar el botón de reintento
document.getElementById('retry').addEventListener('click', restartGame);

// Cargar la primera pregunta
loadQuestion();
