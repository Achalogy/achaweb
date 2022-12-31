import Head from 'next/head'
import BlogInfo from '../../interfaces/BlogInfo'

export default function BlogSEO({ info }: {
  info: BlogInfo
}) {
  return <Head>
    <title>{`${info.title}`}</title>
    <meta name="description" content={`${info.description}`} />

    <meta itemProp="name" content={`${info.title}`} />
    <meta itemProp="description" content={`${info.description}`} />

    <meta property="og:url" content={`https://achalogy.ovh/blog/${info.id}`} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={`${info.title}`} />
    <meta property="og:description" content={`${info.description}`} />
    <meta name="theme-color" content="#FF0000" />

    <meta name="twitter:title" content={`${info.title}`} />
    <meta name="twitter:description" content={`${info.description}`} />
  </Head>
}