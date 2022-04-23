const title = 'Next JS + Chakra UI Starter'

export const siteConfig = {
  title,
  description: 'Next JS + Chakra UI Starter - A boilerplate for React app using Next.js and Chakra UI',
  keywords: 'nextjs, chakra-ui, react, react-app, boilerplate',
  url: '', // canonical url - https://example.com/
  type: 'website', // website, article, blog,
  locale: 'en_US', // en_US, es_ES, fr_FR, pt_BR
  ogImage: `https://og-image.vercel.app/${encodeURI(title)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`, // >=1200x627, <5MB, 1.91:1 ratio
  twitterCard: 'summary_large_image',
  twitterImage: `https://og-image.vercel.app/${encodeURI(title)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`, // >=300x157, <5MB, 2:1 ratio
  twitterImageAlt: '', // <=420 characters
  twitterSite: '',
  twitterCreator: ''
}
