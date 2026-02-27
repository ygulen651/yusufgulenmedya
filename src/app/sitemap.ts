import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://yusufgulenmedya.com.tr',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        // İleride eklenebilecek alt sayfalar veya blog içerikleri için dinamik yapı kurulabilir.
    ]
}
