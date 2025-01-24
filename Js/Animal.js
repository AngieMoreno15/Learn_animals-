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

const levels = [
    { name: "Dog", sound: "../Assets/Sonidos _Pronunciacion/dog.mp3", images: ["../Assets/Animales/Aguila.jpg", "../Assets/Animales/Perro.jpeg", "../Assets/Animales/Grillo.jpeg", "../Assets/Animales/Gallo.png", "../Assets/Animales/Risuenor.jpeg", "../Assets/Animales/Matarraya.jpg", "../Assets/Animales/Paloma.jpg", "../Assets/Animales/Colibri.jpeg"], correctImage: "../Assets/Animales/Perro.jpeg" },
    { name: "Cat", sound: "../Assets/Sonidos _Pronunciacion/cat.mp3", images: ["../Assets/Animales/Gato.jpeg", "../Assets/Animales/Leon.jpeg", "../Assets/Animales/Hipopotamo.jpeg", "../Assets/Animales/Zorro.jpg", "../Assets/Animales/Guacamaya.jpeg", "../Assets/Animales/Abeja.jpg", "../Assets/Animales/Mosca.jpeg", "../Assets/Animales/Foca.jpeg"], correctImage: "../Assets/Animales/Gato.jpeg" },
    { name: "whale", sound: "../Assets/Sonidos _Pronunciacion/whale.mp3", images: ["../Assets/Animales/Pulpo.jpg", "../Assets/Animales/Ballena.jpeg", "../Assets/Animales/Gallina.jpeg", "../Assets/Animales/Murcielago.jpeg", "../Assets/Animales/Pavo.jpeg", "../Assets/Animales/CaballoMar.jpg", "../Assets/Animales/EstrellaMar.jpeg", "../Assets/Animales/Atun.jpg"], correctImage: "../Assets/Animales/Ballena.jpeg" },
    { name: "dolphin", sound: "../Assets/Sonidos _Pronunciacion/dolphin.mp3", images: ["../Assets/Animales/Matarraya.jpg", "../Assets/Animales/Hipopotamo.jpeg", "../Assets/Animales/Delfin.jpeg", "../Assets/Animales/Abeja.jpg", "../Assets/Animales/Guacamaya.jpeg", "../Assets/Animales/Rana.jpg", "../Assets/Animales/LeonMarino.jpeg", "../Assets/Animales/Foca.jpeg"], correctImage: "../Assets/Animales/Delfin.jpeg" },
    { name: "octopus", sound: "../Assets/Sonidos _Pronunciacion/octopus.mp3", images: ["../Assets/Animales/Pulpo.jpg", "../Assets/Animales/Risuenor.jpeg", "../Assets/Animales/Foca.jpeg", "../Assets/Animales/Raton.jpeg", "../Assets/Animales/Pescado.jpeg", "../Assets/Animales/Tortuga.png", "../Assets/Animales/Tiburon.jpeg", "../Assets/Animales/Calamar.jpeg"], correctImage: "../Assets/Animales/Pulpo.jpg" },
    { name: "seahorse", sound: "../Assets/Sonidos _Pronunciacion/seahorse.mp3", images: ["../Assets/Animales/CaballoMar.jpg", "../Assets/Animales/Medusa.jpeg", "../Assets/Animales/Pinguino.jpeg", "../Assets/Animales/Paloma.jpg", "../Assets/Animales/Orca.jpeg", "../Assets/Animales/Leon.jpeg", "../Assets/Animales/Pollito.jpeg", "../Assets/Animales/Rana.jpg"], correctImage: "../Assets/Animales/CaballoMar.jpg" },
    { name: "crab", sound: "../Assets/Sonidos _Pronunciacion/crab.mp3", images: ["../Assets/Animales/Cangrejo.png", "../Assets/Animales/Ciguena.jpeg", "../Assets/Animales/Mariposa.jpeg", "../Assets/Animales/Matarraya.jpg", "../Assets/Animales/Atun.jpg", "../Assets/Animales/Flamenco.jpeg", "../Assets/Animales/OstraMarina.jpeg", "../Assets/Animales/Pulpo.jpg"], correctImage: "../Assets/Animales/Cangrejo.png" },
    { name: "jellyfish", sound: "../Assets/Sonidos _Pronunciacion/jellyfish.mp3", images: ["../Assets/Animales/OsoPanda.jpg", "../Assets/Animales/Medusa.jpeg", "../Assets/Animales/Mono.jpeg", "../Assets/Animales/Oveja.jpeg", "../Assets/Animales/Leon.jpeg", "../Assets/Animales/Abeja.jpg", "../Assets/Animales/Mosca.jpeg", "../Assets/Animales/Foca.jpeg"], correctImage: "../Assets/Animales/Medusa.jpeg" },    
    { name: "turtle", sound: "../Assets/Sonidos _Pronunciacion/turtle.mp3", images: ["../Assets/Animales/Tortuga.png", "../Assets/Animales/Tiburon.jpeg", "../Assets/Animales/Atun.jpg", "../Assets/Animales/Cangrejo.png", "../Assets/Animales/Libelula.jpeg", "../Assets/Animales/Pelicano.jpeg", "../Assets/Animales/Rana.jpg", "../Assets/Animales/Ciguena.jpeg"], correctImage: "../Assets/Animales/Tortuga.png" },
    { name: "seal", sound: "../Assets/Sonidos _Pronunciacion/seal.mp3", images: ["../Assets/Animales/Foca.jpeg", "../Assets/Animales/Mariquita.jpeg", "../Assets/Animales/Hipopotamo.jpeg", "../Assets/Animales/Tortuga.png", "../Assets/Animales/Mosca.jpeg", "../Assets/Animales/Nutria.jpeg", "../Assets/Animales/OstraMarina.jpeg", "../Assets/Animales/Cocodrilo.jpeg"], correctImage: "../Assets/Animales/Foca.jpeg" },
    { name: "orca", sound: "../Assets/Sonidos _Pronunciacion/orca.mp3", images: ["../Assets/Animales/Orca.jpeg", "../Assets/Animales/Medusa.jpeg", "../Assets/Animales/Mariposa.jpeg", "../Assets/Animales/Serpiente.jpg", "../Assets/Animales/Guacamaya.jpeg", "../Assets/Animales/Abeja.jpg", "../Assets/Animales/Mosca.jpeg", "../Assets/Animales/Foca.jpeg"], correctImage: "../Assets/Animales/Orca.jpeg" },
    { name: "squid", sound: "../Assets/Sonidos _Pronunciacion/squid.mp3", images: ["../Assets/Animales/Calamar.jpeg", "../Assets/Animales/LeonMarino.jpeg", "../Assets/Animales/Cangrejo.png", "../Assets/Animales/OstraMarina.jpeg", "../Assets/Animales/CaballoMar.jpg", "../Assets/Animales/Pulpo.jpg", "../Assets/Animales/Nutria.jpeg", "../Assets/Animales/Loro.jpeg"], correctImage: "../Assets/Animales/Calamar.jpeg" },
    { name: "shark", sound: "../Assets/Sonidos _Pronunciacion/shark.mp3", images: ["../Assets/Animales/Tiburon.jpeg", "../Assets/Animales/Rana.jpg", "../Assets/Animales/Pinguino.jpeg", "../Assets/Animales/Ballena.jpeg", "../Assets/Animales/Nutria.jpeg", "../Assets/Animales/CaballoMar.jpg", "../Assets/Animales/Mariquita.jpeg", "../Assets/Animales/Raton.jpeg"], correctImage: "../Assets/Animales/Tiburon.jpeg" },
    { name: "stingray", sound: "../Assets/Sonidos _Pronunciacion/stingray.mp3", images: ["../Assets/Animales/Gallina.jpeg", "../Assets/Animales/Matarraya.jpg", "../Assets/Animales/Murcielago.jpeg", "../Assets/Animales/Tucan.jpeg", "../Assets/Animales/Orca.jpeg", "../Assets/Animales/Mono.jpeg", "../Assets/Animales/Pato.jpeg", "../Assets/Animales/Rana.jpg"], correctImage: "../Assets/Animales/Matarraya.jpg" },
    { name: "penguin", sound: "../Assets/Sonidos _Pronunciacion/penguin.mp3", images: ["../Assets/Animales/Pinguino.jpeg", "../Assets/Animales/Serpiente.jpg", "../Assets/Animales/Rana.jpg", "../Assets/Animales/Leon.jpeg", "../Assets/Animales/Flamenco.jpeg", "../Assets/Animales/Murcielago.jpeg", "../Assets/Animales/Raton.jpeg", "../Assets/Animales/Zorro.jpg"], correctImage: "../Assets/Animales/Pinguino.jpeg" },
    { name: "tuna", sound: "../Assets/Sonidos _Pronunciacion/tuna.mp3", images: ["../Assets/Animales/Atun.jpg", "../Assets/Animales/Abeja.jpg", "../Assets/Animales/Jirafa.jpg", "../Assets/Animales/Pavo.jpeg", "../Assets/Animales/Serpiente.jpg", "../Assets/Animales/Elefante.jpeg", "../Assets/Animales/Tucan.jpeg", "../Assets/Animales/Caballo.jpg"], correctImage: "../Assets/Animales/Atun.jpg" },
    { name: "sea lion", sound: "../Assets/Sonidos _Pronunciacion/sealion.mp3", images: ["../Assets/Animales/LeonMarino.jpeg", "../Assets/Animales/Tortuga.png", "../Assets/Animales/Aguila.jpg", "../Assets/Animales/Lechuza.jpeg", "../Assets/Animales/Jirafa.jpg", "../Assets/Animales/Elefante.jpeg", "../Assets/Animales/Vaca.png", "../Assets/Animales/Atun.jpg"], correctImage: "../Assets/Animales/LeonMarino.jpeg" },
    { name: "fish", sound: "../Assets/Sonidos _Pronunciacion/fish.mp3", images: ["../Assets/Animales/Pescado.jpeg", "../Assets/Animales/Leon.jpeg", "../Assets/Animales/Jirafa.jpg", "../Assets/Animales/Pulpo.jpg", "../Assets/Animales/Colibri.jpeg", "../Assets/Animales/Cangrejo.png", "../Assets/Animales/LeonMarino.jpeg", "../Assets/Animales/Tiburon.jpeg"], correctImage: "../Assets/Animales/Pescado.jpeg" },
    { name: "starfish", sound: "../Assets/Sonidos _Pronunciacion/starfish.mp3", images: ["../Assets/Animales/EstrellaMar.jpeg", "../Assets/Animales/Foca.jpeg", "../Assets/Animales/Ballena.jpeg", "../Assets/Animales/Pulpo.jpg", "../Assets/Animales/Rinoceronte.jpeg", "../Assets/Animales/Calamar.jpeg", "../Assets/Animales/Pollito.jpeg", "../Assets/Animales/Tiburon.jpeg"], correctImage: "../Assets/Animales/EstrellaMar.jpeg" },
    { name: "otter", sound: "../Assets/Sonidos _Pronunciacion/otter.mp3", images: ["../Assets/Animales/Nutria.jpeg", "../Assets/Animales/Rana.jpg", "../Assets/Animales/Elefante.jpeg", "../Assets/Animales/Lechuza.jpeg", "../Assets/Animales/Mariquita.jpeg", "../Assets/Animales/Pelicano.jpeg", "../Assets/Animales/Pollito.jpeg", "../Assets/Animales/Calamar.jpeg"], correctImage: "../Assets/Animales/Nutria.jpeg" },
    { name: "frog", sound: "../Assets/Sonidos _Pronunciacion/frog.mp3", images: ["../Assets/Animales/Rana.jpg", "../Assets/Animales/Atun.jpg", "../Assets/Animales/LeonMarino.jpeg", "../Assets/Animales/Gallina.jpeg", "../Assets/Animales/Pinguino.jpeg", "../Assets/Animales/Loro.jpeg", "../Assets/Animales/Rinoceronte.jpeg", "../Assets/Animales/Tiburon.jpeg"], correctImage: "../Assets/Animales/Rana.jpg" },
    { name: "oyster", sound: "../Assets/Sonidos _Pronunciacion/oyster.mp3", images: ["../Assets/Animales/OstraMarina.jpeg", "../Assets/Animales/Perro.jpeg", "../Assets/Animales/Pescado.jpeg", "../Assets/Animales/Pulpo.jpg", "../Assets/Animales/Libelula.jpeg", "../Assets/Animales/Pelicano.jpeg", "../Assets/Animales/LeonMarino.jpeg", "../Assets/Animales/Ballena.jpeg"], correctImage: "../Assets/Animales/OstraMarina.jpeg" },
    { name: "crocodile", sound: "../Assets/Sonidos _Pronunciacion/crocodile.mp3", images: ["../Assets/Animales/Cocodrilo.jpeg", "../Assets/Animales/Nutria.jpeg", "../Assets/Animales/Risuenor.jpeg", "../Assets/Animales/Pulpo.jpg", "../Assets/Animales/Loro.jpeg", "../Assets/Animales/Tiburon.jpeg", "../Assets/Animales/Paloma.jpg", "../Assets/Animales/Elefante.jpeg"], correctImage: "../Assets/Animales/Cocodrilo.jpeg" },
    { name: "horse", sound: "../Assets/Sonidos _Pronunciacion/hoarse.mp3", images: ["../Assets/Animales/Caballo.jpg", "../Assets/Animales/Pollito.jpeg", "../Assets/Animales/Jirafa.jpg", "../Assets/Animales/Cebra.jpeg", "../Assets/Animales/Leon.jpeg", "../Assets/Animales/Libelula.jpeg", "../Assets/Animales/Cangrejo.png", "../Assets/Animales/Tiburon.jpeg"], correctImage: "../Assets/Animales/Caballo.jpg" },
    { name: "giraffe", sound: "../Assets/Sonidos _Pronunciacion/giraffe.mp3", images: ["../Assets/Animales/Jirafa.jpg", "../Assets/Animales/Leon.jpeg", "../Assets/Animales/Lechuza.jpeg", "../Assets/Animales/Grillo.jpeg", "../Assets/Animales/Gallo.png", "../Assets/Animales/Cangrejo.png", "../Assets/Animales/Lechuza.jpeg", "../Assets/Animales/Foca.jpeg"], correctImage: "../Assets/Animales/Jirafa.jpg" },
    { name: "elephant", sound: "../Assets/Sonidos _Pronunciacion/elephant.mp3", images: ["../Assets/Animales/Elefante.jpeg", "../Assets/Animales/LeonMarino.jpeg", "../Assets/Animales/Orca.jpeg", "../Assets/Animales/Hipopotamo.jpeg", "../Assets/Animales/Colibri.jpeg", "../Assets/Animales/Loro.jpeg", "../Assets/Animales/Guacamaya.jpeg", "../Assets/Animales/Medusa.jpeg"], correctImage: "../Assets/Animales/Elefante.jpeg" },
    { name: "pig", sound: "../Assets/Sonidos _Pronunciacion/pig.mp3", images: ["../Assets/Animales/Matarraya.jpg", "../Assets/Animales/Cerdo.jpeg", "../Assets/Animales/Mariquita.jpeg", "../Assets/Animales/Tortuga.png", "../Assets/Animales/Vaca.png", "../Assets/Animales/Paloma.jpg", "../Assets/Animales/Mono.jpeg", "../Assets/Animales/Rinoceronte.jpeg"], correctImage: "../Assets/Animales/Cerdo.jpeg" },
    { name: "panda bear", sound: "../Assets/Sonidos _Pronunciacion/panda.mp3", images: ["../Assets/Animales/OsoPanda.jpg", "../Assets/Animales/Mariquita.jpeg", "../Assets/Animales/Tortuga.png", "../Assets/Animales/Pescado.jpeg", "../Assets/Animales/Atun.jpg", "../Assets/Animales/Ciguena.jpeg", "../Assets/Animales/Cocodrilo.jpeg", "../Assets/Animales/Tucan.jpeg"], correctImage: "../Assets/Animales/OsoPanda.jpg" },
    { name: "lion", sound: "../Assets/Sonidos _Pronunciacion/lion.mp3", images: ["../Assets/Animales/Leon.jpeg", "../Assets/Animales/CaballoMar.jpg", "../Assets/Animales/Vaca.png", "../Assets/Animales/Caballo.jpg", "../Assets/Animales/Colibri.jpeg", "../Assets/Animales/Cangrejo.png", "../Assets/Animales/LeonMarino.jpeg", "../Assets/Animales/Mariquita.jpeg"], correctImage: "../Assets/Animales/Leon.jpeg" },
    { name: "sheep", sound: "../Assets/Sonidos _Pronunciacion/sheep.mp3", images: ["../Assets/Animales/Oveja.jpeg", "../Assets/Animales/Risuenor.jpeg", "../Assets/Animales/Zorro.jpg", "../Assets/Animales/Abeja.jpg", "../Assets/Animales/Pulpo.jpg", "../Assets/Animales/Loro.jpeg", "../Assets/Animales/Hipopotamo.jpeg", "../Assets/Animales/Libelula.jpeg"], correctImage: "../Assets/Animales/Oveja.jpeg" },
    { name: "hippo", sound: "../Assets/Sonidos _Pronunciacion/hippopotamus.mp3.mp3", images: ["../Assets/Animales/Hipopotamo.jpeg", "../Assets/Animales/Grillo.jpeg", "../Assets/Animales/Pulpo.jpg", "../Assets/Animales/Gallo.png", "../Assets/Animales/Murcielago.jpeg", "../Assets/Animales/Mariquita.jpeg", "../Assets/Animales/Cebra.jpeg", "../Assets/Animales/Cerdo.jpeg"], correctImage: "../Assets/Animales/Hipopotamo.jpeg" },
    { name: "rhinoceros", sound: "../Assets/Sonidos _Pronunciacion/rhinoceros.mp3", images: ["../Assets/Animales/Rinoceronte.jpeg", "../Assets/Animales/Murcielago.jpeg", "../Assets/Animales/LeonMarino.jpeg", "../Assets/Animales/Pinguino.jpeg", "../Assets/Animales/Pelicano.jpeg", "../Assets/Animales/Nutria.jpeg", "../Assets/Animales/Perro.jpeg", "../Assets/Animales/Vaca.png"], correctImage: "../Assets/Animales/Rinoceronte.jpeg" },
    { name: "zebra", sound: "../Assets/Sonidos _Pronunciacion/zebra.mp3", images: ["../Assets/Animales/Cebra.jpeg", "../Assets/Animales/Pollito.jpeg", "../Assets/Animales/Pato.jpeg", "../Assets/Animales/Risuenor.jpeg", "../Assets/Animales/Rinoceronte.jpeg", "../Assets/Animales/Cerdo.jpeg", "../Assets/Animales/Lechuza.jpeg", "../Assets/Animales/Grillo.jpeg"], correctImage: "../Assets/Animales/Cebra.jpeg" },
    { name: "chicken", sound: "../Assets/Sonidos _Pronunciacion/hen.mp3", images: ["../Assets/Animales/Gallina.jpeg", "../Assets/Animales/Leon.jpeg", "../Assets/Animales/Flamenco.jpeg", "../Assets/Animales/Vaca.png", "../Assets/Animales/Cerdo.jpeg", "../Assets/Animales/Cangrejo.png", "../Assets/Animales/Caballo.jpg", "../Assets/Animales/Tiburon.jpeg"], correctImage: "../Assets/Animales/Gallina.jpeg" },
    { name: "rabbit", sound: "../Assets/Sonidos _Pronunciacion/rabbit.mp3", images: ["../Assets/Animales/Conejo.jpeg", "../Assets/Animales/Gallina.jpeg", "../Assets/Animales/Guacamaya.jpeg", "../Assets/Animales/Ciguena.jpeg", "../Assets/Animales/Risuenor.jpeg", "../Assets/Animales/Raton.jpeg", "../Assets/Animales/Atun.jpg", "../Assets/Animales/Gato.jpeg"], correctImage: "../Assets/Animales/Conejo.jpeg" },
    { name: "fox", sound: "../Assets/Sonidos _Pronunciacion/fox.mp3", images: ["../Assets/Animales/Zorro.jpg", "../Assets/Animales/Leon.jpeg", "../Assets/Animales/Rinoceronte.jpeg", "../Assets/Animales/OstraMarina.jpeg", "../Assets/Animales/Mariposa.jpeg", "../Assets/Animales/Cebra.jpeg", "../Assets/Animales/Lechuza.jpeg", "../Assets/Animales/Raton.jpeg"], correctImage: "../Assets/Animales/Zorro.jpg" },
    { name: "monkey", sound: "../Assets/Sonidos _Pronunciacion/monkey.mp3", images: ["../Assets/Animales/Mono.jpeg", "../Assets/Animales/Serpiente.jpg", "../Assets/Animales/Cocodrilo.jpeg", "../Assets/Animales/CaballoMar.jpg", "../Assets/Animales/OstraMarina.jpeg", "../Assets/Animales/Pato.jpeg", "../Assets/Animales/Matarraya.jpg", "../Assets/Animales/Grillo.jpeg"], correctImage: "../Assets/Animales/Mono.jpeg" },
    { name: "mouse", sound: "../Assets/Sonidos _Pronunciacion/mouse.mp3", images: ["../Assets/Animales/Raton.jpeg", "../Assets/Animales/Delfin.jpeg", "../Assets/Animales/Ciguena.jpeg", "../Assets/Animales/Risuenor.jpeg", "../Assets/Animales/Pelicano.jpeg", "../Assets/Animales/EstrellaMar.jpeg", "../Assets/Animales/Nutria.jpeg", "../Assets/Animales/Flamenco.jpeg"], correctImage: "../Assets/Animales/Raton.jpeg" },
    { name: "rooster", sound: "../Assets/Sonidos _Pronunciacion/rooster.mp3", images: ["../Assets/Animales/Gallo.png", "../Assets/Animales/Flamenco.jpeg", "../Assets/Animales/Mosca.jpeg", "../Assets/Animales/Mariposa.jpeg", "../Assets/Animales/Paloma.jpg", "../Assets/Animales/Pato.jpeg", "../Assets/Animales/Lechuza.jpeg", "../Assets/Animales/Risuenor.jpeg"], correctImage: "../Assets/Animales/Gallo.png" },
    { name: "cow", sound: "../Assets/Sonidos _Pronunciacion/cow.mp3", images: ["../Assets/Animales/Vaca.png", "../Assets/Animales/Leon.jpeg", "../Assets/Animales/Lechuza.jpeg", "../Assets/Animales/Medusa.jpeg", "../Assets/Animales/Guacamaya.jpeg", "../Assets/Animales/Paloma.jpg", "../Assets/Animales/Flamenco.jpeg", "../Assets/Animales/Gallo.png"], correctImage: "../Assets/Animales/Vaca.png" },
    { name: "chick", sound: "../Assets/Sonidos _Pronunciacion/chick.mp3", images: ["../Assets/Animales/Pollito.jpeg", "../Assets/Animales/Leon.jpeg", "../Assets/Animales/Oveja.jpeg", "../Assets/Animales/Pulpo.jpg", "../Assets/Animales/Hipopotamo.jpeg", "../Assets/Animales/Cangrejo.png", "../Assets/Animales/Rinoceronte.jpeg", "../Assets/Animales/Cebra.jpeg"], correctImage: "../Assets/Animales/Pollito.jpeg" },
    { name: "snake", sound: "../Assets/Sonidos _Pronunciacion/snake.mp3", images: ["../Assets/Animales/Serpiente.jpg", "../Assets/Animales/Risuenor.jpeg", "../Assets/Animales/Jirafa.jpg", "../Assets/Animales/Gallina.jpeg", "../Assets/Animales/Guacamaya.jpeg", "../Assets/Animales/Delfin.jpeg", "../Assets/Animales/EstrellaMar.jpeg", "../Assets/Animales/EstrellaMar.jpeg"], correctImage: "../Assets/Animales/Serpiente.jpg" },
    { name: "canary", sound: "../Assets/Sonidos _Pronunciacion/canary.mp3", images: ["../Assets/Animales/Canario.jpeg", "../Assets/Animales/Foca.jpeg", "../Assets/Animales/", "../Assets/Animales/Pulpo.jpg", "../Assets/Animales/Hipopotamo.jpeg", "../Assets/Animales/Cangrejo.png", "../Assets/Animales/Rinoceronte.jpeg", "../Assets/Animales/Cebra.jpeg"], correctImage: "../Assets/Animales/Canario.jpeg" },
    { name: "eagle", sound: "../Assets/Sonidos _Pronunciacion/eagle.mp3", images: ["../Assets/Animales/Aguila.jpg", "../Assets/Animales/Gato.jpeg", "../Assets/Animales/Conejo.jpeg", "../Assets/Animales/Grillo.jpeg", "../Assets/Animales/LeonMarino.jpeg", "../Assets/Animales/Caballo.jpg", "../Assets/Animales/Calamar.jpeg", "../Assets/Animales/Mariposa.jpeg"], correctImage: "../Assets/Animales/Aguila.jpg" },
    { name: "macaw", sound: "../Assets/Sonidos _Pronunciacion/macaw.mp3", images: ["../Assets/Animales/Guacamaya.jpeg", "../Assets/Animales/Gato.jpeg", "../Assets/Animales/Ciguena.jpeg", "../Assets/Animales/Grillo.jpeg", "../Assets/Animales/Lechuza.jpeg", "../Assets/Animales/Abeja.jpg", "../Assets/Animales/Pulpo.jpg", "../Assets/Animales/Serpiente.jpg"], correctImage: "../Assets/Animales/Guacamaya.jpeg" },
    { name: "cricket", sound: "../Assets/Sonidos _Pronunciacion/cricket.mp3", images: ["../Assets/Animales/Grillo.jpeg", "../Assets/Animales/Pelicano.jpeg", "../Assets/Animales/Jirafa.jpg", "../Assets/Animales/Pavo.jpeg", "../Assets/Animales/Perro.jpeg", "../Assets/Animales/Rinoceronte.jpeg", "../Assets/Animales/Cangrejo.png", "../Assets/Animales/Flamenco.jpeg"], correctImage: "../Assets/Animales/Grillo.jpeg" },
    { name: "ladybug", sound: "../Assets/Sonidos _Pronunciacion/ladybug.mp3", images: ["../Assets/Animales/Mariquita.jpeg", "../Assets/Animales/Calamar.jpeg", "../Assets/Animales/Mono.jpeg", "../Assets/Animales/Abeja.jpg", "../Assets/Animales/Vaca.png", "../Assets/Animales/Rana.jpg", "../Assets/Animales/Loro.jpeg", "../Assets/Animales/Mariposa.jpeg"], correctImage: "../Assets/Animales/Mariquita.jpeg" },
    { name: "dragonfly", sound: "../Assets/Sonidos _Pronunciacion/dragonfly.mp3", images: ["../Assets/Animales/Libelula.jpeg", "../Assets/Animales/Pavo.jpeg", "../Assets/Animales/Rinoceronte.jpeg", "../Assets/Animales/Raton.jpeg", "../Assets/Animales/Tucan.jpeg", "../Assets/Animales/Vaca.png", "../Assets/Animales/Pollito.jpeg", "../Assets/Animales/Medusa.jpeg"], correctImage: "../Assets/Animales/Libelula.jpeg" },
    { name: "bee", sound: "../Assets/Sonidos _Pronunciacion/bee.mp3", images: ["../Assets/Animales/Murcielago.jpeg", "../Assets/Animales/Abeja.jpg", "../Assets/Animales/Tiburon.jpeg", "../Assets/Animales/Serpiente.jpg", "../Assets/Animales/Zorro.jpg", "../Assets/Animales/Risuenor.jpeg", "../Assets/Animales/Lechuza.jpeg", "../Assets/Animales/OsoPanda.jpg"], correctImage: "../Assets/Animales/Abeja.jpg" },
    { name: "butterfly", sound: "../Assets/Sonidos _Pronunciacion/butterfly.mp3", images: ["../Assets/Animales/LeonMarino.jpeg", "../Assets/Animales/Pinguino.jpeg", "../Assets/Animales/Murcielago.jpeg", "../Assets/Animales/Caballo.jpg", "../Assets/Animales/OsoPanda.jpg", "../Assets/Animales/Mariquita.jpeg", "../Assets/Animales/Orca.jpeg", "../Assets/Animales/Aguila.jpg"], correctImage: "../Assets/Animales/Mariposa.jpeg" },
    { name: "fly", sound: "../Assets/Sonidos _Pronunciacion/fly.mp3", images: ["../Assets/Animales/Libelula.jpeg", "../Assets/Animales/Mosca.jpeg", "../Assets/Animales/Rana.jpg", "../Assets/Animales/Gallina.jpeg", "../Assets/Animales/Lechuza.jpeg", "../Assets/Animales/OsoPanda.jpg", "../Assets/Animales/Paloma.jpg", "../Assets/Animales/Ballena.jpeg"], correctImage: "../Assets/Animales/Mosca.jpeg" },
    { name: "bat", sound: "../Assets/Sonidos _Pronunciacion/bat.mp3", images: ["../Assets/Animales/Murcielago.jpeg", "../Assets/Animales/Cangrejo.png", "../Assets/Animales/Perro.jpeg", "../Assets/Animales/Jirafa.jpg", "../Assets/Animales/Hipopotamo.jpeg", "../Assets/Animales/OstraMarina.jpeg", "../Assets/Animales/Rinoceronte.jpeg", "../Assets/Animales/Calamar.jpeg"], correctImage: "../Assets/Animales/Murcielago.jpeg" },
    { name: "flamingo", sound: "../Assets/Sonidos _Pronunciacion/flamingo.mp3", images: ["../Assets/Animales/Flamenco.jpeg", "../Assets/Animales/Calamar.jpeg", "../Assets/Animales/Paloma.jpg", "../Assets/Animales/Pinguino.jpeg", "../Assets/Animales/Cebra.jpeg", "../Assets/Animales/Murcielago.jpeg", "../Assets/Animales/Elefante.jpeg", "../Assets/Animales/Medusa.jpeg"], correctImage: "../Assets/Animales/Flamenco.jpeg" },
    { name: "duck", sound: "../Assets/Sonidos _Pronunciacion/duck.mp3", images: ["../Assets/Animales/Pato.jpeg", "../Assets/Animales/Vaca.png", "../Assets/Animales/Zorro.jpg", "../Assets/Animales/Serpiente.jpg", "../Assets/Animales/Grillo.jpeg", "../Assets/Animales/Mono.jpeg", "../Assets/Animales/Jirafa.jpg", "../Assets/Animales/Rinoceronte.jpeg"], correctImage: "../Assets/Animales/Pato.jpeg" },
    { name: "hummungbird", sound: "../Assets/Sonidos _Pronunciacion/hummingbird.mp3", images: ["../Assets/Animales/Colibri.jpeg", "../Assets/Animales/Perro.jpeg", "../Assets/Animales/Pulpo.jpg", "../Assets/Animales/Mono.jpeg", "../Assets/Animales/CaballoMar.jpg", "../Assets/Animales/Tortuga.png", "../Assets/Animales/Gallo.png", "../Assets/Animales/Libelula.jpeg"], correctImage: "../Assets/Animales/Colibri.jpeg" },
    { name: "pelican", sound: "../Assets/Sonidos _Pronunciacion/pelican.mp3", images: ["../Assets/Animales/Pelicano.jpeg", "../Assets/Animales/Paloma.jpg", "../Assets/Animales/Cangrejo.png", "../Assets/Animales/EstrellaMar.jpeg", "../Assets/Animales/Grillo.jpeg", "../Assets/Animales/Leon.jpeg", "../Assets/Animales/CaballoMar.jpg", "../Assets/Animales/Matarraya.jpg"], correctImage: "../Assets/Animales/Pelicano.jpeg" },
    { name: "toucan", sound: "../Assets/Sonidos _Pronunciacion/toucan.mp3", images: ["../Assets/Animales/Leon.jpeg", "../Assets/Animales/Tucan.jpeg", "../Assets/Animales/Mariquita.jpeg", "../Assets/Animales/Elefante.jpeg", "../Assets/Animales/Tiburon.jpeg", "../Assets/Animales/Gallina.jpeg", "../Assets/Animales/Delfin.jpeg", "../Assets/Animales/OstraMarina.jpeg"], correctImage: "../Assets/Animales/Tucan.jpeg" },
    { name: "pigeon", sound: "../Assets/Sonidos _Pronunciacion/pigeon.mp3", images: ["../Assets/Animales/Paloma.jpg", "../Assets/Animales/Pelicano.jpeg", "../Assets/Animales/Calamar.jpeg", "../Assets/Animales/Gallina.jpeg", "../Assets/Animales/Conejo.jpeg", "../Assets/Animales/Jirafa.jpg", "../Assets/Animales/Lechuza.jpeg", "../Assets/Animales/OsoPanda.jpg"], correctImage: "../Assets/Animales/Paloma.jpg" },
    { name: "owl", sound: "../Assets/Sonidos _Pronunciacion/owl.mp3", images: ["../Assets/Animales/Lechuza.jpeg", "../Assets/Animales/Paloma.jpg", "../Assets/Animales/Cangrejo.png", "../Assets/Animales/Delfin.jpeg", "../Assets/Animales/Caballo.jpg", "../Assets/Animales/Rinoceronte.jpeg", "../Assets/Animales/Grillo.jpeg", "../Assets/Animales/Gato.jpeg"], correctImage: "../Assets/Animales/Lechuza.jpeg" },
    { name: "turkey", sound: "../Assets/Sonidos _Pronunciacion/turkey.mp3", images: ["../Assets/Animales/Pavo.jpeg", "../Assets/Animales/Perro.jpeg", "../Assets/Animales/Tortuga.png", "../Assets/Animales/Paloma.jpg", "../Assets/Animales/OsoPanda.jpg", "../Assets/Animales/Mariquita.jpeg", "../Assets/Animales/Libelula.jpeg", "../Assets/Animales/Grillo.jpeg"], correctImage: "../Assets/Animales/Pavo.jpeg" },
    { name: "parrot", sound: "../Assets/Sonidos _Pronunciacion/parrot.mp3", images: ["../Assets/Animales/Loro.jpeg", "../Assets/Animales/Leon.jpeg", "../Assets/Animales/Oveja.jpeg", "../Assets/Animales/Libelula.jpeg", "../Assets/Animales/Ciguena.jpeg", "../Assets/Animales/Tortuga.png", "../Assets/Animales/Caballo.jpg", "../Assets/Animales/Cebra.jpeg"], correctImage: "../Assets/Animales/Loro.jpeg" },
    { name: "stork", sound: "../Assets/Sonidos _Pronunciacion/stork.mp3", images: ["../Assets/Animales/Pollito.jpeg", "../Assets/Animales/Ciguena.jpeg", "../Assets/Animales/Pato.jpeg", "../Assets/Animales/Orca.jpeg", "../Assets/Animales/Lechuza.jpeg", "../Assets/Animales/Vaca.png", "../Assets/Animales/Murcielago.jpeg", "../Assets/Animales/Caballo.jpg"], correctImage: "../Assets/Animales/Ciguena.jpeg" },
    { name: "nightingale", sound: "../Assets/Sonidos _Pronunciacion/nightingale.mp3", images: ["../Assets/Animales/Risuenor.jpeg", "../Assets/Animales/Leon.jpeg", "../Assets/Animales/Jirafa.jpg", "../Assets/Animales/Pinguino.jpeg", "../Assets/Animales/Murcielago.jpeg", "../Assets/Animales/Pavo.jpeg", "../Assets/Animales/Raton.jpeg", "../Assets/Animales/Pollito.jpeg"], correctImage: "../Assets/Animales/Risuenor.jpeg" },
    // Agrega más niveles según sea necesario
];

let currentLevelIndex = 0;
let shuffledLevels = [];

// Función para mezclar los niveles
function shuffleLevels() {
    shuffledLevels = [...levels];
    for (let i = shuffledLevels.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledLevels[i], shuffledLevels[j]] = [shuffledLevels[j], shuffledLevels[i]];
    }
}

// Función para iniciar el juego
function startGame() {
    shuffleLevels();
    currentLevelIndex = 0;
    setupLevel();
}

function playSound() {
    const audio = new Audio(shuffledLevels[currentLevelIndex].sound);
    audio.play();
}

function setupLevel() {
    if (currentLevelIndex >= shuffledLevels.length) {
        Swal.fire({
            title: 'Congratulations!',
            text: 'You have completed the game.',
            icon: 'success',
        }).then(() => {
            startGame(); // Reinicia el juego
        });
        return;
    }

    const level = shuffledLevels[currentLevelIndex];
    
    document.getElementById('level-info').innerText = `Nivel: ${currentLevelIndex + 1} / 63`;
    document.getElementById('animal-name').innerText = `Animal: ${level.name}`;
    
    const container = document.getElementById('images-container');
    container.innerHTML = '';
    
    const images = [...level.images];
    images.sort(() => Math.random() - 0.5); // Mezcla aleatoriamente

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.addEventListener('click', () => handleImageClick(src));
        container.appendChild(img);
    });
}

function handleImageClick(src) {
    if (src === shuffledLevels[currentLevelIndex].correctImage) {
        Swal.fire({
            title: 'Correct!',
            text: 'You move to the next level',
            icon: 'success',
        }).then(() => {
            currentLevelIndex++;
            setupLevel();
        });
    } else {
        Swal.fire({
            title: 'Incorrect!',
            text: 'Try again.',
            icon: 'error',
        }).then(() => {
            setupLevel();
        });
    }
}

document.getElementById('play-sound').addEventListener('click', playSound);

// Iniciar el juego
startGame();
