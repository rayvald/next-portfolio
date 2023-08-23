import React from "react"
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

//Mark:- Container Block function
/*
export default hace que se pueda importar ContainerBlock sin usar llaves de desestructuración

...customMeta es un rest parameters, el cual permite recibir una cantidad variable de argumentos como un solo objeto
a este grupo de parametros se agrupan en un objeto llamado customMeta.

*/
export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Osvaldo Murillo - Developer, Data Analyst",
    description: `I've been developing websites for 5 years straight. Get in touch with me to know more.`,
    image: "/me.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manu Arora" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mannupaaji" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}

/*
og: -> Open Graph
<meta name="robots" content="follow, index" /> le indica a los robots de los motores de busqueda que sigan (follow) todos 
los enlaces que aparezcan en la página web y que los indexen (index) en las busquedas

<meta
	property="og:url"
	content={`https://yourwebsite.com${router.asPath}`}
/>
esta propiedad le indica a las redes sociales la url exacta de la página que se está compartiendo y evitar duplicidad con otras páginas

<link 
	rel="canonical"
	href={`https://yourwebsite.com${router.asPath}`}
/>
setea la url principal del proyecto y mejora el SEO (Search Engine Optimization)
*/