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

// script.js
const levels = [
    { image: '../Assets/Animales/imagenes_puzzle/serpiente_de_tierra_caliente.jpg', audio: '../Assets/Sonidos/caciones_puzzle/La Serpiente de Tierra Caliente en ingles.mp3' },
    { image: '../Assets/Animales/imagenes_puzzle/iguana.jpg', audio: '../Assets/Sonidos/caciones_puzzle/The Iguana And The Lazy Bear - Karaoke.mp3' },
    { image: '../Assets/Animales/imagenes_puzzle/Viejo_granjero.jpeg', audio: '../Assets/Sonidos/caciones_puzzle/Old MacDonald Had a Farm • Nursery Rhymes Song with Lyrics • Animated Cartoon for Kids (mp3cut.net).mp3' },
    { image: '../Assets/Animales/imagenes_puzzle/HICKORY_DICKORY_DOCK.jpg', audio: '../Assets/Sonidos/caciones_puzzle/HICKORY DICKORY DOCK En Inglés, Canciones infantiles (mp3cut.net).mp3' },
    { image: '../Assets/Animales/imagenes_puzzle/araña_que_trepa.jpg', audio: '../Assets/Sonidos/caciones_puzzle/ITSY BITSY SPIDER - Song for Children.mp3' },
    { image: '../Assets/Animales/imagenes_puzzle/cucaracha.png', audio: '../Assets/Sonidos/caciones_puzzle/La Cucaracha (English) Kids Sing-Along with Lyrics [SONG].mp3' },
    { image: '../Assets/Animales/imagenes_puzzle/5_patos.jpeg', audio: '../Assets/Sonidos/caciones_puzzle/CINCO PATITOS En Inglés, Canciones infantiles, Five Little Ducks (mp3cut.net).mp3' },
    { image: '../Assets/Animales/imagenes_puzzle/vaca_lola.jpg', audio: '../Assets/Sonidos/caciones_puzzle/LA VACA LOLA EN INGLES, Lola the cow (mp3cut.net).mp3' },
    { image: '../Assets/Animales/imagenes_puzzle/los_pollitos_dicen_piop_pio_pio.jpg', audio: '../Assets/Sonidos/caciones_puzzle/Los Pollitos Dicen Pio Pio Pio - En Inglés.mp3' },
    { image: '../Assets/Animales/imagenes_puzzle/down_in_the_farm.jpeg', audio: '../Assets/Sonidos/caciones_puzzle/Down on the Farm Song! Fun Learning SONG for Kids!.mp3' },
    { image: '../Assets/Animales/imagenes_puzzle/cucu.jpeg', audio: '../Assets/Sonidos/caciones_puzzle/Cuckoo a frog was singing - Nursery Rhymes - Toobys.mp3' },
    { image: '../Assets/Animales/imagenes_puzzle/el_pollito_pio.jpg', audio: '../Assets/Sonidos/caciones_puzzle/The little chick cheep HD Lyrics Text.mp3' },
    // Añade más niveles aquí...
];

let remainingLevels = [];
let currentLevelIndex = -1; // Índice del nivel actual
const gridSize = 4;
let selectedPiece = null; // Para rastrear la pieza seleccionada
let audioElement = document.createElement('audio');
audioElement.id = 'puzzle-audio';
document.body.appendChild(audioElement);

const gridElement = document.getElementById('puzzle-grid');
const playButton = document.getElementById('play-btn');
const pauseButton = document.getElementById('pause-btn');
const shuffleButton = document.getElementById('shuffle-btn');
const restartButton = document.getElementById('restart-btn');
const levelDisplay = document.getElementById('level-display'); // Elemento para mostrar el nivel actual

// Baraja el arreglo de niveles
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Inicializa y baraja los niveles
function initializeLevels() {
    remainingLevels = [...levels]; // Copia el arreglo de niveles
    shuffleArray(remainingLevels); // Baraja los niveles
}

function loadLevel() {
    if (remainingLevels.length === 0) {
        Swal.fire({ 
            title: 'Congratulations!',
            text: 'You have completed all levels.',
            icon: 'info',
            confirmButtonText: 'OK'
        }).then(() => {
            showRestartButton(); // Muestra el botón de reinicio
        });
        return;
    }

    // Actualiza el índice del nivel actual y carga el siguiente nivel
    currentLevelIndex = levels.length - remainingLevels.length;
    const level = remainingLevels.shift(); // Obtiene y elimina el primer nivel de la lista
    if (level) {
        audioElement.src = level.audio;
        createPuzzleGrid(level.image);
        playAudio(); // Reproduce el audio automáticamente
        updateLevelDisplay(); // Actualiza la visualización del nivel actual
    }
}

function createPuzzleGrid(imageSrc) {
    gridElement.innerHTML = '';
    for (let i = 0; i < gridSize * gridSize; i++) {
        const piece = document.createElement('div');
        piece.className = 'puzzle-piece';
        piece.style.backgroundImage = `url(${imageSrc})`;
        piece.style.backgroundSize = `${gridSize * 100}px ${gridSize * 100}px`; // Ajustar el tamaño del fondo
        piece.style.backgroundPosition = `${-(i % gridSize) * 100}px ${-(Math.floor(i / gridSize)) * 100}px`;
        piece.dataset.index = i;
        piece.dataset.originalIndex = i; // Guarda el índice original
        piece.draggable = true;
        piece.addEventListener('dragstart', handleDragStart);
        piece.addEventListener('dragover', handleDragOver);
        piece.addEventListener('drop', handleDrop);
        piece.addEventListener('click', handlePieceClick);
        gridElement.appendChild(piece);
    }
    shufflePuzzle();
}

function handleDragStart(e) {
    if (selectedPiece) {
        e.dataTransfer.setData('text/plain', e.target.dataset.index);
    } else {
        e.preventDefault(); // No permitir arrastrar si no hay pieza seleccionada
    }
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDrop(e) {
    e.preventDefault();
    if (selectedPiece) {
        const fromIndex = e.dataTransfer.getData('text/plain');
        const toPiece = e.target;
        if (toPiece.classList.contains('puzzle-piece')) {
            const fromPiece = document.querySelector(`.puzzle-piece[data-index="${fromIndex}"]`);
            swapPieces(fromPiece, toPiece);
            deselectPiece(); // Deselecciona después de intercambiar
            setTimeout(checkPuzzleSolved, 100); // Verifica si el puzzle está resuelto después de un pequeño retraso
        }
    }
}

function handlePieceClick(e) {
    const clickedPiece = e.target;
    if (clickedPiece.classList.contains('puzzle-piece')) {
        if (selectedPiece) {
            if (selectedPiece !== clickedPiece) {
                swapPieces(selectedPiece, clickedPiece);
                deselectPiece(); // Deselecciona después de intercambiar
                setTimeout(checkPuzzleSolved, 100); // Verifica si el puzzle está resuelto después de un pequeño retraso
            }
        } else {
            selectPiece(clickedPiece);
        }
    }
}

function selectPiece(piece) {
    deselectPiece(); // Asegúrate de que solo haya una pieza seleccionada a la vez
    selectedPiece = piece;
    piece.classList.add('selected-piece');
}

function deselectPiece() {
    if (selectedPiece) {
        selectedPiece.classList.remove('selected-piece');
        selectedPiece = null;
    }
}

function swapPieces(piece1, piece2) {
    const tempIndex = piece1.dataset.index;
    piece1.dataset.index = piece2.dataset.index;
    piece2.dataset.index = tempIndex;
    updatePiecePosition(piece1);
    updatePiecePosition(piece2);
}

function updatePiecePosition(piece) {
    const index = piece.dataset.index;
    piece.style.backgroundPosition = `${-(index % gridSize) * 100}px ${-(Math.floor(index / gridSize)) * 100}px`;
}

function shufflePuzzle() {
    const pieces = Array.from(gridElement.children);
    pieces.forEach(piece => {
        const randomIndex = Math.floor(Math.random() * pieces.length);
        const randomPiece = pieces[randomIndex];
        swapPieces(piece, randomPiece);
    });
    Swal.fire({
        title: 'Mixed puzzle!',
        text: 'The puzzle has been randomly mixed.',
        icon: 'info',
        confirmButtonText: 'OK'
    });
}

function checkPuzzleSolved() {
    const pieces = Array.from(gridElement.children);
    const isSolved = pieces.every(piece => {
        return parseInt(piece.dataset.index) === parseInt(piece.dataset.originalIndex);
    });

    if (isSolved) {
        Swal.fire({
            title: 'Puzzle Complete!',
            text: 'You have completed the level. Moving on to the next one...',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            loadLevel(); // Carga un nuevo nivel aleatorio
        });
    }
}

function toggleAudio(action) {
    if (action === 'play') {
        audioElement.play();
        playButton.style.display = 'none';
        pauseButton.style.display = 'inline-block';
    } else if (action === 'pause') {
        audioElement.pause();
        playButton.style.display = 'inline-block';
        pauseButton.style.display = 'none';
    }
}

// Reproduce el audio automáticamente y ajusta los botones
function playAudio() {
    audioElement.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline-block';
}

// Maneja el evento cuando el audio termina
audioElement.addEventListener('ended', () => {
    playButton.style.display = 'inline-block';
    pauseButton.style.display = 'none';
});

function updateLevelDisplay() {
    if (levelDisplay) {
        levelDisplay.textContent = `Level : ${currentLevelIndex + 1}`; // Muestra el índice del nivel actual + 1
    }
}

function showRestartButton() {
    restartButton.style.display = 'inline-block'; // Muestra el botón de reinicio
}

function restartGame() {
    // Restaura la lista de niveles
    initializeLevels(); // Baraja los niveles
    //remainingLevels = [...levels];
    currentLevelIndex = -1; // Restablece el índice del nivel actual
    restartButton.style.display = 'none'; // Oculta el botón de reinicio
    loadLevel(); // Carga el primer nivel
}

playButton.addEventListener('click', () => toggleAudio('play'));
pauseButton.addEventListener('click', () => toggleAudio('pause'));
shuffleButton.addEventListener('click', shufflePuzzle);
restartButton.addEventListener('click', restartGame); // Maneja el clic en el botón de reinicio

// Inicializa el puzzle
initializeLevels(); // Inicializa y baraja los niveles
loadLevel();

