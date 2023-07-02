export default {
    items: [{
            isOpen: false,
            noIcon: null,
            icon: 'mdi-home',
            title: 'Inicio',
            path: '/peliculas',
        }, {
            isOpen: false,
            title: 'Configuracion',
            icon: 'mdi-cog-outline',
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
            icon: 'mdi-logout-variant',
            title: 'Cerrar Sesion',
            path: '/',
        },
    ],
}