import { DefaultSeoProps } from 'next-seo';

export const SEO: DefaultSeoProps = {
  title: "Paulo Ruan - Desenvolvedor Web",
  description: "Site pessoal de Paulo Ruan",
  canonical: "https://pauloruan.vercel.app",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://pauloruan.vercel.app",
    site_name: "Paulo Ruan",
    title: "Paulo Ruan - Desenvolvedor Web",
    description: "Site pessoal de Paulo Ruan",
    images: [
      {
        url: "https://pauloruan.vercel.app/og-image.png",
        width: 1280,
        height: 720,
        alt: "Paulo Ruan - Site pessoal de Paulo Ruan"
      }
    ]
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://pauloruan.vercel.app/favicon.ico"
    }
  ]
};
