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

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const videoCard = document.getElementById('video-card');
    const videoPlayer = document.getElementById('video-player');
    const closeBtn = document.getElementById('close-btn');

    cards.forEach(card => {
        const titleElement = card.querySelector('.card-title');
        if (!titleElement || !titleElement.textContent.trim()) {
            console.error('Una tarjeta no tiene un título válido:', card);
        } else {
            card.querySelector('button').addEventListener('click', function() {
                const videoSrc = card.getAttribute('data-video');
                videoPlayer.querySelector('source').src = videoSrc;
                videoPlayer.load();
                videoCard.classList.remove('hidden');
                videoPlayer.play(); // Opcionalmente reproducir el video automáticamente
            });
        }
    });

    closeBtn.addEventListener('click', function() {
        videoCard.classList.add('hidden');
        videoPlayer.pause();
        videoPlayer.currentTime = 0; // Reiniciar video al cerrar
    });

    // Opcionalmente cerrar la tarjeta de video si se hace clic fuera de ella
    videoCard.addEventListener('click', function(e) {
        if (e.target === videoCard) {
            videoCard.classList.add('hidden');
            videoPlayer.pause();
            videoPlayer.currentTime = 0; // Reiniciar video al cerrar
        }
    });
});
