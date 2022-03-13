export default () => ({
    buildModules: ['@nuxtjs/tailwindcss'],

    css: [
        {src: '~/assets/css/tailwind.css'},
    ],

    generate: {
        fallback: true,
    },

    head: {
        title: 'FIXME',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'FIXME'},
            {hid: 'og-title', property: 'og:title', content: 'FIXME'},
            {hid: 'og-description', property: 'og:description', content: 'FIXME'},
            {hid: 'og-type', property: 'og:type', content: 'website'},
            {hid: 'og-site_name', property: 'og:og-site_name', content: 'FIXME'},
            {hid: 'twitter-title', property: 'twitter:title', content: 'FIXME'},
            {hid: 'twitter-description', property: 'twitter:description', content: 'FIXME'},
            {hid: 'twitter-site', property: 'twitter:site', content: 'FIXME'},
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: '/favicon-16x16.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: '/favicon-32x32.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '192x192',
                href: '/android-chrome-192x192.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '512x512',
                href: '/android-chrome-512x512.png',
            },
        ],
    },

    srcDir: 'src/',

    target: 'static',

    telemetry: false,
});

