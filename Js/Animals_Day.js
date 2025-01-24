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

const animals = {
    aquatic: [
        { name: 'Whale', image: '../Assets/Animales/Ballena.jpeg', sounds: ['../Assets/Sonidos/Ballena.mp3', '../Assets/Sonidos _Pronunciacion/whale.mp3'] },
        { name: 'Dolphin', image: '../Assets/Animales/Delfin.jpeg', sounds: ['../Assets/Sonidos/Delfin.mp3', '../Assets/Sonidos _Pronunciacion/dolphin.mp3'] },
        { name: 'Octopus', image: '../Assets/Animales/Pulpo.jpg', sounds: ['../Assets/Sonidos/Pulpo.wav', '../Assets/Sonidos _Pronunciacion/octopus.mp3'] },
        { name: 'Seahorse', image: '../Assets/Animales/CaballoMar.jpg', sounds: ['../Assets/Sonidos/CaballoMar.mp3', '../Assets/Sonidos _Pronunciacion/seahorse.mp3'] },
        { name: 'Crab', image: '../Assets/Animales/Cangrejo.png', sounds: ['../Assets/Sonidos/Cangrejo.mp3', '../Assets/Sonidos _Pronunciacion/crab.mp3'] },
        { name: 'Jellyfish', image: '../Assets/Animales/Medusa.jpeg', sounds: ['../Assets/Sonidos/Medusa.mp3', '../Assets/Sonidos _Pronunciacion/jellyfish.mp3'] },
        { name: 'Turtle', image: '../Assets/Animales/Tortuga.png', sounds: ['../Assets/Sonidos/Tortuga.mp3', '../Assets/Sonidos _Pronunciacion/turtle.mp3'] },
        { name: 'Seal', image: '../Assets/Animales/Foca.jpeg', sounds: ['../Assets/Sonidos/Foca.mp3', '../Assets/Sonidos _Pronunciacion/seal.mp3'] },
        { name: 'Orca', image: '../Assets/Animales/Orca.jpeg', sounds: ['../Assets/Sonidos/Orca.mp3', '../Assets/Sonidos _Pronunciacion/orca.mp3'] },
        { name: 'Squid', image: '../Assets/Animales/Calamar.jpeg', sounds: ['../Assets/Sonidos/Langosta.mp3', '../Assets/Sonidos _Pronunciacion/squid.mp3'] },
        { name: 'Shark', image: '../Assets/Animales/Tiburon.jpeg', sounds: ['../Assets/Sonidos/Tiburon.mp3', '../Assets/Sonidos _Pronunciacion/shark.mp3'] },
        { name: 'Stingray', image: '../Assets/Animales/Matarraya.jpg', sounds: ['../Assets/Sonidos/Mantarraya.mp3', '../Assets/Sonidos _Pronunciacion/stingray.mp3']},
        { name: 'Penguin', image: '../Assets/Animales/Pinguino.jpeg', sounds: ['../Assets/Sonidos/Pinguino.mp3', '../Assets/Sonidos _Pronunciacion/penguin.mp3'] },
        { name: 'Tuna', image: '../Assets/Animales/Atun.jpg', sounds: ['../Assets/Sonidos/Atun.mp3', '../Assets/Sonidos _Pronunciacion/tuna.mp3'] },
        { name: 'Sea lion', image: '../Assets/Animales/LeonMarino.jpeg', sounds: ['../Assets/Sonidos/LeonMarino.mp3', '../Assets/Sonidos _Pronunciacion/sealion.mp3'] },
        { name: 'Fish', image: '../Assets/Animales/Pescado.jpeg', sounds: ['../Assets/Sonidos/Pescado.mp3', '../Assets/Sonidos _Pronunciacion/fish.mp3'] },
        { name: 'Starfish', image: '../Assets/Animales/EstrellaMar.jpeg', sounds: ['../Assets/Sonidos/EstrellaMar.mp3', '../Assets/Sonidos _Pronunciacion/starfish.mp3'] },
        { name: 'Otter', image: '../Assets/Animales/Nutria.jpeg', sounds: ['../Assets/Sonidos/Nutria.mp3', '../Assets/Sonidos _Pronunciacion/otter.mp3'] },
        { name: 'Frog', image: '../Assets/Animales/Rana.jpg', sounds: ['../Assets/Sonidos/Rana.mp3', '../Assets/Sonidos _Pronunciacion/frog.mp3'] },
        { name: 'Oyster', image: '../Assets/Animales/OstraMarina.jpeg', sounds: ['../Assets/Sonidos/OstraMar.mp3', '../Assets/Sonidos _Pronunciacion/oyster.mp3'] },
        { name: 'Crocodile', image: '../Assets/Animales/Cocodrilo.jpeg', sounds: ['../Assets/Sonidos/Cocodrilo.mp3', '../Assets/Sonidos _Pronunciacion/crocodile.mp3'] }
    ],
    terrestrial: [
        { name: 'Horse', image: '../Assets/Animales/Caballo.jpg', sounds: ['../Assets/Sonidos/Caballo.mp3', '../Assets/Sonidos _Pronunciacion/hoarse.mp3'] },
        { name: 'Giraffe', image: '../Assets/Animales/Jirafa.jpg', sounds: ['../Assets/Sonidos/Jirafa.mp3', '../Assets/Sonidos _Pronunciacion/giraffe.mp3'] },
        { name: 'Elephant', image: '../Assets/Animales/Elefante.jpeg', sounds: ['../Assets/Sonidos/Elefante.mp3', '../Assets/Sonidos _Pronunciacion/elephant.mp3'] },
        { name: 'Pig', image: '../Assets/Animales/Cerdo.jpeg', sounds: ['../Assets/Sonidos/Cerdo.mp3', '../Assets/Sonidos _Pronunciacion/pig.mp3'] },
        { name: 'Panda', image: '../Assets/Animales/OsoPanda.jpg', sounds: ['../Assets/Sonidos/Panda.mp3', '../Assets/Sonidos _Pronunciacion/panda.mp3'] },
        { name: 'Lion', image: '../Assets/Animales/Leon.jpeg', sounds: ['../Assets/Sonidos/Leon.mp3', '../Assets/Sonidos _Pronunciacion/lion.mp3'] },
        { name: 'Sheep', image: '../Assets/Animales/Oveja.jpeg', sounds: ['../Assets/Sonidos/Oveja.mp3', '../Assets/Sonidos _Pronunciacion/sheep.mp3'] },
        { name: 'Hippopotamus', image: '../Assets/Animales/Hipopotamo.jpeg', sounds: ['../Assets/Sonidos/Hipopotamo.mp3', '../Assets/Sonidos _Pronunciacion/hippopotamus.mp3'] },
        { name: 'Rhinoceros', image: '../Assets/Animales/Rinoceronte.jpeg', sounds: ['../Assets/Sonidos/Rinoceronte.mp3', '../Assets/Sonidos _Pronunciacion/rhinoceros.mp3'] },
        { name: 'Zebra', image: '../Assets/Animales/Cebra.jpeg', sounds: ['../Assets/Sonidos/Cebra.mp3', '../Assets/Sonidos _Pronunciacion/zebra.mp3'] },
        { name: 'Hen', image: '../Assets/Animales/Gallina.jpeg', sounds: ['../Assets/Sonidos/Gallina.mp3', '../Assets/Sonidos _Pronunciacion/hen.mp3'] },
        { name: 'Rabbit', image: '../Assets/Animales/Conejo.jpeg', sounds: ['../Assets/Sonidos/Conejo.mp3', '../Assets/Sonidos _Pronunciacion/rabbit.mp3'] },
        { name: 'Dog', image: '../Assets/Animales/Perro.jpeg', sounds: ['../Assets/Sonidos/Perro.mp3', '../Assets/Sonidos _Pronunciacion/dog.mp3'] },
        { name: 'Cat', image: '../Assets/Animales/Gato.jpeg', sounds: ['../Assets/Sonidos/Gato.mp3', '../Assets/Sonidos _Pronunciacion/cat.mp3'] },
        { name: 'Fox', image: '../Assets/Animales/Zorro.jpg', sounds: ['../Assets/Sonidos/Zorro.mp3', '../Assets/Sonidos _Pronunciacion/fox.mp3'] },
        { name: 'Monkey', image: '../Assets/Animales/Mono.jpeg', sounds: ['../Assets/Sonidos/Mono.mp3', '../Assets/Sonidos _Pronunciacion/monkey.mp3'] },
        { name: 'Mouse', image: '../Assets/Animales/Raton.jpeg', sounds: ['../Assets/Sonidos/Raton.mp3', '../Assets/Sonidos _Pronunciacion/mouse.mp3'] },
        { name: 'Rooster', image: '../Assets/Animales/Gallo.png', sounds: ['../Assets/Sonidos/Gallo.mp3', '../Assets/Sonidos _Pronunciacion/rooster.mp3'] },
        { name: 'Cow', image: '../Assets/Animales/Vaca.png', sounds: ['../Assets/Sonidos/Vaca.mp3', '../Assets/Sonidos _Pronunciacion/cow.mp3'] },
        { name: 'Chick', image: '../Assets/Animales/Pollito.jpeg', sounds: ['../Assets/Sonidos/Pollito.mp3', '../Assets/Sonidos _Pronunciacion/chick.mp3'] },
        { name: 'Snake', image: '../Assets/Animales/Serpiente.jpg', sounds: ['../Assets/Sonidos/Serpiente.mp3', '../Assets/Sonidos _Pronunciacion/snake.mp3'] }
    ],
    air: [
        { name: 'Canary', image: '../Assets/Animales/Canario.jpeg', sounds: ['../Assets/Sonidos/Canario.mp3', '../Assets/Sonidos _Pronunciacion/canary.mp3'] },
        { name: 'Eagle', image: '../Assets/Animales/Aguila.jpg', sounds: ['../Assets/Sonidos/Aguila.mp3', '../Assets/Sonidos _Pronunciacion/eagle.mp3'] },
        { name: 'Macaw', image: '../Assets/Animales/Guacamaya.jpeg', sounds: ['../Assets/Sonidos/Guacamaya.mp3', '../Assets/Sonidos _Pronunciacion/macaw.mp3'] },
        { name: 'Cricket', image: '../Assets/Animales/Grillo.jpeg', sounds: ['../Assets/Sonidos/Grillo.mp3', '../Assets/Sonidos _Pronunciacion/cricket.mp3'] },
        { name: 'Ladybug', image: '../Assets/Animales/Mariquita.jpeg', sounds: ['../Assets/Sonidos/Mariquita.mp3', '../Assets/Sonidos _Pronunciacion/ladybug.mp3'] },
        { name: 'Dragonfly', image: '../Assets/Animales/Libelula.jpeg', sounds: ['../Assets/Sonidos/Libelula.mp3', '../Assets/Sonidos _Pronunciacion/dragonfly.mp3'] },
        { name: 'Bee', image: '../Assets/Animales/Abeja.jpg', sounds: ['../Assets/Sonidos/Abeja.mp3', '../Assets/Sonidos _Pronunciacion/bee.mp3'] },
        { name: 'Butterfly', image: '../Assets/Animales/Mariposa.jpeg', sounds: ['../Assets/Sonidos/Mariposa.mp3', '../Assets/Sonidos _Pronunciacion/butterfly.mp3'] },
        { name: 'Fly', image: '../Assets/Animales/Mosca.jpeg', sounds: ['../Assets/Sonidos/Mosca.mp3', '../Assets/Sonidos _Pronunciacion/fly.mp3'] },
        { name: 'Bat', image: '../Assets/Animales/Murcielago.jpeg', sounds: ['../Assets/Sonidos/Murcielago.mp3', '../Assets/Sonidos _Pronunciacion/bat.mp3'] },
        { name: 'Flamingo', image: '../Assets/Animales/Flamenco.jpeg', sounds: ['../Assets/Sonidos/Flamenco.mp3', '../Assets/Sonidos _Pronunciacion/flamingo.mp3'] },
        { name: 'Duck', image: '../Assets/Animales/Pato.jpeg', sounds: ['../Assets/Sonidos/Pato.mp3', '../Assets/Sonidos _Pronunciacion/duck.mp3'] },
        { name: 'Hummingbird', image: '../Assets/Animales/Colibri.jpeg', sounds: ['../Assets/Sonidos/Colibri.mp3', '../Assets/Sonidos _Pronunciacion/hummingbird.mp3'] },
        { name: 'Pelican', image: '../Assets/Animales/Pelicano.jpeg', sounds: ['../Assets/Sonidos/Pelicano.mp3', '../Assets/Sonidos _Pronunciacion/pelican.mp3'] },
        { name: 'Toucan', image: '../Assets/Animales/Tucan.jpeg', sounds: ['../Assets/Sonidos/Tucan.mp3', '../Assets/Sonidos _Pronunciacion/toucan.mp3'] },
        { name: 'Pigeon', image: '../Assets/Animales/Paloma.jpg', sounds: ['../Assets/Sonidos/Paloma.mp3', '../Assets/Sonidos _Pronunciacion/pigeon.mp3'] },
        { name: 'Owl', image: '../Assets/Animales/Lechuza.jpeg', sounds: ['../Assets/Sonidos/Lechuza.mp3', '../Assets/Sonidos _Pronunciacion/owl.mp3'] },
        { name: 'Turkey', image: '../Assets/Animales/Pavo.jpeg', sounds: ['../Assets/Sonidos/Pavo.mp3', '../Assets/Sonidos _Pronunciacion/turkey.mp3'] },
        { name: 'Parrot', image: '../Assets/Animales/Loro.jpeg', sounds: ['../Assets/Sonidos/Loro.mp3', '../Assets/Sonidos _Pronunciacion/parrot.mp3'] },
        { name: 'Stork', image: '../Assets/Animales/Ciguena.jpeg', sounds: ['../Assets/Sonidos/Cigueña.mp3', '../Assets/Sonidos _Pronunciacion/stork.mp3'] },
        { name: 'Nightingale', image: '../Assets/Animales/Risuenor.jpeg', sounds: ['../Assets/Sonidos/Ruiseñor.mp3', '../Assets/Sonidos _Pronunciacion/nightingale.mp3'] }
    ]
};

let currentAudio = null; // Variable para almacenar el audio actualmente en reproducción

function showCategory(category) {
    const container = document.getElementById('cards-container');
    container.innerHTML = '';
    animals[category].forEach(animal => {
        const card = document.createElement('div');
        card.classList.add('card');

        // Crear botones de sonido
        const iconButtonHTML = `<button class="icon-button" onclick="playSound('${animal.sounds[0]}')">
                                    <i class="fa-solid fa-volume-up"></i>
                                </button>`;
        const textButtonHTML = `<button class="text-button" onclick="playSound('${animal.sounds[1]}')">Pronunciation</button>`;
        const pauseButtonHTML = `<button class="pause-button" onclick="pauseAllSounds()">
                                    <i class="fa-solid fa-pause"></i></button>`;

        card.innerHTML = `
            <div class="image-container">
                <img src="${animal.image}" alt="${animal.name}" onerror="this.onerror=null; this.src='default-image.jpg';">
            </div>
            <div class="card-content">
                <h3>${animal.name}</h3>
                <div class="button-group">
                    ${iconButtonHTML}
                    ${textButtonHTML}
                    ${pauseButtonHTML}
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function showAllAnimals() {
    const container = document.getElementById('cards-container');
    container.innerHTML = '';
    Object.keys(animals).forEach(category => {
        animals[category].forEach(animal => {
            const card = document.createElement('div');
            card.classList.add('card');

            const iconButtonHTML = `<button class="icon-button" onclick="playSound('${animal.sounds[0]}')"><i class="fa-solid fa-volume-up"></i></button>`;
            const textButtonHTML = `<button class="text-button" onclick="playSound('${animal.sounds[1]}')">Pronunciation</button>`;
            const pauseButtonHTML = `<button class="pause-button" onclick="pauseAllSounds()"><i class="fa-solid fa-pause"></i></button>`;

            card.innerHTML = `
                <div class="image-container">
                    <img src="${animal.image}" alt="${animal.name}" onerror="this.onerror=null; this.src='default-image.jpg';">
                </div>
                <div class="card-content">
                    <h3>${animal.name}</h3>
                    ${iconButtonHTML}
                    ${textButtonHTML}
                    ${pauseButtonHTML}
                </div>
            `;
            container.appendChild(card);
        });
    });
}

function playSound(soundUrl) {
    if (currentAudio) {
        currentAudio.pause();  // Pausar el audio actual
        currentAudio.currentTime = 0;  // Reiniciar el audio al inicio
        if (currentAudio.src === soundUrl) {
            currentAudio = null; // Si es el mismo botón, no reproducirlo de nuevo
            return;
        }
    }
    
    const audio = new Audio(soundUrl);
    audio.play().catch(error => {
        console.error("Error al reproducir el sonido:", error);
        alert("No se pudo reproducir el sonido.");
    });
    currentAudio = audio; // Guardar el audio actual
}

function preloadSounds() {
    Object.keys(animals).forEach(category => {
        animals[category].forEach(animal => {
            animal.sounds.forEach(sound => {
                const audio = new Audio(sound);
                audio.preload = 'auto';
            });
        });
    });
}

function pauseAllSounds() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}

window.onload = () => {
    showAllAnimals();
    preloadSounds();
};