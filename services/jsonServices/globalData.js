// exporting big json data

export default {
    items: [{
            isOpen: false,
            noIcon: null,
            icon: 'mdi-home',
            title: 'Inicio',
            path: '/peliculas',
        },
        {
            isOpen: false,
            noIcon: null,
            icon: 'mdi-movie-open',
            title: 'Peliculas',
            type: "movie",
            path: '/peliculas',

        },
        {
            isOpen: false,
            noIcon: null,
            icon: 'mdi-video-vintage',
            title: 'Series',
            type: "series",
            path: '/peliculas',

        },
        {
            isOpen: false,
            noIcon: null,
            icon: 'mdi-logout-variant',
            title: 'Cerrar Sesion',
            path: '/',
        },
    ],
}