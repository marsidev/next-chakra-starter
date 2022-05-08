/* @ref: https://github.com/garmeeh/next-seo */

const title = 'Next JS + Chakra UI Starter'
const description = 'Next JS + Chakra UI Starter - A boilerplate for React app using Next.js and Chakra UI.'
const url = 'https://next-chakra-starter-pi.vercel.app'
const imageUrl = `https://og-image.vercel.app/${encodeURI(title)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`
const keywords = 'nextjs, chakra-ui, react, javascript, boilerplate, next-seo'

const seo = {
  // title,
  titleTemplate: `%s | ${title}`,
  defaultTitle: title,
  description,
  openGraph: {
    description,
    title,
    locale: 'en_US',
    type: 'website',
    url,
    canonical: url,
    images: [
      {
        url: imageUrl,
        width: 800,
        height: 600,
        alt: title
      }
    ]
  },
  twitter: {
    handle: '@marsigliacr',
    site: '@marsigliacr',
    cardType: 'summary_large_image'
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: keywords
    }
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico'
    }
  ]
}

export { seo as defaultSeo, url as defaultUrl }
