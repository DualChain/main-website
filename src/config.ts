import { isProd } from './support/envs.ts'
import type { NavigationLink, Site } from './types.ts'

export const SITE: Site = {
    author: 'Akshat Pande',
    url: 'https://dualchain.io',
    title: 'DualChain',
    description: 'Dualchain\'s main website, including products, features and other resources.',
    shortDescription: '',
}

export const NavigationLinks: NavigationLink[] = [
    { name: 'About', url: 'https://info.dualchain.io' },
    { name: 'Community', url: 'https://info.dualchain.io' },

]

export const FooterLinks = [
    {
        section: 'Links',
        links: [
            { name: 'About', url: 'https://info.dualchain.io' },
            { name: 'Newsletter', url: '/timeline' },
            { name: 'Contact', url: '/categories' },
            { name: 'Community', url: '/posts/about-godruoyi' },
        ],
    },
    {
        section: 'Products',
        links: [
            { name: 'Carbon Activity', url: '/rss.xml' },
            { name: 'Conscious Index', url: '/sitemap-index.xml' },
            { name: 'Decentralized Exchange', url: 'https://x.com/godruoyi' },
        ],
    },
    {
        section: 'Social',
        links: [
            { name: 'Twitter', url: '/sitemap-index.xml' },
            { name: 'Instagram', url: 'https://x.com/godruoyi' },
            { name: 'Discord', url: '/rss.xml' },
            { name: 'Linkedin', url: '/rss.xml' },
        ],
    },
]

export const Settings = {
    GoogleAnalytics: {
        enable: false,
        id: 'G-',
    },

    UmamiAnalytics: {
        enable: true,
        dataWebsiteID: '',
    },

    Assets: {
        // If you don't want to upload the build assert(image/js/css/etc...) anywhere, simply set this to false
        uploadAssetsToS3: isProd(),
        config: {
            // see https://github.com/syhily/astro-uploader to get how to configure the uploader API
            // The following configuration will upload the compiled `assets` directory to the `gblog` folder in S3 or R2.
            // You can set a separate domain for it so that you can access all resources using a CDN domain name.
            //
            // For example: https://images.godruoyi.com/gblog/assets/brand-logo.webp
            //
            // Note that you may also need to modify `build.assetsPrefix` in `astro.config.mjs` if you want to
            // automatically replace all images/js/css with a CDN link.
            paths: ['assets'],
            endpoint: process.env.S3_ENDPOINT as string,
            bucket: process.env.S3_BUCKET as string,
            accessKey: process.env.S3_ACCESS_KEY as string,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
            root: 'gblog',
        },
    },
}

export const SEO = {
    title: SITE.title,
    description: SITE.description,
    structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'inLanguage': 'en-US',
        '@id': SITE.url,
        'url': SITE.url,
        'name': SITE.title,
        'description': SITE.description,
        'isPartOf': {
            '@type': 'WebSite',
            'url': SITE.url,
            'name': SITE.title,
            'description': SITE.description,
        },
    },
}
