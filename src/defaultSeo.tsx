import Head from "next/head";
import { useRouter } from "next/router";

const Title = "Acha :D";
const Description = `A 17 years old autodidact Software/Web Developer from Colombia. Studying at PUJ <3.`;

const DefaultSeo = ({
  children,
  title,
  description,
  image,
}: {
  children?: any;
  title?: string;
  description?: string;
  image?: string;
}) => {
  const router = useRouter();

  return (
    <Head>
      <title>{title ?? Title}</title>
      <meta name="description" content={description ?? Description} />

      <meta itemProp="name" content={title ?? Title} />
      <meta itemProp="description" content={description ?? Description} />

      <meta
        property="og:url"
        content={`https://achalogy.dev${router.pathname}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title ?? Title} />
      <meta property="og:description" content={description ?? Description} />

      <meta name="twitter:title" content={title ?? Title} />
      <meta name="twitter:description" content={description ?? Description} />
      {children}

      {image && <>
        <meta itemProp="image" content={image} />
        <meta property="og:image" content={image} />
        <meta name="twitter:image" content={image} />
      </>}
    </Head>
  );
};

export default DefaultSeo;
