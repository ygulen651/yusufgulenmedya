import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.yusufgulenmedya.com.tr',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        }
    ]
}
