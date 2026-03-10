import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/'], // İndekslenmesini istemediğiniz dizinleri buraya ekleyebilirsiniz
        },
        sitemap: 'https://www.yusufgulenmedya.com.tr/sitemap.xml',
    }
}
