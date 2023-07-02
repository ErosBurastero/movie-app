export default {
    items: [{
            isOpen: false,
            noIcon: null,
            title: 'Inicio',
            path: '/peliculas',
        }, {
            isOpen: false,
            title: 'Home',
            icon: 'mdi-chevron-down',
            path: '/',
            subItems: [{
                    path: '/test',
                    title: 'homes',
                    class: 'bg-blue',
                    titleClass: 'text-white',
                },
                {
                    path: '/test',
                    title: 'homeses',
                    class: 'bg-brown',
                    titleClass: 'text-white',
                },
                {
                    path: '/test',
                    title: 'homeseses',
                    class: 'bg-yellow',
                    titleClass: 'text-white',
                },
            ],
        },
        {
            isOpen: false,
            noIcon: null,
            title: 'Cerrar Sesion',
            path: '/',
        },
    ],
}